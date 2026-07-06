"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { QuoteButton } from "@/components/topcon/cta-buttons"
import { Reveal, fadeUp, staggerParent } from "@/components/topcon/reveal"

const SPECS: { label: string; value: string }[] = [
  { label: "Cell Type", value: "N-Type TOPCon" },
  { label: "Power Output", value: "450 W – 600 W" },
  { label: "Module Efficiency", value: "Up to 24.5%" },
  { label: "Dimensions", value: "2278 × 1134 × 35 mm" },
  { label: "Weight", value: "29.5 kg" },
  { label: "Operating Temp.", value: "−40°C to +85°C" },
  { label: "Max System Voltage", value: "1500 V DC" },
  { label: "Temp. Coefficient", value: "−0.29%/°C" },
  { label: "Product Warranty", value: "15 years" },
  { label: "Performance Warranty", value: "30 years" },
  { label: "Construction", value: "Bifacial G2G" },
  { label: "Bifaciality", value: "Up to 80% ± 5%" },
]

export function Specs() {
  return (
    <section id="specs" className="relative overflow-hidden bg-forest text-white">
      <div className="absolute inset-0 bg-grid-forest opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          {/* Left: heading + CTA */}
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Datasheet</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">Engineering-grade specifications</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md text-pretty text-white/70">
                Full technical data for our 450–600W N-Type TOPCon glass-to-glass bifacial modules. Need the complete
                datasheet and test reports?
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap gap-3">
                <QuoteButton size="lg" source="specs">
                  <Download className="h-4 w-4" aria-hidden />
                  Request Datasheet
                </QuoteButton>
              </div>
            </Reveal>
          </div>

          {/* Right: spec grid */}
          <motion.dl
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3"
          >
            {SPECS.map((spec) => (
              <motion.div key={spec.label} variants={fadeUp} className="bg-forest p-5">
                <dt className="text-xs uppercase tracking-wide text-white/50">{spec.label}</dt>
                <dd className="mt-1.5 font-display text-lg font-semibold text-sage">{spec.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 border-t border-white/10 pt-8 text-center sm:flex-row">
            <p className="text-white/70">Ready to price your exact wattage and volume?</p>
            <QuoteButton source="specs-footer">
              Get Pricing <ArrowRight className="h-4 w-4" aria-hidden />
            </QuoteButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
