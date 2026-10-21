"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { CountUp } from "@/components/topcon/count-up"

const ease = [0.22, 1, 0.36, 1] as const
const HEADLINE = ["Solar", "modules", "built", "for", "India's", "industry."]

const STATS = [
  { value: 1.2, decimals: 1, suffix: " GW", label: "Production capacity every year" },
  { value: 725, decimals: 0, suffix: " W", label: "Power from a single panel" },
  { value: 30, decimals: 0, suffix: " years", label: "Performance warranty" },
]

export function Hero() {
  const frameRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 0.45], reduceMotion ? [1, 1] : [0.9, 1])
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-6%", "6%"])

  return (
    <section aria-labelledby="hero-heading" className="overflow-hidden bg-background pt-32 md:pt-40">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center md:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground md:text-sm"
        >
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Now supplying next-generation TOPCon panels
        </motion.p>

        <h1
          id="hero-heading"
          className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] text-foreground md:text-7xl"
        >
          {HEADLINE.map((word, i) => (
            <span key={word} className="inline-block overflow-hidden pb-2 align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.15 + i * 0.07 }}
              >
                {word}
                {i < HEADLINE.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.6 }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          We design and manufacture high-efficiency solar panels in Uttar Pradesh for factories, businesses and the
          EPC teams who build their plants.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.75 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Get a quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <Link
            href="/products"
            className="group inline-flex h-12 items-center gap-2 rounded-full border border-border px-7 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Explore panels
            <ArrowUpRight
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>

      <div ref={frameRef} className="mx-auto mt-16 max-w-7xl px-4 md:mt-20 md:px-6">
        <motion.div
          style={{ scale }}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted sm:aspect-[16/10] md:aspect-[16/8]"
        >
          <motion.div style={{ y: imageY }} className="absolute -inset-y-[8%] inset-x-0">
            <Image
              src="/images/stock/industrial-rooftop-aerial.png"
              alt="Aerial view of a factory rooftop covered in rows of solar panels"
              fill
              priority
              sizes="(min-width: 1280px) 1232px, 100vw"
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-x-3 bottom-3 md:inset-x-6 md:bottom-6">
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border/60 shadow-xl backdrop-blur sm:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1 bg-background/90 px-5 py-4 text-left md:px-6 md:py-5">
                  <dt className="order-2 text-xs text-muted-foreground md:text-sm">{stat.label}</dt>
                  <dd className="order-1 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    <CountUp to={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
