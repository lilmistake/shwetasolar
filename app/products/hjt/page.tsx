import type { Metadata } from "next"
import { ProductPageLayout } from "@/components/products/product-page-layout"
import { Breadcrumb } from "@/components/breadcrumb"

export const revalidate = 3600

export const metadata: Metadata = {
  title: "HJT Solar Panels - Ultimate Efficiency Heterojunction Technology",
  description:
    "Shweta Solar's HJT solar panels deliver up to 25.5% efficiency with heterojunction technology. Premium performance with lowest temperature coefficient and 30-year warranty.",
  keywords: ["HJT", "heterojunction", "high efficiency solar", "bifacial panels", "premium solar panels"],
  openGraph: {
    title: "HJT Solar Panels - Shweta Solar",
    description: "Ultimate efficiency HJT technology with up to 25.5% efficiency and 30-year warranty",
    images: ["/images/hjt.jpg"],
  },
}

const hjtSpecs = [
  { label: "Cell Type", value: "Heterojunction (HJT)" },
  { label: "Power Output", value: "500W - 650W" },
  { label: "Efficiency", value: "Up to 25.5%" },
  { label: "Dimensions", value: "2278 x 1134 x 35mm" },
  { label: "Weight", value: "30.5 kg" },
  { label: "Operating Temperature", value: "-40°C to +85°C" },
  { label: "Maximum System Voltage", value: "1500V DC" },
  { label: "Temperature Coefficient", value: "-0.24%/°C" },
  { label: "Product Warranty", value: "15 Years" },
  { label: "Performance Warranty", value: "30 Years" },
]

const hjtFeatures = [
  "Ultimate efficiency with heterojunction technology",
  "Lowest temperature coefficient in the industry",
  "Exceptional performance in high-temperature environments",
  "Bifacial design for maximum energy yield",
  "Ultra-low degradation rate",
  "Superior low-light performance",
  "Zero LID and zero PID",
  "Premium glass-to-glass construction",
]

const faqs = [
  {
    question: "What is HJT (Heterojunction) technology?",
    answer:
      "HJT technology combines crystalline silicon wafers with ultra-thin amorphous silicon layers, creating a heterojunction that achieves the highest efficiency (25.5%) while maintaining excellent performance across all temperatures and lighting conditions.",
  },
  {
    question: "Why is HJT more expensive than other solar panels?",
    answer:
      "HJT panels use advanced manufacturing processes and premium materials, resulting in higher production costs. However, they deliver superior efficiency, longer lifespan, and better performance, providing excellent long-term ROI despite higher initial investment.",
  },
  {
    question: "How does HJT perform in hot climates?",
    answer:
      "HJT panels excel in hot climates with the industry's lowest temperature coefficient (-0.24%/°C), meaning they lose less efficiency as temperatures rise. This makes them ideal for tropical and desert regions where temperatures regularly exceed 40°C.",
  },
  {
    question: "What is the expected energy yield from HJT panels?",
    answer:
      "HJT panels typically produce 10-15% more energy than standard panels over their lifetime due to higher efficiency, bifacial design, lower degradation, and superior performance in various conditions. This translates to faster payback and higher returns.",
  },
]

export default function HJTPage() {
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
            name: "HJT Solar Panels",
            description:
              "Premium HJT solar panels with up to 25.5% efficiency and 30-year warranty. Heterojunction technology with lowest temperature coefficient for maximum performance.",
            image: "https://shwetasolar.in/images/hjt.jpg",
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
              ratingValue: "5.0",
              reviewCount: "43",
            },
          }),
        }}
      />
      <div className="pt-20">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumb items={[{ label: "Products", href: "/#products" }, { label: "HJT" }]} />
        </div>
        <ProductPageLayout
          productName="HJT Solar Panels"
          tagline="Ultimate Efficiency, Maximum Performance"
          description="Our HJT (Heterojunction) solar panels represent the pinnacle of solar technology. Combining crystalline silicon with thin-film layers, these panels achieve the highest efficiency ratings available while delivering exceptional performance across all conditions."
          image="/images/hjt.jpg"
          specs={hjtSpecs}
          features={hjtFeatures}
          efficiency="Up to 25.5%"
          warranty="30 Years"
          applications={[
            "Premium residential installations",
            "High-performance commercial projects",
            "Space-constrained applications",
            "Maximum ROI solar investments",
          ]}
          faqs={faqs}
        />
      </div>
    </>
  )
}
