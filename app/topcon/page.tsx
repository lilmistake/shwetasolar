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
        <section id="quote" className="scroll-mt-16 bg-background">
          <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold text-forest md:text-4xl">Request your quote</h2>
              <p className="mt-3 text-pretty text-muted-foreground">
                Get pricing within 24 hours. No obligation.
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
