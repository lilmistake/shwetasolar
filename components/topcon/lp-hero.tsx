import Image from "next/image"
import { HERO_IMAGE } from "@/lib/topcon/constants"
import { QuoteButton } from "@/components/topcon/cta-buttons"

const STAT_CHIPS = [
  { value: "24.5%", label: "Efficiency" },
  { value: "30-Yr", label: "Performance Warranty" },
  { value: "+30%", label: "Bifacial Gain" },
  { value: "1.2 GW", label: "Capacity" },
]

export function LpHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <p className="mb-4 inline-block rounded-full border border-cream/20 bg-cream/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cream/80">
            N-Type TOPCon Glass-to-Glass
          </p>
          <h1 className="text-balance font-sans text-3xl font-bold leading-tight md:text-5xl">
            India&apos;s N-Type TOPCon Glass-to-Glass Modules — Engineered to Win Projects.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-cream/85 md:text-lg">
            Up to 24.5% efficiency. 30-year performance warranty. 450–600W bifacial G2G modules for utility, C&I, and
            rooftop — direct from the manufacturer.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <QuoteButton source="hero" className="px-7 py-3.5 text-base md:text-lg">
              Request a Quote
            </QuoteButton>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STAT_CHIPS.map((chip) => (
              <li
                key={chip.label}
                className="rounded-xl border border-cream/15 bg-cream/5 px-3 py-3 text-center"
              >
                <div className="text-xl font-bold text-amber-400 md:text-2xl">{chip.value}</div>
                <div className="mt-0.5 text-xs text-cream/75">{chip.label}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-cream/10 shadow-2xl">
            <Image
              src={HERO_IMAGE || "/placeholder.svg"}
              alt="Shweta Solar N-Type TOPCon glass-to-glass bifacial solar module"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
