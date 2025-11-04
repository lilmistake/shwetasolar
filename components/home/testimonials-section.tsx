"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Solar Installations Pvt Ltd",
    text: "Shweta Solar's panels have exceeded our expectations. The efficiency and build quality are outstanding, and our clients are extremely satisfied.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Green Energy Solutions",
    text: "Working with Shweta Solar has been a game-changer for our business. Their TopCon panels deliver exceptional performance even in challenging conditions.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Renewable Power Corp",
    text: "The technical support and product quality from Shweta Solar are unmatched. They truly understand the needs of the Indian solar market.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-sage/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-forest mb-6">Trusted by Industry Leaders</h2>
          <p className="text-xl text-olive max-w-3xl mx-auto">
            Hear what our partners and clients have to say about working with Shweta Solar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="p-8 h-full bg-white border-sage/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-forest text-forest" />
                  ))}
                </div>
                <p className="text-olive mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-sage/20 pt-4">
                  <p className="font-semibold text-forest">{testimonial.name}</p>
                  <p className="text-sm text-olive">{testimonial.company}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
