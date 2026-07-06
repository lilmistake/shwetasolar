import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"
import { LOGO_SRC, PHONE_DISPLAY } from "@/lib/topcon/constants"
import { QuoteButton, CallLink, WhatsAppLink } from "@/components/topcon/cta-buttons"

export function LpHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#top" className="flex items-center" aria-label="Shweta Solar home">
          <Image
            src={LOGO_SRC || "/placeholder.svg"}
            alt="Shweta Solar"
            width={150}
            height={40}
            priority
            className="h-8 w-auto md:h-9"
          />
        </a>

        <div className="flex items-center gap-2 md:gap-4">
          <CallLink
            source="header"
            className="hidden items-center gap-2 text-sm font-medium text-forest hover:text-olive md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>{PHONE_DISPLAY}</span>
          </CallLink>

          <WhatsAppLink
            source="header"
            className="hidden items-center gap-2 rounded-lg border border-forest/20 px-3 py-2 text-sm font-medium text-forest hover:bg-muted md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>WhatsApp</span>
          </WhatsAppLink>

          <QuoteButton source="header" className="px-4 py-2 text-sm md:text-base">
            Get Quote
          </QuoteButton>
        </div>
      </div>
    </header>
  )
}
