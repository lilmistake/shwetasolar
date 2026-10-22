import { ChevronDown } from "lucide-react"
import type { ModuleFamily } from "@/lib/products"
import { ModuleOutline } from "@/components/products/module-outline"

export function FamilyCard({
  family: f,
  scaleLengthMm,
  badges,
}: {
  family: ModuleFamily
  scaleLengthMm: number
  badges: string[]
}) {
  const keyStats = [
    { value: `${f.maxEfficiency}%`, label: "Max efficiency" },
    { value: `${f.weightKg} kg`, label: "Weight" },
    { value: `${f.bifacialMaxW} W`, label: "With bifacial gain" },
  ]

  const fullSpecs: [string, string][] = [
    ["Cells", `${f.cells}, half-cut`],
    ["Cell platform", `${f.platform} · ${f.cellSize}`],
    ["Busbars", f.busbars],
    ["Power classes", `${f.bins} bins, 5 W steps`],
    ["Dimensions", `${f.lengthMm} × ${f.widthMm} × ${f.depthMm} mm`],
    ["Temp. coeff. Pmax", f.tempCoeffPmax],
    ["Per pallet", `${f.palletPcs} pcs`],
  ]

  return (
    <article
      id={f.model.toLowerCase()}
      className="grid scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
    >
      <div className="flex items-end justify-center bg-muted px-6 pb-8 pt-12">
        <ModuleOutline family={f} scaleLengthMm={scaleLengthMm} />
      </div>

      <div className="flex flex-col gap-8 p-6 md:p-10">
        <div className="flex flex-col gap-4">
          {badges.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <li key={b} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {b}
                </li>
              ))}
            </ul>
          )}
          <h3 className="text-sm font-medium tracking-wide text-muted-foreground">{f.model}</h3>
          <p className="text-5xl font-semibold tabular-nums text-foreground md:text-6xl">
            {f.minW}–{f.maxW}
            <span className="ml-2 text-2xl text-muted-foreground">W</span>
          </p>
        </div>

        <dl className="grid grid-cols-3 gap-4">
          {keyStats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <dt className="order-2 text-xs text-muted-foreground">{s.label}</dt>
              <dd className="order-1 text-xl font-semibold tabular-nums text-foreground md:text-2xl">{s.value}</dd>
            </div>
          ))}
        </dl>

        <details className="group mt-auto border-t border-border pt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
            Full specifications
            <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <dl className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {fullSpecs.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 border-b border-border py-2.5 text-sm">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="text-right font-medium text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </details>
      </div>
    </article>
  )
}
