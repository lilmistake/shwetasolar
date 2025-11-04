"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Zap, Shield, TrendingUp, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { EnquiryForm } from "./enquiry-form"
import { useState, useEffect, useRef } from "react"

interface ProductPageLayoutProps {
  productName: string
  tagline: string
  description: string
  image: string
  specs: { label: string; value: string }[]
  features: string[]
  efficiency: string
  warranty: string
  applications: string[]
  faqs?: { question: string; answer: string }[]
}

export function ProductPageLayout({
  productName,
  tagline,
  description,
  image,
  specs,
  features,
  efficiency,
  warranty,
  applications,
  faqs,
}: ProductPageLayoutProps) {
  const [showEnquiry, setShowEnquiry] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        const heroHeight = heroRef.current.offsetHeight
        const progress = Math.min(scrolled / heroHeight, 1)
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-cream">
      <main>
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              transform: `translateY(${scrollProgress * 50}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={productName}
              fill
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/85 to-forest/70" />
          </div>

          <div className="container mx-auto px-4 z-10 relative">
            <div className="max-w-4xl">
              <div
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
              >
                <h1 className="font-display text-6xl md:text-8xl font-bold text-cream mb-6 leading-tight">
                  {productName}
                </h1>
              </div>
              <div
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
              >
                <p className="text-3xl md:text-4xl text-sage mb-8 font-light">{tagline}</p>
              </div>
              <div
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
              >
                <p className="text-xl text-cream/90 mb-12 leading-relaxed max-w-2xl">{description}</p>
              </div>
              <div
                className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
              >
                <Button
                  size="lg"
                  className="bg-sage text-forest hover:bg-sage/90 text-lg px-8 py-6 h-auto group"
                  onClick={() => setShowEnquiry(true)}
                >
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cream text-cream hover:bg-cream hover:text-forest bg-transparent text-lg px-8 py-6 h-auto"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Datasheet
                </Button> */}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <div className="w-6 h-10 border-2 border-cream rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-cream rounded-full" />
            </div>
          </div>
        </section>

        <section aria-label="Key Performance Metrics" className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-sage/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-forest/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-12 w-12 text-forest" />
                </div>
                <div className="font-display text-5xl font-bold text-forest mb-3">{efficiency}</div>
                <div className="text-olive text-lg font-medium">Peak Efficiency</div>
                <p className="text-olive/70 mt-2">Industry-leading conversion rates</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-forest/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-12 w-12 text-forest" />
                </div>
                <div className="font-display text-5xl font-bold text-forest mb-3">{warranty}</div>
                <div className="text-olive text-lg font-medium">Performance Warranty</div>
                <p className="text-olive/70 mt-2">Guaranteed power output</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-forest/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-12 w-12 text-forest" />
                </div>
                <div className="font-display text-5xl font-bold text-forest mb-3">Premium</div>
                <div className="text-olive text-lg font-medium">Quality Grade</div>
                <p className="text-olive/70 mt-2">Tier 1 certified manufacturer</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Technical Specifications" className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-forest mb-6 text-center">
              Technical Specifications
            </h2>
            <p className="text-center text-olive text-lg mb-16 max-w-2xl mx-auto">
              Engineered for maximum performance and reliability in all conditions
            </p>
            <Card className="max-w-5xl mx-auto overflow-hidden shadow-2xl border-sage/20">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {specs.map((spec, index) => (
                  <div
                    key={spec.label}
                    className={`p-8 ${index % 2 === 0 ? "bg-white" : "bg-sage/5"} ${
                      index < specs.length - 2 ? "border-b border-sage/20" : ""
                    } ${index % 2 === 0 ? "md:border-r border-sage/20" : ""} hover:bg-sage/10 transition-colors group`}
                  >
                    <div className="text-sm text-olive/70 mb-2 font-medium uppercase tracking-wide">{spec.label}</div>
                    <div className="font-display text-2xl font-bold text-forest group-hover:text-olive transition-colors">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section aria-label="Key Features" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-forest mb-6 text-center">Key Features</h2>
            <p className="text-center text-olive text-lg mb-16 max-w-2xl mx-auto">
              Advanced technology designed for superior performance and longevity
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-start gap-4 p-6 rounded-xl hover:bg-sage/5 transition-all group"
                  style={{
                    animation: "fadeInUp 0.6s ease-out forwards",
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  <CheckCircle className="h-7 w-7 text-forest flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-olive text-lg leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Ideal Applications" className="py-24 bg-gradient-to-br from-sage/10 to-olive/5">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-forest mb-6 text-center">
              Ideal Applications
            </h2>
            <p className="text-center text-olive text-lg mb-16 max-w-2xl mx-auto">
              Versatile solutions for diverse energy needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {applications.map((application, index) => (
                <Card
                  key={application}
                  className="p-8 text-center hover:shadow-2xl transition-all group cursor-pointer border-sage/20 bg-white"
                  style={{
                    animation: "fadeInUp 0.6s ease-out forwards",
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-forest/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-forest group-hover:scale-110 transition-all">
                    <div className="w-8 h-8 rounded-full bg-forest group-hover:bg-sage" />
                  </div>
                  <p className="text-forest font-semibold text-lg group-hover:text-olive transition-colors">
                    {application}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {faqs && faqs.length > 0 && (
          <section aria-label="Frequently Asked Questions" className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-5xl md:text-6xl font-bold text-forest mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-center text-olive text-lg mb-16 max-w-2xl mx-auto">
                Common questions about {productName}
              </p>
              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="overflow-hidden border-sage/20">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-sage/5 transition-colors"
                      aria-expanded={openFaqIndex === index}
                    >
                      <h3 className="font-display text-xl font-bold text-forest pr-8">{faq.question}</h3>
                      {openFaqIndex === index ? (
                        <ChevronUp className="h-6 w-6 text-forest flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-forest flex-shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-6">
                        <p className="text-olive leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* <section aria-label="Technical Resources" className="py-24 bg-cream">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-forest mb-6 text-center">
              Technical Resources
            </h2>
            <p className="text-center text-olive text-lg mb-16 max-w-2xl mx-auto">
              Download comprehensive documentation and specifications
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {["Product Datasheet", "Installation Manual", "Warranty Certificate"].map((doc, index) => (
                <Card
                  key={doc}
                  className="p-8 hover:shadow-2xl transition-all cursor-pointer group border-sage/20 bg-cream"
                  style={{
                    animation: "fadeInUp 0.6s ease-out forwards",
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-forest/10 mb-6 flex items-center justify-center group-hover:bg-forest transition-colors">
                    <Download className="h-8 w-8 text-forest group-hover:text-cream transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-forest mb-2 group-hover:text-olive transition-colors">
                    {doc}
                  </h3>
                  <p className="text-sm text-olive/70 mb-4">PDF Document</p>
                  <div className="flex items-center text-forest font-medium group-hover:text-olive transition-colors">
                    Download
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        <section aria-label="Call to Action" className="py-24 bg-gradient-to-br from-forest to-olive text-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">Ready to Go Solar?</h2>
              <p className="text-xl text-cream/90 mb-12 leading-relaxed">
                Get a customized quote for your project and discover how {productName} can power your future
              </p>
              <Button
                size="lg"
                className="bg-sage text-forest hover:bg-sage/90 text-lg px-12 py-6 h-auto group"
                onClick={() => setShowEnquiry(true)}
              >
                Request Your Quote Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Enquiry Form Modal */}
      {showEnquiry && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-title"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 id="enquiry-title" className="font-display text-3xl font-bold text-forest">
                  Request a Quote
                </h3>
                <button
                  onClick={() => setShowEnquiry(false)}
                  className="text-olive hover:text-forest text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-sage/10 transition-all"
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>
              <EnquiryForm productName={productName} onSuccess={() => setShowEnquiry(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
