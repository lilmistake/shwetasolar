"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

// Deterministic star positions (avoids hydration mismatch)
const STARS = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  x: ((i * 137.508) % 100).toFixed(3),
  y: ((i * 97.3) % 100).toFixed(3),
  size: i % 3 === 0 ? 2 : i % 5 === 0 ? 1.5 : 1,
  opacity: 0.3 + ((i * 0.618) % 0.7),
  duration: 2 + ((i * 0.31) % 3),
  delay: (i * 0.17) % 4,
}))

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#001a12]">
      {/* Star field */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          {STARS.map((star) => (
            <circle
              key={star.id}
              cx={`${star.x}%`}
              cy={`${star.y}%`}
              r={star.size}
              fill="white"
              opacity={star.opacity}
              style={{
                animation: `starPulse ${star.duration}s ease-in-out ${star.delay}s infinite alternate`,
              }}
            />
          ))}
        </svg>

        {/* Atmospheric glow — sun rising from below */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[45%] rounded-[50%]"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, rgba(0,70,54,0.9) 0%, rgba(0,70,54,0.4) 40%, transparent 70%)",
          }}
        />
        {/* Solar corona ring */}
        <div
          className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[80vw] max-w-3xl aspect-square rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(169,180,137,0.15) 0%, rgba(94,113,83,0.08) 40%, transparent 70%)",
            border: "1px solid rgba(169,180,137,0.12)",
          }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(169,180,137,1) 1px, transparent 1px), linear-gradient(90deg, rgba(169,180,137,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-sage/30 bg-sage/10">
              <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
              <span className="text-sage text-sm font-sans tracking-widest uppercase">India&apos;s Solar Vanguard</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight text-balance">
              Powering Today,{" "}
              <span className="text-sage">Shaping Tomorrow</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed max-w-2xl text-pretty font-sans">
              Leading manufacturer of high-efficiency Mono PERC and TopCon solar panels. Driving India&apos;s renewable
              energy revolution from our 1.2 GW facility.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-forest text-white hover:bg-forest/80 text-base px-8 rounded-full border border-sage/30"
              >
                <Link href="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-white/30 text-white hover:bg-white/10 text-base px-8 rounded-full bg-transparent"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Telemetry strip */}
      <div
        className={`absolute bottom-12 left-0 right-0 z-10 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {[
              { label: "Capacity", value: "1.2 GW" },
              { label: "Warranty", value: "25+ Years" },
              { label: "Experience", value: "40+ Years" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-px h-6 bg-sage/40" />
                <div>
                  <span className="block text-white/40 text-xs tracking-widest uppercase font-sans">{item.label}</span>
                  <span className="block text-white font-display text-lg">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/40 rounded-full" />
        </div>
      </div>

      <style>{`
        @keyframes starPulse {
          from { opacity: var(--from-op, 0.2); }
          to { opacity: var(--to-op, 0.9); }
        }
      `}</style>
    </section>
  )
}
