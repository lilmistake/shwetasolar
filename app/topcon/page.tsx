import type { Metadata } from "next"
import { LpHeader } from "@/components/topcon/lp-header"
import { LpHero } from "@/components/topcon/lp-hero"
import { TrustBar } from "@/components/topcon/trust-bar"
import { Benefits } from "@/components/topcon/benefits"
import { Comparison } from "@/components/topcon/comparison"
import { BuyerSegments } from "@/components/topcon/buyer-segments"
import { Specs } from "@/components/topcon/specs"
import { Testimonials } from "@/components/topcon/testimonials"
import { QuoteForm } from "@/components/topcon/quote-form"
import { Faq, FAQS } from "@/components/topcon/faq"
import { FinalCta } from "@/components/topcon/final-cta"
import { LpFooter } from "@/components/topcon/lp-footer"
import { StickyCta } from "@/components/topcon/sticky-cta"
import { HERO_IMAGE, LOGO_SRC, PHONE_DISPLAY, SALES_EMAIL, SITE_URL, SOCIALS, resolveHeadline } from "@/lib/topcon/constants"

const TITLE = "TOPCon Glass-to-Glass Solar Modules (395–725 W, 24.39%) | Shweta Solar"
const DESCRIPTION =
  "N-Type TOPCon G2G bifacial modules — up to 24.39% efficiency, 30-year performance warranty, BIS + ALMM List-I. Factory-direct pricing in 24 hours."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/topcon" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/topcon`,
    images: [{ url: HERO_IMAGE, width: 1620, height: 1080, alt: "Shweta Solar TOPCon G2G module" }],
  },
}

function StructuredData() {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Shweta Solar System Pvt. Ltd.",
    url: SITE_URL,
    logo: `${SITE_URL}${LOGO_SRC}`,
    email: SALES_EMAIL,
    sameAs: Object.values(SOCIALS),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+91-${PHONE_DISPLAY.replace(/\s/g, "-")}`,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  }
  const product = {
    "@type": "Product",
    name: "Shweta Solar N-Type TOPCon Glass-to-Glass Bifacial Module",
    description: DESCRIPTION,
    image: `${SITE_URL}${HERO_IMAGE}`,
    brand: { "@type": "Brand", name: "Shweta Solar" },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Solar PV Module",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Power range", value: "395–725 W" },
      { "@type": "PropertyValue", name: "Module efficiency", value: "Up to 24.39%" },
      { "@type": "PropertyValue", name: "Performance warranty", value: "30 years" },
      { "@type": "PropertyValue", name: "Temperature coefficient", value: "−0.29%/°C" },
      { "@type": "PropertyValue", name: "Certifications", value: "BIS, ALMM List-I" },
    ],
  }
  const faq = {
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [organization, product, faq] }).replace(
          /</g,
          "\\u003c",
        ),
      }}
    />
  )
}

export default async function TopConLandingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { h } = await searchParams
  const headline = resolveHeadline(h)

  return (
    <>
      <StructuredData />
      <LpHeader />
      <main id="main-content">
        <LpHero headline={headline} />
        <TrustBar />
        <Benefits />
        <Comparison />
        <BuyerSegments />
        <Specs />
        <Testimonials />

        <section id="quote" className="scroll-mt-16 bg-forest text-cream">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun">Free quote · No obligation</p>
              <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-none md:text-6xl">
                Pricing within <span className="text-sun">24 hours.</span>
              </h2>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-cream/75">
                Three fields to start. Our sales team replies on WhatsApp or phone with a written quote and dispatch
                date.
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>

        <Faq />
        <FinalCta />
      </main>
      <LpFooter />
      <StickyCta />
      {/* Bottom spacer so the sticky mobile bar never covers footer content */}
      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
