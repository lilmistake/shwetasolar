import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Zap, Award, TrendingUp } from "lucide-react"
import { EnquirySection } from "@/components/enquiry-section"

export default function ProductsPage() {
  const products = [
    {
      name: "Mono PERC",
      slug: "mono-perc",
      tagline: "Proven Performance",
      description:
        "Industry-standard monocrystalline PERC technology delivering reliable efficiency and exceptional value for residential and commercial installations.",
      efficiency: "Up to 21.5%",
      power: "540W - 550W",
      warranty: "25 Years",
      image: "/mono-perc-solar-panel.jpg",
      features: [
        "Cost-effective solution",
        "Proven reliability",
        "Wide temperature tolerance",
        "Excellent low-light performance",
      ],
    },
    {
      name: "TopCon",
      slug: "topcon",
      tagline: "Next-Generation Efficiency",
      description:
        "Advanced Tunnel Oxide Passivated Contact technology with superior efficiency and lower degradation rates. The future of solar energy.",
      efficiency: "Up to 23.5%",
      power: "580W - 600W",
      warranty: "30 Years",
      image: "/topcon-solar-panel-advanced.jpg",
      features: ["Higher efficiency", "Lower degradation", "Better temperature coefficient", "Enhanced durability"],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-forest to-olive text-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-balance">Our Solar Solutions</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-pretty">
              Choose from our range of high-efficiency solar panels designed for maximum performance and reliability
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <Card
                key={product.slug}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-3xl font-bold text-cream mb-1">{product.name}</h3>
                    <p className="text-cream/90 text-sm">{product.tagline}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-olive mb-6 leading-relaxed">{product.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Zap className="h-6 w-6 text-forest mx-auto mb-2" />
                      <p className="text-sm text-olive mb-1">Efficiency</p>
                      <p className="font-bold text-forest">{product.efficiency}</p>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-6 w-6 text-forest mx-auto mb-2" />
                      <p className="text-sm text-olive mb-1">Power</p>
                      <p className="font-bold text-forest">{product.power}</p>
                    </div>
                    <div className="text-center">
                      <Award className="h-6 w-6 text-forest mx-auto mb-2" />
                      <p className="text-sm text-olive mb-1">Warranty</p>
                      <p className="font-bold text-forest">{product.warranty}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-olive">
                        <ArrowRight className="h-4 w-4 text-forest mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full bg-forest text-cream hover:bg-olive">
                    <Link href={`/products/${product.slug}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest text-center mb-12">
            Technology Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto">
              <thead>
                <tr className="border-b-2 border-forest">
                  <th className="text-left py-4 px-4 font-display text-forest">Feature</th>
                  <th className="text-center py-4 px-4 font-display text-forest">Mono PERC</th>
                  <th className="text-center py-4 px-4 font-display text-forest">TopCon</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-sage/20">
                  <td className="py-4 px-4 text-olive font-medium">Efficiency Range</td>
                  <td className="py-4 px-4 text-center text-forest">20-21.5%</td>
                  <td className="py-4 px-4 text-center text-forest">22-23.5%</td>
                </tr>
                <tr className="border-b border-sage/20">
                  <td className="py-4 px-4 text-olive font-medium">Temperature Coefficient</td>
                  <td className="py-4 px-4 text-center text-forest">-0.35%/°C</td>
                  <td className="py-4 px-4 text-center text-forest">-0.30%/°C</td>
                </tr>
                <tr className="border-b border-sage/20">
                  <td className="py-4 px-4 text-olive font-medium">Degradation (Year 1)</td>
                  <td className="py-4 px-4 text-center text-forest">2%</td>
                  <td className="py-4 px-4 text-center text-forest">1%</td>
                </tr>
                <tr className="border-b border-sage/20">
                  <td className="py-4 px-4 text-olive font-medium">Bifacial Capability</td>
                  <td className="py-4 px-4 text-center text-forest">Optional</td>
                  <td className="py-4 px-4 text-center text-forest">Yes</td>
                </tr>
                <tr className="border-b border-sage/20">
                  <td className="py-4 px-4 text-olive font-medium">Best For</td>
                  <td className="py-4 px-4 text-center text-forest text-sm">Budget-conscious projects</td>
                  <td className="py-4 px-4 text-center text-forest text-sm">Commercial installations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sage/20 to-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-6">Not Sure Which to Choose?</h2>
          <p className="text-xl text-olive mb-8 max-w-2xl mx-auto">
            Our solar experts can help you select the perfect panel technology for your specific needs and budget
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-forest text-cream hover:bg-olive">
              <Link href="/contact">Get Expert Advice</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-forest text-forest hover:bg-sage/20 bg-transparent"
            >
              <Link href="/resources/calculator">Use Solar Calculator</Link>
            </Button>
          </div>
        </div>
      </section>

      <EnquirySection />
    </div>
  )
}
