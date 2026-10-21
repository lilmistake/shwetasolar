"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Check } from "lucide-react"
import { Reveal } from "@/components/topcon/reveal"
import { cn } from "@/lib/utils"

const ease = [0.22, 1, 0.36, 1] as const

const AUDIENCES = [
  {
    eyebrow: "Businesses & factories",
    title: "Cut your power bill with panels made to last.",
    points: [
      "More power from limited roof space",
      "30-year performance warranty",
      "Approved for subsidy and net-metering projects",
    ],
    cta: { label: "See rooftop panels", href: "/products/commercial" },
    image: { src: "/images/stock/industrial-rooftop-aerial.png", alt: "Factory rooftop solar installation" },
  },
  {
    eyebrow: "EPCs & installers",
    title: "A supplier you can plan projects around.",
    points: [
      "1.2 GW a year for steady, on-time supply",
      "Every panel ships with its own test report",
      "Pricing, datasheets and dispatch from one team",
    ],
    cta: { label: "Partner with us", href: "/topcon" },
    image: { src: "/images/stock/epc-installers.png", alt: "Installers mounting a solar panel on a rooftop" },
  },
]

export function AudienceSection() {
  const [active, setActive] = useState(0)

  return (
    <section aria-labelledby="audience-heading" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground">Who we work with</p>
            <h2 id="audience-heading" className="text-balance text-4xl font-semibold text-foreground md:text-6xl">
              Built for the people who build solar.
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Whether you run the site or build the plant, we make the panel the easy part.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-4 md:h-[34rem] md:flex-row">
          {AUDIENCES.map((a, i) => {
            const isActive = active === i
            return (
              <Reveal
                key={a.eyebrow}
                delay={i * 0.1}
                className={cn(
                  "relative min-h-[30rem] overflow-hidden rounded-3xl transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:min-h-0",
                  isActive ? "md:flex-[1.7]" : "md:flex-1",
                )}
              >
                <article
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group absolute inset-0 flex flex-col justify-end text-primary-foreground"
                >
                  <Image
                    src={a.image.src}
                    alt={a.image.alt}
                    fill
                    sizes="(min-width: 768px) 800px, 100vw"
                    className={cn(
                      "object-cover transition-transform duration-[1200ms] ease-out",
                      isActive ? "scale-105" : "scale-100",
                    )}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-forest via-forest/50 to-forest/0"
                    aria-hidden="true"
                  />

                  <div className="relative flex flex-col gap-5 p-6 md:p-10">
                    <span className="w-fit rounded-full border border-primary-foreground/25 bg-forest/40 px-3 py-1 text-xs font-medium backdrop-blur">
                      {a.eyebrow}
                    </span>
                    <h3 className="max-w-md text-balance text-2xl font-semibold md:text-4xl">{a.title}</h3>

                    <motion.ul
                      key={isActive ? "active" : "idle"}
                      className={cn("flex flex-col gap-2.5", !isActive && "md:hidden")}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease, delay: 0.15 }}
                    >
                      {a.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 text-sm leading-relaxed md:text-base">
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-sage">
                            <Check className="size-3 text-forest" aria-hidden="true" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </motion.ul>

                    <Link
                      href={a.cta.href}
                      className="group/link mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-forest transition-colors hover:bg-sage"
                    >
                      {a.cta.label}
                      <ArrowUpRight
                        className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
