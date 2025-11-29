"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Mail, Phone, MapPin, Clock, MessageCircle, Building2, Users, Package } from "lucide-react"
import { useState } from "react"
import { submitContactForm } from "@/lib/actions/contact"

const inquiryTypes = [
  { id: "product", label: "Product Inquiry", icon: Package },
  { id: "partnership", label: "Partnership", icon: Users },
  { id: "investor", label: "Investor Relations", icon: Building2 },
  { id: "other", label: "Other", icon: MessageCircle },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedInquiry, setSelectedInquiry] = useState<string>("")
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      inquiryType: selectedInquiry,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    const result = await submitContactForm(data)

    if (result.success) {
      setShowSuccessDialog(true)
      form.reset()
      setSelectedInquiry("")
    } else {
      setError(result.error || "Something went wrong. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="pt-20">
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank You!</DialogTitle>
            <DialogDescription>
              Your message has been received. Our team will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowSuccessDialog(false)} className="bg-forest text-cream hover:bg-olive">
            Close
          </Button>
        </DialogContent>
      </Dialog>

      <section className="py-20 bg-gradient-to-br from-forest to-olive text-cream">
        <div className="container mx-auto px-6">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">Get in touch with our team to discuss your solar energy needs</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-forest mb-6">Send us a Message</h2>
              <Card className="p-8 border-sage/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label className="text-forest mb-3 block">What can we help you with? *</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedInquiry(type.id)}
                          className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                            selectedInquiry === type.id
                              ? "border-forest bg-forest/5"
                              : "border-sage/20 hover:border-sage/40"
                          }`}
                        >
                          <type.icon
                            className={`h-6 w-6 ${selectedInquiry === type.id ? "text-forest" : "text-olive"}`}
                          />
                          <span
                            className={`text-sm font-medium ${selectedInquiry === type.id ? "text-forest" : "text-olive"}`}
                          >
                            {type.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-forest">
                        First Name *
                      </Label>
                      <Input id="firstName" name="firstName" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-forest">
                        Last Name *
                      </Label>
                      <Input id="lastName" name="lastName" required className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-forest">
                      Email *
                    </Label>
                    <Input id="email" name="email" type="email" required className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-forest">
                      Phone Number *
                    </Label>
                    <Input id="phone" name="phone" type="tel" required className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-forest">
                      Company Name
                    </Label>
                    <Input id="company" name="company" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-forest">
                      Subject *
                    </Label>
                    <Input id="subject" name="subject" required className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-forest">
                      Message *
                    </Label>
                    <Textarea id="message" name="message" required rows={5} className="mt-1" />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">{error}</div>
                  )}

                  <Button type="submit" className="w-full bg-forest text-cream hover:bg-olive" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-display text-3xl font-bold text-forest mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <Card className="p-6 border-sage/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-forest" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest mb-1">Email</h3>
                      <a href="mailto:admin@shwetasolar.in" className="text-olive hover:underline">
                        admin@shwetasolar.in
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-sage/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-forest" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest mb-1">Phone</h3>
                      <a href="tel:18001204771200" className="text-olive hover:underline block">
                        1800 120 477120
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-sage/20 bg-[#25D366]/5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-[#25D366]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/919289969501"
                        target="_blank"
                        className="text-[#25D366] hover:underline block font-medium"
                        rel="noreferrer"
                      >
                        Chat with us: +91 92899 69501
                      </a>
                      <p className="text-sm text-olive mt-1">Quick responses during business hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-sage/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-forest" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest mb-1">Corporate Office</h3>
                      <p className="text-olive">
                        Near Delhi, India's Capital
                        <br />
                        Strategic location with excellent connectivity
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-sage/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-forest" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest mb-1">Business Hours</h3>
                      <p className="text-olive">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-forest mb-8 text-center">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-sage/20">
              <div className="p-4 bg-cream border-b border-sage/20">
                <h3 className="font-semibold text-forest">Corporate Office</h3>
                <p className="text-sm text-olive mt-1">Near Delhi, India's Capital</p>
                <p className="text-sm text-olive mt-1">Strategic location with excellent connectivity</p>
              </div>
              <div className="h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d874.934100454796!2d77.4442717!3d28.6975308!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf12c2c7a8b37%3A0xdc082a9319e20eca!2sShweta%20Solar%20System%20Pvt.%20Ltd.%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1760470739906!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shweta Solar Corporate Office Location"
                />
              </div>
            </Card>
            <Card className="overflow-hidden border-sage/20">
              <div className="p-4 bg-cream border-b border-sage/20">
                <h3 className="font-semibold text-forest">Manufacturing Facility</h3>
                <p className="text-sm text-olive mt-1">1.2GW TopCon Production Line</p>
              </div>
              <div className="h-[400px]">
                <iframe
                  src="https://www.google.com/maps?q=28.678944,77.643083&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shweta Solar Manufacturing Facility Location"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
