"use server"

import { randomUUID } from "node:crypto"
import { createClient } from "@/lib/supabase/server"
import { createClient as createServiceClient } from "@supabase/supabase-js"
import { Resend } from "resend"
import {
  ATTRIBUTION_KEYS,
  BUYER_TYPES,
  LEAD_RECIPIENT_EMAIL,
  type Attribution,
  type BuyerTypeValue,
} from "@/lib/topcon/constants"
import { cleanLine, cleanPhone, escapeHtml, isValidEmail } from "@/lib/email-sanitize"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export interface TopConLead {
  name: string
  phone: string
  buyerType: BuyerTypeValue | ""
  email?: string
  source?: string
  attribution?: Attribution
}

export interface LeadResult {
  success: boolean
  leadId?: string
  error?: string
}

function buyerLabel(value: string): string {
  return BUYER_TYPES.find((b) => b.value === value)?.label ?? "Not specified"
}

function normalizePhone(raw: string): string | null {
  const digits = cleanPhone(raw).replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "")
  return /^[6-9]\d{9}$/.test(digits) ? digits : null
}

function cleanAttribution(input?: Attribution): Attribution {
  const out: Attribution = {}
  if (!input) return out
  for (const key of ATTRIBUTION_KEYS) {
    const value = cleanLine(input[key], 200)
    if (value) out[key] = value
  }
  return out
}

function row(label: string, value: string, shaded: boolean) {
  return `<tr${shaded ? ' style="background:#f5f5f5"' : ""}><td style="padding:10px 24px;font-weight:bold;width:150px">${escapeHtml(label)}</td><td style="padding:10px 24px">${escapeHtml(value)}</td></tr>`
}

async function notifySales(subject: string, rows: [string, string][]) {
  if (!resend) {
    console.warn("[v0] RESEND_API_KEY not set — skipping lead email.")
    return
  }
  try {
    const { error } = await resend.emails.send({
      from: "Shweta Solar Leads <onboarding@resend.dev>",
      to: LEAD_RECIPIENT_EMAIL,
      subject,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;border:1px solid #e5e5e5;border-radius:12px;overflow:hidden">
          <div style="background:#004636;color:#ffffff;padding:20px 24px">
            <h1 style="margin:0;font-size:18px">${escapeHtml(subject)}</h1>
            <p style="margin:4px 0 0;font-size:13px;color:#a9b489">shwetasolar.in/topcon landing page</p>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:14px;color:#1a1a1a">
            ${rows.map(([l, v], i) => row(l, v, i % 2 === 1)).join("")}
          </table>
        </div>`,
    })
    if (error) console.error("[v0] TOPCon lead email error:", error)
  } catch (err) {
    console.error("[v0] TOPCon lead email exception:", err)
  }
}

/** Step 1: capture the lead immediately (name, phone, buyer type) so no lead is lost at step 2. */
export async function submitTopConLead(lead: TopConLead): Promise<LeadResult> {
  const name = cleanLine(lead.name, 120)
  const phone = normalizePhone(lead.phone || "")
  const email = cleanLine(lead.email, 160)
  const source = cleanLine(lead.source, 40) || "quote-form"

  if (!name || name.length < 2) return { success: false, error: "Please enter your name." }
  if (!phone) return { success: false, error: "Please enter a valid 10-digit Indian mobile number." }
  if (email && !isValidEmail(email)) return { success: false, error: "Please enter a valid email address." }

  const buyer = buyerLabel(lead.buyerType || "")
  const attribution = cleanAttribution(lead.attribution)
  const attributionLines = Object.entries(attribution).map(([k, v]) => `${k}: ${v}`)
  const leadId = randomUUID()

  try {
    const supabase = await createClient()
    const { error } = await supabase.from("contact_submissions").insert({
      id: leadId,
      name,
      email: email || "",
      phone,
      company: buyer,
      inquiry_type: "topcon_landing",
      product: "TOPCon G2G",
      message: [`TOPCon G2G lead (${source}).`, ...attributionLines].join("\n"),
    })
    if (error) {
      console.error("[v0] TOPCon lead DB error:", error)
      return { success: false, error: "We couldn't save your request. Please try again or call us." }
    }
  } catch (err) {
    console.error("[v0] TOPCon lead unexpected DB error:", err)
    return { success: false, error: "Something went wrong. Please try again." }
  }

  await notifySales(`New TOPCon Lead: ${name} (${buyer})`, [
    ["Name", name],
    ["Phone", phone],
    ["Buyer type", buyer],
    ["Source", source],
    ...(email ? ([["Email", email]] as [string, string][]) : []),
    ...(Object.entries(attribution) as [string, string][]),
  ])

  return { success: true, leadId }
}

/** Step 2 (optional): add capacity and city to a lead captured in the last hour. */
export async function enrichTopConLead(input: { leadId: string; capacity?: string; city?: string }): Promise<LeadResult> {
  const leadId = cleanLine(input.leadId, 40)
  const capacity = cleanLine(input.capacity, 60)
  const city = cleanLine(input.city, 80)

  if (!/^[0-9a-f-]{36}$/i.test(leadId)) return { success: false, error: "Invalid request." }
  if (!capacity && !city) return { success: true, leadId }

  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return { success: false, error: "Server is not configured." }

  const admin = createServiceClient(url, key, { auth: { persistSession: false } })
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString()

  const { data: existing, error: readError } = await admin
    .from("contact_submissions")
    .select("name, phone, company, message")
    .eq("id", leadId)
    .eq("inquiry_type", "topcon_landing")
    .gte("created_at", since)
    .maybeSingle()

  if (readError || !existing) return { success: false, error: "We couldn't update your request." }

  const { error } = await admin
    .from("contact_submissions")
    .update({
      quantity: capacity || null,
      message: [existing.message, city ? `City: ${city}` : "", capacity ? `Required capacity: ${capacity}` : ""]
        .filter(Boolean)
        .join("\n"),
    })
    .eq("id", leadId)

  if (error) {
    console.error("[v0] TOPCon lead enrich error:", error)
    return { success: false, error: "We couldn't update your request." }
  }

  await notifySales(`TOPCon Lead Details: ${existing.name}`, [
    ["Name", existing.name],
    ["Phone", existing.phone ?? ""],
    ["Buyer type", existing.company ?? ""],
    ...(capacity ? ([["Capacity", capacity]] as [string, string][]) : []),
    ...(city ? ([["City", city]] as [string, string][]) : []),
  ])

  return { success: true, leadId }
}
