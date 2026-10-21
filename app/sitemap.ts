import type { MetadataRoute } from "next"
import { getAllBlogPostsStatic } from "@/lib/blog"
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
  { path: "/investors/board", priority: 0.5, changeFrequency: "yearly" },
  { path: "/investors/policies", priority: 0.4, changeFrequency: "yearly" },
  { path: "/newsroom", priority: 0.6, changeFrequency: "weekly" },
  { path: "/newsroom/news", priority: 0.6, changeFrequency: "weekly" },
  { path: "/newsroom/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/newsroom/gallery", priority: 0.4, changeFrequency: "monthly" },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  let posts: MetadataRoute.Sitemap = []
  try {
    const blogPosts = await getAllBlogPostsStatic()
    posts = blogPosts
      .filter((post) => post.publishedDate && post.slug)
      .map((post) => ({
        url: `${SITE.url}/newsroom/blog/${post.slug}`,
        lastModified: new Date(post.publishedDate),
        changeFrequency: "yearly" as const,
        priority: 0.5,
      }))
  } catch (error) {
    console.error("Sitemap: failed to load blog posts", error)
  }

  return [...pages, ...segments, ...posts]
}
