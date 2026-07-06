import { ArrowRight } from "lucide-react"
import { QuoteButton } from "@/components/topcon/cta-buttons"

const SPECS: { label: string; value: string }[] = [
  { label: "Cell Type", value: "N-Type TOPCon (Tunnel Oxide Passivated Contact)" },
  { label: "Power Output", value: "450 W – 600 W" },
  { label: "Module Efficiency", value: "Up to 24.5%" },
  { label: "Dimensions", value: "2278 × 1134 × 35 mm" },
  { label: "Weight", value: "29.5 kg" },
  { label: "Operating Temperature", value: "−40°C to +85°C" },
  { label: "Max System Voltage", value: "1500 V DC" },
  { label: "Temperature Coefficient", value: "−0.29%/°C" },
  { label: "Product Warranty", value: "15 years" },
  { label: "Performance Warranty", value: "30 years" },
  { label: "Construction", value: "Bifacial, Glass-to-Glass" },
]

export function Specs() {
  return (
    <section id="specs" className="bg-muted">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-forest md:text-4xl">Technical specifications</h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Engineering-grade data for 450–600W N-Type TOPCon glass-to-glass bifacial modules.
          </p>
        </div>

        <dl className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          {SPECS.map((spec, i) => (
            <div
              key={spec.label}
              className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                i !== SPECS.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <dt className="text-sm font-medium text-muted-foreground">{spec.label}</dt>
              <dd className="text-sm font-semibold text-forest sm:text-right">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex justify-center">
          <QuoteButton source="specs" className="px-7 py-3.5">
            Get pricing for your required wattage
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </QuoteButton>
        </div>
      </div>
    </section>
  )
}
