"use client"

import { CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const reasons = [
  "State-of-the-art manufacturing facility",
  "Rigorous quality control and testing",
  "Pan-India distribution network",
  "Strategic location near Delhi, India's capital",
  "1.2GW TopCon fully automated production line",
  "Over 40 years of business excellence",
]

export function WhyChooseUs() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trusted by Businesses Across India
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              With over 40 years of combined experience in business and 25 years in renewable energy, Shweta Solar
              brings unmatched expertise and commitment to every project.
            </p>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className={`flex items-start gap-3 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl h-[500px] bg-cover bg-center"
              style={{ backgroundImage: "url(/images/manufacturing.jpg)" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
