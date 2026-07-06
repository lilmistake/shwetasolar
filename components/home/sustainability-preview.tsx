"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Leaf, Droplets, Recycle, Wind, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const initiatives = [
  { icon: Leaf, label: "Carbon Neutral by 2030", description: "A clear roadmap to net-zero operations." },
  { icon: Droplets, label: "Water Conservation", description: "Closed-loop systems recycle 90% of water." },
  { icon: Recycle, label: "Zero Waste Manufacturing", description: "95% of waste diverted from landfill." },
  { icon: Wind, label: "100% Renewable Energy", description: "Our facility runs entirely on clean power." },
]

export function SustainabilityPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/solar-panels-on-green-factory-roof-with-trees.jpg"
              alt="Solar panels on a green factory roof surrounded by trees"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" aria-hidden="true" />
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-semibold tracking-wide uppercase text-olive mb-4">
                Good for business, better for earth
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-5 text-balance">
                Committed to Sustainability
              </h2>
              <p className="text-lg text-olive leading-relaxed mb-8 text-pretty">
                We build a greener future through responsible manufacturing and genuine environmental stewardship
                &mdash; from the energy that powers our facility to the water and materials we reclaim.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-4 rounded-xl bg-card border border-border p-4"
                >
                  <div className="w-11 h-11 shrink-0 rounded-full bg-sage/25 flex items-center justify-center">
                    <initiative.icon className="h-5 w-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest leading-tight">{initiative.label}</p>
                    <p className="text-sm text-olive mt-1 leading-snug">{initiative.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-forest text-cream hover:bg-olive">
              <Link href="/sustainability">
                Learn More About Our Initiatives <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
