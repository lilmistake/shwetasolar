"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Factory,
  Zap,
  Store,
  TrendingUp,
  Home,
  Users,
  Lightbulb,
  Cpu,
  Award,
  Rocket,
  Globe,
} from "lucide-react"

const sanjayTimeline = [
  {
    year: "1979",
    title: "Foundation in FMCG",
    description:
      "Father established small FMCG retail shop. Sanjay began learning business fundamentals, balancing school and work from childhood.",
    icon: Store,
  },
  {
    year: "2000",
    title: "Taking the Helm",
    description:
      "Father retired, entrusting the business to Sanjay and his brother. Transformed retail outlet into B2B and B2C enterprise.",
    icon: Users,
  },
  {
    year: "2008",
    title: "Shweta Trading Company",
    description:
      "Evolved into full-fledged trading company, marking significant expansion and professional growth in FMCG sector.",
    icon: TrendingUp,
  },
  {
    year: "2011",
    title: "Real Estate Ventures",
    description:
      "Successfully diversified into real estate sector, achieving considerable success while maintaining FMCG operations.",
    icon: Home,
  },
  {
    year: "2018",
    title: "Shweta Wholesale Pvt Ltd",
    description:
      "Rebranded and restructured as Shweta Wholesale Private Limited, accelerating pan-India expansion across 20 states.",
    icon: Building2,
  },
  {
    year: "2022",
    title: "Pan-India Expansion",
    description:
      "Achieved nationwide presence across 40+ districts, establishing strong distribution network and market leadership in FMCG sector.",
    icon: Globe,
  },
  {
    year: "2024",
    title: "Renewable Energy Vision",
    description:
      "Entered renewable energy sector, bringing decades of business expertise to drive innovation in solar manufacturing.",
    icon: Zap,
  },
]

const vinodTimeline = [
  {
    year: "1996",
    title: "Electronics Engineering Career",
    description:
      "Began career as an Electronics Engineer, gaining valuable technical expertise that would shape his solar energy journey.",
    icon: Cpu,
  },
  {
    year: "2000",
    title: "Founded Easy Photovoltech",
    description:
      "Founded company with ₹35,000 investment in Shahibabad, launching journey in solar energy manufacturing and solutions.",
    icon: Lightbulb,
  },
  {
    year: "2009",
    title: "EPC Solar Projects",
    description:
      "Ventured into EPC (Engineering, Procurement, and Commissioning) solar projects, marking major expansion of service offerings.",
    icon: Zap,
  },
  {
    year: "2015",
    title: "Branded PV Modules Launch",
    description:
      "Successfully launched company's own branded line of PV modules, enhancing brand identity and market reach.",
    icon: Award,
  },
  {
    year: "2018",
    title: "50 MW Manufacturing Unit",
    description: "Commissioned 50 MW solar module manufacturing unit, significantly scaling production capabilities.",
    icon: Factory,
  },
  {
    year: "2020",
    title: "Major Installation Milestone",
    description:
      "Achieved 3,00,000+ solar street light installations, along with numerous solar power plants and rooftop projects.",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "300 MW Capacity Expansion",
    description:
      "Expanded production capacity to 300 MW, strengthening position in competitive solar manufacturing landscape.",
    icon: TrendingUp,
  },
]

