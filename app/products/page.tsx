import type { Metadata } from "next"
import Link from "next/link"
import { Download } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { Reveal } from "@/components/topcon/reveal"
import { ClosingCta } from "@/components/home/closing-cta"
import { PowerRangeBar } from "@/components/products/power-range-bar"
import { SegmentCard } from "@/components/products/segment-card"
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
          <a
            href={COMPLETE_DATASHEET}
            className="inline-flex h-12 items-center gap-2 self-start rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-forest/90"
          >
            <Download className="size-4" aria-hidden="true" />
            Complete range datasheet
          </a>
        }
      />

      <section aria-labelledby="segments-heading" className="bg-background pb-16 md:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6">
          <Reveal className="flex flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground">By application</p>
            <h2 id="segments-heading" className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
              Find the right module
            </h2>
          </Reveal>
          <ul className="grid gap-4 md:grid-cols-3">
            {SEGMENTS.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={0.05 + i * 0.05}>
                <SegmentCard segment={s} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="compare-heading" className="bg-muted py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium text-muted-foreground">Full range</p>
              <h2 id="compare-heading" className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
                Compare every family
              </h2>
            </div>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Front-side STC ratings across {RANGE_SUMMARY.minW}–{RANGE_SUMMARY.maxW} W. Scroll sideways on mobile.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="overflow-x-auto rounded-3xl border border-border bg-card">
            <table className="w-full min-w-[900px] text-left text-sm">
              <caption className="sr-only">Shweta Solar TOPCon module families compared</caption>
              <thead>
                <tr className="text-xs text-muted-foreground">
                  {["Model", "Power", "Efficiency", "Cells", "Dimensions (mm)", "Weight", ""].map((h, i) => (
                    <th key={h || i} scope="col" className="whitespace-nowrap px-5 py-4 font-medium">
                      {h || <span className="sr-only">Datasheet</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              {SEGMENTS.map((seg) => (
                <tbody key={seg.slug} className="border-t border-border">
                  <tr>
                    <th colSpan={7} scope="colgroup" className="bg-muted/60 px-5 py-2.5 text-xs font-semibold text-foreground">
                      <Link href={`/products/${seg.slug}`} className="hover:underline">
                        {seg.name}
                      </Link>
                    </th>
                  </tr>
                  {FAMILIES.filter((f) => f.segment === seg.slug).map((f) => (
                    <tr key={f.model} className="border-t border-border">
                      <th scope="row" className="whitespace-nowrap px-5 py-4 font-semibold text-foreground">
                        <Link href={`/products/${seg.slug}#${f.model.toLowerCase()}`} className="hover:underline">
                          {f.model}
                        </Link>
                      </th>
                      <td className="w-64 px-5 py-4">
                        <div className="flex flex-col gap-2">
                          <span className="whitespace-nowrap font-medium text-foreground">
                            {f.minW}–{f.maxW} W
                          </span>
                          <PowerRangeBar minW={f.minW} maxW={f.maxW} showScale={false} />
                        </div>
                      </td>
                      <td className="px-5 py-4 text-foreground">{f.maxEfficiency}%</td>
                      <td className="px-5 py-4 text-foreground">{f.cells}</td>
                      <td className="whitespace-nowrap px-5 py-4 text-foreground">
                        {f.lengthMm} × {f.widthMm} × {f.depthMm}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 text-foreground">{f.weightKg} kg</td>
                      <td className="px-5 py-4 text-right">
                        <a
                          href={seg.datasheet}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-foreground/40"
                        >
                          <Download className="size-3.5" aria-hidden="true" />
                          PDF
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </Reveal>
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
