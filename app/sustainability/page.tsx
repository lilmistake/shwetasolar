import { Leaf, Recycle, Sun, TreePine, Droplets, Factory, Award, TrendingUp, Calculator } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { CTAWidget } from "@/components/cta-widget"
import { EnquirySection } from "@/components/enquiry-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sustainability - Our Environmental Commitment & Green Initiatives",
  description:
    "Discover Shweta Solar's sustainability initiatives: 100% renewable energy manufacturing, 95% material recovery, zero waste goals, and carbon neutrality by 2027. Learn about our environmental impact.",
  openGraph: {
    title: "Shweta Solar Sustainability - Carbon Neutral Solar Manufacturing",
    description:
      "Leading the way in sustainable solar manufacturing with circular economy practices, water conservation, reforestation programs, and commitment to carbon neutrality.",
  },
}

export default function SustainabilityPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-forest via-olive to-sage">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-6 animate-fade-in-up">
              Sustainability at Shweta Solar
            </h1>
            <p className="text-xl md:text-2xl text-cream/90 leading-relaxed animate-fade-in">
              Powering a greener tomorrow through innovation, responsibility, and commitment to our planet
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-8 text-center">
              Our Environmental Commitment
            </h2>
            <p className="text-lg text-olive leading-relaxed mb-6">
              At Shweta Solar, sustainability is not just a buzzword—it's the foundation of everything we do. As a
              leading manufacturer of solar panels, we recognize our responsibility to minimize environmental impact
              while maximizing clean energy production. Our commitment extends beyond our products to encompass our
              entire manufacturing process, supply chain, and corporate culture.
            </p>
            <p className="text-lg text-olive leading-relaxed">
              We believe that the transition to renewable energy must be accompanied by sustainable manufacturing
              practices. That's why we've invested heavily in green technologies, circular economy principles, and
              carbon-neutral operations to ensure that every solar panel we produce contributes to a healthier planet.
            </p>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-16 text-center">
            Our Sustainability Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="p-8 hover:shadow-2xl transition-all border-sage/20">
              <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mb-6">
                <Sun className="h-8 w-8 text-forest" />
              </div>
              <h3 className="font-display text-2xl font-bold text-forest mb-4">100% Renewable Energy</h3>
              <p className="text-olive leading-relaxed">
                Our manufacturing facilities are powered entirely by renewable energy sources, including our own solar
                installations, reducing our carbon footprint to near zero.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all border-sage/20">
              <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mb-6">
                <Recycle className="h-8 w-8 text-forest" />
              </div>
              <h3 className="font-display text-2xl font-bold text-forest mb-4">Circular Economy</h3>
              <p className="text-olive leading-relaxed">
                We've implemented a comprehensive recycling program that recovers 95% of materials from manufacturing
                waste and end-of-life solar panels, keeping valuable resources in circulation.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all border-sage/20">
              <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mb-6">
                <Droplets className="h-8 w-8 text-forest" />
              </div>
              <h3 className="font-display text-2xl font-bold text-forest mb-4">Water Conservation</h3>
              <p className="text-olive leading-relaxed">
                Advanced water recycling systems in our facilities reduce water consumption by 80%, with closed-loop
                systems ensuring minimal waste and maximum efficiency.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all border-sage/20">
              <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mb-6">
                <Factory className="h-8 w-8 text-forest" />
              </div>
              <h3 className="font-display text-2xl font-bold text-forest mb-4">Zero Waste Manufacturing</h3>
              <p className="text-olive leading-relaxed">
                Our goal is zero waste to landfill by 2026. Currently, we've achieved 92% waste diversion through
                recycling, composting, and energy recovery programs.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all border-sage/20">
              <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mb-6">
                <TreePine className="h-8 w-8 text-forest" />
              </div>
              <h3 className="font-display text-2xl font-bold text-forest mb-4">Reforestation Program</h3>
              <p className="text-olive leading-relaxed">
                For every megawatt of solar capacity we produce, we plant 1,000 trees in partnership with local
                communities, offsetting emissions and restoring ecosystems.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all border-sage/20">
              <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-forest" />
              </div>
              <h3 className="font-display text-2xl font-bold text-forest mb-4">Sustainable Supply Chain</h3>
              <p className="text-olive leading-relaxed">
                We work exclusively with suppliers who meet our strict environmental standards, ensuring sustainability
                from raw material extraction to final product delivery.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-sage/20 to-olive/10">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-16 text-center">
            Our Environmental Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-forest mb-3">2.5M+</div>
              <div className="text-lg text-olive font-medium">Tons of CO₂ Offset Annually</div>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-forest mb-3">95%</div>
              <div className="text-lg text-olive font-medium">Material Recovery Rate</div>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-forest mb-3">500K+</div>
              <div className="text-lg text-olive font-medium">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-forest mb-3">80%</div>
              <div className="text-lg text-olive font-medium">Water Usage Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Neutrality */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-6">
                  Path to Carbon Neutrality
                </h2>
                <p className="text-lg text-olive leading-relaxed mb-6">
                  Shweta Solar is committed to achieving complete carbon neutrality across all operations by 2027. Our
                  comprehensive strategy includes:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-forest mt-2 flex-shrink-0" />
                    <span className="text-olive">
                      Transitioning to 100% renewable energy for all manufacturing and office facilities
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-forest mt-2 flex-shrink-0" />
                    <span className="text-olive">
                      Implementing electric vehicle fleets for logistics and employee transportation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-forest mt-2 flex-shrink-0" />
                    <span className="text-olive">
                      Investing in carbon offset projects including reforestation and renewable energy development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-forest mt-2 flex-shrink-0" />
                    <span className="text-olive">
                      Optimizing supply chain logistics to minimize transportation emissions
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/solar-panels-on-green-factory-roof-with-trees.jpg"
                  alt="Carbon Neutral Manufacturing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-16 text-center">
            Environmental Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-all border-sage/20">
              <Award className="h-16 w-16 text-forest mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-forest mb-2">ISO 14001</h3>
              <p className="text-olive">Environmental Management System Certification</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-all border-sage/20">
              <Award className="h-16 w-16 text-forest mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-forest mb-2">LEED Platinum</h3>
              <p className="text-olive">Green Building Certification for Manufacturing Facilities</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-all border-sage/20">
              <Award className="h-16 w-16 text-forest mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-forest mb-2">Carbon Trust Standard</h3>
              <p className="text-olive">Verified Carbon Reduction and Management</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-gradient-to-br from-forest to-olive text-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="h-16 w-16 mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Our 2030 Sustainability Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-display text-2xl font-bold mb-3">100% Circular Economy</h3>
                <p className="text-cream/90">
                  Achieve complete circularity in manufacturing with zero waste and 100% recyclable products
                </p>
              </div>
              <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-display text-2xl font-bold mb-3">Carbon Negative Operations</h3>
                <p className="text-cream/90">
                  Go beyond carbon neutral to remove more CO₂ from the atmosphere than we emit
                </p>
              </div>
              <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-display text-2xl font-bold mb-3">1 Million Trees</h3>
                <p className="text-cream/90">Plant one million trees across India through our reforestation program</p>
              </div>
              <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-display text-2xl font-bold mb-3">Zero Water Waste</h3>
                <p className="text-cream/90">
                  Implement closed-loop water systems achieving zero freshwater consumption
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Calculator CTA Widget */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <CTAWidget
            icon={<Calculator className="h-16 w-16" />}
            title="Calculate Your Environmental Impact"
            description="Discover how much CO₂ you can offset and money you can save by switching to solar energy with our interactive calculator."
            buttonText="Calculate Now"
            buttonHref="/resources/calculator"
            variant="outline"
          />
        </div>
      </section>

      {/* Enquiry Section */}
      <EnquirySection />
    </div>
  )
}
