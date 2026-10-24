// Ad-conversion tracking hooks for the TOPCon landing page.
// Every CTA also carries data-track / data-cta-location attributes so GTM click
// triggers can be configured without code changes.
// The Meta Pixel is already initialized globally in app/layout.tsx.

type TrackParams = Record<string, string | number | boolean | undefined>

// TODO: Replace with your real Google Ads conversion send_to value, e.g. "AW-XXXXXXXXX/AbC-dEfGh".
const GOOGLE_ADS_CONVERSION_SEND_TO = ""

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    dataLayer?: Record<string, unknown>[]
  }
}

function emit(gaEvent: string, metaEvent: string, params: TrackParams, metaStandard = false) {
  if (typeof window === "undefined") return
  window.gtag?.("event", gaEvent, params)
  window.fbq?.(metaStandard ? "track" : "trackCustom", metaEvent, params)
  window.dataLayer?.push({ event: gaEvent, ...params })
}

/** Fire a lead/conversion event across GA4, Google Ads, Meta Pixel and dataLayer. */
export function trackLead(params: TrackParams = {}) {
  if (typeof window === "undefined") return
  emit("generate_lead", "Lead", { currency: "INR", ...params }, true)
  if (GOOGLE_ADS_CONVERSION_SEND_TO) {
    window.gtag?.("event", "conversion", { send_to: GOOGLE_ADS_CONVERSION_SEND_TO, ...params })
  }
}

export function trackCallClick(location: string) {
  emit("call_click", "CallClick", { location })
}

export function trackWhatsAppClick(location: string) {
  emit("whatsapp_click", "WhatsAppClick", { location })
}

export function trackCtaClick(location: string, buyerType?: string) {
  emit("cta_click", "CtaClick", { location, buyer_type: buyerType })
}

/** Smooth-scroll to the quote form and optionally pre-select a buyer type. */
export function goToQuote(buyerType?: string) {
  if (typeof window === "undefined") return
  if (buyerType) {
    window.dispatchEvent(new CustomEvent("topcon:buyer", { detail: buyerType }))
  }
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" })
}
