"use client"

import { Zap, Shield, Leaf, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Zap,
    title: "High Efficiency",
    description: "Industry-leading efficiency ratings with our advanced Mono PERC and TopCon technology.",
  },
  {
    icon: Shield,
    title: "Proven Reliability",
    description: "25+ year performance warranty backed by rigorous quality testing at every stage.",
  },
  {
    icon: Leaf,
    title: "Sustainable Manufacturing",
    description: "Eco-friendly production processes that minimise environmental impact throughout.",
  },
  {
    icon: TrendingUp,
    title: "Future-Ready",
    description: "Cutting-edge technology preparing India for tomorrow's energy demands today.",
  },
]

export function FeaturesSection() {
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
    <section ref={sectionRef} className="py-20 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-olive text-sm tracking-widest uppercase font-sans mb-3">Why Shweta Solar</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-4">
            Built for India&apos;s Energy Future
          </h2>
          <p className="text-lg text-olive max-w-2xl mx-auto text-pretty font-sans">
            Advanced solar technology combined with decades of manufacturing excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-white p-8 flex flex-col gap-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-forest/8 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-forest" />
              </div>
              <h3 className="font-display text-xl font-semibold text-forest">{feature.title}</h3>
              <p className="text-olive text-sm leading-relaxed font-sans">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
