export type SegmentSlug = "residential" | "commercial" | "utility"

export interface ModuleFamily {
  model: string
  segment: SegmentSlug
  minW: number
  maxW: number
  bins: number
  cells: number
  platform: "G12" | "G12R"
  cellSize: string
  busbars: string
  lengthMm: number
  widthMm: number
  depthMm: number
  weightKg: number
  maxEfficiency: number
  bifacialMaxW: number
  palletPcs: number
  tempCoeffPmax: string
}

export const FAMILIES: ModuleFamily[] = [
  { model: "SS84GTG-420", segment: "residential", minW: 395, maxW: 420, bins: 6, cells: 84, platform: "G12R", cellSize: "182 × 105 mm", busbars: "16BB", lengthMm: 1544, widthMm: 1134, depthMm: 30, weightKg: 21.5, maxEfficiency: 24.0, bifacialMaxW: 462, palletPcs: 40, tempCoeffPmax: "−0.300 %/°C" },
  { model: "SS84GTG-480", segment: "residential", minW: 445, maxW: 480, bins: 8, cells: 84, platform: "G12", cellSize: "210 × 105 mm", busbars: "18BB", lengthMm: 1544, widthMm: 1303, depthMm: 35, weightKg: 25.0, maxEfficiency: 23.89, bifacialMaxW: 529, palletPcs: 33, tempCoeffPmax: "−0.327 %/°C" },
  { model: "SS96GTG-480", segment: "residential", minW: 450, maxW: 480, bins: 7, cells: 96, platform: "G12R", cellSize: "182 × 105 mm", busbars: "16BB", lengthMm: 1762, widthMm: 1134, depthMm: 30, weightKg: 24.5, maxEfficiency: 24.12, bifacialMaxW: 528, palletPcs: 36, tempCoeffPmax: "−0.300 %/°C" },
  { model: "SS108GTG-540", segment: "commercial", minW: 500, maxW: 540, bins: 9, cells: 108, platform: "G12R", cellSize: "182 × 105 mm", busbars: "16BB", lengthMm: 1965, widthMm: 1134, depthMm: 30, weightKg: 27.5, maxEfficiency: 24.32, bifacialMaxW: 594, palletPcs: 36, tempCoeffPmax: "−0.300 %/°C" },
  { model: "SS96GTG-550", segment: "commercial", minW: 510, maxW: 550, bins: 9, cells: 96, platform: "G12", cellSize: "210 × 105 mm", busbars: "18BB", lengthMm: 1762, widthMm: 1303, depthMm: 35, weightKg: 28.6, maxEfficiency: 23.96, bifacialMaxW: 605, palletPcs: 33, tempCoeffPmax: "−0.327 %/°C" },
  { model: "SS120GTG-600", segment: "commercial", minW: 550, maxW: 600, bins: 11, cells: 120, platform: "G12R", cellSize: "182 × 105 mm", busbars: "16BB", lengthMm: 2170, widthMm: 1134, depthMm: 30, weightKg: 30.5, maxEfficiency: 24.39, bifacialMaxW: 660, palletPcs: 36, tempCoeffPmax: "−0.300 %/°C" },
  { model: "SS108GTG-615", segment: "commercial", minW: 560, maxW: 615, bins: 12, cells: 108, platform: "G12", cellSize: "210 × 105 mm", busbars: "18BB", lengthMm: 1965, widthMm: 1303, depthMm: 35, weightKg: 31.9, maxEfficiency: 24.04, bifacialMaxW: 677, palletPcs: 33, tempCoeffPmax: "−0.327 %/°C" },
  { model: "SS132GTG-650", segment: "utility", minW: 615, maxW: 650, bins: 8, cells: 132, platform: "G12R", cellSize: "182 × 105 mm", busbars: "16BB", lengthMm: 2383, widthMm: 1134, depthMm: 30, weightKg: 33.5, maxEfficiency: 24.07, bifacialMaxW: 715, palletPcs: 36, tempCoeffPmax: "−0.300 %/°C" },
  { model: "SS120GTG-685", segment: "utility", minW: 620, maxW: 685, bins: 14, cells: 120, platform: "G12", cellSize: "210 × 105 mm", busbars: "18BB", lengthMm: 2170, widthMm: 1303, depthMm: 35, weightKg: 35.2, maxEfficiency: 24.23, bifacialMaxW: 754, palletPcs: 33, tempCoeffPmax: "−0.327 %/°C" },
  { model: "SS132GTG-725", segment: "utility", minW: 685, maxW: 725, bins: 9, cells: 132, platform: "G12", cellSize: "210 × 105 mm", busbars: "18BB", lengthMm: 2383, widthMm: 1303, depthMm: 35, weightKg: 39.0, maxEfficiency: 23.37, bifacialMaxW: 798, palletPcs: 33, tempCoeffPmax: "−0.327 %/°C" },
]

