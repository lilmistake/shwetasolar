"use client"

import { useState } from "react"
import { Calculator } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PageHero } from "@/components/site/page-hero"
import { ClosingCta } from "@/components/home/closing-cta"

type Results = {
  systemSizeKW: string
  panelsNeeded: number
  systemCost: number
  annualSavings: number
  paybackPeriod: string
  co2Offset: string
  monthlyConsumption: string
  offsetPercentage: number
  roofLimited: boolean
}

const PEAK_SUN_HOURS: Record<string, number> = {
  north: 5.0,
  south: 5.5,
  east: 4.5,
  west: 5.5,
  central: 5.2,
}

const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`

function estimate(bill: number, area: number, region: string): Results {
  const costPerUnit = 7
  const monthlyConsumption = bill / costPerUnit
  const annualConsumption = monthlyConsumption * 12
  const annualGenPerKW = (PEAK_SUN_HOURS[region] ?? 5.0) * 365 * 0.78

  const idealKW = annualConsumption / annualGenPerKW
  const maxKWByRoof = area / 100
  const systemSizeKW = Math.max(0, Math.min(idealKW, maxKWByRoof))

  const systemCost = systemSizeKW * 1000 * 45
  const annualGeneration = systemSizeKW * annualGenPerKW
  const usableGeneration = Math.min(annualGeneration, annualConsumption)
  const annualSavings = usableGeneration * costPerUnit

  return {
    systemSizeKW: systemSizeKW.toFixed(2),
    panelsNeeded: Math.ceil(systemSizeKW / 0.54),
    systemCost,
    annualSavings,
    paybackPeriod: annualSavings > 0 ? (systemCost / annualSavings).toFixed(1) : "0",
    co2Offset: ((annualGeneration * 0.82) / 1000).toFixed(2),
    monthlyConsumption: monthlyConsumption.toFixed(0),
    offsetPercentage: annualConsumption > 0 ? Math.round((usableGeneration / annualConsumption) * 100) : 0,
    roofLimited: maxKWByRoof < idealKW,
  }
}

export default function SolarCalculatorPage() {
  const [monthlyBill, setMonthlyBill] = useState("")
  const [roofArea, setRoofArea] = useState("")
  const [location, setLocation] = useState("")
  const [results, setResults] = useState<Results | null>(null)

  const canCalculate = Number(monthlyBill) > 0 && Number(roofArea) > 0 && Boolean(location)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!canCalculate) return
    setResults(estimate(Number(monthlyBill), Number(roofArea), location))
  }

  return (
    <>
      <PageHero
        eyebrow="Resources"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Solar Calculator", path: "/resources/calculator" },
        ]}
        title="Solar calculator"
        intro="Estimate the system size, cost and savings for your rooftop in under a minute."
      />

      <section aria-label="Calculator" className="bg-background pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 md:px-6 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded-3xl border border-border bg-muted p-7 md:p-10 lg:col-span-2"
          >
            <h2 className="text-2xl font-semibold text-foreground">Your details</h2>
            <div className="flex flex-col gap-2">
              <Label htmlFor="monthlyBill">Average monthly electricity bill (₹)</Label>
              <Input
                id="monthlyBill"
                type="number"
                inputMode="numeric"
                min={1}
                placeholder="e.g. 5000"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
                className="h-12 rounded-xl bg-background"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="roofArea">Available roof area (sq ft)</Label>
              <Input
                id="roofArea"
                type="number"
                inputMode="numeric"
                min={1}
                placeholder="e.g. 500"
                value={roofArea}
                onChange={(e) => setRoofArea(e.target.value)}
                className="h-12 rounded-xl bg-background"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="location">Region</Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger id="location" className="h-12 w-full rounded-xl bg-background">
                  <SelectValue placeholder="Select your region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="north">North India</SelectItem>
                  <SelectItem value="south">South India</SelectItem>
                  <SelectItem value="east">East India</SelectItem>
                  <SelectItem value="west">West India</SelectItem>
                  <SelectItem value="central">Central India</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <button
              type="submit"
              disabled={!canCalculate}
              className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-olive disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Calculator className="size-4" aria-hidden="true" />
              Calculate
            </button>
          </form>

          <div aria-live="polite" className="lg:col-span-3">
            {results ? (
              <div className="flex h-full flex-col gap-4">
                <div className="flex flex-col gap-6 rounded-3xl bg-forest p-7 text-primary-foreground md:p-10">
                  <p className="text-sm font-medium text-primary-foreground/70">Recommended system</p>
                  <p className="text-6xl font-semibold md:text-7xl">
                    {results.systemSizeKW}
                    <span className="ml-2 text-2xl text-primary-foreground/70">kW</span>
                  </p>
                  <p className="leading-relaxed text-primary-foreground/80">
                    About {results.panelsNeeded} panels, covering roughly {results.offsetPercentage}% of your
                    electricity use.
                  </p>
                  {results.roofLimited && (
                    <p className="text-sm leading-relaxed text-primary-foreground/70">
                      Your roof area is the limiting factor. More space would allow a larger system and higher savings.
                    </p>
                  )}
                </div>
                <dl className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {[
                    ["System cost", inr(results.systemCost)],
                    ["Annual savings", inr(results.annualSavings)],
                    ["Payback", `${results.paybackPeriod} yrs`],
                    ["CO₂ offset / year", `${results.co2Offset} t`],
                    ["Monthly usage", `${results.monthlyConsumption} kWh`],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-2 rounded-3xl border border-border bg-muted p-6">
                      <dt className="text-sm text-muted-foreground">{label}</dt>
                      <dd className="text-2xl font-semibold text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : (
              <div className="flex h-full min-h-80 flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-border p-10 text-center">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-muted text-primary">
                  <Calculator className="size-6" aria-hidden="true" />
                </span>
                <p className="max-w-xs text-pretty leading-relaxed text-muted-foreground">
                  Enter your details to see a personalised estimate.
                </p>
              </div>
            )}
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground lg:col-span-5">
            Estimates use average values for tariffs, sunlight and installation cost. Actual results depend on your
            location, roof orientation, shading and local rates. Contact us for a site assessment and exact quote.
          </p>
        </div>
      </section>

      <ClosingCta />
    </>
  )
}
