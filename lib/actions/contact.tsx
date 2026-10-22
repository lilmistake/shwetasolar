"use server"

import { createClient } from "@/lib/supabase/server"
import { Resend } from "resend"
import { LEAD_RECIPIENT_EMAIL } from "@/lib/topcon/constants"
import { FAMILIES } from "@/lib/products"
import { cleanLine, cleanPhone, cleanText, htmlBlock, isValidEmail } from "@/lib/email-sanitize"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const INQUIRY_TYPES = ["product", "partnership", "investor", "other", "general"] as const
const PRODUCT_MODELS = new Set(FAMILIES.map((f) => f.model))

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

export async function submitContactForm(data: ContactFormData) {
  // Bots that fill the hidden honeypot get a fake success so they don't retry.
  if (data.website) return { success: true }

  const name = cleanLine(data.name, 120)
  const email = cleanLine(data.email, 160)
  const phone = cleanPhone(data.phone)
  const message = cleanText(data.message, 4000)

  if (!name || name.length < 2) return { success: false, error: "Please enter your name." }
  if (!email || !isValidEmail(email)) return { success: false, error: "Please enter a valid email address." }
  if (phone.replace(/\D/g, "").length < 10) return { success: false, error: "Please enter a valid phone number." }
  if (!message) return { success: false, error: "Please enter a message." }

  const rawInquiry = cleanLine(data.inquiryType, 40)
  const inquiryType = (INQUIRY_TYPES as readonly string[]).includes(rawInquiry) ? rawInquiry : "general"

  // Product must be one of our real model numbers; anything else is dropped.
  const rawProduct = cleanLine(data.product, 40)
  const product = PRODUCT_MODELS.has(rawProduct) ? rawProduct : null

  const fields = {
    company: cleanLine(data.company, 160) || null,
    subject: cleanLine(data.subject, 200) || null,
    product,
    quantity: cleanLine(data.quantity, 60) || null,
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
        ? `<tr><td style="padding:10px 20px;font-weight:bold;width:130px;vertical-align:top">${label}</td><td style="padding:10px 20px">${htmlBlock(value)}</td></tr>`
        : ""
    try {
      const { error } = await resend.emails.send({
        from: "Shweta Solar Website <onboarding@resend.dev>",
        to: LEAD_RECIPIENT_EMAIL,
        replyTo: email,
        subject: `New website enquiry (${inquiryType})${product ? ` · ${product}` : ""}: ${name}`,
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
              ${row("Product", fields.product)}
              ${row("Company", fields.company)}
              ${row("Subject", fields.subject)}
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
