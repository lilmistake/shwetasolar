import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Check, Download } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { ClosingCta } from "@/components/home/closing-cta"
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
        title={`${segment.name} TOPCon modules`}
        intro={segment.description}
        image={segment.image}
        actions={
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-forest px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-olive"
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

      <section aria-label="Overview" className="bg-background pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-3 md:px-6">
          <div className="flex flex-col justify-between gap-10 rounded-3xl bg-forest p-7 text-primary-foreground md:p-10">
            <p className="text-sm font-medium text-primary-foreground/70">Power range</p>
            <p className="whitespace-nowrap text-4xl font-semibold lg:text-5xl">{segment.powerRange}</p>
          </div>
          <ul className="grid gap-x-8 rounded-3xl border border-border bg-muted p-7 sm:grid-cols-2 md:col-span-2 md:p-10">
            {segment.useCases.map((u) => (
              <li key={u} className="flex gap-3 border-b border-border py-3 last:border-0 sm:[&:nth-last-child(2)]:border-0">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-background text-primary">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="leading-relaxed text-foreground">{u}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="families-heading" className="border-t border-border bg-background py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground">Specifications</p>
            <h2 id="families-heading" className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
              Module families
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {families.map((f) => (
              <article
                key={f.model}
                id={f.model.toLowerCase()}
                className="flex scroll-mt-28 flex-col gap-6 rounded-3xl border border-border bg-muted p-7 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-3xl font-semibold text-foreground">{f.model}</h3>
                    <p className="text-sm text-muted-foreground">
                      {f.cells}-cell · {f.platform} · {f.busbars}
                    </p>
                  </div>
                  <p className="shrink-0 rounded-full bg-background px-4 py-2 text-sm font-semibold text-foreground">
                    {f.minW}–{f.maxW} W
                  </p>
                </div>
                <dl className="grid grid-cols-2 gap-x-6">
                  {[
                    ["Max efficiency", `${f.maxEfficiency}%`],
                    ["Power classes", `${f.bins} bins`],
                    ["Bifacial output", `up to ${f.bifacialMaxW} W`],
                    ["Cell size", f.cellSize],
                    ["Dimensions", `${f.lengthMm} × ${f.widthMm} × ${f.depthMm} mm`],
                    ["Weight", `${f.weightKg} kg`],
                    ["Temp. coeff. Pmax", f.tempCoeffPmax],
                    ["Per pallet", `${f.palletPcs} pcs`],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-0.5 border-b border-border py-2.5">
                      <dt className="text-xs text-muted-foreground">{label}</dt>
                      <dd className="text-sm font-medium text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="shared-heading" className="border-t border-border bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground">Shared across the range</p>
            <h2 id="shared-heading" className="text-balance text-4xl font-semibold text-foreground">
              Construction and warranty
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {WARRANTY.productYears}-year product warranty and {WARRANTY.performanceYears}-year linear performance
              warranty, {WARRANTY.firstYearDegradation} in year one and {WARRANTY.annualDegradation} per year after.
            </p>
          </div>
          <dl className="grid gap-x-8 sm:grid-cols-2 lg:col-span-2">
            {COMMON_SPECS.map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5 border-b border-border py-3">
                <dt className="text-xs text-muted-foreground">{s.label}</dt>
                <dd className="text-sm font-medium text-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="others-heading" className="border-t border-border bg-background py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:px-6">
          <h2 id="others-heading" className="text-2xl font-semibold text-foreground">
            Other applications
          </h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/products/${o.slug}`}
                  className="group flex items-center justify-between gap-6 rounded-3xl border border-border bg-muted p-7 transition-colors hover:border-foreground/30"
                >
                  <span className="flex flex-col gap-1">
                    <span className="text-xl font-semibold text-foreground">{o.name}</span>
                    <span className="text-sm text-muted-foreground">{o.powerRange}</span>
                  </span>
                  <ArrowRight
                    className="size-5 text-foreground transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta />
    </>
  )
}
