import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    q: "What makes TOPCon different from PERC / Mono?",
    a: "TOPCon uses an N-type cell with a tunnel-oxide passivated contact layer. Compared with PERC, it delivers higher efficiency (up to 24.5%), a better temperature coefficient, lower degradation and Zero LID — so more lifetime energy from the same footprint.",
  },
  {
    q: "Are these modules bifacial?",
    a: "Yes. Our glass-to-glass modules are bifacial and capture reflected light from the rear side for up to 30% additional energy, depending on ground albedo and mounting.",
  },
  {
    q: "What is the real lifespan and degradation?",
    a: "Glass-to-glass construction is built for 30 years of service and is backed by a 30-year performance warranty, alongside a 15-year product warranty. Zero LID and a low annual degradation rate keep long-term output strong.",
  },
  {
    q: "Are they subsidy / ALMM eligible?",
    a: "Eligibility depends on the current government list and your project category. Share your project details in the quote form and our team will confirm the applicable status and documentation.",
  },
  {
    q: "What are your MOQ and delivery timelines?",
    a: "MOQ and dispatch timelines vary by wattage, volume and destination. Tell us your requirement and location in the form and we will provide exact lead times with your quote.",
  },
  {
    q: "Do you support dealers and distributors?",
    a: "Yes. We offer competitive dealer pricing, flexible MOQ, reliable supply and channel support — working with you directly as the manufacturer.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <h2 className="text-balance text-center text-3xl font-bold text-forest md:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-10 space-y-3">
          {FAQS.map((item) => (
            <details key={item.q} className="group rounded-xl border border-border bg-card p-5 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-forest">
                {item.q}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-olive transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
