import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { ProductsShowcase } from "@/components/home/products-showcase"
import { StatsSection } from "@/components/home/stats-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { CTASection } from "@/components/home/cta-section"
import { TechnologySection } from "@/components/home/technology-section"
// import { TestimonialsSection } from "@/components/home/testimonials-section"
// import { PartnersSection } from "@/components/home/partners-section"
import { SustainabilityPreview } from "@/components/home/sustainability-preview"
import { MissionVisionSection } from "@/components/home/mission-vision-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shweta Solar - Leading Solar Panel Manufacturer in India",
  description:
    "Shweta Solar manufactures high-efficiency Mono PERC, TopCon, and HJT solar panels. Powering India's renewable energy future with sustainable solar solutions.",
  openGraph: {
    title: "Shweta Solar - Leading Solar Panel Manufacturer in India",
    description: "High-efficiency solar panels for India's renewable energy future",
    images: ["/images/logo.webp"],
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsShowcase />
      <TechnologySection />
      <StatsSection />
      <MissionVisionSection />
      <WhyChooseUs />
      <SustainabilityPreview />
      {/* <TestimonialsSection /> */}
      {/* <PartnersSection /> */}
      <CTASection />
    </>
  )
}
