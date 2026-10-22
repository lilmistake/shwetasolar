import type { MetadataRoute } from "next"
import { SEGMENTS } from "@/lib/products"
import { SITE } from "@/lib/site"

type Entry = MetadataRoute.Sitemap[number]

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: Entry["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/products", priority: 0.95, changeFrequency: "monthly" },
  { path: "/topcon", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/resources/downloads", priority: 0.8, changeFrequency: "monthly" },
  { path: "/resources/calculator", priority: 0.7, changeFrequency: "yearly" },
  { path: "/sustainability", priority: 0.6, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const pages: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  const segments: MetadataRoute.Sitemap = SEGMENTS.map((s) => ({
    url: `${SITE.url}/products/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
    images: [`${SITE.url}${s.image.src}`],
  }))

  return [...pages, ...segments]
}
