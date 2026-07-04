"use client"

import { CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const reasons = [
  "State-of-the-art manufacturing facility",
  "Rigorous quality control and testing",
  "Pan-India distribution network",
  "Strategic location near Delhi, India's capital",
  "1.2 GW TopCon fully automated production line",
  "Over 40 years of business excellence",
]

export function WhyChooseUs() {
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
    <section ref={sectionRef} className="py-20 bg-[#f5f5f0] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <p className="text-olive text-sm tracking-widest uppercase font-sans mb-3">Why Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-6 text-balance">
              Trusted by Businesses Across India
            </h2>
            <p className="text-olive mb-8 leading-relaxed text-pretty font-sans">
              With over 40 years of combined experience in business and 25 years in renewable energy, Shweta Solar
              brings unmatched expertise and commitment to every project.
            </p>
            <div className="space-y-3">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className={`flex items-center gap-3 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-forest flex-shrink-0" />
                  <span className="text-forest font-sans text-sm">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div
              className="rounded-2xl overflow-hidden h-[480px] bg-cover bg-center relative"
              style={{ backgroundImage: "url(/images/manufacturing.jpg)" }}
            >
              {/* Corner accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-sage" />
                  <span className="text-forest text-sm font-sans font-medium">1.2 GW Automated Line — Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
