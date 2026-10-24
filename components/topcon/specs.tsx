import { DatasheetCapture } from "@/components/topcon/datasheet-capture"

const SPECS: { label: string; value: string }[] = [
  { label: "Cell technology", value: "N-Type TOPCon, half-cut, 16/18BB" },
  { label: "Power range", value: "395 W – 725 W" },
  { label: "Module efficiency", value: "Up to 24.39%" },
  { label: "Construction", value: "Bifacial glass-to-glass" },
  { label: "Bifaciality", value: "Up to 80%" },
  { label: "Temperature coefficient (Pmax)", value: "−0.29%/°C" },
  { label: "Max system voltage", value: "1500 V DC" },
  { label: "Operating temperature", value: "−40 °C to +85 °C" },
  { label: "Warranty", value: "12-yr product · 30-yr performance" },
]

export function Specs() {
  return (
    <section id="specs" className="bg-muted/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">Specifications</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-none text-forest md:text-6xl">
            The numbers your engineer will ask for.
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Ten module families from 108 to 156 cells. Get the full datasheet with electrical, mechanical and
            packing data for every wattage.
          </p>
          <div className="mt-8">
            <DatasheetCapture />
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">TOPCon G2G module specifications</caption>
            <tbody>
              {SPECS.map((s, i) => (
                <tr key={s.label} className={i > 0 ? "border-t border-border" : undefined}>
                  <th scope="row" className="px-4 py-3.5 font-normal text-muted-foreground md:px-6">
                    {s.label}
                  </th>
                  <td className="px-4 py-3.5 text-right font-semibold text-forest md:px-6">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
