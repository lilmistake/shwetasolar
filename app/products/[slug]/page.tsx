import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronDown, Download, Layers, ShieldCheck, Snowflake, Thermometer } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { Reveal } from "@/components/topcon/reveal"
import { ClosingCta } from "@/components/home/closing-cta"
import { FamilyCard } from "@/components/products/family-card"
import { SegmentCard } from "@/components/products/segment-card"
import { UseCaseTiles } from "@/components/products/use-case-tiles"
import {
  COMMON_SPECS,
  SEGMENTS,
  WARRANTY,
  familiesFor,
  getSegment,
  type ModuleFamily,
  type SegmentSlug,
} from "@/lib/products"
import { jsonLd, productSchema } from "@/lib/seo"

export function generateStaticParams() {
  return SEGMENTS.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const segment = getSegment(slug)
  if (!segment) return {}
  return {
    title: `${segment.name} TOPCon Solar Panels ${segment.powerRange}`,
    description: segment.description,
    alternates: { canonical: `/products/${segment.slug}` },
    openGraph: {
      title: `${segment.name} TOPCon solar modules, ${segment.powerRange}`,
      description: segment.description,
      images: [{ url: segment.image.src, alt: segment.image.alt }],
    },
  }
}

function badgesFor(f: ModuleFamily, all: ModuleFamily[]) {
  const badges: string[] = []
  if (f.weightKg === Math.min(...all.map((x) => x.weightKg))) badges.push("Lightest")
  if (f.maxEfficiency === Math.max(...all.map((x) => x.maxEfficiency))) badges.push("Most efficient")
  if (f.lengthMm === Math.min(...all.map((x) => x.lengthMm)) && badges.length === 0) badges.push("Compact length")
  if (f.widthMm === Math.max(...all.map((x) => x.widthMm)) && badges.length < 2) badges.push("Wide format, more watts")
  return badges.slice(0, 2)
}

const percent = (s: string) => Number.parseFloat(s.replace(/[^\d.]/g, ""))

export default async function SegmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const segment = getSegment(slug)
  if (!segment) notFound()

  const families = familiesFor(segment.slug as SegmentSlug)
  const others = SEGMENTS.filter((s) => s.slug !== segment.slug)
  const scaleLengthMm = Math.max(...families.map((f) => f.lengthMm))

  const year1 = 100 - percent(WARRANTY.firstYearDegradation)
  const finalYear = year1 - percent(WARRANTY.annualDegradation) * (WARRANTY.performanceYears - 1)

  const highlights = [
    { icon: Layers, title: "Glass on both sides", text: "Bifacial glass–glass build collects light reflected from the roof." },
    { icon: ShieldCheck, title: "IP68 junction box", text: "Sealed against dust and monsoon rain." },
    { icon: Snowflake, title: "5400 Pa front load", text: "Rated for heavy wind and snow loads." },
    { icon: Thermometer, title: "−40 °C to +85 °C", text: "Built for Indian summers on hot rooftops." },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(families.map((f) => productSchema(f, segment)))} />

      <PageHero
        eyebrow="Products"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: segment.name, path: `/products/${segment.slug}` },
        ]}
        title={segment.name}
        intro={segment.description}
        image={segment.image}
        actions={
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-olive"
            >
              Get a quote
            </Link>
            <a
              href={segment.datasheet}
              download
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-7 text-sm font-semibold text-foreground transition-colors hover:border-foreground/40"
            >
              <Download className="size-4" aria-hidden="true" />
              Datasheet
            </a>
          </div>
        }
      />

      <section aria-labelledby="built-for-heading" className="bg-background pb-20 md:pb-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:px-6">
          <Reveal>
            <h2 id="built-for-heading" className="text-balance text-3xl font-semibold text-foreground md:text-4xl">
              Made for
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <UseCaseTiles segment={segment} />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="families-heading" className="bg-muted/50 py-20 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
          <Reveal className="flex max-w-2xl flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground">
              {families.length} module {families.length === 1 ? "family" : "families"}
            </p>
            <h2 id="families-heading" className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
              Pick the panel that fits your roof
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Each outline is drawn to the same scale, so you can compare sizes at a glance.
            </p>
          </Reveal>
          <div className="flex flex-col gap-6">
            {families.map((f, i) => (
              <Reveal key={f.model} delay={0.05 + i * 0.05}>
                <FamilyCard family={f} scaleLengthMm={scaleLengthMm} badges={badgesFor(f, families)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="shared-heading" className="bg-background py-20 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
          <Reveal className="flex max-w-2xl flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground">Every panel in the range</p>
            <h2 id="shared-heading" className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
              Built to last 30 years
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((h) => (
                <li key={h.title} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <h.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-foreground">{h.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-8 rounded-3xl bg-forest p-8 text-primary-foreground md:p-12">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <h3 className="text-2xl font-semibold md:text-3xl">Warranty you can plan around</h3>
              <p className="text-sm text-primary-foreground/70">
                {WARRANTY.productYears}-year product warranty · {WARRANTY.performanceYears}-year linear power warranty
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative h-3 overflow-hidden rounded-full bg-primary-foreground/15">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-primary-foreground/60"
                  style={{ width: `${(WARRANTY.productYears / WARRANTY.performanceYears) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-sm tabular-nums">
                <span>
                  <span className="block text-2xl font-semibold">{year1}%</span>
                  <span className="text-primary-foreground/70">power after year 1</span>
                </span>
                <span className="text-center">
                  <span className="block text-2xl font-semibold">{WARRANTY.productYears} yr</span>
                  <span className="text-primary-foreground/70">product cover</span>
                </span>
                <span className="text-right">
                  <span className="block text-2xl font-semibold">{finalYear.toFixed(1)}%</span>
                  <span className="text-primary-foreground/70">power at year {WARRANTY.performanceYears}</span>
                </span>
              </div>
            </div>
          </Reveal>

          <details className="group rounded-2xl border border-border bg-card">
            <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-medium text-foreground [&::-webkit-details-marker]:hidden">
              All shared specifications
              <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <dl className="grid gap-x-10 px-6 pb-6 sm:grid-cols-2">
              {COMMON_SPECS.map((s) => (
                <div key={s.label} className="flex justify-between gap-6 border-t border-border py-3 text-sm">
                  <dt className="text-muted-foreground">{s.label}</dt>
                  <dd className="text-right font-medium text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
          </details>
        </div>
      </section>

      <section aria-labelledby="others-heading" className="border-t border-border bg-background py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:px-6">
          <h2 id="others-heading" className="text-3xl font-semibold text-foreground">
            Other applications
          </h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {others.map((o) => (
              <li key={o.slug}>
                <SegmentCard segment={o} compact />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta />
    </>
  )
}
