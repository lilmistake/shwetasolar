import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { CompanySection } from "@/components/about/company-section"
import { ValuesSection } from "@/components/about/values-section"
import { TeamSection } from "@/components/about/team-section"
import { DirectorsSection } from "@/components/about/directors-section"
import { ClosingCta } from "@/components/home/closing-cta"

export const metadata: Metadata = {
  title: "About Us - Solar Module Manufacturer in Hapur, NCR",
  description:
    "Shweta Solar manufactures high-efficiency TOPCon solar modules at a fully automated 1.2 GW plant in Hapur, Uttar Pradesh, for EPCs, developers and solar brands across India.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Shweta Solar",
    description:
      "A modern, fully automated 1.2 GW solar module plant in NCR. Meet the team behind Shweta Solar.",
  },
}

const faqs = [
  {
    question: "Where is Shweta Solar located?",
    answer:
      "Our manufacturing plant is at Pilkhwa, Hapur, Uttar Pradesh, on the Hapur–Ghaziabad corridor in the National Capital Region.",
  },
  {
    question: "What is Shweta Solar's manufacturing capacity?",
    answer: "Our fully automated plant has an annual module manufacturing capacity of 1.2 GW.",
  },
  {
    question: "Does Shweta Solar offer OEM manufacturing?",
    answer:
      "Yes. We offer job-work and private-label manufacturing on client-supplied or Shweta-procured cells.",
  },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
      <main className="home">
        <AboutHero />
        <CompanySection />
        <ValuesSection />
        <TeamSection />
        <DirectorsSection />
        <ClosingCta />
      </main>
    </>
  )
}
