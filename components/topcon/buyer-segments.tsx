"use client"

import { useState } from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { QuoteButton, WhatsAppButton } from "@/components/topcon/cta-buttons"
import { cn } from "@/lib/utils"

const SEGMENTS = [
  {
    id: "dealer",
    tab: "Dealer",
    title: "Higher margins on a module that sells itself.",
    points: [
      "Factory-direct dealer pricing — no middleman",
      "Flexible MOQ and ready stock on popular wattages",
      "Marketing support and datasheets for your customers",
      "BIS + ALMM List-I for subsidy-eligible sales",
    ],
    cta: "Get Dealer Pricing",
    image: "/images/real/warehouse-wall.jpg",
    alt: "Warehouse with rooftop solar panels",
  },
  {
    id: "epc",
    tab: "EPC & C&I",
    title: "Bankable modules with dispatch you can plan around.",
    points: [
      "Bulk pricing for 100 kW to multi-MW projects",
      "Committed dispatch dates from a 1.2 GW plant",
      "Full datasheets, IEC test reports and flash data",
      "395–725 W range for every roof and ground layout",
    ],
    cta: "Get Bulk Pricing",
    image: "/images/real/commercial-rooftop-aerial.jpg",
    alt: "Aerial view of a commercial rooftop solar installation",
  },
  {
    id: "residential",
    tab: "Residential",
    title: "More units from a small roof, for 30 years.",
    points: [
      "Fewer panels for the same kW on limited roof space",
      "ALMM List-I modules for PM Surya Ghar subsidy",
      "30-year performance warranty on every panel",
      "We connect you with an installer near you",
    ],
    cta: "Get Rooftop Price",
    image: "/images/real/home-tiled-roof.jpg",
    alt: "Solar panels on a tiled home roof",
  },
] as const

export function BuyerSegments() {
  const [active, setActive] = useState<(typeof SEGMENTS)[number]["id"]>("dealer")
  const seg = SEGMENTS.find((s) => s.id === active) ?? SEGMENTS[0]

  return (
    <section id="buyers" className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun">Built for your business</p>
        <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-none md:text-6xl">Who are you buying for?</h2>

        <div role="tablist" aria-label="Buyer type" className="mt-8 grid grid-cols-3 gap-1 rounded-lg bg-cream/10 p-1 sm:inline-grid">
          {SEGMENTS.map((s) => (
            <button
              key={s.id}
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={active === s.id}
              aria-controls={`panel-${s.id}`}
              onClick={() => setActive(s.id)}
              data-track="buyer-tab"
              data-buyer-type={s.id}
              className={cn(
                "rounded-md px-3 py-2.5 text-sm font-semibold transition-colors sm:px-6",
                active === s.id ? "bg-cream text-forest" : "text-cream/75 hover:text-cream",
              )}
            >
              {s.tab}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${seg.id}`}
          aria-labelledby={`tab-${seg.id}`}
          className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <h3 className="text-balance text-2xl font-bold md:text-3xl">{seg.title}</h3>
            <ul className="mt-6 flex flex-col gap-3">
              {seg.points.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed text-cream/85">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-sun" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <QuoteButton size="lg" source={`tab-${seg.id}`} buyerType={seg.id} arrow>
                {seg.cta}
              </QuoteButton>
              <WhatsAppButton size="lg" source={`tab-${seg.id}`} />
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image src={seg.image} alt={seg.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
