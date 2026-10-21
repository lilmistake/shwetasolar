import Image from "next/image"
import Link from "next/link"
import { Download, Phone } from "lucide-react"
import { FACTORY_PHOTOS, SITE } from "@/lib/site"
import { COMPLETE_DATASHEET } from "@/lib/products"

export function ClosingCta() {
  return (
    <section aria-labelledby="cta-heading" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid overflow-hidden rounded-3xl bg-forest text-primary-foreground lg:grid-cols-2">
          <div className="flex flex-col gap-6 p-8 md:p-14">
            <h2 id="cta-heading" className="font-display text-4xl uppercase text-balance md:text-5xl">
              Planning a project? Get pricing in 24 hours
            </h2>
            <p className="max-w-md leading-relaxed text-white/80 text-pretty">
              Tell us the capacity and site type. Our sales team replies with module recommendations, pricing and
              delivery timelines.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-sage px-6 py-3.5 font-semibold text-forest transition-colors hover:bg-white"
              >
                Request a quote
              </Link>
              <a
                href={COMPLETE_DATASHEET}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 font-semibold transition-colors hover:bg-white hover:text-forest"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Range datasheet
              </a>
            </div>
            <a href={SITE.phoneHref} className="mt-2 inline-flex items-center gap-2 text-sm text-white/75 hover:text-white">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Or call toll-free {SITE.phoneDisplay}
            </a>
          </div>
          <div className="relative min-h-72">
            <Image
              src={FACTORY_PHOTOS.moduleOnLine.src}
              alt={FACTORY_PHOTOS.moduleOnLine.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
