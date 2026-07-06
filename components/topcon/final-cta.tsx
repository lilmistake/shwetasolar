import { Phone, MessageCircle } from "lucide-react"
import { PHONE_DISPLAY } from "@/lib/topcon/constants"
import { QuoteButton, CallLink, WhatsAppLink } from "@/components/topcon/cta-buttons"

export function FinalCta() {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-20">
        <h2 className="text-balance text-3xl font-bold md:text-4xl">Ready to price your project?</h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-cream/80">
          Get a no-obligation quote for TOPCon G2G modules within 24 hours.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <QuoteButton source="final-cta" className="px-8 py-4 text-lg">
            Request a Quote
          </QuoteButton>
          <CallLink
            source="final-cta"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-cream/25 px-6 py-4 font-semibold text-cream hover:bg-cream/10"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {PHONE_DISPLAY}
          </CallLink>
          <WhatsAppLink
            source="final-cta"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-cream/25 px-6 py-4 font-semibold text-cream hover:bg-cream/10"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </section>
  )
}
