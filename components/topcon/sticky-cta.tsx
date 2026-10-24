"use client"

import { Phone, MessageCircle, FileText } from "lucide-react"
import { CallLink, WhatsAppLink } from "@/components/topcon/cta-buttons"
import { goToQuote, trackCtaClick } from "@/lib/topcon/tracking"

/** Always-visible bottom action bar on mobile. Rendered statically so it never shifts layout. */
export function StickyCta() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <CallLink source="sticky-bar" className="flex h-14 items-center justify-center gap-2 text-sm font-semibold text-forest">
        <Phone className="h-4 w-4" aria-hidden />
        Call
      </CallLink>
      <WhatsAppLink
        source="sticky-bar"
        className="flex h-14 items-center justify-center gap-2 border-x border-border text-sm font-semibold text-forest"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        WhatsApp
      </WhatsAppLink>
      <button
        type="button"
        onClick={() => {
          trackCtaClick("sticky-bar")
          goToQuote()
        }}
        data-track="cta"
        data-cta-location="sticky-bar"
        className="flex h-14 items-center justify-center gap-2 bg-sun text-sm font-bold text-forest"
      >
        <FileText className="h-4 w-4" aria-hidden />
        Get Quote
      </button>
    </nav>
  )
}
