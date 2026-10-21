"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Building2, Clock, Mail, MessageCircle, Package, Phone, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { submitContactForm } from "@/lib/actions/contact"
import { PageHero } from "@/components/site/page-hero"
import { SITE } from "@/lib/site"

const inquiryTypes = [
  { id: "product", label: "Product enquiry", icon: Package },
  { id: "partnership", label: "Partnership", icon: Users },
  { id: "investor", label: "Investor relations", icon: Building2 },
  { id: "other", label: "Something else", icon: MessageCircle },
]

const CHANNELS = [
  { icon: Phone, label: "Call", value: SITE.phoneDisplay, href: SITE.phoneHref },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: SITE.whatsappDisplay, href: SITE.whatsappHref, external: true },
]

const LOCATIONS = [
  { title: "Corporate office", detail: "Near Delhi, with quick access to NCR", src: SITE.corporateMapEmbed },
  { title: "Manufacturing facility", detail: `${SITE.capacity} TOPCon production line`, src: SITE.factoryMapEmbed },
]

const fieldClass = "h-12 rounded-xl bg-background"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedInquiry, setSelectedInquiry] = useState<string>("")
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
      } catch (err) {
        console.error("Failed to load reCAPTCHA:", err)
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
        console.error("reCAPTCHA execution failed:", err)
        setError("Please try again. Security verification failed.")
        setIsSubmitting(false)
        return
      }
    }

    const form = e.currentTarget
    const formData = new FormData(form)

    const result = await submitContactForm({
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      inquiryType: selectedInquiry,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      recaptchaToken,
    })

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
    <>
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank you</DialogTitle>
            <DialogDescription>
              Your message has been received. Our team will get back to you within one working day.
            </DialogDescription>
          </DialogHeader>
          <button
            type="button"
            onClick={() => setShowSuccessDialog(false)}
            className="inline-flex h-11 items-center justify-center rounded-full bg-forest px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-olive"
          >
            Close
          </button>
        </DialogContent>
      </Dialog>

      <PageHero
        eyebrow="Contact"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        title="Let's talk solar."
        intro="Tell us about your project and our team will recommend the right modules and send pricing within one working day."
      />

      <section aria-label="Contact options" className="bg-background pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 md:px-6 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded-3xl border border-border bg-muted p-7 md:p-10 lg:col-span-3"
          >
            <fieldset className="flex flex-col gap-3">
              <legend className="mb-3 text-sm font-medium text-foreground">What can we help you with?</legend>
              <div className="grid grid-cols-2 gap-3">
                {inquiryTypes.map((type) => {
                  const active = selectedInquiry === type.id
                  return (
                    <button
                      key={type.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSelectedInquiry(type.id)}
                      className={`flex items-center gap-3 rounded-2xl border p-4 text-left text-sm font-medium transition-colors ${
                        active
                          ? "border-forest bg-forest text-primary-foreground"
                          : "border-border bg-background text-foreground hover:border-foreground/30"
                      }`}
                    >
                      <type.icon className="size-5 shrink-0" aria-hidden="true" />
                      {type.label}
                    </button>
                  )
                })}
              </div>
            </fieldset>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="firstName">First name *</Label>
                <Input id="firstName" name="firstName" autoComplete="given-name" required className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="lastName">Last name *</Label>
                <Input id="lastName" name="lastName" autoComplete="family-name" required className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" required className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" autoComplete="organization" className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input id="subject" name="subject" required className={fieldClass} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea id="message" name="message" required rows={5} className="rounded-xl bg-background" />
            </div>

            {error && (
              <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 items-center justify-center rounded-full bg-forest px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-olive disabled:opacity-60 sm:self-start"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <ul className="flex flex-col gap-4">
              {CHANNELS.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-5 rounded-3xl border border-border bg-muted p-6 transition-colors hover:border-foreground/30"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-background text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="text-sm text-muted-foreground">{label}</span>
                      <span className="truncate font-semibold text-foreground">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-1 flex-col gap-5 rounded-3xl bg-forest p-7 text-primary-foreground">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/10 text-sage">
                <Clock className="size-5" aria-hidden="true" />
              </span>
              <h2 className="text-lg font-semibold">Business hours</h2>
              <dl className="flex flex-col gap-2 text-sm">
                {[
                  ["Monday – Friday", "9:00 AM – 6:00 PM"],
                  ["Saturday", "9:00 AM – 2:00 PM"],
                  ["Sunday", "Closed"],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between gap-4 border-t border-primary-foreground/15 pt-2">
                    <dt className="text-primary-foreground/70">{day}</dt>
                    <dd className="font-medium">{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="locations-heading" className="border-t border-border bg-background py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground">Visit us</p>
            <h2 id="locations-heading" className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
              Our locations
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {LOCATIONS.map((loc) => (
              <article key={loc.title} className="flex flex-col overflow-hidden rounded-3xl border border-border bg-muted">
                <div className="flex flex-col gap-1 p-6">
                  <h3 className="text-lg font-semibold text-foreground">{loc.title}</h3>
                  <p className="text-sm text-muted-foreground">{loc.detail}</p>
                </div>
                <iframe
                  src={loc.src}
                  className="h-80 w-full border-0 md:h-96"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Shweta Solar ${loc.title} location`}
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
