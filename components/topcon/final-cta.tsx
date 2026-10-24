import { QuoteButton, CallButton, WhatsAppButton } from "@/components/topcon/cta-buttons"

export function FinalCta() {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 md:px-6 md:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-balance font-display text-4xl font-bold leading-none md:text-6xl">
            Get your TOPCon price <span className="text-sun">today.</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-cream/75">
            Factory-direct pricing within 24 hours. No obligation.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <QuoteButton size="lg" source="final-cta" arrow>
            Get My Best Price
          </QuoteButton>
          <WhatsAppButton size="lg" source="final-cta" />
          <CallButton source="final-cta" className="py-4 text-base" />
        </div>
      </div>
    </section>
  )
}
