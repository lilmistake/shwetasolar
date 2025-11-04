"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Leaf, Droplets, Recycle, Wind } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const initiatives = [
  { icon: Leaf, label: "Carbon Neutral by 2030" },
  { icon: Droplets, label: "Water Conservation" },
  { icon: Recycle, label: "Zero Waste Manufacturing" },
  { icon: Wind, label: "100% Renewable Energy" },
]

export function SustainabilityPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-forest to-olive text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/solar-panels-on-green-factory-roof-with-trees.jpg"
          alt="Sustainability"
          fill
          className="object-cover"
          priority={false}
          sizes="100vw"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Committed to Sustainability</h2>
          <p className="text-xl text-cream/90 max-w-3xl mx-auto">
            Building a greener future through responsible manufacturing and environmental stewardship
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
                <initiative.icon className="h-8 w-8 text-sage" />
              </div>
              <p className="font-medium">{initiative.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-sage text-forest hover:bg-sage/90">
            <Link href="/sustainability">Learn More About Our Initiatives</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
