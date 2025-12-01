"use client"

import type React from "react"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Mail, Phone, MessageSquare } from "lucide-react"
import { useState } from "react"
import { submitContactForm } from "@/lib/actions/contact"

export function EnquirySection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [recaptchaReady, setRecaptchaReady] = useState(false)

  useEffect(() => {
    const loadRecaptcha = async () => {
      try {
        const response = await fetch("/api/recaptcha-config")
        const { siteKey } = await response.json()

        if (!siteKey) return

        const script = document.createElement("script")
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
        script.async = true
        script.defer = true
        script.onload = () => setRecaptchaReady(true)
        document.head.appendChild(script)
      } catch (error) {
        console.error("[v0] Failed to load reCAPTCHA:", error)
      }
    }

    loadRecaptcha()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    let recaptchaToken = ""
    if (recaptchaReady && window.grecaptcha) {
      try {
        const response = await fetch("/api/recaptcha-config")
        const { siteKey } = await response.json()
        recaptchaToken = await window.grecaptcha.execute(siteKey, { action: "submit" })
      } catch (err) {
        console.error("[v0] reCAPTCHA execution failed:", err)
      }
    }

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      inquiryType: "general",
      recaptchaToken,
    }

    const result = await submitContactForm(data)

    if (result.success) {
      setShowSuccessDialog(true)
      form.reset()
    } else {
      setError(result.error || "Something went wrong. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-sage/10 to-olive/5">
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank You!</DialogTitle>
            <DialogDescription>Your enquiry has been received. Our team will get back to you soon.</DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowSuccessDialog(false)} className="bg-forest text-cream hover:bg-olive">
            Close
          </Button>
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-4">Have Questions?</h2>
            <p className="text-lg text-olive max-w-2xl mx-auto">
              Our team is here to help you find the perfect solar solution for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="p-6 hover:shadow-lg transition-shadow border-sage/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-forest mb-1">Call Us</h3>
                    <a href="tel:18001204771 20" className="text-olive hover:text-forest transition-colors">
                      1800 120 477120
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-sage/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-forest mb-1">Email Us</h3>
                    <a
                      href="mailto:admin@shwetasolar.in"
                      className="text-olive hover:text-forest transition-colors break-all"
                    >
                      admin@shwetasolar.in
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-sage/20 bg-[#25D366]/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-forest mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/919289969501"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-olive hover:text-forest transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Enquiry Form */}
            <Card className="lg:col-span-2 p-8 border-sage/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-forest mb-2">
                      Full Name *
                    </label>
                    <Input id="name" name="name" required className="border-sage/30" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-forest mb-2">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" required className="border-sage/30" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-forest mb-2">
                    Phone Number *
                  </label>
                  <Input id="phone" name="phone" type="tel" required className="border-sage/30" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-forest mb-2">
                    Your Message *
                  </label>
                  <Textarea id="message" name="message" required rows={4} className="border-sage/30" />
                </div>
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">{error}</div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-forest text-cream hover:bg-olive"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