export interface Segment {
  slug: SegmentSlug
  name: string
  shortName: string
  powerRange: string
  summary: string
  description: string
  useCases: string[]
  datasheet: string
  image: { src: string; alt: string }
}

export const SEGMENTS: Segment[] = [
  {
    slug: "residential",
    name: "Residential & small systems",
    shortName: "Residential",
    powerRange: "395–480 W",
    summary: "Compact, lighter modules for homes, PM Surya Ghar rooftops and solar pumps.",
    description:
      "For homes, PM Surya Ghar rooftops, solar pumps and small standalone systems, where module size and weight decide what is practical on the roof.",
    useCases: ["Home rooftops", "PM Surya Ghar", "Solar pumps", "Small off-grid systems"],
    datasheet: "/datasheets/shweta-solar-topcon-residential-2026.pdf",
    image: { src: "/images/factory/module-final-inspection.jpg", alt: "Technician inspecting a finished residential TOPCon module" },
  },
  {
    slug: "commercial",
    name: "Commercial & industrial rooftop",
    shortName: "Commercial",
    powerRange: "500–615 W",
    summary: "High power in a module two people can still carry onto a factory roof.",
    description:
      "For factories, warehouses, institutions and large residential buildings: high power per module in a size two people can still carry onto a roof.",
    useCases: ["Factory rooftops", "Warehouses", "Institutions", "Large residential buildings"],
    datasheet: "/datasheets/shweta-solar-topcon-commercial-2026.pdf",
    image: { src: "/images/factory/topcon-module-on-line.jpg", alt: "Commercial TOPCon module on the production line" },
  },
  {
    slug: "utility",
    name: "Utility & ground-mount",
    shortName: "Utility",
    powerRange: "615–725 W",
    summary: "Maximum watts per module for solar farms, ground-mount and tracker plants.",
    description:
      "For solar farms, ground-mount arrays and tracker-based plants, where modules are machine-placed and cost per watt decides the design.",
    useCases: ["Solar parks", "Ground-mount arrays", "Single-axis trackers", "Open-access projects"],
    datasheet: "/datasheets/shweta-solar-topcon-utility-2026.pdf",
    image: { src: "/images/factory/automated-factory-floor.jpg", alt: "Automated production line building utility-scale modules" },
  },
]

export const COMPLETE_DATASHEET = "/datasheets/shweta-solar-topcon-complete-range-2026.pdf"

export const RANGE_SUMMARY = {
  minW: 395,
  maxW: 725,
  families: FAMILIES.length,
  bins: FAMILIES.reduce((sum, f) => sum + f.bins, 0),
  maxEfficiency: Math.max(...FAMILIES.map((f) => f.maxEfficiency)),
} as const

export const COMMON_SPECS: { label: string; value: string }[] = [
  { label: "Cell technology", value: "n-type TOPCon bifacial, half-cut" },
  { label: "Construction", value: "Glass–glass, 2.0 mm AR-coated tempered front / 2.0 mm tempered rear" },
  { label: "Frame", value: "Anodised aluminium alloy" },
  { label: "Junction box", value: "IP68, 3 bypass diodes" },
  { label: "Connectors / cable", value: "MC4-compatible IP68 · 4 mm² PV cable" },
  { label: "Power bifaciality", value: "70% ± 10%" },
  { label: "Max. system voltage", value: "1500 V DC" },
  { label: "Max. series fuse", value: "35 A" },
  { label: "Static load (front / rear)", value: "5400 Pa / 2400 Pa" },
  { label: "Operating temperature", value: "−40 °C to +85 °C" },
  { label: "Power tolerance", value: "0 / +5 W" },
  { label: "Class ratings", value: "Safety Class II · Fire Class C" },
]

export const WARRANTY = {
  productYears: 12,
  performanceYears: 30,
  firstYearDegradation: "≤1%",
  annualDegradation: "≤0.4%",
  year30Output: "≥87.4%",
} as const

export const QUALITY_POINTS = [
  "100% electroluminescence (EL) inspection before and after lamination",
  "Individual flash-test report shipped with every module",
  "Serialised modules with per-unit test data",
  "Tested at a NABL-accredited laboratory",
] as const

export function getSegment(slug: string) {
  return SEGMENTS.find((s) => s.slug === slug)
}

export function familiesFor(slug: SegmentSlug) {
  return FAMILIES.filter((f) => f.segment === slug)
}
