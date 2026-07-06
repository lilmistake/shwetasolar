"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/topcon/constants"
import { trackCallClick, trackWhatsAppClick, goToQuote } from "@/lib/topcon/tracking"

/** Amber "Request a Quote" button that scrolls to the on-page form. */
export function QuoteButton({
  children = "Request a Quote",
  className,
  buyerType,
  source,
}: {
  children?: ReactNode
  className?: string
  buyerType?: string
  source?: string
}) {
  return (
    <button
      type="button"
      onClick={() => goToQuote(buyerType)}
      data-source={source}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-base font-semibold text-forest shadow-sm transition-colors hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600",
        className,
      )}
    >
      {children}
    </button>
  )
}

/** Click-to-call link that fires a conversion tracking event. */
export function CallLink({
  children,
  className,
  source = "unknown",
}: {
  children: ReactNode
  className?: string
  source?: string
}) {
  return (
    <a href={PHONE_HREF} onClick={() => trackCallClick(source)} className={className}>
      {children}
    </a>
  )
}

/** WhatsApp deep link that fires a conversion tracking event. */
export function WhatsAppLink({
  children,
  className,
  source = "unknown",
}: {
  children: ReactNode
  className?: string
  source?: string
}) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(source)}
      className={className}
    >
      {children}
    </a>
  )
}
