"use client"

import { Phone, MessageCircle } from "lucide-react"
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/topcon/constants"
import { trackCallClick, trackWhatsAppClick, goToQuote } from "@/lib/topcon/tracking"

/** Always-visible bottom action bar on mobile — critical for paid-ad conversion. */
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={PHONE_HREF}
          onClick={() => trackCallClick("sticky-bar")}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium text-forest"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("sticky-bar")}
          className="flex flex-col items-center justify-center gap-1 border-x border-border py-2.5 text-xs font-medium text-forest"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={() => goToQuote()}
          className="flex flex-col items-center justify-center gap-1 bg-amber-500 py-2.5 text-xs font-bold text-forest"
        >
          Get Quote
        </button>
      </div>
    </div>
  )
}
