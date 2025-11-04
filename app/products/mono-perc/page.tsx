import type { Metadata } from "next"
import { ProductPageLayout } from "@/components/products/product-page-layout"
import { Breadcrumb } from "@/components/breadcrumb"

export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: "Mono PERC Solar Panels - High Efficiency Solar Modules",
  description:
    "Shweta Solar's Mono PERC solar panels deliver up to 22.5% efficiency with proven reliability. Perfect for residential, commercial, and industrial installations.",
  keywords: ["Mono PERC", "solar panels", "monocrystalline", "PERC technology", "high efficiency solar"],
  openGraph: {
    title: "Mono PERC Solar Panels - Shweta Solar",
    description: "High-efficiency Mono PERC solar panels with up to 22.5% efficiency and 25-year warranty",
    images: ["/images/mono-perc.jpg"],
  },
}

const monoPercSpecs = [
  { label: "Cell Type", value: "Monocrystalline PERC" },
  { label: "Power Output", value: "400W - 550W" },
  { label: "Efficiency", value: "Up to 22.5%" },
  { label: "Dimensions", value: "2278 x 1134 x 35mm" },
  { label: "Weight", value: "28.5 kg" },
  { label: "Operating Temperature", value: "-40°C to +85°C" },
  { label: "Maximum System Voltage", value: "1500V DC" },
  { label: "Temperature Coefficient", value: "-0.34%/°C" },
  { label: "Product Warranty", value: "12 Years" },
  { label: "Performance Warranty", value: "25 Years" },
]

const monoPercFeatures = [
  "High-efficiency monocrystalline cells with PERC technology",
  "Superior low-light performance",
  "Reduced temperature coefficient for better performance in hot climates",
  "Anti-reflective coating for maximum light absorption",
  "Robust aluminum frame for easy installation",
  "IP68-rated junction box for weather resistance",
  "PID-resistant for long-term reliability",
  "Certified to IEC 61215, IEC 61730, and ISO 9001",
]

const faqs = [
  {
    question: "What is PERC technology in solar panels?",
    answer:
      "PERC (Passivated Emitter and Rear Cell) technology adds a passivation layer on the rear of the solar cell, which reflects unabsorbed light back into the cell for a second chance at absorption. This increases efficiency by 1-2% compared to standard cells.",
  },
  {
    question: "How long do Mono PERC solar panels last?",
    answer:
      "Our Mono PERC panels come with a 25-year performance warranty and are designed to last 30+ years. They maintain at least 80% of their original efficiency after 25 years of operation.",
  },
  {
    question: "Are Mono PERC panels suitable for hot climates?",
    answer:
      "Yes, Mono PERC panels have a lower temperature coefficient (-0.34%/°C) compared to standard panels, meaning they perform better in hot climates and lose less efficiency as temperatures rise.",
  },
  {
    question: "What is the difference between Mono PERC and TopCon?",
    answer:
      "While both are monocrystalline technologies, TopCon (Tunnel Oxide Passivated Contact) offers even higher efficiency (up to 24.5%) through advanced passivation on both sides of the cell. Mono PERC is more cost-effective for standard applications.",
  },
]

export default function MonoPERCPage() {
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
            name: "Mono PERC Solar Panels",
            description:
              "High-efficiency Mono PERC solar panels with up to 22.5% efficiency and 25-year warranty. Perfect for residential, commercial, and industrial installations.",
            image: "https://shwetasolar.in/images/mono-perc.jpg",
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
              ratingValue: "4.8",
              reviewCount: "127",
            },
          }),
        }}
      />
      <div className="pt-20">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumb items={[{ label: "Products", href: "/#products" }, { label: "Mono PERC" }]} />
        </div>
        <ProductPageLayout
          productName="Mono PERC Solar Panels"
          tagline="Proven Performance, Reliable Power"
          description="Our Mono PERC (Passivated Emitter and Rear Cell) solar panels combine high efficiency with proven reliability. Featuring monocrystalline cells with advanced passivation technology, these panels deliver exceptional performance even in challenging conditions."
          image="/images/mono-perc.jpg"
          specs={monoPercSpecs}
          features={monoPercFeatures}
          efficiency="Up to 22.5%"
          warranty="25 Years"
          applications={[
            "Residential rooftop installations",
            "Commercial and industrial projects",
            "Ground-mounted solar farms",
            "Off-grid power systems",
          ]}
          faqs={faqs}
        />
      </div>
    </>
  )
}
