import Image from "next/image"
import { CERTIFICATIONS, FACTORY_PHOTOS } from "@/lib/site"
import { COMMON_SPECS, WARRANTY } from "@/lib/products"

const WARRANTY_ROWS = [
  { label: "Product warranty", value: `${WARRANTY.productYears} years` },
  { label: "Performance warranty", value: `${WARRANTY.performanceYears} years, linear` },
  { label: "First-year degradation", value: WARRANTY.firstYearDegradation },
  { label: "Annual degradation", value: WARRANTY.annualDegradation },
  { label: "Output at year 30", value: WARRANTY.year30Output },
]

export function SpecsBand() {
  return (
    <section aria-labelledby="specs-heading" className="bg-muted py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-olive">Built the same across the range</p>
            <h2 id="specs-heading" className="font-display text-4xl uppercase text-forest text-balance md:text-5xl">
              Glass on both sides, warranted for 30 years
            </h2>
            <p className="max-w-xl leading-relaxed text-muted-foreground text-pretty">
              Every Shweta Solar module shares the same n-type cell platform, double-glass construction and warranty
              terms. Only size and power change between families.
            </p>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
            <Image
              src={FACTORY_PHOTOS.busbarMacro.src}
              alt={FACTORY_PHOTOS.busbarMacro.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-card p-6 lg:col-span-2 md:p-8">
            <h3 className="mb-4 font-display text-2xl uppercase text-forest">Common specifications</h3>
            <dl className="grid gap-x-8 sm:grid-cols-2">
              {COMMON_SPECS.map((spec) => (
                <div key={spec.label} className="flex flex-col gap-0.5 border-b border-border py-3">
                  <dt className="text-xs uppercase tracking-wider text-olive">{spec.label}</dt>
                  <dd className="text-sm font-medium text-forest">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-forest p-6 text-primary-foreground md:p-8">
              <h3 className="mb-4 font-display text-2xl uppercase">Warranty</h3>
              <dl className="flex flex-col">
                {WARRANTY_ROWS.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4 border-b border-white/15 py-2.5 last:border-0">
                    <dt className="text-sm text-white/75">{row.label}</dt>
                    <dd className="font-display text-xl">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-2xl bg-card p-6 md:p-8">
              <h3 className="mb-4 font-display text-2xl uppercase text-forest">Compliance</h3>
              <ul className="flex flex-col gap-2.5">
                {CERTIFICATIONS.map((c) => (
                  <li key={c.label} className="flex flex-col">
                    <span className="text-sm font-medium text-forest">{c.label}</span>
                    <span className="text-xs text-olive">{c.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
