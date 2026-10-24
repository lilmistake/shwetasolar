import Image from "next/image"
import { Phone } from "lucide-react"
import { LOGO_SRC, PHONE_DISPLAY } from "@/lib/topcon/constants"
import { CallLink, QuoteButton } from "@/components/topcon/cta-buttons"

/** Minimal sticky header — logo, click-to-call, and one CTA. No nav links that leak paid traffic. */
export function LpHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-forest">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:px-6">
        <Image
          src={LOGO_SRC}
          alt="Shweta Solar"
          width={140}
          height={40}
          className="h-8 w-auto brightness-0 invert md:h-9"
          priority
        />
        <div className="flex items-center gap-2 md:gap-5">
          <CallLink
            source="header"
            ariaLabel={`Call ${PHONE_DISPLAY}`}
            className="inline-flex items-center gap-2 rounded-lg p-2 text-sm font-semibold text-cream hover:bg-cream/10 md:px-3"
          >
            <Phone className="h-4 w-4 text-sun" aria-hidden />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          </CallLink>
          <QuoteButton source="header">Get Price</QuoteButton>
        </div>
      </div>
    </header>
  )
}
