"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { Reveal } from "@/components/topcon/reveal"
import { cn } from "@/lib/utils"

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
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-muted/40">
      <div className="mx-auto max-w-3xl px-4 py-20 md:py-28">
        <div className="text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">FAQ</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-balance text-3xl font-bold text-forest md:text-5xl">
              Frequently asked questions
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-card shadow-sm transition-colors",
                    isOpen ? "border-sage" : "border-border",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-forest"
                  >
                    {item.q}
                    <Plus
                      className={cn(
                        "h-5 w-5 shrink-0 text-olive transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
