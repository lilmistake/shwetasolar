import { ChevronDown } from "lucide-react"
import type { ModuleFamily } from "@/lib/products"
import { ModuleOutline } from "@/components/products/module-outline"

export function FamilyCard({
  family: f,
  scaleLengthMm,
  badges,
  powerScale,
}: {
  family: ModuleFamily
  scaleLengthMm: number
  badges: string[]
  powerScale: { min: number; max: number }
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

  const span = Math.max(powerScale.max - powerScale.min, 1)
  const barStart = ((f.minW - powerScale.min) / span) * 100
  const barWidth = Math.max(((f.maxW - f.minW) / span) * 100, 6)

  return (
    <article
      id={f.model.toLowerCase()}
      className="flex h-full scroll-mt-28 flex-col rounded-3xl bg-primary-foreground/5 p-2 ring-1 ring-primary-foreground/10"
    >
      <div className="flex items-start justify-between gap-3 px-4 pt-4">
        <h3 className="text-lg font-semibold tracking-wide text-primary-foreground">{f.model}</h3>
        {badges.map((b) => (
          <span key={b} className="rounded-full bg-primary-foreground px-3 py-1 text-xs font-semibold text-forest">
            {b}
          </span>
        ))}
      </div>

      <div className="flex h-72 items-end justify-center px-4 pb-6 pt-4">
        <ModuleOutline family={f} scaleLengthMm={scaleLengthMm} />
      </div>

      <div className="flex flex-1 flex-col gap-6 rounded-2xl bg-card p-6">
        <div className="flex flex-col gap-3">
          <p className="text-4xl font-semibold tabular-nums text-foreground">
            {f.minW}–{f.maxW}
            <span className="ml-1.5 text-lg text-muted-foreground">W</span>
          </p>
          <div className="flex flex-col gap-1.5">
            <div className="relative h-1.5 rounded-full bg-muted" aria-hidden="true">
              <span
                className="absolute inset-y-0 rounded-full bg-primary"
                style={{ left: `${barStart}%`, width: `${barWidth}%` }}
              />
            </div>
            <div className="flex justify-between text-xs tabular-nums text-muted-foreground">
              <span>{powerScale.min} W</span>
              <span>{powerScale.max} W</span>
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-2">
          {keyStats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 rounded-xl bg-muted/60 p-3">
              <dt className="order-2 text-xs text-muted-foreground">{s.label}</dt>
              <dd className="order-1 font-semibold tabular-nums text-foreground">{s.value}</dd>
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
