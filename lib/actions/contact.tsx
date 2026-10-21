"use server"

import { createClient } from "@/lib/supabase/server"
import { Resend } from "resend"
import { LEAD_RECIPIENT_EMAIL } from "@/lib/topcon/constants"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  inquiryType?: string
  subject?: string
  product?: string
  quantity?: string
  message: string
  /** Accepted for backwards compatibility with existing callers; no longer verified. */
  recaptchaToken?: string
  /** Honeypot field. Real users never fill it. */
  website?: string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export async function submitContactForm(data: ContactFormData) {
  // Bots that fill the hidden honeypot get a fake success so they don't retry.
  if (data.website) return { success: true }

  const name = data.name?.trim().slice(0, 120)
  const email = data.email?.trim().slice(0, 160)
  const phone = data.phone?.trim().slice(0, 30)
  const message = data.message?.trim().slice(0, 4000)

  if (!name || name.length < 2) return { success: false, error: "Please enter your name." }
  if (!email || !isValidEmail(email)) return { success: false, error: "Please enter a valid email address." }
  if (!phone || phone.replace(/\D/g, "").length < 10)
    return { success: false, error: "Please enter a valid phone number." }
  if (!message) return { success: false, error: "Please enter a message." }

  const inquiryType = data.inquiryType?.trim().slice(0, 40) || "general"
  const fields = {
    company: data.company?.trim().slice(0, 160) || null,
    subject: data.subject?.trim().slice(0, 200) || null,
    product: data.product?.trim().slice(0, 120) || null,
    quantity: data.quantity?.trim().slice(0, 60) || null,
  }

  try {
    const supabase = await createClient()
    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name,
      email,
      phone,
      company: fields.company,
      inquiry_type: inquiryType,
      product: fields.product,
      quantity: fields.quantity,
      message: fields.subject ? `Subject: ${fields.subject}\n\n${message}` : message,
    })

    if (dbError) {
      console.error("Contact form DB error:", dbError)
      return { success: false, error: "We couldn't save your enquiry. Please try again or call us." }
    }
  } catch (error) {
    console.error("Contact form unexpected error:", error)
    return { success: false, error: "Something went wrong. Please try again." }
  }

  if (resend) {
    const row = (label: string, value: string | null) =>
      value
        ? `<tr><td style="padding:10px 20px;font-weight:bold;width:130px;vertical-align:top">${label}</td><td style="padding:10px 20px">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`
        : ""
    try {
      const { error } = await resend.emails.send({
        from: "Shweta Solar Website <onboarding@resend.dev>",
        to: LEAD_RECIPIENT_EMAIL,
        replyTo: email,
        subject: `New website enquiry (${inquiryType}): ${name}`,
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;border:1px solid #e5e5e5;border-radius:12px;overflow:hidden">
            <div style="background:#004636;color:#ffffff;padding:18px 20px">
              <h1 style="margin:0;font-size:17px">New website enquiry</h1>
              <p style="margin:4px 0 0;font-size:13px;color:#a9b489">shwetasolar.in</p>
            </div>
            <table style="width:100%;border-collapse:collapse;font-size:14px;color:#1a1a1a">
              ${row("Name", name)}
              ${row("Phone", phone)}
              ${row("Email", email)}
              ${row("Type", inquiryType)}
              ${row("Company", fields.company)}
              ${row("Subject", fields.subject)}
              ${row("Product", fields.product)}
              ${row("Quantity", fields.quantity)}
              ${row("Message", message)}
            </table>
          </div>
        `,
      })
      if (error) console.error("Contact form email error:", error)
    } catch (emailError) {
      console.error("Contact form email exception:", emailError)
    }
  }

  return { success: true }
}
