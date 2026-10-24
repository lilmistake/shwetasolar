import { Plus } from "lucide-react"
import { SectionCta } from "@/components/topcon/cta-buttons"

export const FAQS = [
  {
    q: "What is the price of TOPCon G2G solar panels?",
    a: "Pricing depends on wattage, quantity and delivery location. Share your requirement in the form and our team sends a written quote within 24 hours. Dealers and EPCs receive factory-direct volume pricing.",
  },
  {
    q: "How is TOPCon better than PERC?",
    a: "TOPCon uses an N-type cell with a tunnel-oxide passivated contact. Compared with PERC it delivers higher efficiency (up to 24.39%), a better temperature coefficient (−0.29%/°C), Zero LID and lower annual degradation — so more lifetime energy from the same roof.",
  },
  {
    q: "Are your modules BIS certified and ALMM listed?",
    a: "Yes. Our TOPCon G2G modules are BIS certified and enlisted in ALMM List-I, which makes them eligible for government-subsidised projects including PM Surya Ghar rooftop schemes.",
  },
  {
    q: "What warranty do you offer?",
    a: "A 12-year product warranty and a 30-year linear performance warranty, with first-year degradation of ≤1% and ≤0.4% per year after that.",
  },
  {
    q: "What is the minimum order quantity and delivery time?",
    a: "MOQ and dispatch timelines vary by wattage and volume. Popular wattages are usually available from ready stock. Your quote includes an exact dispatch date.",
  },
  {
    q: "Do you supply directly to dealers and distributors?",
    a: "Yes. We are the manufacturer, so dealers buy direct with competitive pricing, flexible MOQ, reliable supply and marketing support.",
  },
]

/** Native details/summary accordion — fully accessible with zero client JS. */
export function Faq() {
  return (
    <section id="faq" className="bg-muted/50">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">FAQ</p>
        <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-none text-forest md:text-6xl">
          Questions buyers ask.
        </h2>

        <div className="mt-8 flex flex-col gap-2">
          {FAQS.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className="group rounded-xl border border-border bg-card open:border-forest/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-forest [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus className="h-5 w-5 shrink-0 text-olive transition-transform group-open:rotate-45" aria-hidden />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>

        <SectionCta source="faq" prompt="Still have a question? Talk to sales." />
      </div>
    </section>
  )
}
