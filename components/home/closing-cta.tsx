import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"
import { SITE } from "@/lib/site"

export function ClosingCta() {
  return (
    <section aria-labelledby="cta-heading" className="bg-background pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-8 rounded-3xl bg-forest p-8 text-primary-foreground md:flex-row md:items-center md:justify-between md:p-14">
          <div className="flex max-w-xl flex-col gap-4">
            <h2 id="cta-heading" className="font-sans text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Planning a project? Get a price within 24 hours.
            </h2>
            <p className="leading-relaxed text-primary-foreground/80 text-pretty">
              Share the size of your project and where it&apos;s going. We&apos;ll come back with the right panels,
              pricing and delivery dates.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-background px-6 py-3.5 font-medium text-forest transition-colors hover:bg-sage"
            >
              Get a quote
            </Link>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3.5 font-medium transition-colors hover:bg-primary-foreground/10"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp us
            </a>
          </div>
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Prefer to call? Toll-free{" "}
          <a href={SITE.phoneHref} className="font-medium text-forest hover:underline">
            {SITE.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  )
}
