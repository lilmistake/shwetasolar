// Ad-conversion tracking hooks for the TOPCon landing page.
// Placeholder IDs are marked with TODO — replace with your real GA4 / Google Ads
// conversion labels. The Meta Pixel is already initialized globally in app/layout.tsx.

type TrackParams = Record<string, string | number | boolean | undefined>

// TODO: Replace with your real Google Ads conversion send_to value, e.g. "AW-XXXXXXXXX/AbC-dEfGh".
const GOOGLE_ADS_CONVERSION_SEND_TO = "" // e.g. "AW-XXXXXXXXX/XXXXXXXXXXXXXXX"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    dataLayer?: Record<string, unknown>[]
  }
}

/** Fire a lead/conversion event across GA4, Google Ads, Meta Pixel and dataLayer. */
export function trackLead(params: TrackParams = {}) {
  if (typeof window === "undefined") return

  // GA4 recommended event
  window.gtag?.("event", "generate_lead", { currency: "INR", ...params })

  // Google Ads conversion (only fires once a real send_to is configured)
  if (GOOGLE_ADS_CONVERSION_SEND_TO) {
    window.gtag?.("event", "conversion", { send_to: GOOGLE_ADS_CONVERSION_SEND_TO, ...params })
  }

  // Meta Pixel (already initialized in layout.tsx)
  window.fbq?.("track", "Lead", params)

  // GTM dataLayer
  window.dataLayer?.push({ event: "generate_lead", ...params })
}

/** Fire a click-to-call tracking event. */
export function trackCallClick(source: string) {
  if (typeof window === "undefined") return
  window.gtag?.("event", "call_click", { source })
  window.fbq?.("trackCustom", "CallClick", { source })
  window.dataLayer?.push({ event: "call_click", source })
}

/** Fire a WhatsApp click tracking event. */
export function trackWhatsAppClick(source: string) {
  if (typeof window === "undefined") return
  window.gtag?.("event", "whatsapp_click", { source })
  window.fbq?.("trackCustom", "WhatsAppClick", { source })
  window.dataLayer?.push({ event: "whatsapp_click", source })
}

/** Smooth-scroll to the quote form and optionally pre-select a buyer type. */
export function goToQuote(buyerType?: string) {
  if (typeof window === "undefined") return
  if (buyerType) {
    window.dispatchEvent(new CustomEvent("topcon:buyer", { detail: buyerType }))
  }
  const el = document.getElementById("quote")
  el?.scrollIntoView({ behavior: "smooth", block: "start" })
}
