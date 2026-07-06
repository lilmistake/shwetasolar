// Shared contact + campaign constants for the TOPCon landing page.

export const PHONE_DISPLAY = "1800 120 477120"
export const PHONE_HREF = "tel:1800120477120"

export const WHATSAPP_NUMBER = "919289969501"
export const WHATSAPP_TEXT = "Hi Shweta Solar, I'd like a quote for TOPCon G2G modules."
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`

export const SALES_EMAIL = "sales@shwetasolar.in"

export const LOGO_SRC = "/images/logo.webp"
export const HERO_IMAGE = "/images/topcon.jpg"

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
