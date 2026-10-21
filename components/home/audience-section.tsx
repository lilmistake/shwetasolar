"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight, Check } from "lucide-react"
import { Reveal } from "@/components/topcon/reveal"
import { cn } from "@/lib/utils"

const AUDIENCES = [
  {
    eyebrow: "EPCs & developers",
    title: "Supply you can plan a project around.",
    points: [
      "1.2 GW a year, dispatched pan-India from the NCR",
      "Every panel ships with its own serialised test report",
      "395 W to 725 W, all under one BIS licence",
    ],
    cta: { label: "Partner with us", href: "/contact" },
    image: { src: "/images/stock/epc-installers.png", alt: "Installers mounting a solar panel on a rooftop" },
  },
  {
    eyebrow: "Businesses & factories",
    title: "Lower energy costs from the roof you already have.",
    points: [
      "540 W and 600 W panels sized for factory roofs",
      "30-year performance warranty, in writing",
      "ALMM-listed for net-metering and government projects",
    ],
    cta: { label: "See rooftop panels", href: "/products/commercial" },
    image: { src: "/images/stock/industrial-rooftop-aerial.png", alt: "Factory rooftop solar installation" },
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
              One factory, two ways to work with us.
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Whether you install solar for others or run your own site on it, we make the panel the easy part.
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
                  "relative overflow-hidden rounded-3xl md:transition-[flex-grow] md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isActive ? "md:flex-[1.6]" : "md:flex-1",
                )}
              >
                <article
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group relative flex min-h-[28rem] flex-col justify-end text-primary-foreground md:absolute md:inset-0 md:min-h-0"
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

                    <ul
                      className={cn(
                        "flex flex-col gap-2.5 md:transition-all md:duration-500",
                        isActive ? "md:translate-y-0 md:opacity-100" : "md:translate-y-3 md:opacity-0",
                      )}
                    >
                      {a.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 text-sm leading-relaxed md:text-base">
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-sage">
                            <Check className="size-3 text-forest" aria-hidden="true" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>

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
