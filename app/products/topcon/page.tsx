import type { Metadata } from "next"
import { ProductPageLayout } from "@/components/products/product-page-layout"
import { Breadcrumb } from "@/components/breadcrumb"

export const revalidate = 3600

export const metadata: Metadata = {
  title: "TopCon Solar Panels - Next-Generation N-Type Technology",
  description:
    "Shweta Solar's TopCon solar panels achieve up to 24.5% efficiency with N-type cells. Industry-leading performance with 30-year warranty for utility and commercial projects.",
  keywords: ["TopCon", "N-type solar panels", "tunnel oxide", "high efficiency", "bifacial solar panels"],
  openGraph: {
    title: "TopCon Solar Panels - Shweta Solar",
    description: "Next-generation TopCon technology with up to 24.5% efficiency and 30-year warranty",
    images: ["/images/topcon.jpg"],
  },
}

const topconSpecs = [
  { label: "Cell Type", value: "N-Type TopCon (Tunnel Oxide Passivated Contact)" },
  { label: "Power Output", value: "450W - 600W" },
  { label: "Efficiency", value: "Up to 24.5%" },
  { label: "Dimensions", value: "2278 x 1134 x 35mm" },
  { label: "Weight", value: "29.5 kg" },
  { label: "Operating Temperature", value: "-40°C to +85°C" },
  { label: "Maximum System Voltage", value: "1500V DC" },
  { label: "Temperature Coefficient", value: "-0.29%/°C" },
  { label: "Product Warranty", value: "15 Years" },
  { label: "Performance Warranty", value: "30 Years" },
]

const topconFeatures = [
  "Next-generation N-type TopCon technology",
  "Industry-leading efficiency up to 24.5%",
  "Lower temperature coefficient for superior hot-weather performance",
  "Bifacial design captures reflected light for up to 30% more energy",
  "Glass-to-glass construction for enhanced durability",
  "Excellent low-light and high-temperature performance",
  "Reduced degradation over lifetime",
  "Zero LID (Light Induced Degradation)",
]

const faqs = [
  {
    question: "What makes TopCon technology different from PERC?",
    answer:
      "TopCon uses N-type silicon with tunnel oxide passivation on both sides of the cell, achieving higher efficiency (24.5% vs 22.5%) and better performance in hot climates. It also has zero light-induced degradation and longer lifespan.",
  },
  {
    question: "Are TopCon panels bifacial?",
    answer:
      "Yes, our TopCon panels feature bifacial design that can capture reflected light from the ground or surrounding surfaces, generating up to 30% more energy compared to monofacial panels in optimal conditions.",
  },
  {
    question: "What is the expected lifespan of TopCon panels?",
    answer:
      "TopCon panels are designed to last 35+ years with minimal degradation. They come with a 30-year performance warranty, maintaining at least 87% of original efficiency after 30 years.",
  },
  {
    question: "Are TopCon panels worth the investment?",
    answer:
      "Yes, TopCon panels offer superior long-term value through higher efficiency, better performance in real-world conditions, longer warranty, and reduced degradation. The higher upfront cost is offset by increased energy production over the system's lifetime.",
  },
]

export default function TopConPage() {
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
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "TopCon Solar Panels",
            description:
              "Next-generation TopCon solar panels with up to 24.5% efficiency and 30-year warranty. N-type technology with bifacial design for maximum energy production.",
            image: "https://shwetasolar.in/images/topcon.jpg",
            brand: {
              "@type": "Brand",
              name: "Shweta Solar",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "89",
            },
          }),
        }}
      />
      <div className="pt-20">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumb items={[{ label: "Products", href: "/#products" }, { label: "TopCon" }]} />
        </div>
        <ProductPageLayout
          productName="TopCon Solar Panels"
          tagline="Next-Generation Efficiency"
          description="Our TopCon (Tunnel Oxide Passivated Contact) solar panels represent the future of photovoltaic technology. With N-type cells and advanced passivation, these panels achieve industry-leading efficiency while maintaining exceptional reliability over their 30-year lifespan."
          image="/images/topcon.jpg"
          specs={topconSpecs}
          features={topconFeatures}
          efficiency="Up to 24.5%"
          warranty="30 Years"
          applications={[
            "Large-scale utility projects",
            "Commercial rooftop installations",
            "High-efficiency residential systems",
            "Bifacial ground-mounted arrays",
          ]}
          faqs={faqs}
        />
      </div>
    </>
  )
}
