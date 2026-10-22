import Link from "next/link"
import { Download } from "lucide-react"
import type { ModuleFamily } from "@/lib/products"
import { ModuleOutline } from "@/components/products/module-outline"

export function badgesFor(f: ModuleFamily, all: ModuleFamily[]) {
  const badges: string[] = []
  if (f.weightKg === Math.min(...all.map((x) => x.weightKg))) badges.push("Lightest")
  if (f.maxEfficiency === Math.max(...all.map((x) => x.maxEfficiency))) badges.push("Most efficient")
  if (f.widthMm === Math.max(...all.map((x) => x.widthMm))) badges.push("Wide format")
  if (f.lengthMm === Math.min(...all.map((x) => x.lengthMm))) badges.push("Compact length")
  return badges.slice(0, 1)
}

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
    <article id={f.model.toLowerCase()} className="flex h-full scroll-mt-28 flex-col gap-4 p-5">
      <div className="relative flex h-44 items-end justify-center rounded-lg bg-muted px-4 pb-3 pt-6">
        {badges.map((b) => (
          <span
            key={b}
            className="absolute left-3 top-3 rounded-full bg-forest px-2.5 py-0.5 text-xs font-semibold text-primary-foreground"
          >
            {b}
          </span>
        ))}
        <ModuleOutline family={f} scaleLengthMm={scaleLengthMm} tone="light" maxHeightPx={112} />
      </div>

      <div className="flex items-end justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-lg font-semibold tracking-wide text-foreground">{f.model}</h3>
          <p className="text-xs text-muted-foreground">
            {f.platform} TOPCon · {f.busbars}
          </p>
        </div>
        <p className="shrink-0 text-2xl font-semibold tabular-nums text-foreground">
          {f.minW}–{f.maxW}
          <span className="ml-1 text-sm font-medium text-muted-foreground">W</span>
        </p>
      </div>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border pt-3">
        {specs.map(([label, value]) => (
          <div key={label} className="flex flex-col gap-0.5">
            <dt className="text-xs text-muted-foreground">{label}</dt>
            <dd className="text-sm font-medium tabular-nums text-foreground">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-auto flex gap-2 pt-1">
        <Link
          href={`/contact?product=${encodeURIComponent(f.model)}`}
          className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-olive"
        >
          Get a quote
        </Link>
        <a
          href={datasheetHref}
          download
          aria-label={`Download ${f.model} datasheet`}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground/40"
        >
          <Download className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
