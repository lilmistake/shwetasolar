"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Leaf, TrendingUp } from "lucide-react"

const technologies = [
  {
    icon: Zap,
    title: "Advanced Cell Technology",
    description:
      "Utilising cutting-edge Mono PERC and TopCon technologies for maximum efficiency and performance in all conditions.",
  },
  {
    icon: Shield,
    title: "Glass-to-Glass Design",
    description: "Superior durability and weather resistance with our innovative glass-to-glass panel construction.",
  },
  {
    icon: Leaf,
    title: "Sustainable Manufacturing",
    description:
      "Eco-friendly production processes that minimise environmental impact while maximising output quality.",
  },
  {
    icon: TrendingUp,
    title: "Performance Guarantee",
    description: "Industry-leading warranties and performance guarantees backed by rigorous quality testing.",
  },
]

export function TechnologySection() {
  return (
    <section className="py-20 bg-[#f5f5f0]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-olive text-sm tracking-widest uppercase font-sans mb-3">Engineering</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest max-w-xl text-balance">
              Cutting-Edge Technology
            </h2>
            <p className="text-olive max-w-sm font-sans text-pretty">
              Innovation at every layer — from cell to module — ensuring superior performance and longevity.
            </p>
          </div>
        </motion.div>

        {/* Horizontal divider */}
        <div className="w-full h-px bg-forest/10 mb-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-y md:divide-y-0 divide-forest/10 border-b border-forest/10">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 flex flex-col gap-4 bg-[#f5f5f0] hover:bg-white transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg border border-forest/20 flex items-center justify-center">
                <tech.icon className="h-5 w-5 text-forest" />
              </div>
              <h3 className="font-display text-xl font-bold text-forest">{tech.title}</h3>
              <p className="text-olive text-sm leading-relaxed font-sans">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
