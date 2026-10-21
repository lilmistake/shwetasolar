import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { breadcrumbSchema, jsonLd } from "@/lib/seo"

export function Breadcrumbs({ items, tone = "light" }: { items: { name: string; path: string }[]; tone?: "light" | "dark" }) {
  const muted = tone === "dark" ? "text-white/60 hover:text-white" : "text-olive hover:text-forest"
  const current = tone === "dark" ? "text-white" : "text-forest"
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(items))} />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm">
          {items.map((item, i) => {
            const isLast = i === items.length - 1
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {isLast ? (
                  <span aria-current="page" className={`font-medium ${current}`}>
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.path} className={`transition-colors ${muted}`}>
                      {item.name}
                    </Link>
                    <ChevronRight className={`h-3.5 w-3.5 ${tone === "dark" ? "text-white/40" : "text-sage"}`} aria-hidden="true" />
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
