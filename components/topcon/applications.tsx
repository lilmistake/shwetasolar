import { Sun, Building, Home, Grid3x3 } from "lucide-react"

const APPS = [
  { icon: Sun, label: "Utility-scale solar parks" },
  { icon: Building, label: "Commercial & industrial rooftops" },
  { icon: Home, label: "High-efficiency residential" },
  { icon: Grid3x3, label: "Bifacial ground-mount arrays" },
]

export function Applications() {
  return (
    <section id="applications" className="bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-forest md:text-4xl">Where these modules perform</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {APPS.map((app) => (
            <div
              key={app.label}
              className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest">
                <app.icon className="h-7 w-7 text-cream" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-forest">{app.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
