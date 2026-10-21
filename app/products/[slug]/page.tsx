import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, Download } from "lucide-react"
import { Breadcrumbs } from "@/components/site/breadcrumbs"
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

      <section className="bg-background pt-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: segment.name, path: `/products/${segment.slug}` },
              ]}
            />
            <h1 className="font-semibold tracking-tight text-5xl leading-[1.05] text-forest text-balance md:text-6xl">
              {segment.name} TOPCon modules
            </h1>
            <p className="font-semibold tracking-tight text-5xl text-olive">{segment.powerRange}</p>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">{segment.description}</p>
            <ul className="flex flex-col gap-2">
              {segment.useCases.map((u) => (
                <li key={u} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-olive" aria-hidden="true" />
                  <span className="text-forest">{u}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="rounded-full bg-forest px-6 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-olive"
              >
                Get a quote
              </Link>
              <a
                href={segment.datasheet}
                className="inline-flex items-center gap-2 rounded-full border border-forest px-6 py-3.5 font-semibold text-forest transition-colors hover:bg-forest hover:text-primary-foreground"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {segment.shortName} datasheet
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src={segment.image.src} alt={segment.image.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section aria-labelledby="families-heading" className="bg-muted py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:px-6">
          <h2 id="families-heading" className="font-semibold tracking-tight text-4xl text-forest">
            Module families
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {families.map((f) => (
              <article key={f.model} id={f.model.toLowerCase()} className="flex scroll-mt-28 flex-col gap-5 rounded-2xl bg-card p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold tracking-tight text-3xl text-forest">{f.model}</h3>
                    <p className="text-sm text-olive">
                      {f.cells}-cell · {f.platform} · {f.busbars}
                    </p>
                  </div>
                  <p className="text-right font-semibold tracking-tight text-3xl text-olive">
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
                      <dt className="text-xs uppercase tracking-wider text-olive">{label}</dt>
                      <dd className="text-sm font-medium text-forest">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="shared-heading" className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-3">
          <div className="flex flex-col gap-3">
            <h2 id="shared-heading" className="font-semibold tracking-tight text-4xl text-forest text-balance">
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
                <dt className="text-xs uppercase tracking-wider text-olive">{s.label}</dt>
                <dd className="text-sm font-medium text-forest">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-label="Other applications" className="border-t border-border bg-background py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 md:px-6">
          <span className="text-sm text-olive">Also see:</span>
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/products/${o.slug}`}
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-forest transition-colors hover:border-forest"
            >
              {o.name} · {o.powerRange}
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
