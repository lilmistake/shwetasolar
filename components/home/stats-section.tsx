"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "1.2", suffix: " GW", label: "Manufacturing Capacity" },
  { value: "25", suffix: "+", label: "Years Performance Warranty" },
  { value: "40", suffix: "+", label: "Years Business Excellence" },
  { value: "100", suffix: "%", label: "Quality Commitment" },
]

export function StatsSection() {
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
    <section ref={sectionRef} className="py-16 bg-forest relative overflow-hidden">
      {/* Subtle star-dot texture */}
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section label */}
        <p className="text-sage/60 text-xs tracking-widest uppercase font-sans text-center mb-12">
          Performance at Scale
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-sage/20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center py-6 px-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-white mb-1">
                {stat.value}
                <span className="text-sage">{stat.suffix}</span>
              </div>
              <div className="text-white/50 text-xs md:text-sm font-sans tracking-wide text-center">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
