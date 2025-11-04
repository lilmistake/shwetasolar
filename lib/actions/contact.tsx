"use server"

import { createClient } from "@/lib/supabase/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.error("reCAPTCHA secret key is not configured")
    return false
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()

    // For reCAPTCHA v3, check the score (0.0 - 1.0)
    // Score > 0.5 is generally considered human
    if (data.success && data.score >= 0.5) {
      return true
    }

    console.error("reCAPTCHA verification failed:", data)
    return false
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return false
  }
}

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
  recaptchaToken?: string // Added recaptcha token field
}

export async function submitContactForm(data: ContactFormData) {
  try {
    if (data.recaptchaToken) {
      const isHuman = await verifyRecaptcha(data.recaptchaToken)
      if (!isHuman) {
        return {
          success: false,
          error: "reCAPTCHA verification failed. Please try again.",
        }
      }
    }

    const supabase = createClient()

    // Store in database
    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company || null,
      inquiry_type: data.inquiryType || "general",
      product: data.product || null,
      quantity: data.quantity || null,
      message: data.message,
    })

    if (dbError) {
      console.error("Database error:", dbError)
      return {
        success: false,
        error: "Failed to save your enquiry. Please try again.",
      }
    }

    // Send email notification using Resend
    try {
      await resend.emails.send({
        from: "Shweta Solar <onboarding@resend.dev>",
        to: "rasinrohit@gmail.com",
        subject: `New Contact Form Submission - ${data.inquiryType || "General"}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
          ${data.inquiryType ? `<p><strong>Inquiry Type:</strong> ${data.inquiryType}</p>` : ""}
          ${data.subject ? `<p><strong>Subject:</strong> ${data.subject}</p>` : ""}
          ${data.product ? `<p><strong>Product:</strong> ${data.product}</p>` : ""}
          ${data.quantity ? `<p><strong>Quantity:</strong> ${data.quantity} kW</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      })
    } catch (emailError) {
      console.error("Email sending failed:", emailError)
      // Don't fail the entire operation if email fails
      // The data is already saved in the database
    }

    return { success: true }
  } catch (error) {
    console.error("Form submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
