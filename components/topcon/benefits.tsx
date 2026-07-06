import { Sun, Layers, ShieldCheck, Thermometer, CloudRain } from "lucide-react"

const BENEFITS = [
  {
    icon: Sun,
    title: "More power per sq. ft.",
    body: "Up to 24.5% efficiency means fewer panels, lower balance-of-system cost, and more output from the same roof or land.",
  },
  {
    icon: Layers,
    title: "Generates from both sides",
    body: "Bifacial glass-to-glass construction captures reflected light for up to 30% more energy over the system lifetime.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last 30 years",
    body: "Glass-to-glass build, a 30-year performance warranty and Zero LID keep degradation low decade after decade.",
  },
  {
    icon: Thermometer,
    title: "Performs in Indian heat",
    body: "A low −0.29%/°C temperature coefficient holds output steady on 45°C rooftops where lesser modules fade.",
  },
  {
    icon: CloudRain,
    title: "Low-light & monsoon capable",
    body: "Strong performance in cloudy, diffused and early-morning conditions for higher real-world yield.",
  },
]

export function Benefits() {
  return (
    <section id="why-topcon" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-forest md:text-4xl">
            Why N-Type TOPCon G2G modules win
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            The specs matter because of what they do for your project economics. Here is what TOPCon glass-to-glass
            delivers in the field.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
                <b.icon className="h-6 w-6 text-olive" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-forest">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
