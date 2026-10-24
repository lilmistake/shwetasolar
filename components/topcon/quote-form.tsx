"use client"

import { useEffect, useId, useState, type FormEvent } from "react"
import { Check, Clock, Loader2, MessageCircle } from "lucide-react"
import { enrichTopConLead, submitTopConLead } from "@/lib/actions/topcon-lead"
import { ATTRIBUTION_KEYS, BUYER_TYPES, type Attribution, type BuyerTypeValue } from "@/lib/topcon/constants"
import { captureAttribution } from "@/lib/topcon/attribution"
import { trackLead } from "@/lib/topcon/tracking"
import { WhatsAppLink } from "@/components/topcon/cta-buttons"
import { cn } from "@/lib/utils"

const PHONE_PATTERN = /^[6-9]\d{9}$/

export function normalizeIndianPhone(raw: string) {
  return raw.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "")
}

type Step = "contact" | "details" | "done"

export function QuoteForm({ variant = "section" }: { variant?: "section" | "hero" }) {
  const uid = useId()
  const [step, setStep] = useState<Step>("contact")
  const [buyerType, setBuyerType] = useState<BuyerTypeValue | "">("")
  const [leadId, setLeadId] = useState("")
  const [pending, setPending] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [attribution, setAttribution] = useState<Attribution>({})

  useEffect(() => {
    setAttribution(captureAttribution())
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as BuyerTypeValue
      if (detail) setBuyerType(detail)
    }
    window.addEventListener("topcon:buyer", handler)
    return () => window.removeEventListener("topcon:buyer", handler)
  }, [])

  async function handleContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMsg("")
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") || "").trim()
    const phone = normalizeIndianPhone(String(data.get("phone") || ""))

    if (name.length < 2) return setErrorMsg("Please enter your name.")
    if (!PHONE_PATTERN.test(phone)) return setErrorMsg("Enter a valid 10-digit mobile number starting with 6–9.")
    if (!buyerType) return setErrorMsg("Please choose what describes you best.")

    setPending(true)
    const result = await submitTopConLead({ name, phone, buyerType, source: `form-${variant}`, attribution })
    setPending(false)

    if (!result.success || !result.leadId) {
      return setErrorMsg(result.error || "Something went wrong. Please call or WhatsApp us.")
    }
    trackLead({ buyer_type: buyerType, product: "topcon_g2g", form_location: variant })
    setLeadId(result.leadId)
    setStep("details")
  }

  async function handleDetails(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setPending(true)
    await enrichTopConLead({
      leadId,
      capacity: String(data.get("capacity") || ""),
      city: String(data.get("city") || ""),
    })
    setPending(false)
    setStep("done")
  }

  const dark = variant === "hero"
  const fieldClass = cn(
    "mt-1.5 block h-12 w-full rounded-lg border bg-background px-3.5 text-base text-forest outline-none focus:border-olive focus:ring-2 focus:ring-olive/30",
    "border-border",
  )
  const labelClass = "text-sm font-medium text-forest"

  if (step === "done") {
    return (
      <div className="rounded-xl border border-border bg-card p-6 text-forest shadow-sm md:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest">
          <Check className="h-6 w-6 text-sun" aria-hidden />
        </div>
        <h3 className="mt-4 text-2xl font-bold">Request received</h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Your pricing is on its way. Here&apos;s what happens next:
        </p>
        <ol className="mt-5 flex flex-col gap-3 text-sm">
          {[
            "A sales engineer calls you within working hours to confirm wattage and volume.",
            "You receive a written quote within 24 hours.",
            "Datasheets and test reports are shared on WhatsApp.",
          ].map((s, i) => (
            <li key={s} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold">
                {i + 1}
              </span>
              <span className="leading-relaxed">{s}</span>
            </li>
          ))}
        </ol>
        <WhatsAppLink
          source="thank-you"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-forest px-6 py-3.5 font-semibold text-cream hover:bg-olive"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          Continue on WhatsApp
        </WhatsAppLink>
      </div>
    )
  }

  return (
    <div className={cn("rounded-xl border bg-card p-5 text-forest md:p-7", dark ? "border-cream/10 shadow-2xl" : "border-border shadow-sm")}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-lg font-bold">{step === "contact" ? "Get your best price" : "Help us price it exactly"}</p>
        <span className="text-xs font-medium text-muted-foreground">Step {step === "contact" ? 1 : 2} of 2</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-1.5" aria-hidden>
        <span className="h-1 rounded-full bg-forest" />
        <span className={cn("h-1 rounded-full", step === "details" ? "bg-forest" : "bg-muted")} />
      </div>

      {step === "contact" ? (
        <form onSubmit={handleContact} noValidate className="mt-5 flex flex-col gap-4" data-form="topcon-quote" data-form-location={variant}>
          {ATTRIBUTION_KEYS.map((key) => (
            <input key={key} type="hidden" name={key} value={attribution[key] ?? ""} />
          ))}
          <input type="hidden" name="buyerType" value={buyerType} />

          <div>
            <label htmlFor={`${uid}-name`} className={labelClass}>
              Name
            </label>
            <input id={`${uid}-name`} name="name" autoComplete="name" className={fieldClass} placeholder="Your name" />
          </div>

          <div>
            <label htmlFor={`${uid}-phone`} className={labelClass}>
              Mobile number
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 mt-1.5 flex items-center pl-3.5 text-base text-muted-foreground">
                +91
              </span>
              <input
                id={`${uid}-phone`}
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                maxLength={14}
                className={cn(fieldClass, "pl-12")}
                placeholder="98XXXXXXXX"
              />
            </div>
          </div>

          <fieldset>
            <legend className={labelClass}>I am a</legend>
            <div className="mt-1.5 grid grid-cols-2 gap-2">
              {BUYER_TYPES.map((b) => (
                <button
                  key={b.value}
                  type="button"
                  aria-pressed={buyerType === b.value}
                  onClick={() => setBuyerType(b.value)}
                  className={cn(
                    "min-h-11 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                    buyerType === b.value
                      ? "border-forest bg-forest text-cream"
                      : "border-border bg-background text-forest hover:border-forest/40",
                  )}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </fieldset>

          {errorMsg && (
            <p role="alert" className="rounded-lg bg-destructive/10 px-3.5 py-2.5 text-sm text-destructive">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            data-track="form-submit"
            data-cta-location={`form-${variant}`}
            className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-lg bg-sun px-6 py-3.5 text-base font-bold text-forest transition-colors hover:bg-sun-strong disabled:opacity-70"
          >
            {pending ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> : null}
            {pending ? "Sending…" : "Get My Best Price"}
          </button>

          <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-olive" aria-hidden />
            Pricing within 24 hrs · No spam, no obligation
          </p>
        </form>
      ) : (
        <form onSubmit={handleDetails} className="mt-5 flex flex-col gap-4">
          <p className="rounded-lg bg-muted px-3.5 py-2.5 text-sm">
            <span className="font-semibold">Got it — your request is saved.</span> Add two details for a sharper quote
            (optional).
          </p>
          <div>
            <label htmlFor={`${uid}-capacity`} className={labelClass}>
              Capacity needed
            </label>
            <input
              id={`${uid}-capacity`}
              name="capacity"
              className={fieldClass}
              placeholder="e.g. 10 kW, 500 kW, 2 containers"
            />
          </div>
          <div>
            <label htmlFor={`${uid}-city`} className={labelClass}>
              City / State
            </label>
            <input id={`${uid}-city`} name="city" autoComplete="address-level2" className={fieldClass} placeholder="e.g. Jaipur, Rajasthan" />
          </div>
          <button
            type="submit"
            disabled={pending}
            data-track="form-step2"
            data-cta-location={`form-${variant}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sun px-6 py-3.5 text-base font-bold text-forest transition-colors hover:bg-sun-strong disabled:opacity-70"
          >
            {pending ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> : null}
            Send Details
          </button>
          <button
            type="button"
            onClick={() => setStep("done")}
            className="text-sm font-medium text-muted-foreground underline underline-offset-2 hover:text-forest"
          >
            Skip — just call me
          </button>
        </form>
      )}
    </div>
  )
}
