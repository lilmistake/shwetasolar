"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Leaf, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

const technologies = [
  {
    icon: Zap,
    title: "Advanced Cell Technology",
    description:
      "Utilizing cutting-edge Mono PERC and TopCon technologies for maximum efficiency and performance.",
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
      "Eco-friendly production processes that minimize environmental impact while maximizing output quality.",
  },
  {
    icon: TrendingUp,
    title: "Performance Guarantee",
    description: "Industry-leading warranties and performance guarantees backed by rigorous quality testing.",
  },
]

export function TechnologySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-forest mb-6">Cutting-Edge Technology</h2>
          <p className="text-xl text-olive max-w-3xl mx-auto">
            Innovation at every layer, from cell to module, ensuring superior performance and longevity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all border-sage/20 bg-cream/50">
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mb-6">
                  <tech.icon className="h-8 w-8 text-forest" />
                </div>
                <h3 className="font-display text-xl font-bold text-forest mb-3">{tech.title}</h3>
                <p className="text-olive leading-relaxed">{tech.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
