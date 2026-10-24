import { Layers, Maximize, ShieldCheck, Thermometer, CloudSun } from "lucide-react"
import { SectionCta } from "@/components/topcon/cta-buttons"

const BENEFITS = [
  {
    icon: Layers,
    title: "Bifacial gain",
    stat: "Up to 80%",
    statLabel: "bifaciality",
    body: "The glass rear captures reflected light, adding extra generation on light roofs and ground mounts.",
    saving: "More units from the same kW you pay for.",
  },
  {
    icon: Maximize,
    title: "More power per sq ft",
    stat: "24.39%",
    statLabel: "efficiency",
    body: "Fewer panels for the same capacity, so less structure, cabling and labour on every project.",
    saving: "Lower balance-of-system cost per watt.",
  },
  {
    icon: ShieldCheck,
    title: "30-year life",
    stat: "≤0.4%",
    statLabel: "annual degradation",
    body: "Glass-to-glass construction resists moisture, PID and micro-cracks far longer than glass-backsheet.",
    saving: "5 more years of output than a 25-yr module.",
  },
  {
    icon: Thermometer,
    title: "Holds up in Indian heat",
    stat: "−0.29%/°C",
    statLabel: "temp. coefficient",
    body: "Loses less power on 45 °C rooftops than PERC modules rated around −0.35%/°C.",
    saving: "Higher summer generation when tariffs peak.",
  },
  {
    icon: CloudSun,
    title: "Low-light performance",
    stat: "Earlier",
    statLabel: "start-up each day",
    body: "N-type cells start generating earlier in the morning and keep going through haze and monsoon cloud.",
    saving: "More kWh across the whole year, not just at noon.",
  },
]

export function Benefits() {
  return (
    <section id="why-topcon" className="bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">Why TOPCon G2G</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-none text-forest md:text-6xl">
            Every spec is a saving on your project.
          </h2>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {BENEFITS.map((b) => (
            <li key={b.title} className="flex flex-col rounded-xl border border-border bg-card p-5">
              <b.icon className="h-6 w-6 text-olive" aria-hidden />
              <h3 className="mt-4 font-semibold text-forest">{b.title}</h3>
              <p className="mt-3 font-display text-3xl font-bold leading-none text-forest">{b.stat}</p>
              <p className="mt-1 text-xs text-muted-foreground">{b.statLabel}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              <p className="mt-4 border-t border-border pt-3 text-sm font-semibold text-forest">{b.saving}</p>
            </li>
          ))}
        </ul>

        <SectionCta source="benefits" prompt="See what TOPCon G2G costs for your capacity." />
      </div>
    </section>
  )
}
