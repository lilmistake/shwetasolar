import { Card } from "@/components/ui/card"
import { FileText, Shield, Users, AlertCircle } from "lucide-react"

export default function PoliciesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">Corporate Policies</h1>
          <p className="text-xl max-w-3xl">Our commitment to ethical business practices and transparent governance</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Code of Conduct",
                description: "Our ethical guidelines and standards for all employees, directors, and stakeholders.",
              },
              {
                icon: Users,
                title: "Corporate Governance",
                description: "Framework ensuring accountability, fairness, and transparency in our operations.",
              },
              {
                icon: FileText,
                title: "Disclosure Policy",
                description: "Commitment to timely and accurate disclosure of material information to stakeholders.",
              },
              {
                icon: AlertCircle,
                title: "Risk Management",
                description: "Comprehensive approach to identifying, assessing, and mitigating business risks.",
              },
            ].map((policy) => (
              <Card key={policy.title} className="p-8 hover:shadow-xl transition-shadow">
                <policy.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">{policy.title}</h3>
                <p className="text-muted-foreground mb-4">{policy.description}</p>
                <p className="text-sm text-muted-foreground italic">Detailed policy document coming soon</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 mt-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Commitment</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Shweta Solar, we are committed to the highest standards of corporate governance and ethical business
                practices. Our policies reflect our core values of integrity, transparency, and accountability.
              </p>
              <p>
                As we prepare for our IPO, we are implementing robust governance frameworks that meet and exceed
                regulatory requirements. Our board of directors provides strategic oversight while ensuring compliance
                with all applicable laws and regulations.
              </p>
              <p>
                We believe that strong corporate governance is essential for sustainable growth and long-term value
                creation for all our stakeholders—investors, employees, customers, and the communities we serve.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
