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
    { value: `${f.maxEfficiency}%`, label: "Efficiency" },
    { value: `${f.weightKg} kg`, label: "Weight" },
    { value: `${f.bifacialMaxW} W`, label: "Bifacial peak" },
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
    <article id={f.model.toLowerCase()} className="flex h-full scroll-mt-28 flex-col gap-8">
      <div className="flex h-72 items-end justify-center">
        <ModuleOutline family={f} scaleLengthMm={scaleLengthMm} />
      </div>

      <div className="flex flex-1 flex-col gap-6 rounded-3xl bg-card p-6 md:p-8">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm font-medium tracking-wide text-muted-foreground">{f.model}</h3>
            {badges.map((b) => (
              <span key={b} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {b}
              </span>
            ))}
          </div>
          <p className="text-4xl font-semibold tabular-nums text-foreground md:text-5xl">
            {f.minW}–{f.maxW}
            <span className="ml-1.5 text-xl text-muted-foreground">W</span>
          </p>
        </div>

        <dl className="grid grid-cols-3 gap-3 border-t border-border pt-5">
          {keyStats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <dt className="order-2 text-xs text-muted-foreground">{s.label}</dt>
              <dd className="order-1 text-lg font-semibold tabular-nums text-foreground">{s.value}</dd>
            </div>
          ))}
        </dl>

        <details className="group mt-auto border-t border-border pt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
            Full specifications
            <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <dl className="mt-3 flex flex-col">
            {fullSpecs.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 border-b border-border py-2.5 text-sm last:border-b-0">
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
