import { Card } from "@/components/ui/card"
import { TrendingUp, DollarSign, PieChart, BarChart3 } from "lucide-react"

export default function FinancialsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">Financial Information</h1>
          <p className="text-xl max-w-3xl">
            Transparent financial reporting as we prepare for our Initial Public Offering
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: TrendingUp, label: "Revenue Growth", value: "YoY Growth" },
              { icon: DollarSign, label: "Manufacturing Capacity", value: "1.2 GW" },
              { icon: PieChart, label: "Market Position", value: "Growing" },
              { icon: BarChart3, label: "IPO Status", value: "Preparing" },
            ].map((stat) => (
              <Card key={stat.label} className="p-6 text-center">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="font-display text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <Card className="p-8 mb-8">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Financial Highlights</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Shweta Solar is preparing for its Initial Public Offering (IPO), demonstrating our commitment to
                transparency and growth. Our financial strategy is built on decades of business experience and
                disciplined financial management.
              </p>
              <p>
                With a manufacturing capacity of 1.2 GW and strategic investments in cutting-edge TopCon and HJT
                technology, we are positioned for significant growth in India's expanding renewable energy market.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Annual Reports</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive annual reports will be available upon IPO completion.
              </p>
              <p className="text-sm text-muted-foreground italic">Coming soon</p>
            </Card>

            <Card className="p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Quarterly Results</h3>
              <p className="text-muted-foreground mb-4">Quarterly financial results and performance updates.</p>
              <p className="text-sm text-muted-foreground italic">Coming soon</p>
            </Card>

            <Card className="p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Investor Presentations</h3>
              <p className="text-muted-foreground mb-4">
                Detailed presentations for current and prospective investors.
              </p>
              <p className="text-sm text-muted-foreground italic">Coming soon</p>
            </Card>

            <Card className="p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">IPO Documents</h3>
              <p className="text-muted-foreground mb-4">Prospectus and IPO-related documentation.</p>
              <p className="text-sm text-muted-foreground italic">Coming soon</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