export function CompanyTimeline() {
  return (
    <div className="py-20 bg-gradient-to-br from-forest to-olive text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Two visionary leaders, one shared mission to power India's renewable energy future
          </p>
        </motion.div>

        {/* Desktop: Bifurcated Timeline with Wide Spacing */}
        <div className="hidden lg:block relative max-w-7xl mx-auto">
          <div className="grid grid-cols-[1fr_200px_1fr] gap-0">
            {/* Left Branch - Sanjay Garg */}
            <div className="space-y-16 pr-8">
              <div className="text-center mb-12">
                <h3 className="font-display text-3xl font-bold mb-2">Sanjay Garg</h3>
                <p className="text-white/70 text-lg">40+ Years in Business Leadership</p>
              </div>
              {sanjayTimeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all border border-white/10 hover:border-sage/30">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-sage/20 rounded-xl flex items-center justify-center">
                        <event.icon className="h-7 w-7 text-sage" />
                      </div>
                      <div className="text-sage font-display text-3xl font-bold">{event.year}</div>
                    </div>
                    <h4 className="font-display text-2xl font-bold mb-3">{event.title}</h4>
                    <p className="text-white/80 leading-relaxed text-pretty text-lg">{event.description}</p>
                  </div>
                  <div className="absolute right-0 top-1/2 w-8 h-0.5 bg-sage/40 transform translate-x-full" />
                </motion.div>
              ))}
            </div>

            {/* Center Divider */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-y-0 left-1/2 w-1 bg-gradient-to-b from-sage/0 via-sage/50 to-sage/0 transform -translate-x-1/2" />
            </div>

            {/* Right Branch - Vinod Sharma */}
            <div className="space-y-16 pl-8">
              <div className="text-center mb-12">
                <h3 className="font-display text-3xl font-bold mb-2">Vinod Sharma</h3>
                <p className="text-white/70 text-lg">25+ Years in Solar Expertise</p>
              </div>
              {vinodTimeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all border border-white/10 hover:border-sage/30">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-sage font-display text-3xl font-bold">{event.year}</div>
                      <div className="w-14 h-14 bg-sage/20 rounded-xl flex items-center justify-center">
                        <event.icon className="h-7 w-7 text-sage" />
                      </div>
                    </div>
                    <h4 className="font-display text-2xl font-bold mb-3">{event.title}</h4>
                    <p className="text-white/80 leading-relaxed text-pretty text-lg">{event.description}</p>
                  </div>
                  <div className="absolute left-0 top-1/2 w-8 h-0.5 bg-sage/40 transform -translate-x-full" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Convergence Point */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative mt-24"
          >
            {/* Converging lines from both sides */}
            <svg className="absolute top-0 left-0 w-full h-32" style={{ zIndex: 0 }}>
              <path
                d="M 25% 0 Q 50% 50, 50% 100"
                stroke="rgba(167, 199, 123, 0.5)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M 75% 0 Q 50% 50, 50% 100"
                stroke="rgba(167, 199, 123, 0.5)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
            </svg>

            <div className="flex flex-col items-center pt-28 relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-sage to-olive rounded-full flex items-center justify-center shadow-2xl mb-8 ring-4 ring-sage/30">
                <Factory className="h-12 w-12 text-forest" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 max-w-3xl text-center border border-sage/30 hover:bg-white/15 transition-all">
                <div className="text-sage font-display text-4xl font-bold mb-4">2025</div>
                <h4 className="font-display text-3xl font-bold mb-6">Shweta Solar Launch</h4>
                <p className="text-white/90 leading-relaxed text-pretty text-lg">
                  Two visionary leaders unite their expertise—40+ years of business excellence and 25+ years of solar
                  innovation—to establish a cutting-edge 1.2GW TopCon manufacturing facility near Delhi. Together, they
                  bring decades of combined experience to power India's renewable energy revolution.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile: Stacked Timeline */}
        <div className="lg:hidden space-y-8">
          {/* Sanjay Garg Section */}
          <div>
            <div className="text-center mb-6">
              <h3 className="font-display text-xl font-bold mb-1">Sanjay Garg</h3>
              <p className="text-white/70 text-sm">40+ Years in Business Leadership</p>
            </div>
            <div className="space-y-6">
              {sanjayTimeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-0 w-10 h-10 bg-sage rounded-full flex items-center justify-center">
                    <event.icon className="h-5 w-5 text-forest" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-sage font-display text-xl font-bold mb-1">{event.year}</div>
                    <h4 className="font-display text-lg font-bold mb-2">{event.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vinod Sharma Section */}
          <div className="pt-8 border-t border-white/20">
            <div className="text-center mb-6">
              <h3 className="font-display text-xl font-bold mb-1">Vinod Sharma</h3>
              <p className="text-white/70 text-sm">25+ Years in Solar Expertise</p>
            </div>
            <div className="space-y-6">
              {vinodTimeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-0 w-10 h-10 bg-sage rounded-full flex items-center justify-center">
                    <event.icon className="h-5 w-5 text-forest" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-sage font-display text-xl font-bold mb-1">{event.year}</div>
                    <h4 className="font-display text-lg font-bold mb-2">{event.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Convergence */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="pt-8 border-t-2 border-sage/50"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center shadow-xl mb-4">
                <Factory className="h-8 w-8 text-forest" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-sage/30">
                <div className="text-sage font-display text-2xl font-bold mb-2">2025</div>
                <h4 className="font-display text-xl font-bold mb-3">Shweta Solar Launch</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Two visionary leaders unite—40+ years of business excellence and 25+ years of solar innovation—to
                  establish a 1.2GW TopCon facility near Delhi, powering India's renewable energy revolution.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
