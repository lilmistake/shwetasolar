"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "1.2", suffix: "GW", label: "Manufacturing Capacity" },
  { value: "25", suffix: "+", label: "Years Warranty" },
  { value: "40", suffix: "+", label: "Years Combined Experience" },
  { value: "100", suffix: "%", label: "Quality Commitment" },
]

export function StatsSection() {
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
    <section ref={sectionRef} className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="font-display text-5xl md:text-6xl font-bold mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
