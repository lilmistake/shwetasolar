import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FACTORY_PHOTOS, SITE } from "@/lib/site"
import { RANGE_SUMMARY, WARRANTY } from "@/lib/products"

const FACTS = [
  { value: `${RANGE_SUMMARY.maxEfficiency}%`, label: "Peak module efficiency" },
  { value: `${WARRANTY.performanceYears} yr`, label: "Linear performance warranty" },
  { value: `${RANGE_SUMMARY.families}`, label: "Module families" },
  { value: SITE.capacity, label: "Annual capacity" },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-forest text-primary-foreground">
      <Image
        src={FACTORY_PHOTOS.floor.src}
        alt={FACTORY_PHOTOS.floor.alt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest via-forest/90 to-forest/40" aria-hidden="true" />

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-16 pt-36 md:px-6 md:pb-20 md:pt-44">
        <div className="flex max-w-3xl flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage">n-type TOPCon · Bifacial · Glass–glass</p>
          <h1 className="font-display text-5xl uppercase leading-[0.95] text-balance md:text-7xl">
            Solar modules engineered and built in India
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/80 text-pretty">
            Ten module families for rooftops, factories and solar parks, each flash-tested and EL-inspected before it
            leaves our {SITE.region} plant.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3.5 font-semibold text-forest transition-colors hover:bg-white"
            >
              Get a quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 font-semibold transition-colors hover:bg-white hover:text-forest"
            >
              Explore the range
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8 border-t border-white/20 pt-8 md:flex-row md:items-end md:justify-between">
          <p className="font-display leading-none animate-in fade-in duration-1000">
            <span className="block text-sm uppercase tracking-[0.2em] text-sage">Rated power</span>
            <span className="block text-7xl md:text-9xl">
              {RANGE_SUMMARY.minW}–{RANGE_SUMMARY.maxW}
              <span className="text-sage"> W</span>
            </span>
          </p>
          <dl className="grid grid-cols-2 gap-x-10 gap-y-5 md:grid-cols-4">
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col-reverse gap-1">
                <dt className="text-xs text-white/70">{fact.label}</dt>
                <dd className="font-display text-3xl">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
