"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FACTORY_PHOTOS } from "@/lib/site"
import { cn } from "@/lib/utils"

const ease = [0.22, 1, 0.36, 1] as const

const TILES = [
  {
    step: "01",
    title: "A fully automated line",
    text: "From raw cell to finished panel, machines do the precise work so every module is built the same way.",
    photo: FACTORY_PHOTOS.floor,
    className: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    sizes: "(min-width: 1024px) 600px, 100vw",
  },
  {
    step: "02",
    title: "Robotic cell handling",
    text: "Cells are lifted, aligned and soldered by robots, never by hand.",
    photo: FACTORY_PHOTOS.gripper,
    className: "sm:col-span-2 lg:col-span-2",
    sizes: "(min-width: 1024px) 600px, 100vw",
  },
  {
    step: "03",
    title: "Scanned for cracks",
    text: "Imaging catches flaws invisible to the eye.",
    photo: FACTORY_PHOTOS.stringerDark,
    className: "",
    sizes: "(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw",
  },
  {
    step: "04",
    title: "Tested one by one",
    text: "Every panel goes through our sun simulator and ships with its own test report.",
    photo: { src: "/images/real/sun-simulator.jpg", alt: "Shweta Solar sun simulator testing a module's power output" },
    className: "",
    sizes: "(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw",
  },
]

export function FactorySection() {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-labelledby="factory-heading" className="bg-forest py-24 text-primary-foreground md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:gap-16 md:px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="text-sm font-medium text-sage">Inside our factory</p>
            <h2 id="factory-heading" className="text-balance text-4xl font-semibold md:text-6xl">
              Made by machines. Checked by people.
            </h2>
          </div>
          <div className="flex max-w-sm flex-col items-start gap-6">
            <p className="text-pretty leading-relaxed text-primary-foreground/70">
              Our plant in Uttar Pradesh builds every panel to the same standard, then our quality team signs it off.
            </p>
            <Link
              href="/about"
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-primary-foreground/30 px-5 text-sm font-semibold transition-colors hover:bg-primary-foreground hover:text-forest"
            >
              About our company
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        <ul className="grid auto-rows-[24rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[22rem] lg:grid-cols-4">
          {TILES.map((tile, i) => (
            <motion.li
              key={tile.title}
              initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease, delay: i * 0.1 }}
              className={cn(
                "group flex flex-col overflow-hidden rounded-3xl bg-primary-foreground/5 ring-1 ring-primary-foreground/10",
                tile.className,
              )}
            >
              <div className="relative isolate min-h-0 flex-1 overflow-hidden">
                <Image
                  src={tile.photo.src}
                  alt={tile.photo.alt}
                  fill
                  sizes={tile.sizes}
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-forest px-3 py-1 font-mono text-xs">
                  {tile.step}
                </span>
              </div>
              <div className="flex flex-col gap-2 p-6">
                <h3 className="text-xl font-semibold md:text-2xl">{tile.title}</h3>
                <p className="max-w-md text-pretty text-sm leading-relaxed text-primary-foreground/75 md:text-base">
                  {tile.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
