import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { RangeSection } from "@/components/home/range-section"
import { FactorySection } from "@/components/home/factory-section"
import { SpecsBand } from "@/components/home/specs-band"
import { ClosingCta } from "@/components/home/closing-cta"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <RangeSection />
      <FactorySection />
      <SpecsBand />
      <ClosingCta />
    </>
  )
}
