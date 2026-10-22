import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Reveal } from "@/components/topcon/reveal"
import { FACTORY_PHOTOS, SITE } from "@/lib/site"

export function ClosingCta() {
  return (
    <section aria-labelledby="cta-heading" className="bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="relative isolate overflow-hidden rounded-3xl bg-forest px-6 py-20 text-center text-primary-foreground md:px-14 md:py-28">
          <Image
            src={FACTORY_PHOTOS.visualInspection.src}
            alt=""
            fill
            sizes="(min-width: 1280px) 1232px, 100vw"
            className="-z-20 object-cover opacity-40"
          />
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--color-forest)_20%,transparent_90%)]"
            aria-hidden="true"
          />

          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 id="cta-heading" className="text-balance text-4xl font-semibold md:text-6xl">
              {"Planning a project? Let's size it together."}
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-primary-foreground/75">
              Tell us about your site and our team will recommend the right panels and send pricing within one working
              day.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-sage px-7 text-sm font-semibold text-forest transition-colors hover:bg-primary-foreground"
              >
                Get a quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 text-sm font-semibold transition-colors hover:bg-primary-foreground hover:text-forest"
              >
                <Phone className="size-4" aria-hidden="true" />
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
