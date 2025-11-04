import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Check, Zap, Award, TrendingUp, Sun, Shield } from "lucide-react"
import { EnquirySection } from "@/components/enquiry-section"

const productsData = {
  "mono-perc": {
    name: "Mono PERC",
    tagline: "Proven Performance",
    description:
      "Industry-standard monocrystalline PERC (Passivated Emitter and Rear Cell) technology delivering reliable efficiency and exceptional value for residential and commercial installations.",
    longDescription:
      "Mono PERC solar panels represent the most widely adopted solar technology in the market today. By adding a passivation layer on the rear of the cell, PERC technology reduces electron recombination and increases light absorption, resulting in higher efficiency compared to traditional monocrystalline panels. This proven technology offers an excellent balance of performance, reliability, and cost-effectiveness.",
    efficiency: "Up to 21.5%",
    power: "540W - 550W",
    warranty: "25 Years",
    image: "/mono-perc-solar-panel.jpg",
    features: [
      {
        title: "Cost-Effective Solution",
        description: "Best value for money with proven ROI for residential and commercial projects",
      },
      {
        title: "Proven Reliability",
        description: "Decades of field testing and millions of installations worldwide",
      },
      {
        title: "Wide Temperature Tolerance",
        description: "Performs consistently across various climate conditions",
      },
      {
        title: "Excellent Low-Light Performance",
        description: "Generates power even in cloudy or overcast conditions",
      },
    ],
    specifications: {
      "Cell Type": "Monocrystalline PERC",
      "Module Efficiency": "20.0% - 21.5%",
      "Power Output": "540W - 550W",
      "Voltage at Pmax": "41.2V - 41.8V",
      "Current at Pmax": "13.1A - 13.2A",
      "Open Circuit Voltage": "49.5V - 50.1V",
      "Short Circuit Current": "13.9A - 14.0A",
      "Temperature Coefficient (Pmax)": "-0.35%/°C",
      "Operating Temperature": "-40°C to +85°C",
      "Maximum System Voltage": "1500V DC",
      Dimensions: "2278mm × 1134mm × 35mm",
      Weight: "27.5kg",
      Frame: "Anodized Aluminum Alloy",
      Glass: "3.2mm Tempered Glass",
      "Junction Box": "IP68 Rated",
      Connectors: "MC4 Compatible",
    },
    applications: [
      "Residential rooftop installations",
      "Commercial and industrial projects",
      "Ground-mounted solar farms",
      "Off-grid and hybrid systems",
      "Agricultural solar applications",
    ],
    benefits: [
      "Lower initial investment compared to premium technologies",
      "Proven track record with extensive field data",
      "Wide availability and easy replacement",
      "Compatible with most inverters and mounting systems",
      "Excellent performance-to-cost ratio",
    ],
  },
  topcon: {
    name: "TopCon",
    tagline: "Next-Generation Efficiency",
    description:
      "Advanced Tunnel Oxide Passivated Contact technology with superior efficiency and lower degradation rates. The future of solar energy.",
    longDescription:
      "TopCon (Tunnel Oxide Passivated Contact) technology represents the next evolution in solar panel design. By using ultra-thin tunnel oxide layers and highly doped polysilicon, TopCon cells achieve superior passivation on both sides of the cell, resulting in higher efficiency and lower degradation rates. This technology is rapidly becoming the new industry standard for high-performance solar installations.",
    efficiency: "Up to 23.5%",
    power: "580W - 600W",
    warranty: "30 Years",
    image: "/topcon-solar-panel-advanced.jpg",
    features: [
      {
        title: "Higher Efficiency",
        description: "22-23.5% efficiency means more power from the same roof space",
      },
      {
        title: "Lower Degradation",
        description: "Only 1% first-year degradation, maintaining performance longer",
      },
      {
        title: "Better Temperature Coefficient",
        description: "Superior performance in hot climates with -0.30%/°C coefficient",
      },
      {
        title: "Enhanced Durability",
        description: "Advanced cell structure provides better resistance to environmental stress",
      },
    ],
    specifications: {
      "Cell Type": "N-Type TopCon",
      "Module Efficiency": "22.0% - 23.5%",
      "Power Output": "580W - 600W",
      "Voltage at Pmax": "42.5V - 43.2V",
      "Current at Pmax": "13.6A - 13.9A",
      "Open Circuit Voltage": "51.2V - 51.8V",
      "Short Circuit Current": "14.5A - 14.7A",
      "Temperature Coefficient (Pmax)": "-0.30%/°C",
      "Operating Temperature": "-40°C to +85°C",
      "Maximum System Voltage": "1500V DC",
      Dimensions: "2278mm × 1134mm × 35mm",
      Weight: "28.5kg",
      Frame: "Anodized Aluminum Alloy",
      Glass: "3.2mm Anti-Reflective Tempered Glass",
      "Junction Box": "IP68 Rated",
      Connectors: "MC4 Compatible",
      "Bifacial Factor": "70% - 75%",
    },
    applications: [
      "High-efficiency commercial installations",
      "Space-constrained residential projects",
      "Utility-scale solar farms",
      "Bifacial ground-mount systems",
      "Premium residential installations",
    ],
    benefits: [
      "Up to 10% more energy generation than PERC",
      "Better performance in high-temperature environments",
      "Lower levelized cost of energy (LCOE) over lifetime",
      "Bifacial capability for additional energy capture",
      "Future-proof technology with strong industry backing",
    ],
  },
  hjt: {
    name: "HJT",
    tagline: "Premium Performance",
    description:
      "Heterojunction Technology combining crystalline and amorphous silicon for maximum efficiency and minimal power loss in all conditions.",
    longDescription:
      "HJT (Heterojunction) technology represents the pinnacle of solar panel innovation. By combining crystalline silicon with ultra-thin amorphous silicon layers, HJT cells achieve exceptional passivation on both sides, resulting in the highest efficiency and lowest degradation rates available. This premium technology delivers maximum energy yield and long-term performance, making it ideal for applications where space is limited and performance is critical.",
    efficiency: "Up to 24.5%",
    power: "620W - 650W",
    warranty: "30 Years",
    image: "/hjt-heterojunction-solar-panel.jpg",
    features: [
      {
        title: "Highest Efficiency",
        description: "Industry-leading 23.5-24.5% efficiency for maximum power generation",
      },
      {
        title: "Bifacial Design",
        description: "Captures reflected light from both sides for up to 30% additional energy",
      },
      {
        title: "Superior Low-Light Performance",
        description: "Exceptional energy generation in dawn, dusk, and cloudy conditions",
      },
      {
        title: "Minimal Degradation",
        description: "Only 0.5% first-year degradation, maintaining 95% output after 25 years",
      },
    ],
    specifications: {
      "Cell Type": "N-Type HJT (Heterojunction)",
      "Module Efficiency": "23.5% - 24.5%",
      "Power Output": "620W - 650W",
      "Voltage at Pmax": "43.8V - 44.5V",
      "Current at Pmax": "14.1A - 14.6A",
      "Open Circuit Voltage": "52.5V - 53.2V",
      "Short Circuit Current": "15.0A - 15.3A",
      "Temperature Coefficient (Pmax)": "-0.24%/°C",
      "Operating Temperature": "-40°C to +85°C",
      "Maximum System Voltage": "1500V DC",
      Dimensions: "2278mm × 1134mm × 35mm",
      Weight: "29.0kg",
      Frame: "Anodized Aluminum Alloy",
      Glass: "2.0mm + 2.0mm Double Glass (Bifacial)",
      "Junction Box": "IP68 Rated",
      Connectors: "MC4 Compatible",
      "Bifacial Factor": "85% - 90%",
    },
    applications: [
      "Premium residential installations",
      "High-performance commercial projects",
      "Space-constrained urban installations",
      "Bifacial ground-mount and carport systems",
      "Applications requiring maximum energy density",
    ],
    benefits: [
      "Highest energy yield per square meter",
      "Best performance in hot climates",
      "Lowest degradation rate ensures long-term value",
      "Superior bifacial performance for additional energy",
      "Excellent low-light and diffuse light performance",
      "Reduced balance of system costs due to higher power output",
    ],
  },
}

