import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Our Solar Experts",
  description:
    "Contact Shweta Solar for product inquiries, partnerships, or technical support. Call 1800 120 477120, email admin@shwetasolar.in, or visit our office near Delhi. Quick WhatsApp support available.",
  openGraph: {
    title: "Contact Shweta Solar - Solar Panel Inquiries & Support",
    description:
      "Reach out to our expert team for solar panel quotes, technical specifications, or partnership opportunities. Multiple contact options including phone, email, and WhatsApp.",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
