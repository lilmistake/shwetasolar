"use client"

import { Target, Eye, Heart, Lightbulb } from "lucide-react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export function MissionVisionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-forest mb-6">Our Mission, Vision & Values</h2>
          <p className="text-xl text-olive max-w-3xl mx-auto">
            Guiding principles that drive our commitment to excellence in solar energy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-8 h-full hover:shadow-xl transition-shadow border-sage/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center">
                  <Target className="h-7 w-7 text-forest" />
                </div>
                <h3 className="font-display text-3xl font-bold text-forest">Our Mission</h3>
              </div>
              <p className="text-olive leading-relaxed text-lg text-pretty">
                To deliver energy that people can depend on; energy that builds trust, creates opportunity, and drives
                progress. We aim to make solar adaptation seamless by removing barriers, proving performance, and
                showing that clean power is a sustainable and smart business decision.
              </p>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 h-full hover:shadow-xl transition-shadow border-sage/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center">
                  <Eye className="h-7 w-7 text-forest" />
                </div>
                <h3 className="font-display text-3xl font-bold text-forest">Our Vision</h3>
              </div>
              <p className="text-olive leading-relaxed text-lg text-pretty">
                To bring clean, reliable solar energy that helps communities thrive, empowers businesses to move
                forward, and ensures a safer future for the next generations. We aim to become a leading force in green
                energy, lighting the way for sustainable growth across India and beyond.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Core Values & Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8 h-full border-sage/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-forest" />
                </div>
                <h3 className="font-display text-2xl font-bold text-forest">Our Values</h3>
              </div>
              <ul className="space-y-3 text-olive">
                <li className="flex items-start gap-2">
                  <span className="text-forest font-bold mt-1">•</span>
                  <span>
                    <strong>Integrity:</strong> Honesty and transparency in every transaction
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest font-bold mt-1">•</span>
                  <span>
                    <strong>Innovation:</strong> Continuous investment in R&D and advanced technologies
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest font-bold mt-1">•</span>
                  <span>
                    <strong>Excellence:</strong> Uncompromising quality in manufacturing and service
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest font-bold mt-1">•</span>
                  <span>
                    <strong>Sustainability:</strong> Environmental responsibility in all operations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest font-bold mt-1">•</span>
                  <span>
                    <strong>Client Success:</strong> Prioritizing partner growth and satisfaction
                  </span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-8 h-full border-sage/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-forest" />
                </div>
                <h3 className="font-display text-2xl font-bold text-forest">Our Goals</h3>
              </div>
              <ul className="space-y-3 text-olive">
                <li className="flex items-start gap-2">
                  <span className="text-forest font-bold mt-1">•</span>
                  <span>
                    <strong>Technology Leadership:</strong> Lead India's shift to TopCon technology at 1.2GW capacity
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest font-bold mt-1">•</span>
                  <span>
                    <strong>Market Expansion:</strong> Build dominant presence across India with trusted supply chains
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest font-bold mt-1">•</span>
                  <span>
                    <strong>Manufacturing Excellence:</strong> Operate fully automated production with highest quality
                    standards
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest font-bold mt-1">•</span>
                  <span>
                    <strong>Global Reach:</strong> Expand internationally as a leading solar energy solution provider
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest font-bold mt-1">•</span>
                  <span>
                    <strong>Sustainable Impact:</strong> Contribute significantly to India's renewable energy targets
                  </span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
