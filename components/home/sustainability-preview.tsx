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

export function SustainabilityPreview() {
  return (
    <section className="py-20 bg-forest relative overflow-hidden">
      {/* Dot-grid star texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top edge fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-px bg-sage/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sage/60 text-sm tracking-widest uppercase font-sans mb-3">Environment</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white max-w-xl text-balance">
              Committed to Sustainability
            </h2>
            <p className="text-white/60 max-w-sm font-sans text-pretty">
              Building a greener future through responsible manufacturing and environmental stewardship.
            </p>
          </div>
        </motion.div>

        {/* Initiative cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-sage/10 mb-12">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-forest p-8 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-lg border border-sage/30 flex items-center justify-center">
                <initiative.icon className="h-5 w-5 text-sage" />
              </div>
              <p className="text-white font-sans font-medium leading-snug">{initiative.label}</p>
              <span className="inline-block text-xs text-sage border border-sage/30 rounded-full px-3 py-0.5 font-sans w-fit">
                {initiative.stat}
              </span>
            </motion.div>
          ))}
        </div>

        <div>
          <Button
            asChild
            size="lg"
            className="bg-sage text-forest hover:bg-sage/90 rounded-full font-sans"
          >
            <Link href="/sustainability">Learn More About Our Initiatives</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
