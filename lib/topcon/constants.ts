// Shared contact + campaign constants for the TOPCon landing page.

export const PHONE_DISPLAY = "1800 120 477 120"
export const PHONE_HREF = "tel:1800120477120"

export const WHATSAPP_NUMBER = "919289969501"
export const WHATSAPP_TEXT = "Hi Shweta Solar, I'd like a quote for TOPCon G2G modules."
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`

export const SALES_EMAIL = "sales@shwetasolar.in"
export const LEAD_RECIPIENT_EMAIL = "rasinrohit@gmail.com"

export const LOGO_SRC = "/images/logo.webp"
export const HERO_IMAGE = "/images/factory/topcon-module-on-line.jpg"
export const SITE_URL = "https://shwetasolar.in"

export const SOCIALS = {
  facebook: "https://www.facebook.com/people/Shweta-Solar/61580012213135/",
  instagram: "https://www.instagram.com/shwetasolar/",
  linkedin: "https://www.linkedin.com/company/shweta-solar-system/",
  x: "https://x.com/shwetasolar",
}

export const BUYER_TYPES = [
  { value: "dealer", label: "Dealer / Distributor" },
  { value: "epc", label: "EPC / C&I" },
  { value: "residential", label: "Residential" },
  { value: "other", label: "Other" },
] as const

export type BuyerTypeValue = (typeof BUYER_TYPES)[number]["value"]

export const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const

export type AttributionKey = (typeof ATTRIBUTION_KEYS)[number]
export type Attribution = Partial<Record<AttributionKey, string>>

/**
 * Ad message-match headlines, selected with ?h=<key>. A whitelist (rather than raw
 * URL text) stops anyone from putting arbitrary copy on the brand's page.
 */
export const HEADLINES = {
  default: { lead: "More Power Per Panel.", accent: "Built to Outlast." },
  price: { lead: "Factory-Direct TOPCon Prices.", accent: "Quote in 24 Hours." },
  dealer: { lead: "Dealer Pricing on TOPCon G2G.", accent: "Direct From the Factory." },
  epc: { lead: "Bankable TOPCon for EPC & C&I.", accent: "Bulk Supply, On Schedule." },
  rooftop: { lead: "More Units From Your Roof.", accent: "30-Year Warranty." },
  efficiency: { lead: "24.39% Efficient TOPCon.", accent: "Built to Outlast." },
  almm: { lead: "ALMM List-I TOPCon Modules.", accent: "Made in India." },
} as const

export type HeadlineKey = keyof typeof HEADLINES

export function resolveHeadline(key: string | string[] | undefined) {
  const k = (Array.isArray(key) ? key[0] : key)?.toLowerCase()
  return k && k in HEADLINES ? HEADLINES[k as HeadlineKey] : HEADLINES.default
}

/*
 * PLACEHOLDER CONTENT — replace with real figures, logos and quotes before scaling ad spend.
 * Kept in one place so it is easy to find and update.
 */
export const MW_SUPPLIED = "500+ MW" // TODO: replace with the verified MW supplied figure
export const CLIENT_LOGOS = ["EPC Partner", "Distributor", "C&I Client", "EPC Partner", "Developer", "Dealer Network"]

export const TESTIMONIALS = [
  {
    quote:
      "Output on our 2 MW rooftop has tracked above the PVsyst estimate since commissioning. Dispatch landed on the committed date.",
    name: "Project Head",
    org: "EPC company, Rajasthan",
  },
  {
    quote:
      "Pricing was clear, stock was ready, and the 30-year warranty makes the conversation with my customers much easier.",
    name: "Owner",
    org: "Solar distributor, Uttar Pradesh",
  },
  {
    quote: "We fitted a 10 kW system on a small roof. The bifacial panels give us more units than our neighbours' PERC setup.",
    name: "Homeowner",
    org: "Gurugram, Haryana",
  },
]
