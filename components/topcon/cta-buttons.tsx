"use client"

import type { ReactNode } from "react"
import { Phone, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { PHONE_HREF, PHONE_DISPLAY, WHATSAPP_HREF } from "@/lib/topcon/constants"
import { trackCallClick, trackWhatsAppClick, goToQuote } from "@/lib/topcon/tracking"
import { cn } from "@/lib/utils"

/** Primary sage-green quote CTA with an animated sheen sweep. */
export function QuoteButton({
  children = "Get a Quote",
  buyerType,
  source = "cta",
  className,
  size = "md",
}: {
  children?: ReactNode
  buyerType?: string
  source?: string
  className?: string
  size?: "md" | "lg"
}) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => goToQuote(buyerType)}
      data-source={source}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-sage font-semibold text-forest shadow-lg shadow-sage/20 transition-colors hover:bg-[#b8c49a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage",
        size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
        className,
      )}
    >
      <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-y-0 left-0 w-1/3 -translate-x-[200%] bg-white/40 blur-md transition-transform duration-700 ease-out group-hover:translate-x-[400%]" />
      </span>
      <span className="relative">{children}</span>
    </motion.button>
  )
}

/** Outlined call button — tuned for dark backgrounds by default. */
export function CallButton({
  className,
  source = "cta",
  compact = false,
}: {
  className?: string
  source?: string
  compact?: boolean
}) {
  return (
    <a
      href={PHONE_HREF}
      onClick={() => trackCallClick(source)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10",
        className,
      )}
    >
      <Phone className="h-4 w-4" />
      {compact ? "Call" : PHONE_DISPLAY}
    </a>
  )
}

/** Unstyled click-to-call link wrapper — pass your own className/children. */
export function CallLink({
  children,
  className,
  source = "cta",
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

/** Unstyled WhatsApp link wrapper — pass your own className/children. */
export function WhatsAppLink({
  children,
  className,
  source = "cta",
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

/** WhatsApp button. */
export function WhatsAppButton({
  className,
  source = "cta",
  compact = false,
}: {
  className?: string
  source?: string
  compact?: boolean
}) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(source)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1eb355]",
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" />
      {compact ? "WhatsApp" : "WhatsApp Us"}
    </a>
  )
}
