"use client"

import { Button } from "@/components/ui/button"
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
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-olive text-sm tracking-widest uppercase font-sans mb-3">Product Range</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest max-w-xl text-balance">
              Our Solar Solutions
            </h2>
            <p className="text-olive max-w-sm font-sans text-pretty">
              Advanced solar panel technology designed for India&apos;s energy future.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`group border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 bg-white ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-display text-2xl font-bold text-white">{product.name}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-olive text-sm font-sans leading-relaxed mb-5 text-pretty">{product.description}</p>

                <div className="flex items-center gap-6 mb-5 pb-5 border-b border-border">
                  <div>
                    <span className="block text-xs text-olive/70 uppercase tracking-wider font-sans">Efficiency</span>
                    <span className="block font-display text-lg text-forest font-semibold">{product.efficiency}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-olive/70 uppercase tracking-wider font-sans">Warranty</span>
                    <span className="block font-display text-lg text-forest font-semibold">{product.warranty}</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-forest text-white hover:bg-forest/80 rounded-full" size="sm">
                  <Link href={product.href}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button asChild size="lg" className="bg-forest text-white hover:bg-forest/80 rounded-full px-8">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
