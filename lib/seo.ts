import { SITE } from "@/lib/site"
import type { ModuleFamily, Segment } from "@/lib/products"

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE.url}${path}`)

export const ORG_ID = `${SITE.url}/#organization`

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation"],
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: abs("/icon-512.png"),
    image: abs("/images/factory/automated-factory-floor.jpg"),
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phoneE164,
    address: { "@type": "PostalAddress", addressRegion: SITE.region, addressCountry: "IN" },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phoneE164,
        email: SITE.email,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    sameAs: Object.values(SITE.social),
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  }
}

export function factorySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#factory`,
    name: `${SITE.name} manufacturing plant`,
    parentOrganization: { "@id": ORG_ID },
    url: SITE.url,
    telephone: SITE.phoneE164,
    image: abs("/images/factory/automated-factory-floor.jpg"),
    address: { "@type": "PostalAddress", addressRegion: SITE.region, addressCountry: "IN" },
    geo: { "@type": "GeoCoordinates", latitude: SITE.factoryGeo.lat, longitude: SITE.factoryGeo.lng },
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}

export function productSchema(family: ModuleFamily, segment: Segment) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${SITE.name} ${family.model} n-type TOPCon bifacial module`,
    sku: family.model,
    mpn: family.model,
    category: "Solar photovoltaic modules",
    brand: { "@type": "Brand", name: SITE.name },
    manufacturer: { "@id": ORG_ID },
    image: abs(segment.image.src),
    description: `${family.minW}–${family.maxW} W, ${family.cells}-cell n-type TOPCon bifacial glass–glass module, up to ${family.maxEfficiency}% efficiency. ${segment.description}`,
    url: abs(`/products/${segment.slug}#${family.model.toLowerCase()}`),
    countryOfOrigin: "IN",
    weight: { "@type": "QuantitativeValue", value: family.weightKg, unitCode: "KGM" },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Rated power", minValue: family.minW, maxValue: family.maxW, unitText: "W" },
      { "@type": "PropertyValue", name: "Maximum efficiency", value: family.maxEfficiency, unitText: "%" },
      { "@type": "PropertyValue", name: "Cells", value: family.cells },
      { "@type": "PropertyValue", name: "Cell size", value: family.cellSize },
      { "@type": "PropertyValue", name: "Busbars", value: family.busbars },
      { "@type": "PropertyValue", name: "Dimensions", value: `${family.lengthMm} × ${family.widthMm} × ${family.depthMm} mm` },
    ],
  }
}

/** Serialises schema safely for a <script type="application/ld+json"> tag. */
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") }
}
