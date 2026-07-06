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
    description: "25+ year performance warranty backed by rigorous quality testing.",
  },
  {
    icon: Leaf,
    title: "Sustainable Manufacturing",
    description: "Eco-friendly production processes minimizing environmental impact.",
  },
  {
    icon: TrendingUp,
    title: "Future-Ready",
    description: "Cutting-edge technology preparing India for tomorrow's energy needs.",
  },
]

export function FeaturesSection() {
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
    <section ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Why Shweta Solar?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Advanced solar technology combined with decades of manufacturing excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
