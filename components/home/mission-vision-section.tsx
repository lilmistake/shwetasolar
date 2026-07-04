"use client"

import { Target, Eye, Heart, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export function MissionVisionSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-olive text-sm tracking-widest uppercase font-sans mb-3">Our Foundation</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest max-w-2xl text-balance">
            Mission, Vision &amp; Values
          </h2>
        </motion.div>

        {/* Mission + Vision — two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-px">
          {[
            {
              icon: Target,
              label: "Mission",
              body: "To deliver energy that people can depend on — energy that builds trust, creates opportunity, and drives progress. We make solar adoption seamless by removing barriers, proving performance, and showing that clean power is a smart business decision.",
              delay: 0.1,
            },
            {
              icon: Eye,
              label: "Vision",
              body: "To bring clean, reliable solar energy that helps communities thrive, empowers businesses to move forward, and ensures a safer future for the next generations. We aim to become a leading force in green energy, lighting the way for sustainable growth across India and beyond.",
              delay: 0.2,
            },
          ].map(({ icon: Icon, label, body, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay }}
              className="bg-white p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-forest/8 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-forest" />
                </div>
                <h3 className="font-display text-2xl font-bold text-forest">Our {label}</h3>
              </div>
              <p className="text-olive leading-relaxed font-sans text-pretty">{body}</p>
            </motion.div>
          ))}
        </div>

        {/* Values + Goals — two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {[
            {
              icon: Heart,
              label: "Values",
              items: [
                { key: "Integrity", val: "Honesty and transparency in every transaction" },
                { key: "Innovation", val: "Continuous investment in R&D and advanced technologies" },
                { key: "Excellence", val: "Uncompromising quality in manufacturing and service" },
                { key: "Sustainability", val: "Environmental responsibility in all operations" },
                { key: "Client Success", val: "Prioritising partner growth and satisfaction" },
              ],
              delay: 0.3,
            },
            {
              icon: Lightbulb,
              label: "Goals",
              items: [
                { key: "Technology Leadership", val: "Lead India's shift to TopCon technology at 1.2 GW capacity" },
                { key: "Market Expansion", val: "Build dominant presence across India with trusted supply chains" },
                { key: "Manufacturing Excellence", val: "Operate fully automated production with highest quality standards" },
                { key: "Global Reach", val: "Expand internationally as a leading solar energy solution provider" },
                { key: "Sustainable Impact", val: "Contribute significantly to India's renewable energy targets" },
              ],
              delay: 0.4,
            },
          ].map(({ icon: Icon, label, items, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay }}
              className="bg-[#f5f5f0] p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-forest/8 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-forest" />
                </div>
                <h3 className="font-display text-2xl font-bold text-forest">Our {label}</h3>
              </div>
              <ul className="space-y-3">
                {items.map(({ key, val }) => (
                  <li key={key} className="flex items-start gap-3 text-sm font-sans">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                    <span className="text-olive">
                      <strong className="text-forest font-semibold">{key}:</strong> {val}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
