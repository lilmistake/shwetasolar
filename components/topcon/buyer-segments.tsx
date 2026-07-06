"use client"

import { Store, Building2, Home } from "lucide-react"
import { QuoteButton } from "@/components/topcon/cta-buttons"

const SEGMENTS = [
  {
    icon: Store,
    buyerType: "dealer",
    title: "Dealers & Distributors",
    body: "Competitive dealer pricing, flexible MOQ, reliable supply, and channel support. Partner with a manufacturer, not a middleman.",
  },
  {
    icon: Building2,
    buyerType: "epc",
    title: "EPC & Commercial / Industrial",
    body: "Bankable modules, bulk pricing, and dispatch timelines you can plan around. Datasheets and test reports on request.",
  },
  {
    icon: Home,
    buyerType: "residential",
    title: "Residential Rooftop",
    body: "Maximum generation from limited roof space, 30-year backing, and subsidy-eligible options.",
  },
]

export function BuyerSegments() {
  return (
    <section id="buyers" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-forest md:text-4xl">Which buyer are you?</h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            One module, three ways to win. Tell us who you are and we&apos;ll tailor your quote.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SEGMENTS.map((s) => (
            <div key={s.buyerType} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest">
                <s.icon className="h-6 w-6 text-cream" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-forest">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <QuoteButton source={`segment-${s.buyerType}`} buyerType={s.buyerType} className="mt-5 w-full">
                Request a Quote
              </QuoteButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
