"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FACTORY_PHOTOS } from "@/lib/site"
import { cn } from "@/lib/utils"

const ease = [0.22, 1, 0.36, 1] as const

const STEPS = [
  {
    title: "Built by robots",
    text: "Cells are cut, placed and soldered by automated machines, so every panel is built exactly the same way.",
    photo: FACTORY_PHOTOS.gripper,
  },
  {
    title: "Scanned for hidden cracks",
    text: "Every panel is imaged before and after sealing, so flaws you can't see never leave the plant.",
    photo: FACTORY_PHOTOS.stringerDark,
  },
  {
    title: "Tested one by one",
    text: "Each panel is power-tested and ships with its own report and serial number.",
    photo: FACTORY_PHOTOS.inspection,
  },
]

export function FactorySection() {
  const [active, setActive] = useState(0)

  return (
    <section aria-labelledby="factory-heading" className="relative bg-forest text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 pt-24 md:px-6 md:pt-32">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-medium text-sage">Inside our factory</p>
          <h2 id="factory-heading" className="text-balance text-4xl font-semibold md:text-6xl">
            Made by machines. Checked by people.
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-primary-foreground/70">
            Our fully automated line in Uttar Pradesh builds every panel to the same standard, then our quality team
            signs it off.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-24 md:px-6 md:pb-32 lg:grid-cols-2 lg:gap-16">
        <ol className="flex flex-col">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              onViewportEnter={() => setActive(i)}
              viewport={{ amount: 0.6 }}
              className="flex flex-col gap-6 py-12 lg:min-h-[70vh] lg:justify-center lg:py-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:hidden">
                <Image src={step.photo.src} alt={step.photo.alt} fill sizes="100vw" className="object-cover" />
              </div>
              <div
                className={cn(
                  "flex flex-col gap-4 border-l-2 pl-6 transition-colors duration-500",
                  active === i ? "border-sage" : "border-primary-foreground/15",
                )}
              >
                <span className="font-mono text-sm text-sage">Step {i + 1} of {STEPS.length}</span>
                <h3
                  className={cn(
                    "text-3xl font-semibold transition-opacity duration-500 md:text-4xl",
                    active === i ? "opacity-100" : "lg:opacity-40",
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "max-w-md text-pretty text-lg leading-relaxed text-primary-foreground/70 transition-opacity duration-500",
                    active === i ? "opacity-100" : "lg:opacity-40",
                  )}
                >
                  {step.text}
                </p>
              </div>
            </motion.li>
          ))}
          <li className="pt-4 lg:pt-0">
            <Link
              href="/about"
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-primary-foreground/30 px-6 text-sm font-semibold transition-colors hover:bg-primary-foreground hover:text-forest"
            >
              About our company
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </li>
        </ol>

        <div className="hidden lg:block">
          <div className="sticky top-24 flex h-[calc(100vh-8rem)] items-center">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-primary-foreground/5">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease }}
                >
                  <Image
                    src={STEPS[active].photo.src}
                    alt={STEPS[active].photo.alt}
                    fill
                    sizes="600px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-x-6 bottom-6 flex gap-2" aria-hidden="true">
                {STEPS.map((s, i) => (
                  <span key={s.title} className="h-1 flex-1 overflow-hidden rounded-full bg-primary-foreground/25">
                    <span
                      className={cn(
                        "block h-full rounded-full bg-sage transition-[width] duration-700",
                        i <= active ? "w-full" : "w-0",
                      )}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
