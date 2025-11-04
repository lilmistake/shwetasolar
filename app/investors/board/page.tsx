import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Mail } from "lucide-react"

export default function BoardOfDirectorsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">Board of Directors</h1>
          <p className="text-xl max-w-3xl">
            Meet the visionary leaders driving Shweta Solar's mission to power India's renewable energy future
          </p>
        </div>
      </section>

      {/* Sanjay Garg */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-1-1gYHQjWigJL4rim77WbhiiQPXVMwO8.webp"
                  alt="Sanjay Garg"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="lg:col-span-3 p-8">
                <h2 className="font-display text-4xl font-bold text-foreground mb-2">Sanjay Garg</h2>
                <p className="text-xl text-primary font-semibold mb-4">Director</p>
                <p className="text-muted-foreground mb-6">40+ years in FMCG, Real Estate, and Renewable Energy</p>

                <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                  <p>
                    Sanjay Garg is a visionary entrepreneur and dynamic business leader with over four decades of
                    experience driving transformative growth across Fast-Moving Consumer Goods (FMCG), real estate, and
                    renewable energy sectors.
                  </p>
                  <p>
                    Starting from a modest retail shop in 1979, Sanjay has scaled operations from humble beginnings to
                    national prominence, demonstrating strategic excellence and ethical leadership. His journey embodies
                    the transformation from a small FMCG retail outlet to a pan-India enterprise.
                  </p>
                  <p>
                    Renowned for his client-centric approach, particularly during the COVID-19 pandemic where he
                    prioritized employee welfare and client needs over short-term profits, Sanjay has built a legacy of
                    trust, integrity, and innovation.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">Core Competencies</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Entrepreneurial Leadership & Business Scaling</li>
                    <li>• Strategic Growth & Market Expansion</li>
                    <li>• Client-Centric Philosophy</li>
                    <li>• Ethical Decision-Making & Transparency</li>
                    <li>• Innovation & Adaptability</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">Career Highlights</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Co-led transformation of small retail shop (1979) into pan-India FMCG enterprise</li>
                    <li>• Drives innovation in solar energy manufacturing at B2B scale</li>
                    <li>• Successfully expanded into real estate (2011-2018)</li>
                    <li>• Upheld ethical practices during COVID-19, strengthening trust and fueling growth</li>
                    <li>• Multiple industry awards for FMCG sector contributions</li>
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">Philosophy</h3>
                  <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                    "The profit is yours and the loss is ours. Complete Profit of the Client."
                  </blockquote>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Vinod Sharma */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 relative aspect-square order-2 lg:order-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/282A9269-3AJX28V3Pls1MRnmbgTL9DDwxuFCTT.webp"
                  alt="Vinod Sharma"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="lg:col-span-3 p-8 order-1 lg:order-2">
                <h2 className="font-display text-4xl font-bold text-foreground mb-2">Vinod Sharma</h2>
                <p className="text-xl text-primary font-semibold mb-4">Managing Director</p>
                <p className="text-muted-foreground mb-6">
                  Engineer Graduate (Electronics) | 25 Years of Experience in Solar & Renewable Energy
                </p>

                <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                  <p>
                    A smart and forward-thinker, Vinod Kumar Sharma started Joint Solar 25 years ago and has been a
                    driving force of excellence since then. He is a distinguished expert in solar and renewable energy,
                    with a laser focus on innovation and quality.
                  </p>
                  <p>
                    His leadership has guided Joint Solar toward success, making it a leader in the solar industry. When
                    it comes to growth and innovation, it is his ideas and hard work that have helped establish a
                    trusted name in renewable energy.
                  </p>
                  <p>
                    With an engineering background in electronics, Vinod brings technical expertise and process
                    optimization to every aspect of solar panel manufacturing, ensuring Shweta Solar remains at the
                    forefront of technological advancement.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">Areas of Expertise</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Strategic Leadership & Innovation</li>
                    <li>• Technical Expertise in Solar Technology</li>
                    <li>• Process Optimization & Quality Control</li>
                    <li>• Renewable Energy Systems Design</li>
                    <li>• Manufacturing Excellence</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Vinod is passionate about democratizing energy through solar and storage solutions. By capturing
                    sunlight and storing it in batteries, he helps communities move away from central grids and control
                    their energy future. His vision is a step toward a greener planet and a fairer, more sustainable
                    world for everyone.
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">In His Words</h3>
                  <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                    "My passion for solar and storage comes from its power to democratize energy—making it accessible to
                    all. By capturing sunlight and storing it in batteries, we help communities move away from central
                    grids and control their energy future."
                  </blockquote>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Investor Relations</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            For investor inquiries, please contact our investor relations team
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:admin@shwetasolar.in"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Mail className="h-5 w-5" />
              admin@shwetasolar.in
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
