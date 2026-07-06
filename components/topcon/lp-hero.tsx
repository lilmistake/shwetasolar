"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Zap, ShieldCheck, Award } from "lucide-react"
import { QuoteButton, CallButton } from "@/components/topcon/cta-buttons"
import { CountUp } from "@/components/topcon/count-up"

const easing = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
}

const stats = [
  { value: 24.5, decimals: 1, suffix: "%", label: "Peak efficiency" },
  { value: 30, suffix: "yr", label: "Performance warranty" },
  { value: 600, suffix: "W", label: "Up to power output" },
]

export function LpHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-forest text-white">
      {/* blueprint grid + ambient glow */}
      <div className="absolute inset-0 bg-grid-forest mask-radial-fade" aria-hidden />
      <div
        className="animate-float-slow absolute -left-24 top-10 h-72 w-72 rounded-full bg-sage/20 blur-3xl"
        aria-hidden
      />
      <div
        className="animate-float-slow absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-olive/25 blur-3xl [animation-delay:2s]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-28 md:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-36">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-sage"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
            </span>
            N-Type TOPCon · Glass-to-Glass
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            More Power Per Panel.{" "}
            <span className="bg-gradient-to-r from-sage to-[#d3dcc0] bg-clip-text text-transparent">
              Built to Outlast.
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            Premium bifacial TOPCon modules from an Indian manufacturer — up to 24.5% efficiency and a 30-year
            performance warranty. Engineered for dealers, EPCs, and serious rooftop projects.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <QuoteButton size="lg" source="hero">
              Get My Best Price
            </QuoteButton>
            <CallButton source="hero" />
          </motion.div>

          {/* trust chips */}
          <motion.ul variants={item} className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Award className="h-4 w-4 text-sage" aria-hidden /> BIS &amp; IEC Certified
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-sage" aria-hidden /> 30-Year Warranty
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-sage" aria-hidden /> Made in India
            </li>
          </motion.ul>
        </motion.div>

        {/* Product visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: easing, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-sage/30 to-transparent blur-2xl" />
            <Image
              src="/images/topcon/hero-module.png"
              alt="Shweta Solar N-Type TOPCon glass-to-glass bifacial solar module"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="relative z-10 object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Stat strip */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative border-t border-white/10"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/10 px-4 md:px-6">
          {stats.map((s) => (
            <motion.div key={s.label} variants={item} className="px-2 py-6 text-center sm:py-8">
              <div className="font-display text-3xl font-bold text-sage sm:text-4xl lg:text-5xl">
                <CountUp to={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-white/60 sm:text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
