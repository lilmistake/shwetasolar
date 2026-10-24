"use client"

import type { ReactNode } from "react"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"
import { PHONE_HREF, PHONE_DISPLAY, WHATSAPP_HREF } from "@/lib/topcon/constants"
import { trackCallClick, trackWhatsAppClick, trackCtaClick, goToQuote } from "@/lib/topcon/tracking"
import { cn } from "@/lib/utils"

/** Primary bright-accent quote CTA. Scrolls to the form and optionally pre-selects a buyer type. */
export function QuoteButton({
  children = "Get My Best Price",
  buyerType,
  source = "cta",
  className,
  size = "md",
  arrow = false,
}: {
  children?: ReactNode
  buyerType?: string
  source?: string
  className?: string
  size?: "md" | "lg"
  arrow?: boolean
}) {
  return (
    <button
      type="button"
      onClick={() => {
        trackCtaClick(source, buyerType)
        goToQuote(buyerType)
      }}
      data-track="cta"
      data-cta-location={source}
      data-buyer-type={buyerType}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg bg-sun font-semibold text-forest shadow-sm transition-colors hover:bg-sun-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun",
        size === "lg" ? "px-7 py-4 text-base" : "px-5 py-2.5 text-sm",
        className,
      )}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4" aria-hidden />}
    </button>
  )
}

/** Unstyled click-to-call link wrapper. */
export function CallLink({
  children,
  className,
  source = "cta",
  ariaLabel,
}: {
  children: ReactNode
  className?: string
  source?: string
  ariaLabel?: string
}) {
  return (
    <a
      href={PHONE_HREF}
      onClick={() => trackCallClick(source)}
      data-track="call"
      data-cta-location={source}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  )
}

/** Unstyled WhatsApp link wrapper. */
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
      data-track="whatsapp"
      data-cta-location={source}
      className={className}
    >
      {children}
    </a>
  )
}

export function CallButton({ className, source = "cta", tone = "dark" }: { className?: string; source?: string; tone?: "dark" | "light" }) {
  return (
    <CallLink
      source={source}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition-colors",
        tone === "dark"
          ? "border-cream/25 text-cream hover:bg-cream/10"
          : "border-forest/20 text-forest hover:bg-forest/5",
        className,
      )}
    >
      <Phone className="h-4 w-4" aria-hidden />
      {PHONE_DISPLAY}
    </CallLink>
  )
}

export function WhatsAppButton({ className, source = "cta", tone = "dark", size = "md" }: { className?: string; source?: string; tone?: "dark" | "light"; size?: "md" | "lg" }) {
  return (
    <WhatsAppLink
      source={source}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg border font-semibold transition-colors",
        size === "lg" ? "px-6 py-4 text-base" : "px-5 py-3 text-sm",
        tone === "dark"
          ? "border-cream/25 text-cream hover:bg-cream/10"
          : "border-forest/20 text-forest hover:bg-forest/5",
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      WhatsApp
    </WhatsAppLink>
  )
}

/** Compact CTA row repeated after each section. */
export function SectionCta({
  source,
  prompt = "Get factory-direct pricing for your project.",
  tone = "light",
  buyerType,
  label = "Get My Best Price",
}: {
  source: string
  prompt?: string
  tone?: "dark" | "light"
  buyerType?: string
  label?: string
}) {
  return (
    <div
      className={cn(
        "mt-12 flex flex-col items-center justify-center gap-4 border-t pt-8 text-center sm:flex-row sm:justify-between sm:text-left",
        tone === "dark" ? "border-cream/10" : "border-border",
      )}
    >
      <p className={cn("text-pretty font-medium", tone === "dark" ? "text-cream/80" : "text-forest")}>{prompt}</p>
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <QuoteButton source={source} buyerType={buyerType} arrow>
          {label}
        </QuoteButton>
        <WhatsAppButton source={source} tone={tone} />
      </div>
    </div>
  )
}
