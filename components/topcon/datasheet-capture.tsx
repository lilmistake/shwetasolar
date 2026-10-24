"use client"

import { useEffect, useId, useState, type FormEvent } from "react"
import { Check, FileDown, Loader2 } from "lucide-react"
import { submitTopConLead } from "@/lib/actions/topcon-lead"
import { captureAttribution } from "@/lib/topcon/attribution"
import { trackCtaClick, trackLead } from "@/lib/topcon/tracking"
import type { Attribution } from "@/lib/topcon/constants"
import { normalizeIndianPhone } from "@/components/topcon/quote-form"

/** "Get Full Datasheet" CTA that captures a phone number before sending the datasheet. */
export function DatasheetCapture() {
  const uid = useId()
  const [open, setOpen] = useState(false)
  const [state, setState] = useState<"idle" | "pending" | "done">("idle")
  const [error, setError] = useState("")
  const [attribution, setAttribution] = useState<Attribution>({})

  useEffect(() => setAttribution(captureAttribution()), [])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") || "").trim()
    const phone = normalizeIndianPhone(String(data.get("phone") || ""))
    if (name.length < 2) return setError("Please enter your name.")
    if (!/^[6-9]\d{9}$/.test(phone)) return setError("Enter a valid 10-digit mobile number.")

    setState("pending")
    const res = await submitTopConLead({ name, phone, buyerType: "other", source: "datasheet", attribution })
    if (!res.success) {
      setState("idle")
      return setError(res.error || "Something went wrong. Please try again.")
    }
    trackLead({ product: "topcon_g2g", form_location: "datasheet" })
    setState("done")
  }

  if (state === "done") {
    return (
      <p className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-forest">
        <Check className="mt-0.5 h-5 w-5 shrink-0 text-olive" aria-hidden />
        <span>
          <span className="font-semibold">Done.</span> We&apos;ll send the full datasheet to your WhatsApp within working
          hours.
        </span>
      </p>
    )
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => {
          trackCtaClick("datasheet-open")
          setOpen(true)
        }}
        data-track="cta"
        data-cta-location="datasheet"
        className="inline-flex items-center gap-2 rounded-lg bg-sun px-6 py-3.5 font-semibold text-forest transition-colors hover:bg-sun-strong"
      >
        <FileDown className="h-5 w-5" aria-hidden />
        Get Full Datasheet
      </button>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4" data-form="topcon-datasheet">
      <p className="text-sm font-semibold text-forest">Where should we send the datasheet?</p>
      <label htmlFor={`${uid}-name`} className="sr-only">
        Name
      </label>
      <input
        id={`${uid}-name`}
        name="name"
        autoComplete="name"
        placeholder="Your name"
        className="h-12 rounded-lg border border-border bg-background px-3.5 text-base text-forest outline-none focus:border-olive focus:ring-2 focus:ring-olive/30"
      />
      <label htmlFor={`${uid}-phone`} className="sr-only">
        WhatsApp number
      </label>
      <input
        id={`${uid}-phone`}
        name="phone"
        type="tel"
        inputMode="numeric"
        autoComplete="tel-national"
        maxLength={14}
        placeholder="10-digit WhatsApp number"
        className="h-12 rounded-lg border border-border bg-background px-3.5 text-base text-forest outline-none focus:border-olive focus:ring-2 focus:ring-olive/30"
      />
      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={state === "pending"}
        data-track="form-submit"
        data-cta-location="datasheet"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-sun px-6 py-3.5 font-semibold text-forest transition-colors hover:bg-sun-strong disabled:opacity-70"
      >
        {state === "pending" && <Loader2 className="h-5 w-5 animate-spin" aria-hidden />}
        Send Me the Datasheet
      </button>
    </form>
  )
}
