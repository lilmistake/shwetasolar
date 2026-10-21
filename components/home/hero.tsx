"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { CountUp } from "@/components/topcon/count-up"

const ease = [0.22, 1, 0.36, 1] as const
const HEADLINE = ["Solar", "panels", "built", "for", "India's", "industry."]

const STATS = [
  { value: 1.2, decimals: 1, suffix: " GW", label: "Made every year" },
  { value: 725, decimals: 0, suffix: " W", label: "From a single panel" },
  { value: 30, decimals: 0, suffix: " years", label: "Performance warranty" },
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["0%", "18%"])
  const contentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["0%", "-12%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink text-primary-foreground"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 -z-20" aria-hidden="true">
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { scale: 1.25, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 2.4, ease }}
        >
          <Image
            src="/images/factory/cell-strings-layup.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/45 via-45% to-transparent to-80%"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-ink/80 to-transparent"
        aria-hidden="true"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-12 pt-32 md:px-6 md:pt-40"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-medium text-primary-foreground/90 backdrop-blur md:text-sm"
        >
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-sage opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-sage" />
          </span>
          Now supplying next-generation TOPCon panels
        </motion.p>

        <h1
          id="hero-heading"
          className="mt-8 max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
        >
          {HEADLINE.map((word, i) => (
            <span key={word} className="inline-block overflow-hidden pb-2 align-bottom">
              <motion.span
                className={i === HEADLINE.length - 1 ? "inline-block text-sage" : "inline-block"}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.45 + i * 0.07 }}
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
          transition={{ duration: 0.7, ease, delay: 0.95 }}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/75"
        >
          High-efficiency TOPCon modules from our fully automated plant in Hapur, supplied to EPCs, developers and
          businesses across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 1.1 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-sage px-7 text-sm font-semibold text-forest transition-colors hover:bg-primary-foreground"
          >
            Get a quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <Link
            href="/products"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 text-sm font-semibold transition-colors hover:bg-primary-foreground hover:text-forest"
          >
            Explore panels
            <ArrowUpRight
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 1.3 }}
        className="mx-auto w-full max-w-7xl px-4 pb-8 md:px-6 md:pb-10"
      >
        <div className="flex flex-col gap-6 border-t border-primary-foreground/15 pt-6 md:flex-row md:items-end md:justify-between">
          <dl className="grid grid-cols-3 gap-6 md:gap-14">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="order-2 text-xs text-primary-foreground/60 md:text-sm">{stat.label}</dt>
                <dd className="order-1 text-2xl font-semibold tracking-tight md:text-4xl">
                  <CountUp to={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  )
}
