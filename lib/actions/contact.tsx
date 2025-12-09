"use server"

import { createClient } from "@/lib/supabase/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

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
  recaptchaToken?: string
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!token) return false

  try {
    const secretKey = "6Lde6uorAAAAAJp3jMWTOndLVqJ6k1BgXjOmJSJq"

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()

    console.log("[v0] reCAPTCHA verification response:", data)

    // reCAPTCHA v3 returns a score from 0.0 to 1.0
    // Consider scores above 0.5 as legitimate
    return data.success && data.score >= 0.5
  } catch (error) {
    console.error("[v0] reCAPTCHA verification failed:", error)
    return false
  }
}

export async function submitContactForm(data: ContactFormData) {
  try {
    console.log("[v0] Starting form submission with data:", {
      ...data,
      recaptchaToken: data.recaptchaToken ? "present" : "missing",
    })

    if (data.recaptchaToken) {
      const isValid = await verifyRecaptcha(data.recaptchaToken)
      console.log("[v0] reCAPTCHA validation result:", isValid)
      if (!isValid) {
        return {
          success: false,
          error: "Security verification failed. Please try again.",
        }
      }
    }

    const supabase = await createClient()
    console.log("[v0] Supabase client created")

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
      console.error("[v0] Database error:", dbError)
      return {
        success: false,
        error: "Failed to save your enquiry. Please try again.",
      }
    }

    console.log("[v0] Data saved to database successfully")

    // Send email notification using Resend
    try {
      console.log("[v0] Attempting to send email notification")
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
      console.log("[v0] Email sent successfully")
    } catch (emailError) {
      console.error("[v0] Email sending failed:", emailError)
      // Don't fail the entire operation if email fails
      // The data is already saved in the database
    }

    console.log("[v0] Form submission completed successfully")
    return { success: true }
  } catch (error) {
    console.error("[v0] Form submission error:", error)
    console.error("[v0] Error details:", error instanceof Error ? error.message : String(error))
    console.error("[v0] Error stack:", error instanceof Error ? error.stack : "No stack trace")
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
