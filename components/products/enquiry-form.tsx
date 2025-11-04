"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import { submitContactForm } from "@/lib/actions/contact"
import { useRecaptcha } from "@/lib/hooks/use-recaptcha" // Added reCAPTCHA hook

interface EnquiryFormProps {
  productName: string
  onSuccess?: () => void
}

export function EnquiryForm({ productName, onSuccess }: EnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { executeRecaptcha } = useRecaptcha() // Initialize reCAPTCHA hook

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const recaptchaToken = await executeRecaptcha("product_enquiry")

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      product: productName,
      quantity: formData.get("quantity") as string,
      message: formData.get("message") as string,
      inquiryType: "product",
      recaptchaToken: recaptchaToken || undefined, // Include reCAPTCHA token
    }

    const result = await submitContactForm(data)

    if (result.success) {
      setShowSuccessDialog(true)
      form.reset()
      onSuccess?.()
    } else {
      setError(result.error || "Something went wrong. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <>
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank You!</DialogTitle>
            <DialogDescription>
              Your enquiry for {productName} has been received. Our team will contact you shortly.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowSuccessDialog(false)} className="bg-forest text-cream hover:bg-olive">
            Close
          </Button>
        </DialogContent>
      </Dialog>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" name="name" required placeholder="John Doe" />
          </div>
          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" name="company" placeholder="Your Company" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" required placeholder="john@example.com" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
          </div>
        </div>

        <div>
          <Label htmlFor="product">Product Interest</Label>
          <Input id="product" name="product" value={productName} readOnly className="bg-muted" />
        </div>

        <div>
          <Label htmlFor="quantity">Estimated Quantity (kW)</Label>
          <Input id="quantity" name="quantity" type="number" placeholder="100" />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" placeholder="Tell us about your project requirements..." rows={4} />
        </div>

        {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">{error}</div>}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </Button>
      </form>
    </>
  )
}
