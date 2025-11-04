import { Download, FileText, ImageIcon, Award, BookOpen, Calculator, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CTAWidget } from "@/components/cta-widget"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resource Downloads - Datasheets, Manuals & Certifications",
  description:
    "Download Shweta Solar product datasheets, installation manuals, IEC certifications, test reports, and brand assets. Access technical documentation for Mono PERC, TopCon, and HJT solar panels.",
  openGraph: {
    title: "Download Solar Panel Resources - Technical Docs & Certifications",
    description:
      "Free downloads: Product catalogues, installation guides, IEC 61215/61730 certifications, ISO certificates, and high-resolution brand assets for Shweta Solar panels.",
  },
}

const downloadCategories = [
  {
    title: "Product Documentation",
    icon: FileText,
    items: [
      { name: "Company Profile", size: "2.4 MB", format: "PDF" },
      { name: "Product Catalogue 2024", size: "5.8 MB", format: "PDF" },
      { name: "Mono PERC Datasheet", size: "1.2 MB", format: "PDF" },
      { name: "TopCon Datasheet", size: "1.3 MB", format: "PDF" },
      { name: "HJT Datasheet", size: "1.4 MB", format: "PDF" },
    ],
  },
  {
    title: "Installation & Maintenance",
    icon: BookOpen,
    items: [
      { name: "Installation Manual", size: "3.2 MB", format: "PDF" },
      { name: "Module Cleaning Instructions", size: "890 KB", format: "PDF" },
      { name: "Pallet Unpacking Instructions", size: "1.1 MB", format: "PDF" },
      { name: "Maintenance Guidelines", size: "2.0 MB", format: "PDF" },
    ],
  },
  {
    title: "Certifications & Test Reports",
    icon: Award,
    items: [
      { name: "IEC 61215 Certification", size: "1.8 MB", format: "PDF" },
      { name: "IEC 61730 Certification", size: "1.6 MB", format: "PDF" },
      { name: "ISO 9001:2015 Certificate", size: "950 KB", format: "PDF" },
      { name: "Performance Test Report", size: "2.5 MB", format: "PDF" },
      { name: "Quality Assurance Report", size: "1.9 MB", format: "PDF" },
    ],
  },
  {
    title: "Brand Assets",
    icon: ImageIcon,
    items: [
      { name: "Brand Guidelines", size: "4.2 MB", format: "PDF" },
      { name: "Logo Package (High-Res)", size: "8.5 MB", format: "ZIP" },
      { name: "Product Images", size: "12.3 MB", format: "ZIP" },
      { name: "Marketing Materials", size: "6.7 MB", format: "ZIP" },
    ],
  },
]

export default function DownloadsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-forest to-olive text-cream">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-balance">Resource Downloads</h1>
          <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-pretty">
            Access technical documentation, certifications, and brand assets
          </p>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {downloadCategories.map((category) => (
              <Card key={category.title} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-forest" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-forest">{category.title}</h2>
                </div>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-4 bg-sage/5 rounded-lg hover:bg-sage/10 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-forest">{item.name}</p>
                        <p className="text-sm text-olive">
                          {item.format} • {item.size}
                        </p>
                      </div>
                      <Button size="sm" variant="outline" className="ml-4 bg-transparent">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Calculator CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <CTAWidget
            icon={<Calculator className="h-16 w-16" />}
            title="Need Help Sizing Your Solar System?"
            description="Use our interactive solar calculator to estimate your energy needs and potential savings"
            buttonText="Open Solar Calculator"
            buttonHref="/resources/calculator"
            variant="gradient"
          />
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <CTAWidget
            icon={<Phone className="h-16 w-16" />}
            title="Need Technical Support?"
            description="Our expert team is ready to help you with product selection, installation guidance, and technical questions"
            buttonText="Contact Our Team"
            buttonHref="/contact"
            variant="outline"
          />
        </div>
      </section>
    </div>
  )
}
