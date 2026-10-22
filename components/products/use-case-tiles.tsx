import {
  BatteryCharging,
  Building,
  Building2,
  Droplets,
  Factory,
  FileCheck,
  Home,
  type LucideIcon,
  Mountain,
  RotateCw,
  School,
  Sun,
  Warehouse,
  Zap,
} from "lucide-react"
import type { Segment } from "@/lib/products"

const ICONS: Record<string, LucideIcon> = {
  "Home rooftops": Home,
  "PM Surya Ghar": FileCheck,
  "Solar pumps": Droplets,
  "Small off-grid systems": BatteryCharging,
  "Factory rooftops": Factory,
  Warehouses: Warehouse,
  Institutions: School,
  "Large residential buildings": Building2,
  "Solar parks": Sun,
  "Ground-mount arrays": Mountain,
  "Single-axis trackers": RotateCw,
  "Open-access projects": Zap,
}

export function UseCaseTiles({ segment }: { segment: Segment }) {
  return (
    <ul className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
      {segment.useCases.map((u) => {
        const Icon = ICONS[u] ?? Building
        return (
          <li key={u} className="flex items-center gap-4 rounded-2xl bg-primary/10 p-4 md:p-5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="font-semibold leading-snug text-foreground">{u}</span>
          </li>
        )
      })}
    </ul>
  )
}
