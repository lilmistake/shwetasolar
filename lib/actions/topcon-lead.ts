"use server"

import { createClient } from "@/lib/supabase/server"
import { Resend } from "resend"
import { SALES_EMAIL, BUYER_TYPES, type BuyerTypeValue } from "@/lib/topcon/constants"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export interface TopConLead {
  name: string
  email: string
  phone: string
  buyerType: BuyerTypeValue | ""
  city?: string
  capacity?: string
  message?: string
  recaptchaToken?: string
}

export interface LeadResult {
  success: boolean
  error?: string
  emailDelivered?: boolean
}

function buyerLabel(value: string): string {
  return BUYER_TYPES.find((b) => b.value === value)?.label ?? "Not specified"
}

async function verifyRecaptcha(token?: string): Promise<boolean> {
  // If no secret configured or no token, skip (don't block leads on missing captcha).
  if (!token || !process.env.RECAPTCHA_SECRET_KEY) return true
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })
    const data = await res.json()
    return data.success && (data.score === undefined || data.score >= 0.5)
  } catch (err) {
    console.error("[v0] reCAPTCHA verification error:", err)
    return true // fail open — never lose a real lead over captcha errors
  }
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function submitTopConLead(lead: TopConLead): Promise<LeadResult> {
  // --- Server-side validation ---
  const name = lead.name?.trim()
  const email = lead.email?.trim()
  const phone = lead.phone?.trim()

  if (!name || name.length < 2) return { success: false, error: "Please enter your name." }
  if (!email || !isValidEmail(email)) return { success: false, error: "Please enter a valid email address." }
  if (!phone || phone.replace(/\D/g, "").length < 10)
    return { success: false, error: "Please enter a valid phone number." }

  const captchaOk = await verifyRecaptcha(lead.recaptchaToken)
  if (!captchaOk) return { success: false, error: "Security verification failed. Please try again." }

  const buyer = buyerLabel(lead.buyerType || "")
  const capacity = lead.capacity?.trim() || ""
  const city = lead.city?.trim() || ""
  const messageText = lead.message?.trim() || ""

  // --- 1) Persist to Supabase (source of truth) ---
  try {
    const supabase = await createClient()
    const composedMessage = [
      messageText || "TOPCon G2G quote request from landing page.",
      city ? `City: ${city}` : "",
      capacity ? `Required capacity: ${capacity}` : "",
    ]
      .filter(Boolean)
      .join("\n")

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name,
      email,
      phone,
      company: buyer, // buyer segment
      inquiry_type: "topcon_landing",
      product: "TOPCon G2G",
      quantity: capacity || null,
      message: composedMessage,
    })

    if (dbError) {
      console.error("[v0] TOPCon lead DB error:", dbError)
      return { success: false, error: "We couldn't save your request. Please try again or call us." }
    }
  } catch (err) {
    console.error("[v0] TOPCon lead unexpected DB error:", err)
    return { success: false, error: "Something went wrong. Please try again." }
  }

  // --- 2) Email the sales team (best-effort; lead is already saved) ---
  let emailDelivered = false
  if (resend) {
    try {
      const { error: emailError } = await resend.emails.send({
        from: "TOPCon Leads <contact@resend.dev>",
        to: SALES_EMAIL,
        replyTo: email,
        subject: `New TOPCon Lead: ${name} (${buyer})`,
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;border:1px solid #e5e5e5;border-radius:12px;overflow:hidden">
            <div style="background:#004636;color:#ffffff;padding:20px 24px">
              <h1 style="margin:0;font-size:18px">New TOPCon Quote Request</h1>
              <p style="margin:4px 0 0;font-size:13px;color:#a9b489">shwetasolar.in/topcon landing page</p>
            </div>
            <table style="width:100%;border-collapse:collapse;font-size:14px;color:#1a1a1a">
              <tr><td style="padding:12px 24px;font-weight:bold;width:140px">Name</td><td style="padding:12px 24px">${name}</td></tr>
              <tr style="background:#f5f5f5"><td style="padding:12px 24px;font-weight:bold">Phone</td><td style="padding:12px 24px"><a href="tel:${phone}">${phone}</a></td></tr>
              <tr><td style="padding:12px 24px;font-weight:bold">Email</td><td style="padding:12px 24px"><a href="mailto:${email}">${email}</a></td></tr>
              <tr style="background:#f5f5f5"><td style="padding:12px 24px;font-weight:bold">Buyer type</td><td style="padding:12px 24px">${buyer}</td></tr>
              ${city ? `<tr><td style="padding:12px 24px;font-weight:bold">City</td><td style="padding:12px 24px">${city}</td></tr>` : ""}
              ${capacity ? `<tr style="background:#f5f5f5"><td style="padding:12px 24px;font-weight:bold">Capacity</td><td style="padding:12px 24px">${capacity}</td></tr>` : ""}
              ${messageText ? `<tr><td style="padding:12px 24px;font-weight:bold;vertical-align:top">Message</td><td style="padding:12px 24px">${messageText.replace(/\n/g, "<br>")}</td></tr>` : ""}
            </table>
            <div style="padding:16px 24px;background:#004636;color:#a9b489;font-size:12px">Reply directly to this email to reach the customer.</div>
          </div>
        `,
      })
      if (emailError) {
        console.error("[v0] TOPCon lead email error:", emailError)
      } else {
        emailDelivered = true
      }
    } catch (err) {
      console.error("[v0] TOPCon lead email exception:", err)
    }
  } else {
    console.warn("[v0] RESEND_API_KEY not set — skipping lead email.")
  }

  return { success: true, emailDelivered }
}
