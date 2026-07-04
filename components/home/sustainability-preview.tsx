"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Leaf, Droplets, Recycle, Wind } from "lucide-react"
import Link from "next/link"

const initiatives = [
  { icon: Leaf, label: "Carbon Neutral by 2030", stat: "Goal" },
  { icon: Droplets, label: "Water Conservation", stat: "Active" },
  { icon: Recycle, label: "Zero Waste Manufacturing", stat: "In Progress" },
  { icon: Wind, label: "100% Renewable Energy", stat: "Committed" },
]

// Deterministic star positions — no hydration mismatch
const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  cx: ((i * 137.508 + 17) % 100).toFixed(3),
  cy: ((i * 63.27 + 9) % 100).toFixed(3),
  r: i % 6 === 0 ? 1.1 : i % 3 === 0 ? 0.7 : 0.4,
  opacity: (0.15 + ((i * 0.618) % 0.5)).toFixed(2),
}))

export function SustainabilityPreview() {
  return (
    <section className="relative overflow-hidden bg-[#020e06] pt-28 pb-24">
      {/* Fade in from the light section above — atmosphere entry */}
      <div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f5f5f0] to-transparent"
        aria-hidden="true"
      />

      {/* Star field */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none select-none"
        aria-hidden="true"
      >
        {STARS.map((s) => (
          <circle key={s.id} cx={`${s.cx}%`} cy={`${s.cy}%`} r={s.r} fill="white" opacity={s.opacity} />
        ))}
      </svg>

      {/* Faint orbital arc echoing the hero */}
      <div
        className="absolute -right-32 -top-24 h-[520px] w-[520px] pointer-events-none select-none"
        aria-hidden="true"
        style={{ animation: "sustain-orbit 60s linear infinite" }}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <ellipse
            cx="50" cy="50" rx="48" ry="15"
            fill="none" stroke="#A9B489" strokeWidth="0.25" opacity="0.25" strokeDasharray="2 8"
            transform="rotate(-28 50 50)"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 font-sans text-sm uppercase tracking-widest text-sage/70">Environment</p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl text-balance font-display text-4xl font-bold text-white md:text-5xl">
              Committed to Sustainability
            </h2>
            <p className="max-w-sm text-pretty font-sans text-white/60">
              Building a greener future through responsible manufacturing and environmental stewardship.
            </p>
          </div>
        </motion.div>

        {/* Initiative cards — glassy on deep space */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-4 rounded-xl border border-sage/15 bg-white/[0.03] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-sage/40 hover:bg-white/[0.06]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sage/30 bg-sage/10">
                <initiative.icon className="h-5 w-5 text-sage" />
              </div>
              <p className="font-sans font-medium leading-snug text-white">{initiative.label}</p>
              <span className="inline-block w-fit rounded-full border border-sage/30 px-3 py-0.5 font-sans text-xs text-sage">
                {initiative.stat}
              </span>
            </motion.div>
          ))}
        </div>

        <div>
          <Button asChild size="lg" className="rounded-full bg-sage font-sans text-forest hover:bg-sage/90">
            <Link href="/sustainability">Learn More About Our Initiatives</Link>
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes sustain-orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
