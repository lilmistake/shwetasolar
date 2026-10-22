import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { Reveal } from "@/components/topcon/reveal"
import { ClosingCta } from "@/components/home/closing-cta"
import { FamilyCard, badgesFor } from "@/components/products/family-card"
import { COMPLETE_DATASHEET, FAMILIES, RANGE_SUMMARY, SEGMENTS, WARRANTY } from "@/lib/products"
import { FACTORY_PHOTOS, SITE } from "@/lib/site"
import { faqSchema, jsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: "TOPCon Solar Panels 395–725 W | Full Module Range",
  description: `Compare all ${FAMILIES.length} Shweta Solar n-type TOPCon bifacial glass–glass module families: 395 W to 725 W, up to ${RANGE_SUMMARY.maxEfficiency}% efficiency, ${WARRANTY.performanceYears}-year performance warranty.`,
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Shweta Solar TOPCon module range, 395–725 W",
    images: [{ url: FACTORY_PHOTOS.moduleOnLine.src, alt: FACTORY_PHOTOS.moduleOnLine.alt }],
  },
}

const FAQS = [
  {
    q: "What is an n-type TOPCon solar panel?",
    a: "TOPCon (Tunnel Oxide Passivated Contact) is an n-type cell technology that adds an ultra-thin oxide and polysilicon layer to the rear of the cell. It reduces recombination losses, giving higher efficiency, lower degradation and better hot-weather performance than older p-type PERC panels.",
  },
  {
    q: "Which Shweta Solar module should I choose for a home rooftop?",
    a: "For homes and PM Surya Ghar installations, the residential SS-TP108 (395–455 W) and SS-TP144 (575–600 W) families fit typical Indian rooftops. Larger roofs can use the 132-cell families.",
  },
  {
    q: "What warranty comes with Shweta Solar panels?",
    a: `All modules carry a ${WARRANTY.productYears}-year product warranty and a ${WARRANTY.performanceYears}-year linear performance warranty, with ${WARRANTY.firstYearDegradation} degradation in year one and ${WARRANTY.annualDegradation} per year after that.`,
  },
  {
    q: "Are Shweta Solar modules bifacial?",
    a: "Yes. Every module is a bifacial glass–glass design with roughly 80% bifaciality, so the rear side also generates power from light reflected off the roof or ground.",
  },
  {
    q: "Where are Shweta Solar modules manufactured?",
    a: `All modules are manufactured at our ${SITE.capacity} automated plant in ${SITE.region}, India.`,
  },
]

export default function ProductsPage() {
  const groups = SEGMENTS.map((segment) => ({
    segment,
    families: FAMILIES.filter((f) => f.segment === segment.slug),
  })).filter((g) => g.families.length > 0)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(FAQS))} />

      <PageHero
        eyebrow="Products"
        crumbs={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }]}
        title={`n-type TOPCon modules, ${RANGE_SUMMARY.minW}–${RANGE_SUMMARY.maxW} W`}
        intro={`${FAMILIES.length} bifacial glass–glass module families across ${RANGE_SUMMARY.bins} power classes, from compact residential panels to 725 W utility modules.`}
        image={FACTORY_PHOTOS.moduleOnLine}
        actions={
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-olive"
            >
              Get a quote
            </Link>
            <a
              href={COMPLETE_DATASHEET}
              download
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-7 text-sm font-semibold text-foreground transition-colors hover:border-foreground/40"
            >
              <Download className="size-4" aria-hidden="true" />
              Complete datasheet
            </a>
          </div>
        }
      />

      <nav aria-label="Jump to application" className="bg-background pb-12">
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 md:px-6">
          {groups.map(({ segment, families }) => (
            <li key={segment.slug}>
              <a
                href={`#${segment.slug}`}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
              >
                {segment.name}
                <span className="text-muted-foreground">{families.length}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section aria-labelledby="range-heading" className="bg-forest py-20 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 md:px-6">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-2xl flex-col gap-4">
              <p className="text-sm font-medium text-primary-foreground/60">{FAMILIES.length} module families</p>
              <h2 id="range-heading" className="text-balance text-4xl font-semibold text-primary-foreground md:text-5xl">
                The full range
              </h2>
            </div>
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-primary-foreground/70">
              Each group is drawn to scale, so you can compare panel sizes at a glance.
            </p>
          </Reveal>

          {groups.map(({ segment, families }) => {
            const scaleLengthMm = Math.max(...families.map((f) => f.lengthMm))
            return (
              <div key={segment.slug} id={segment.slug} className="flex scroll-mt-28 flex-col gap-6">
                <Reveal className="flex flex-wrap items-end justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-semibold text-primary-foreground md:text-3xl">{segment.name}</h3>
                    <p className="max-w-xl text-pretty text-sm leading-relaxed text-primary-foreground/70">
                      {segment.description}
                    </p>
                  </div>
                  <Link
                    href={`/products/${segment.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground hover:underline"
                  >
                    View {segment.name.toLowerCase()}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Reveal>
                <Reveal delay={0.05} className="overflow-hidden rounded-2xl bg-card">
                  <ul className="-mb-px -mr-px grid md:grid-cols-2 lg:grid-cols-3">
                    {families.map((f) => (
                      <li key={f.model} className="border-b border-r border-border transition-colors hover:bg-muted/30">
                        <FamilyCard
                          family={f}
                          scaleLengthMm={scaleLengthMm}
                          badges={badgesFor(f, families)}
                          datasheetHref={segment.datasheet}
                        />
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            )
          })}
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground">FAQ</p>
            <h2 id="faq-heading" className="text-balance text-4xl font-semibold text-foreground">
              TOPCon questions, answered
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-border border-y border-border lg:col-span-2">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground">
                  {f.q}
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-lg leading-none text-foreground transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="pt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  )
}
