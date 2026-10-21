import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"
import { Breadcrumbs } from "@/components/site/breadcrumbs"
import { COMPLETE_DATASHEET, FAMILIES, RANGE_SUMMARY, SEGMENTS, WARRANTY, getSegment } from "@/lib/products"
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

      <section className="relative isolate overflow-hidden bg-forest pt-20 text-primary-foreground">
        <Image
          src={FACTORY_PHOTOS.moduleOnLine.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest via-forest/85 to-transparent" aria-hidden="true" />
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-16 md:px-6 md:py-24">
          <Breadcrumbs tone="dark" items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }]} />
          <h1 className="max-w-3xl font-display text-5xl uppercase leading-[0.95] text-balance md:text-7xl">
            n-type TOPCon modules, {RANGE_SUMMARY.minW}–{RANGE_SUMMARY.maxW} W
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/80 text-pretty">
            {FAMILIES.length} bifacial glass–glass module families across {RANGE_SUMMARY.bins} power classes, from
            compact residential panels to 725 W utility modules.
          </p>
          <a
            href={COMPLETE_DATASHEET}
            className="inline-flex items-center gap-2 self-start rounded-full bg-sage px-6 py-3.5 font-semibold text-forest transition-colors hover:bg-white"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Complete range datasheet
          </a>
        </div>
      </section>

      <section aria-labelledby="segments-heading" className="bg-background py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6">
          <h2 id="segments-heading" className="font-display text-4xl uppercase text-forest">
            Shop by application
          </h2>
          <ul className="grid gap-6 md:grid-cols-3">
            {SEGMENTS.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/products/${s.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-border p-6 transition-colors hover:border-forest"
                >
                  <span className="font-display text-2xl uppercase text-forest">{s.name}</span>
                  <span className="font-display text-4xl text-olive">{s.powerRange}</span>
                  <span className="leading-relaxed text-muted-foreground">{s.summary}</span>
                  <span className="mt-auto pt-2 text-sm font-medium text-forest group-hover:underline">
                    View {s.shortName.toLowerCase()} modules
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="compare-heading" className="bg-muted py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <h2 id="compare-heading" className="font-display text-4xl uppercase text-forest">
              Compare every module family
            </h2>
            <p className="text-muted-foreground">Front-side STC ratings. Scroll sideways on mobile.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[860px] text-left text-sm">
              <caption className="sr-only">Shweta Solar TOPCon module families compared</caption>
              <thead className="bg-forest text-primary-foreground">
                <tr>
                  {["Model", "Application", "Power", "Max efficiency", "Cells", "Dimensions (mm)", "Weight", "Datasheet"].map(
                    (h) => (
                      <th key={h} scope="col" className="whitespace-nowrap px-4 py-3 font-medium">
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {FAMILIES.map((f) => {
                  const seg = getSegment(f.segment)
                  return (
                    <tr key={f.model} className="border-t border-border">
                      <th scope="row" className="whitespace-nowrap px-4 py-3 font-semibold text-forest">
                        {f.model}
                      </th>
                      <td className="px-4 py-3">
                        <Link href={`/products/${f.segment}`} className="text-olive hover:underline">
                          {seg?.shortName}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-medium text-forest">
                        {f.minW}–{f.maxW} W
                      </td>
                      <td className="px-4 py-3">{f.maxEfficiency}%</td>
                      <td className="px-4 py-3">{f.cells}</td>
                      <td className="whitespace-nowrap px-4 py-3">
                        {f.lengthMm} × {f.widthMm} × {f.depthMm}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">{f.weightKg} kg</td>
                      <td className="px-4 py-3">
                        <a href={seg?.datasheet} className="font-medium text-forest hover:underline">
                          PDF
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-3">
          <h2 id="faq-heading" className="font-display text-4xl uppercase text-forest text-balance">
            TOPCon questions, answered
          </h2>
          <div className="flex flex-col divide-y divide-border border-y border-border lg:col-span-2">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-forest">
                  {f.q}
                  <span className="text-2xl leading-none text-olive transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="pt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
