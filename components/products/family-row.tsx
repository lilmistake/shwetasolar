import type { ModuleFamily } from "@/lib/products"
import { PowerRangeBar } from "@/components/products/power-range-bar"

export function FamilyRow({ family: f }: { family: ModuleFamily }) {
  const specs: [string, string][] = [
    ["Max efficiency", `${f.maxEfficiency}%`],
    ["Bifacial output", `up to ${f.bifacialMaxW} W`],
    ["Power classes", `${f.bins} bins`],
    ["Cell size", f.cellSize],
    ["Dimensions", `${f.lengthMm} × ${f.widthMm} × ${f.depthMm} mm`],
    ["Weight", `${f.weightKg} kg`],
    ["Temp. coeff. Pmax", f.tempCoeffPmax],
    ["Per pallet", `${f.palletPcs} pcs`],
  ]

  return (
    <article
      id={f.model.toLowerCase()}
      className="grid scroll-mt-28 gap-8 rounded-3xl border border-border bg-card p-6 md:p-8 lg:grid-cols-5 lg:gap-12"
    >
      <div className="flex flex-col gap-6 lg:col-span-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-semibold text-foreground md:text-3xl">{f.model}</h3>
          <p className="text-sm text-muted-foreground">
            {f.cells}-cell · {f.platform} · {f.busbars}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-4xl font-semibold text-foreground">
            {f.minW}
            <span className="text-muted-foreground">–</span>
            {f.maxW}
            <span className="ml-1 text-xl text-muted-foreground">W</span>
          </p>
          <PowerRangeBar minW={f.minW} maxW={f.maxW} />
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-x-6 sm:grid-cols-4 lg:col-span-3">
        {specs.map(([label, value]) => (
          <div key={label} className="flex flex-col gap-1 border-t border-border py-4">
            <dt className="text-xs text-muted-foreground">{label}</dt>
            <dd className="text-sm font-medium leading-snug text-foreground">{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}
