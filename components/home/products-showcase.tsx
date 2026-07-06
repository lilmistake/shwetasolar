"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const products = [
  {
    name: "Mono PERC",
    description: "High-efficiency monocrystalline solar panels with PERC technology for maximum power output.",
    efficiency: "Up to 22.5%",
    warranty: "25 Years",
    image: "/images/mono-perc.jpg",
    href: "/products/mono-perc",
  },
  {
    name: "TopCon",
    description: "Next-generation tunnel oxide passivated contact technology for superior performance.",
    efficiency: "Up to 24.5%",
    warranty: "30 Years",
    image: "/images/topcon.jpg",
    href: "/products/topcon",
  },
]

export function ProductsShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Solar Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Advanced solar panel technology designed for India's energy future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={product.name}
              className={`overflow-hidden group hover:shadow-xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    minHeight: "256px", // Reserve space before image loads
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">{product.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4 text-pretty">{product.description}</p>
                <div className="flex justify-between mb-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Efficiency:</span>
                    <span className="font-semibold text-foreground ml-2">{product.efficiency}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Warranty:</span>
                    <span className="font-semibold text-foreground ml-2">{product.warranty}</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href={product.href}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-forest text-cream hover:bg-olive">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
