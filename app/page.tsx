import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { AudienceSection } from "@/components/home/audience-section"
import { ReasonsSection } from "@/components/home/reasons-section"
import { FactorySection } from "@/components/home/factory-section"
import { RangeSection } from "@/components/home/range-section"
import { ClosingCta } from "@/components/home/closing-cta"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudienceSection />
      <ReasonsSection />
      <FactorySection />
      <RangeSection />
      <ClosingCta />
    </>
  )
}
