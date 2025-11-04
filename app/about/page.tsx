import { Building2, Target, Eye, Heart, Award, FileText, Users, Calculator } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { CompanyTimeline } from "@/components/company-timeline"
import { CTAWidget } from "@/components/cta-widget"
import { EnquirySection } from "@/components/enquiry-section"
import { Breadcrumb } from "@/components/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Company History, Mission & Leadership",
  description:
    "Learn about Shweta Solar's journey from 1979 to becoming a leading solar manufacturer. Meet our leadership team with 40+ years of business excellence and 25+ years in renewable energy.",
  openGraph: {
    title: "About Shweta Solar - Our Story, Mission & Leadership Team",
    description:
      "Discover how Shweta Solar combines decades of business expertise with cutting-edge solar technology. Learn about our 1.2GW manufacturing facility and commitment to sustainability.",
  },
}

const faqs = [
  {
    question: "When was Shweta Solar founded?",
    answer:
      "Shweta Solar was founded by Sanjay Garg and Vinod Sharma, building on over 40 years of business experience and 25 years of renewable energy expertise.",
  },
  {
    question: "What is Shweta Solar's manufacturing capacity?",
    answer:
      "We operate a state-of-the-art 1.2GW capacity manufacturing facility producing Mono PERC, TopCon, and HJT solar panels.",
  },
  {
    question: "Where is Shweta Solar located?",
    answer:
      "We are strategically located near Delhi, India's capital, providing excellent connectivity and access to major markets across India.",
  },
  {
    question: "What makes Shweta Solar different from competitors?",
    answer:
      "Our commitment to quality, advanced manufacturing technology with a 1.2GW TopCon fully automated line, and strategic location near Delhi set us apart in the solar industry.",
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
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <div className="pt-20">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumb items={[{ label: "About Us" }]} />
        </div>

        <main>
          {/* Hero Section */}
          <section aria-label="About Shweta Solar" className="py-20 bg-gradient-to-br from-forest to-olive text-white">
            <div className="container mx-auto px-4">
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-balance">About Shweta Solar</h1>
              <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-pretty">
                Powering India's renewable energy future with advanced solar technology and manufacturing excellence
              </p>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" aria-label="Company Overview" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-4xl font-bold text-forest mb-6">Our Story</h2>
                  <div className="space-y-4 text-olive leading-relaxed">
                    <p>
                      Shweta Solar represents the convergence of over 40 years of business excellence and 25 years of
                      renewable energy expertise. Founded by visionary leaders Sanjay Garg and Vinod Sharma, our company
                      embodies the values of integrity, innovation, and client-first philosophy.
                    </p>
                    <p>
                      From humble beginnings in FMCG retail in 1979, our founders have built a legacy of trust and
                      excellence. Today, Shweta Solar stands at the forefront of India's solar revolution, manufacturing
                      high-efficiency Mono PERC, TopCon, and HJT solar panels at our state-of-the-art 1.2GW capacity
                      facility.
                    </p>
                    <p>
                      Strategically located near Delhi, India's capital, we benefit from excellent connectivity and
                      access to major markets. Our upcoming 1.2GW TopCon fully automated production line represents our
                      commitment to technological leadership and manufacturing excellence in the renewable energy
                      sector.
                    </p>
                  </div>
                </div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/manufacturing.jpg"
                    alt="Shweta Solar Manufacturing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <CompanyTimeline />

          {/* Mission, Vision, Values */}
          <section id="mission" aria-label="Mission, Vision and Values" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Mission */}
                <Card className="p-8 hover:shadow-xl transition-shadow border-sage/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-forest" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-forest">Our Mission</h3>
                  </div>
                  <p className="text-olive leading-relaxed text-pretty">
                    At Shweta Solar, our mission is to deliver energy that people can depend on; energy that builds
                    trust, creates opportunity, and drives progress. We aim to make solar adaptation seamless by
                    removing barriers, proving performance, and showing that clean power is a sustainable and smart
                    business decision.
                  </p>
                </Card>

                {/* Vision */}
                <Card className="p-8 hover:shadow-xl transition-shadow border-sage/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center">
                      <Eye className="h-6 w-6 text-forest" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-forest">Our Vision</h3>
                  </div>
                  <p className="text-olive leading-relaxed text-pretty">
                    Our vision is to bring clean, reliable solar energy that helps communities thrive, empowers
                    businesses to move forward, and ensures a safer future for the next generations. We aim to become a
                    shining beacon of green energy, lighting the way for sustainable growth across India and beyond.
                  </p>
                </Card>
              </div>

              {/* Core Values */}
              <div>
                <h3 className="font-display text-3xl font-bold text-forest mb-8 text-center">Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {[
                    {
                      icon: Heart,
                      title: "Integrity Above All",
                      description: "Honesty, transparency, and accountability in every transaction",
                    },
                    {
                      icon: Building2,
                      title: "Innovation at Scale",
                      description: "Investing in R&D and advanced solar technologies",
                    },
                    {
                      icon: Users,
                      title: "Client-First Approach",
                      description: "Prioritizing partner success and long-term growth",
                    },
                    {
                      icon: FileText,
                      title: "Financial Discipline",
                      description: "Responsible execution with precision and structure",
                    },
                    { icon: Award, title: "Legacy of Trust", description: "Decades of experience in every commitment" },
                  ].map((value) => (
                    <Card
                      key={value.title}
                      className="p-6 text-center hover:shadow-xl transition-shadow border-sage/20"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest/10 mb-4">
                        <value.icon className="h-6 w-6 text-forest" />
                      </div>
                      <h4 className="font-display font-semibold text-forest mb-2">{value.title}</h4>
                      <p className="text-sm text-olive text-pretty">{value.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Strategic Goals */}
          <section aria-label="Strategic Goals" className="py-20 bg-cream">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-4xl font-bold text-forest mb-12 text-center">Strategic Goals</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Technology Leadership",
                    description: "To lead India's shift to glass-to-glass TopCon technology at 1.2GW capacity",
                  },
                  {
                    title: "Market Dominance",
                    description: "To build a dominant presence across India with trusted supply chains",
                  },
                  {
                    title: "Global Expansion",
                    description:
                      "To become the leading international solar energy solution, taking Indian solar expertise to the global stage",
                  },
                ].map((goal, index) => (
                  <Card key={goal.title} className="p-8 hover:shadow-xl transition-shadow border-sage/20">
                    <div className="text-5xl font-display font-bold text-sage/30 mb-4">0{index + 1}</div>
                    <h3 className="font-display text-xl font-bold text-forest mb-3">{goal.title}</h3>
                    <p className="text-olive text-pretty">{goal.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership Preview */}
          <section id="leadership" aria-label="Leadership Team" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-4xl font-bold text-forest mb-12 text-center">Our Leadership</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    name: "Sanjay Garg",
                    title: "Director",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-1-1gYHQjWigJL4rim77WbhiiQPXVMwO8.webp",
                    experience: "40+ years in FMCG, Real Estate, and Renewable Energy",
                  },
                  {
                    name: "Vinod Sharma",
                    title: "Managing Director",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/282A9269-3AJX28V3Pls1MRnmbgTL9DDwxuFCTT.webp",
                    experience: "25 years in Solar and Renewable Energy",
                  },
                ].map((leader) => (
                  <Card key={leader.name} className="overflow-hidden hover:shadow-xl transition-shadow border-sage/20">
                    <div className="relative aspect-square w-full">
                      <Image
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        fill
                        className="object-contain bg-gray-50"
                        priority
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-2xl font-bold text-forest mb-1">{leader.name}</h3>
                      <p className="text-forest font-semibold mb-2">{leader.title}</p>
                      <p className="text-olive text-sm">{leader.experience}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-olive">
                  Learn more about our directors on the{" "}
                  <a href="/investors/board" className="text-forest hover:underline font-semibold">
                    Board of Directors
                  </a>{" "}
                  page
                </p>
              </div>
            </div>
          </section>

          {/* Awards & Policies Placeholder */}
          <section aria-label="Awards and Policies" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-8 border-sage/20">
                  <Award className="h-12 w-12 text-forest mb-4" />
                  <h3 className="font-display text-2xl font-bold text-forest mb-4">Awards & Recognition</h3>
                  <p className="text-olive mb-4">
                    Multiple awards for contributions to the FMCG and renewable energy sectors, reflecting our
                    leadership and impact.
                  </p>
                  <p className="text-sm text-olive/70 italic">Detailed awards information coming soon</p>
                </Card>
                <Card className="p-8 border-sage/20">
                  <FileText className="h-12 w-12 text-forest mb-4" />
                  <h3 className="font-display text-2xl font-bold text-forest mb-4">Policies & Governance</h3>
                  <p className="text-olive mb-4">
                    Committed to transparent operations and ethical business practices with robust governance
                    frameworks.
                  </p>
                  <p className="text-sm text-olive/70 italic">Policy documents available in the Investors section</p>
                </Card>
              </div>
            </div>
          </section>

          {/* Solar Calculator CTA Widget */}
          <section aria-label="Solar Calculator" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <CTAWidget
                icon={<Calculator className="h-16 w-16" />}
                title="Need Help Sizing Your Solar System?"
                description="Use our advanced solar calculator to determine the perfect system size, estimated costs, and potential savings for your energy needs."
                buttonText="Try Solar Calculator"
                buttonHref="/resources/calculator"
                variant="gradient"
              />
            </div>
          </section>

          {/* Enquiry Section */}
          <EnquirySection />
        </main>
      </div>
    </>
  )
}
