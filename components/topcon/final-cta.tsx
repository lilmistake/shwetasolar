"use client"

import { Phone, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { PHONE_DISPLAY } from "@/lib/topcon/constants"
import { QuoteButton, CallLink, WhatsAppLink } from "@/components/topcon/cta-buttons"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <div className="absolute inset-0 bg-grid-forest mask-radial-fade" aria-hidden />
      <div
        className="animate-float-slow absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-sage/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center md:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-3xl font-bold md:text-5xl"
        >
          Ready to price your project?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-pretty text-white/70"
        >
          Get a no-obligation quote for TOPCon G2G modules within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <QuoteButton size="lg" source="final-cta">
            Request a Quote
          </QuoteButton>
          <CallLink
            source="final-cta"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-4 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {PHONE_DISPLAY}
          </CallLink>
          <WhatsAppLink
            source="final-cta"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white transition-colors hover:bg-[#1eb355]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp
          </WhatsAppLink>
        </motion.div>
      </div>
    </section>
  )
}
