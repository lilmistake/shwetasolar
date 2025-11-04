import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://shwetasolar.in",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href && { item: `https://shwetasolar.in${item.href}` }),
      })),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-olive mb-6">
        <Link href="/" className="hover:text-forest transition-colors flex items-center gap-1">
          <Home className="h-4 w-4" />
          <span className="sr-only">Home</span>
        </Link>
        {items.map((item, index) => (
          <div key={item.label} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4" />
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="hover:text-forest transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-forest font-medium">{item.label}</span>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}
