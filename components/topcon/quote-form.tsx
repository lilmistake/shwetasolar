"use client"

import { useEffect, useState, type FormEvent } from "react"
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react"
import { submitContactForm } from "@/lib/actions/contact"
import { BUYER_TYPES } from "@/lib/topcon/constants"
import { trackLead } from "@/lib/topcon/tracking"
import { WhatsAppLink } from "@/components/topcon/cta-buttons"

const buyerLabel = (value: string) => BUYER_TYPES.find((b) => b.value === value)?.label ?? value

export function QuoteForm() {
  const [buyerType, setBuyerType] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  // Pre-select buyer type when a segment card CTA is clicked.
  useEffect(() => {
    console.log("[v0] QuoteForm listener attached")
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as string
      console.log("[v0] topcon:buyer received:", detail)
      if (detail) setBuyerType(detail)
    }
    window.addEventListener("topcon:buyer", handler)
    return () => window.removeEventListener("topcon:buyer", handler)
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMsg("")

    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "").trim()
    const phone = String(data.get("phone") || "").trim()
    const email = String(data.get("email") || "").trim()
    const selectedBuyer = String(data.get("buyerType") || "").trim()
    const requirement = String(data.get("requirement") || "").trim()
    const location = String(data.get("location") || "").trim()
    const message = String(data.get("message") || "").trim()

    // Validation
    if (!name) return setErrorMsg("Please enter your name.")
    const phoneDigits = phone.replace(/[^0-9]/g, "").replace(/^91/, "")
    if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
      return setErrorMsg("Please enter a valid 10-digit Indian mobile number.")
    }
    if (!selectedBuyer) return setErrorMsg("Please select the option that best describes you.")

    setStatus("submitting")

    const composedMessage = [
      requirement ? `Requirement / capacity: ${requirement}` : "",
      location ? `Location: ${location}` : "",
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n")

    const result = await submitContactForm({
      name,
      phone,
      email,
      company: location || undefined,
      inquiryType: buyerLabel(selectedBuyer),
      product: "N-Type TOPCon G2G Module",
      quantity: requirement || undefined,
      message: composedMessage || "TOPCon quote request (landing page).",
    })

    if (result.success) {
      setStatus("success")
      trackLead({ buyer_type: selectedBuyer, product: "topcon_g2g" })
    } else {
      setStatus("error")
      setErrorMsg(result.error || "Something went wrong. Please try again or reach us on WhatsApp.")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-14 w-14 text-olive" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-bold text-forest">Thanks — we&apos;ve got your request</h3>
        <p className="mt-3 text-muted-foreground">
          Our team will send your quote within 24 hours. For anything urgent, message us on WhatsApp.
        </p>
        <WhatsAppLink
          source="form-success"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-forest px-6 py-3 font-semibold text-cream hover:bg-olive"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Message us on WhatsApp
        </WhatsAppLink>
      </div>
    )
  }

  const fieldClass =
    "mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-forest shadow-sm outline-none focus:border-olive focus:ring-2 focus:ring-olive/30"

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="text-sm font-medium text-forest">
            Name <span className="text-amber-600">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Your full name" />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-forest">
            Phone <span className="text-amber-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="10-digit mobile number"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-forest">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="buyerType" className="text-sm font-medium text-forest">
            I am a <span className="text-amber-600">*</span>
          </label>
          <select
            id="buyerType"
            name="buyerType"
            required
            value={buyerType}
            onChange={(e) => setBuyerType(e.target.value)}
            className={fieldClass}
          >
            <option value="" disabled>
              Select one
            </option>
            {BUYER_TYPES.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="requirement" className="text-sm font-medium text-forest">
            Requirement / capacity
          </label>
          <input
            id="requirement"
            name="requirement"
            className={fieldClass}
            placeholder="e.g. 500 kW, 2 containers, 10 kW rooftop"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="location" className="text-sm font-medium text-forest">
            State / City
          </label>
          <input id="location" name="location" className={fieldClass} placeholder="e.g. Jaipur, Rajasthan" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-forest">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className={fieldClass}
            placeholder="Anything else we should know? (optional)"
          />
        </div>
      </div>

      {errorMsg && (
        <p role="alert" className="mt-4 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-4 text-lg font-semibold text-forest shadow-sm transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Get My Quote"
        )}
      </button>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        Prefer WhatsApp?{" "}
        <WhatsAppLink source="form-fallback" className="font-medium text-olive underline underline-offset-2">
          Message us instead
        </WhatsAppLink>
      </p>
    </form>
  )
}
