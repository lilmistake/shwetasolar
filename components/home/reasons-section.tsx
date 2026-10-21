import { Factory, ShieldCheck, SunMedium, Clock } from "lucide-react"

const REASONS = [
  {
    icon: Factory,
    title: "Straight from the factory",
    body: "You deal with the manufacturer, not a trader. Better pricing, clear answers and no guesswork on where your panels came from.",
  },
  {
    icon: ShieldCheck,
    title: "Every panel is tested",
    body: "Each panel is checked by camera and power-tested before it leaves. The results travel with it, so you know exactly what you're installing.",
  },
  {
    icon: SunMedium,
    title: "Built for Indian conditions",
    body: "Glass on both sides keeps out heat, dust and moisture, and the back of the panel collects extra light reflected off the roof or ground.",
  },
  {
    icon: Clock,
    title: "Backed for 30 years",
    body: "A long performance warranty means your investment keeps paying back for decades, not just a few years.",
  },
]

export function ReasonsSection() {
  return (
    <section aria-labelledby="reasons-heading" className="bg-background py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
        <h2 id="reasons-heading" className="max-w-2xl font-sans text-3xl font-semibold tracking-tight text-forest text-balance md:text-4xl">
          Why businesses choose Shweta Solar
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {REASONS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/25 text-forest">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-sans text-lg font-semibold text-forest">{title}</h3>
              <p className="leading-relaxed text-muted-foreground text-pretty">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