export function generateStaticParams() {
  return [{ slug: "mono-perc" }, { slug: "topcon" }, { slug: "hjt" }]
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = productsData[params.slug as keyof typeof productsData]

  if (!product) {
    notFound()
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-forest to-olive text-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Button asChild variant="ghost" className="mb-8 text-cream hover:text-cream hover:bg-white/10">
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 text-balance">{product.name}</h1>
                <p className="text-2xl mb-6 text-cream/90">{product.tagline}</p>
                <p className="text-lg leading-relaxed mb-8">{product.description}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <Zap className="h-6 w-6 mb-2" />
                    <p className="text-sm text-cream/80">Efficiency</p>
                    <p className="text-xl font-bold">{product.efficiency}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <TrendingUp className="h-6 w-6 mb-2" />
                    <p className="text-sm text-cream/80">Power Output</p>
                    <p className="text-xl font-bold">{product.power}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <Award className="h-6 w-6 mb-2" />
                    <p className="text-sm text-cream/80">Warranty</p>
                    <p className="text-xl font-bold">{product.warranty}</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-8 text-center">
              Technology Overview
            </h2>
            <p className="text-lg text-olive leading-relaxed text-center">{product.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.features.map((feature, index) => (
                <Card key={index} className="p-6 bg-sage/10 border-sage/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-forest text-cream rounded-full p-3 flex-shrink-0">
                      <Check className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-forest mb-2">{feature.title}</h3>
                      <p className="text-olive leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-12 text-center">
              Technical Specifications
            </h2>
            <Card className="overflow-hidden bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div
                    key={key}
                    className={`p-4 ${index % 2 === 0 ? "bg-sage/5" : "bg-white"} ${
                      index < Object.entries(product.specifications).length - 2 ? "border-b border-sage/20" : ""
                    } ${index % 2 === 0 ? "md:border-r border-sage/20" : ""}`}
                  >
                    <p className="text-sm text-olive mb-1 font-medium">{key}</p>
                    <p className="text-forest font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-12 text-center">
              Ideal Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.applications.map((application, index) => (
                <Card key={index} className="p-6 text-center bg-gradient-to-br from-sage/10 to-cream border-sage/20">
                  <Sun className="h-12 w-12 text-forest mx-auto mb-4" />
                  <p className="text-olive font-medium">{application}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-sage/20 to-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-12 text-center">
              Why Choose {product.name}?
            </h2>
            <div className="space-y-4">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-forest text-cream rounded-full p-2 flex-shrink-0 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-olive leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-forest to-olive text-cream">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to Go Solar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Get a customized quote for {product.name} solar panels and start saving on your energy bills today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-cream text-forest hover:bg-white">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cream text-cream hover:bg-white/10 bg-transparent"
            >
              <Link href="/resources/calculator">Calculate Savings</Link>
            </Button>
          </div>
        </div>
      </section>

      <EnquirySection />
    </div>
  )
}
