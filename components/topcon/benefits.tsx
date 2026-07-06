"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Sun, Layers, ShieldCheck, Thermometer, CloudRain } from "lucide-react"
import { Reveal, fadeUp, staggerParent } from "@/components/topcon/reveal"

const BENEFITS = [
  {
    icon: Sun,
    title: "More power per sq. ft.",
    body: "Up to 24.5% efficiency means fewer panels, lower balance-of-system cost, and more output from the same roof or land.",
  },
  {
    icon: Layers,
    title: "Generates from both sides",
    body: "Bifacial glass-to-glass construction captures reflected light for up to 30% more energy over the system lifetime.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last 30 years",
    body: "Glass-to-glass build, a 30-year performance warranty and Zero LID keep degradation low decade after decade.",
  },
  {
    icon: Thermometer,
    title: "Performs in Indian heat",
    body: "A low −0.29%/°C temperature coefficient holds output steady on 45°C rooftops where lesser modules fade.",
  },
  {
    icon: CloudRain,
    title: "Low-light & monsoon capable",
    body: "Strong performance in cloudy, diffused and early-morning conditions for higher real-world yield.",
  },
]

export function Benefits() {
  return (
    <section id="why-topcon" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">The Technology</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-balance text-3xl font-bold text-forest md:text-5xl">
              Why N-Type TOPCon G2G wins
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-pretty text-muted-foreground">
              The specs matter because of what they do for your project economics. Here is what glass-to-glass TOPCon
              delivers in the field.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-4 md:grid-cols-6"
        >
          {/* Feature tile with image spanning wider */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-border bg-forest text-white md:col-span-3 md:row-span-2"
          >
            <Image
              src="/images/topcon/cell-macro.png"
              alt="Macro detail of a TOPCon solar cell surface"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-transparent" />
            <div className="relative flex h-full min-h-64 flex-col justify-end p-7">
              <Layers className="h-7 w-7 text-sage" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold">{BENEFITS[1].title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">{BENEFITS[1].body}</p>
            </div>
          </motion.div>

          {BENEFITS.filter((_, i) => i !== 1).map((b) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md md:col-span-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
                <b.icon className="h-6 w-6 text-olive" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-forest">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
