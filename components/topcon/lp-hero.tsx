import Image from "next/image"
import { BadgeCheck } from "lucide-react"
import { HERO_IMAGE } from "@/lib/topcon/constants"
import { QuoteButton, WhatsAppButton } from "@/components/topcon/cta-buttons"
import { QuoteForm } from "@/components/topcon/quote-form"

const STATS = [
  { value: "24.39%", label: "Peak efficiency" },
  { value: "30 yr", label: "Performance warranty" },
  { value: "725 W", label: "Max power output" },
]

const CHIPS = ["BIS Certified", "ALMM List-I", "Made in India"]

export function LpHero({ headline }: { headline: { lead: string; accent: string } }) {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-forest text-cream">
      <Image
        src={HERO_IMAGE}
        alt="Shweta Solar N-Type TOPCon glass-to-glass module on the production line"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-forest/85 lg:bg-forest/80" aria-hidden />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-10 md:px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14 lg:pb-20 lg:pt-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun">
            N-Type TOPCon · Glass-to-Glass Bifacial · 395–725 W
          </p>
          <h1 className="mt-4 text-balance font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {headline.lead} <span className="text-sun">{headline.accent}</span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-cream/80 sm:text-lg">
            Factory-direct from our 1.2 GW plant near Delhi. Higher yield per rupee for dealers, EPCs and rooftop
            owners — with pricing in 24 hours.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Certifications">
            {CHIPS.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-md border border-cream/20 bg-cream/5 px-3 py-1.5 text-sm font-medium"
              >
                <BadgeCheck className="h-4 w-4 text-sun" aria-hidden />
                {chip}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <QuoteButton size="lg" source="hero" arrow>
              Get My Best Price
            </QuoteButton>
            <WhatsAppButton size="lg" source="hero" />
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 border-t border-cream/15 pt-6">
            {STATS.map((s, i) => (
              <div key={s.label} className={i > 0 ? "border-l border-cream/15 pl-4" : "pr-4"}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="whitespace-nowrap font-display text-3xl font-bold leading-none text-cream sm:text-5xl">{s.value}</dd>
                <dd className="mt-2 text-xs text-cream/65 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hidden lg:block">
          <QuoteForm variant="hero" />
        </div>
      </div>
    </section>
  )
}
