"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, Zap, DollarSign, Leaf, TrendingDown } from "lucide-react"
import { motion } from "framer-motion"

export default function SolarCalculatorPage() {
  const [monthlyBill, setMonthlyBill] = useState("")
  const [roofArea, setRoofArea] = useState("")
  const [location, setLocation] = useState("")
  const [results, setResults] = useState<any>(null)

  const calculateSolar = () => {
    const bill = Number.parseFloat(monthlyBill)
    const area = Number.parseFloat(roofArea)

    if (!bill || !area) return

    // --- Assumptions (India, rooftop solar) ---
    const avgCostPerUnit = 7 // INR per kWh (average residential tariff)
    const costPerWatt = 45 // INR installed cost per Wp
    const panelSizeKW = 0.55 // 550W panels
    const performanceRatio = 0.78 // real-world losses: inverter, wiring, heat, dust, downtime
    const areaPerKW = 100 // sq ft of usable roof required per kW installed
    const co2PerKWh = 0.82 // kg CO2 displaced from the grid per kWh generated

    // Peak sun hours (kWh/m²/day) vary by region of India
    const peakSunHoursByRegion: Record<string, number> = {
      north: 5.0,
      south: 5.3,
      east: 4.5,
      west: 5.8,
      central: 5.5,
    }
    const peakSunHours = peakSunHoursByRegion[location] ?? 5.0

    // --- Consumption ---
    const monthlyConsumption = bill / avgCostPerUnit // kWh/month
    const annualConsumption = monthlyConsumption * 12 // kWh/year

    // --- System sizing ---
    // Size required to fully offset consumption, accounting for the performance ratio.
    const requiredSizeKW = annualConsumption / (peakSunHours * 365 * performanceRatio)
    // Cap the system by how much actually fits on the available roof.
    const maxSizeByRoofKW = area / areaPerKW
    const systemSizeKW = Math.min(requiredSizeKW, maxSizeByRoofKW)
    const roofLimited = maxSizeByRoofKW < requiredSizeKW

    const panelsNeeded = Math.max(1, Math.ceil(systemSizeKW / panelSizeKW))

    // --- Generation (what the sized system actually produces) ---
    const annualGeneration = systemSizeKW * peakSunHours * 365 * performanceRatio
    // Can't save more than you consume; excess export is ignored for a conservative estimate.
    const usableGeneration = Math.min(annualGeneration, annualConsumption)
    const energyOffset = Math.min(100, (annualGeneration / annualConsumption) * 100)

    // --- Cost, savings & payback ---
    const systemCost = systemSizeKW * 1000 * costPerWatt
    const annualSavings = usableGeneration * avgCostPerUnit
    const paybackPeriod = annualSavings > 0 ? systemCost / annualSavings : 0

    // --- Environmental impact (based on actual generation) ---
    const co2Offset = annualGeneration * co2PerKWh // kg CO2 per year

    setResults({
      systemSizeKW: systemSizeKW.toFixed(2),
      panelsNeeded,
      systemCost: systemCost.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      paybackPeriod: paybackPeriod.toFixed(1),
      co2Offset: (co2Offset / 1000).toFixed(2), // Convert to tonnes
      monthlyConsumption: monthlyConsumption.toFixed(0),
      energyOffset: energyOffset.toFixed(0),
      roofLimited,
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-forest to-olive text-cream">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Calculator className="h-12 w-12" />
            <h1 className="font-display text-5xl md:text-7xl font-bold text-balance">Solar Calculator</h1>
          </div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center leading-relaxed text-pretty">
            Estimate your solar system size, costs, and potential savings
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="p-8">
              <h2 className="font-display text-3xl font-bold text-forest mb-6">Enter Your Details</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="monthlyBill" className="text-forest font-medium">
                    Average Monthly Electricity Bill (₹)
                  </Label>
                  <Input
                    id="monthlyBill"
                    type="number"
                    placeholder="e.g., 5000"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="roofArea" className="text-forest font-medium">
                    Available Roof Area (sq ft)
                  </Label>
                  <Input
                    id="roofArea"
                    type="number"
                    placeholder="e.g., 500"
                    value={roofArea}
                    onChange={(e) => setRoofArea(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="location" className="text-forest font-medium">
                    Location
                  </Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="mt-2 bg-cream border-sage">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent className="bg-cream border-sage">
                      <SelectItem value="north">North India</SelectItem>
                      <SelectItem value="south">South India</SelectItem>
                      <SelectItem value="east">East India</SelectItem>
                      <SelectItem value="west">West India</SelectItem>
                      <SelectItem value="central">Central India</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={calculateSolar} className="w-full bg-forest text-cream hover:bg-olive" size="lg">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Solar Potential
                </Button>
              </div>
            </Card>

            {/* Results */}
            {results ? (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <Card className="p-6 bg-gradient-to-br from-forest to-olive text-cream">
                  <Zap className="h-8 w-8 mb-3" />
                  <h3 className="font-display text-xl font-bold mb-2">Recommended System Size</h3>
                  <p className="text-4xl font-bold">{results.systemSizeKW} kW</p>
                  <p className="text-cream/80 mt-2">{results.panelsNeeded} solar panels needed</p>
                  <p className="text-cream/80 mt-1">Covers ~{results.energyOffset}% of your electricity use</p>
                  {results.roofLimited && (
                    <p className="text-cream/90 mt-3 text-sm bg-white/10 rounded-md p-3">
                      Your available roof area limits the system size, so it won&apos;t fully offset your bill. A larger
                      roof or higher-efficiency panels would allow a bigger system.
                    </p>
                  )}
                </Card>

                <Card className="p-6">
                  <DollarSign className="h-8 w-8 text-forest mb-3" />
                  <h3 className="font-display text-xl font-bold text-forest mb-2">Investment & Savings</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-olive">System Cost:</span>
                      <span className="font-bold text-forest">
                        ₹{Number.parseInt(results.systemCost).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-olive">Annual Savings:</span>
                      <span className="font-bold text-forest">
                        ₹{Number.parseInt(results.annualSavings).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-olive">Payback Period:</span>
                      <span className="font-bold text-forest">{results.paybackPeriod} years</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <Leaf className="h-8 w-8 text-forest mb-3" />
                  <h3 className="font-display text-xl font-bold text-forest mb-2">Environmental Impact</h3>
                  <p className="text-3xl font-bold text-forest">{results.co2Offset} tonnes</p>
                  <p className="text-olive mt-2">CO₂ offset annually</p>
                </Card>

                <Card className="p-6">
                  <TrendingDown className="h-8 w-8 text-forest mb-3" />
                  <h3 className="font-display text-xl font-bold text-forest mb-2">Energy Consumption</h3>
                  <p className="text-3xl font-bold text-forest">{results.monthlyConsumption} kWh</p>
                  <p className="text-olive mt-2">Average monthly usage</p>
                </Card>
              </motion.div>
            ) : (
              <Card className="p-8 flex items-center justify-center bg-sage/5">
                <div className="text-center">
                  <Calculator className="h-16 w-16 text-olive mx-auto mb-4" />
                  <p className="text-olive text-lg">Enter your details to see personalized solar recommendations</p>
                </div>
              </Card>
            )}
          </div>

          {/* Disclaimer */}
          <Card className="mt-8 p-6 bg-sage/10">
            <p className="text-sm text-olive text-center">
              <strong>Note:</strong> These calculations are estimates based on average values. Actual system size,
              costs, and savings may vary based on specific location, roof orientation, shading, and local electricity
              rates. Contact us for a detailed site assessment and accurate quotation.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-forest mb-6">Ready to Go Solar?</h2>
          <p className="text-xl text-olive mb-8 max-w-2xl mx-auto">Get a personalized quote from our solar experts</p>
          <Button asChild size="lg" className="bg-forest text-cream hover:bg-olive">
            <a href="/contact">Request a Quote</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
