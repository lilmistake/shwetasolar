import { Check, Minus } from "lucide-react"
import { SectionCta } from "@/components/topcon/cta-buttons"

const ROWS: { label: string; topcon: string; perc: string; topconWins?: boolean }[] = [
  { label: "Cell type", topcon: "N-type TOPCon", perc: "P-type PERC" },
  { label: "Module efficiency", topcon: "Up to 24.39%", perc: "~21–22%", topconWins: true },
  { label: "Temperature coefficient", topcon: "−0.29%/°C", perc: "~−0.35%/°C", topconWins: true },
  { label: "Bifaciality", topcon: "Up to 80%", perc: "~70% (bifacial) / none", topconWins: true },
  { label: "Light-induced degradation", topcon: "Zero LID", perc: "Present", topconWins: true },
  { label: "Annual degradation", topcon: "≤0.4%", perc: "~0.55%", topconWins: true },
  { label: "Construction", topcon: "Glass-to-glass", perc: "Usually glass-backsheet", topconWins: true },
  { label: "Performance warranty", topcon: "30 years", perc: "25 years", topconWins: true },
]

export function Comparison() {
  return (
    <section id="compare" className="bg-background">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">TOPCon vs PERC</p>
        <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-none text-forest md:text-6xl">
          Same roof. More generation.
        </h2>

        <div className="mt-10 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Shweta Solar TOPCon G2G compared with typical Mono PERC modules</caption>
            <thead>
              <tr className="bg-muted/60">
                <th scope="col" className="px-4 py-3 font-medium text-muted-foreground">
                  Spec
                </th>
                <th scope="col" className="bg-forest px-4 py-3 font-semibold text-cream">
                  Shweta TOPCon G2G
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-muted-foreground">
                  Typical Mono PERC
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.label} className="border-t border-border">
                  <th scope="row" className="px-4 py-3 font-medium text-forest">
                    {r.label}
                  </th>
                  <td className="bg-forest/5 px-4 py-3 font-semibold text-forest">
                    <span className="inline-flex items-center gap-1.5">
                      {r.topconWins ? <Check className="h-4 w-4 shrink-0 text-olive" aria-hidden /> : null}
                      {r.topcon}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      {r.topconWins ? <Minus className="h-4 w-4 shrink-0" aria-hidden /> : null}
                      {r.perc}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">PERC values are typical industry figures for comparison.</p>

        <SectionCta source="comparison" prompt="Switching from PERC? Get a like-for-like price." />
      </div>
    </section>
  )
}
