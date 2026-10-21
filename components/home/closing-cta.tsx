import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Reveal } from "@/components/topcon/reveal"
import { SITE } from "@/lib/site"

export function ClosingCta() {
  return (
    <section aria-labelledby="cta-heading" className="bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col gap-6 p-8 md:p-14">
              <h2 id="cta-heading" className="text-balance text-4xl font-semibold md:text-5xl">
                {"Planning a project? Let's size it together."}
              </h2>
              <p className="text-pretty leading-relaxed text-primary-foreground/75">
                Tell us about your site and our team will recommend the right panels and send pricing within one
                working day.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-foreground px-7 text-sm font-medium text-primary transition-transform hover:scale-[1.03]"
                >
                  Get a quote
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary-foreground/25 px-7 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="relative min-h-64 md:min-h-full">
              <Image
                src="/images/stock/utility-solar-farm.png"
                alt=""
                fill
                sizes="(min-width: 768px) 616px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
