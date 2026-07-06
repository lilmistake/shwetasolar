"use client"

import { motion } from "framer-motion"
import { BadgeIndianRupee, Truck, Headset, Factory } from "lucide-react"
import { Reveal, fadeUp, staggerParent } from "@/components/topcon/reveal"
import { CountUp } from "@/components/topcon/count-up"

const REASONS = [
  {
    icon: BadgeIndianRupee,
    title: "Direct-from-manufacturer pricing",
    body: "Buy from the factory floor, not a reseller — sharper pricing on every module and container.",
  },
  {
    icon: Truck,
    title: "Faster dispatch across North India",
    body: "Manufacturing near Delhi means shorter lead times and lower freight for northern projects.",
  },
  {
    icon: Headset,
    title: "Dedicated account manager",
    body: "A responsive point of contact and after-sales support — not a ticket queue.",
  },
  {
    icon: Factory,
    title: "1.2 GW manufacturing capacity",
    body: "Scale to supply utility, C&I and dealer volumes with reliable, repeatable output.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-forest text-white">
      <div className="absolute inset-0 bg-grid-forest opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">The Advantage</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">Why choose Shweta Solar</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-pretty text-white/70">
              A leaner, more responsive Indian manufacturer — built to move faster than the giants.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {REASONS.map((r) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage/15">
                <r.icon className="h-6 w-6 text-sage" aria-hidden />
              </div>
              <h3 className="mt-4 text-base font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{r.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Credential stat band */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-center sm:grid-cols-3"
        >
          <motion.div variants={fadeUp}>
            <div className="font-display text-3xl font-bold text-sage md:text-4xl">
              <CountUp to={1.2} decimals={1} suffix=" GW" />
            </div>
            <div className="mt-1 text-sm text-white/70">Annual manufacturing capacity</div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="font-display text-3xl font-bold text-sage md:text-4xl">
              <CountUp to={30} suffix=" Yr" />
            </div>
            <div className="mt-1 text-sm text-white/70">Performance warranty</div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="font-display text-3xl font-bold text-sage md:text-4xl">Pan-India</div>
            <div className="mt-1 text-sm text-white/70">Supply &amp; logistics reach</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
