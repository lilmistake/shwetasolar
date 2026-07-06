import type { Metadata } from "next"
import { LpHeader } from "@/components/topcon/lp-header"
import { LpHero } from "@/components/topcon/lp-hero"
import { TrustBar } from "@/components/topcon/trust-bar"
import { Benefits } from "@/components/topcon/benefits"
import { Specs } from "@/components/topcon/specs"
import { BuyerSegments } from "@/components/topcon/buyer-segments"
import { WhyUs } from "@/components/topcon/why-us"
import { Applications } from "@/components/topcon/applications"
import { QuoteForm } from "@/components/topcon/quote-form"
import { Faq } from "@/components/topcon/faq"
import { FinalCta } from "@/components/topcon/final-cta"
import { LpFooter } from "@/components/topcon/lp-footer"
import { StickyCta } from "@/components/topcon/sticky-cta"

export const metadata: Metadata = {
  title: "TOPCon Glass-to-Glass Solar Modules (450–600W, 24.5%) | Shweta Solar",
  description:
    "N-Type TOPCon G2G bifacial modules — up to 24.5% efficiency, 30-year warranty. Direct from an Indian manufacturer. Request a bulk or rooftop quote.",
  alternates: { canonical: "/topcon" },
  openGraph: {
    title: "TOPCon Glass-to-Glass Solar Modules (450–600W, 24.5%) | Shweta Solar",
    description:
      "N-Type TOPCon G2G bifacial modules — up to 24.5% efficiency, 30-year warranty. Direct from an Indian manufacturer. Request a bulk or rooftop quote.",
    url: "https://shwetasolar.in/topcon",
    images: [{ url: "/images/topcon.jpg", width: 1200, height: 630, alt: "Shweta Solar TOPCon G2G module" }],
  },
}

export default function TopConLandingPage() {
  return (
    <>
      <LpHeader />
      <main id="main-content">
        <LpHero />
        <TrustBar />
        <Benefits />
        <Specs />
        <BuyerSegments />
        <WhyUs />
        <Applications />

        {/* Quote form — conversion centerpiece */}
        <section id="quote" className="relative scroll-mt-16 overflow-hidden bg-forest">
          <div className="bg-grid-forest absolute inset-0 opacity-60 mask-radial-fade" aria-hidden="true" />
          <div
            className="animate-float-slow absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-sage/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-4 py-1.5 text-sm font-medium text-sage">
                Free quote · No obligation
              </span>
              <h2 className="mt-5 text-balance font-display text-4xl font-bold text-cream md:text-5xl">
                Request your quote
              </h2>
              <p className="mt-4 text-pretty text-lg text-cream/70">
                Tell us what you need and our team sends pricing within 24 hours.
              </p>
            </div>
            <div className="mt-10">
              <QuoteForm />
            </div>
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
