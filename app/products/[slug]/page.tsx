import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, Download } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { Reveal } from "@/components/topcon/reveal"
import { ClosingCta } from "@/components/home/closing-cta"
import { FamilyRow } from "@/components/products/family-row"
import { SegmentCard } from "@/components/products/segment-card"
import { COMMON_SPECS, SEGMENTS, WARRANTY, familiesFor, getSegment, type SegmentSlug } from "@/lib/products"
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

export default async function SegmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const segment = getSegment(slug)
  if (!segment) notFound()

  const families = familiesFor(segment.slug as SegmentSlug)
  const others = SEGMENTS.filter((s) => s.slug !== segment.slug)
  const topEfficiency = Math.max(...families.map((f) => f.maxEfficiency))

  const glance = [
    { value: segment.powerRange, label: "Power range" },
    { value: `${topEfficiency}%`, label: "Peak efficiency" },
    { value: String(families.length), label: families.length === 1 ? "Module family" : "Module families" },
    { value: `${WARRANTY.performanceYears} yr`, label: "Performance warranty" },
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

      <section aria-labelledby="glance-heading" className="bg-background pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="grid gap-10 rounded-3xl bg-forest p-8 text-primary-foreground md:p-12 lg:grid-cols-5 lg:gap-16">
            <div className="flex flex-col gap-6 lg:col-span-2">
              <h2 id="glance-heading" className="text-balance text-3xl font-semibold">
                Built for
              </h2>
              <ul className="flex flex-col gap-3">
                {segment.useCases.map((u) => (
                  <li key={u} className="flex items-center gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="leading-relaxed">{u}</span>
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:col-span-3">
              {glance.map((g) => (
                <div key={g.label} className="flex flex-col gap-2 border-t border-primary-foreground/20 pt-5">
                  <dt className="order-2 text-sm text-primary-foreground/70">{g.label}</dt>
                  <dd className="order-1 whitespace-nowrap text-3xl font-semibold md:text-4xl">{g.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="families-heading" className="bg-muted py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium text-muted-foreground">Specifications</p>
              <h2 id="families-heading" className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
                Module families
              </h2>
            </div>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Front-side STC ratings. Each bar shows where a family sits in our full TOPCon range.
            </p>
          </Reveal>
          <div className="flex flex-col gap-4">
            {families.map((f, i) => (
              <Reveal key={f.model} delay={0.05 + i * 0.05}>
                <FamilyRow family={f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="shared-heading" className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-3">
          <Reveal className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium text-muted-foreground">Shared across the range</p>
              <h2 id="shared-heading" className="text-balance text-4xl font-semibold text-foreground">
                Construction and warranty
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-5">
                <p className="text-3xl font-semibold text-foreground">{WARRANTY.productYears} yr</p>
                <p className="text-sm text-muted-foreground">Product warranty</p>
              </div>
              <div className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-5">
                <p className="text-3xl font-semibold text-foreground">{WARRANTY.performanceYears} yr</p>
                <p className="text-sm text-muted-foreground">Linear performance</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {WARRANTY.firstYearDegradation} degradation in year one and {WARRANTY.annualDegradation} per year after.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2">
            <dl className="grid gap-x-10 sm:grid-cols-2">
              {COMMON_SPECS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 border-t border-border py-4">
                  <dt className="text-xs text-muted-foreground">{s.label}</dt>
                  <dd className="text-sm font-medium leading-snug text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
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
