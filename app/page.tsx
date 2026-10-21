import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { TrustStrip } from "@/components/home/trust-strip"
import { AudienceSection } from "@/components/home/audience-section"
import { RangeSection } from "@/components/home/range-section"
import { FactorySection } from "@/components/home/factory-section"
import { ReasonsSection } from "@/components/home/reasons-section"
import { ClosingCta } from "@/components/home/closing-cta"
import { VideoSection } from "@/components/home/video-section"
import { StorySection } from "@/components/home/story-section"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <div className="home">
      <Hero />
      <TrustStrip />
      <AudienceSection />
      <RangeSection />
      <FactorySection />
      <VideoSection />
      <ReasonsSection />
      <StorySection />
      <ClosingCta />
    </div>
  )
}
