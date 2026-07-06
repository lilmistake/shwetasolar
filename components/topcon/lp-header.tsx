"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Phone } from "lucide-react"
import { motion } from "framer-motion"
import { LOGO_SRC, PHONE_HREF, PHONE_DISPLAY } from "@/lib/topcon/constants"
import { trackCallClick } from "@/lib/topcon/tracking"
import { QuoteButton } from "@/components/topcon/cta-buttons"
import { cn } from "@/lib/utils"

export function LpHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-forest/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="Shweta Solar home">
          <Image
            src={LOGO_SRC || "/placeholder.svg"}
            alt="Shweta Solar"
            width={140}
            height={40}
            className="h-9 w-auto brightness-0 invert"
            priority
          />
        </a>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={PHONE_HREF}
            onClick={() => trackCallClick("header")}
            className="hidden items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white sm:inline-flex"
          >
            <Phone className="h-4 w-4 text-sage" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <QuoteButton source="header">Get a Quote</QuoteButton>
        </div>
      </div>
    </motion.header>
  )
}
