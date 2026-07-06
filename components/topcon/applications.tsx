"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Sun, Building, Home, Grid3x3 } from "lucide-react"
import { Reveal, fadeUp, staggerParent } from "@/components/topcon/reveal"

const APPS = [
  { icon: Sun, label: "Utility-scale solar parks" },
  { icon: Building, label: "Commercial & industrial rooftops" },
  { icon: Home, label: "High-efficiency residential" },
  { icon: Grid3x3, label: "Bifacial ground-mount arrays" },
]

export function Applications() {
  return (
    <section id="applications" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-lg">
              <Image
                src="/images/topcon/commercial-install.png"
                alt="Rooftop installation of Shweta Solar TOPCon modules on a commercial building"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" aria-hidden />
            </div>
          </Reveal>

          {/* Copy + apps */}
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">Applications</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 text-balance text-3xl font-bold text-forest md:text-5xl">
                Where these modules perform
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md text-pretty text-muted-foreground">
                From gigawatt solar parks to a single rooftop — one high-yield module engineered for every segment.
              </p>
            </Reveal>

            <motion.ul
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {APPS.map((app) => (
                <motion.li
                  key={app.label}
                  variants={fadeUp}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest">
                    <app.icon className="h-5 w-5 text-cream" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-forest">{app.label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
