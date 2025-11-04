"use client"

import { motion } from "framer-motion"

export function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-forest mb-6">
            Our Partners & Certifications
          </h2>
          <p className="text-xl text-olive max-w-3xl mx-auto">
            Certified by leading international bodies and trusted by major industry players
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: item * 0.05 }}
              className="aspect-video bg-sage/10 rounded-lg flex items-center justify-center hover:bg-sage/20 transition-colors"
            >
              <span className="text-olive font-medium">Partner {item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
