import { Factory, ShieldCheck, FileCheck2, Truck } from "lucide-react"

const ITEMS = [
  { icon: Factory, label: "Tier-1 Manufacturer" },
  { icon: ShieldCheck, label: "1.2 GW Annual Capacity" },
  { icon: FileCheck2, label: "Test Reports & Datasheets on Request" },
  { icon: Truck, label: "Pan-India Dispatch" },
]

export function TrustBar() {
  return (
    <section aria-label="Manufacturer credentials" className="border-b border-border bg-muted">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-5 md:grid-cols-4">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <item.icon className="h-6 w-6 shrink-0 text-olive" aria-hidden="true" />
            <span className="text-sm font-medium text-forest">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
