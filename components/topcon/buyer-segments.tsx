"use client"

import { motion } from "framer-motion"
import { Store, Building2, Home, ArrowUpRight } from "lucide-react"
import { QuoteButton } from "@/components/topcon/cta-buttons"
import { Reveal, fadeUp, staggerParent } from "@/components/topcon/reveal"

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
    <section id="buyers" className="bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">Built for You</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-balance text-3xl font-bold text-forest md:text-5xl">Which buyer are you?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-pretty text-muted-foreground">
              One module, three ways to win. Tell us who you are and we&apos;ll tailor your quote.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {SEGMENTS.map((s) => (
            <motion.div
              key={s.buyerType}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div
                className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sage/10 transition-transform duration-500 group-hover:scale-150"
                aria-hidden
              />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-forest">
                <s.icon className="h-6 w-6 text-cream" aria-hidden />
              </div>
              <h3 className="relative mt-5 flex items-center gap-1 text-lg font-semibold text-forest">
                {s.title}
                <ArrowUpRight className="h-4 w-4 text-sage opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
              </h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <QuoteButton source={`segment-${s.buyerType}`} buyerType={s.buyerType} className="relative mt-6 w-full">
                Request a Quote
              </QuoteButton>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
