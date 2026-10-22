import Link from "next/link"
import { Download } from "lucide-react"
import type { ModuleFamily } from "@/lib/products"
import { ModuleOutline } from "@/components/products/module-outline"

export function FamilyCard({
  family: f,
  scaleLengthMm,
  badges,
  datasheetHref,
}: {
  family: ModuleFamily
  scaleLengthMm: number
  badges: string[]
  datasheetHref: string
}) {
  const specs: [string, string][] = [
    ["Efficiency", `up to ${f.maxEfficiency}%`],
    ["Weight", `${f.weightKg} kg`],
    ["Size", `${f.lengthMm} × ${f.widthMm} mm`],
    ["Cells", `${f.cells} half-cut`],
  ]

  return (
    <article id={f.model.toLowerCase()} className="flex h-full scroll-mt-28 flex-col gap-6 p-6 md:p-8">
      <div className="relative flex h-80 items-end justify-center rounded-xl bg-muted px-6 pb-6 pt-10">
        {badges.map((b) => (
          <span
            key={b}
            className="absolute left-4 top-4 rounded-full bg-forest px-3 py-1 text-xs font-semibold text-primary-foreground"
          >
            {b}
          </span>
        ))}
        <ModuleOutline family={f} scaleLengthMm={scaleLengthMm} tone="light" />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">
          {f.platform} TOPCon · {f.busbars}
        </p>
        <h3 className="text-xl font-semibold tracking-wide text-foreground">{f.model}</h3>
      </div>

      <p className="text-3xl font-semibold tabular-nums text-foreground">
        {f.minW}–{f.maxW}
        <span className="ml-1 text-base font-medium text-muted-foreground">W</span>
      </p>

      <dl className="flex flex-col border-t border-border">
        {specs.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 border-b border-border py-3 text-sm">
            <dt className="text-muted-foreground">{label}</dt>
            <dd className="text-right font-medium tabular-nums text-foreground">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-auto flex gap-2">
        <Link
          href={`/contact?product=${encodeURIComponent(f.model)}`}
          className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-olive"
        >
          Get a quote
        </Link>
        <a
          href={datasheetHref}
          download
          aria-label={`Download ${f.model} datasheet`}
          className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground/40"
        >
          <Download className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
