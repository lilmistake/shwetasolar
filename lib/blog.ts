import { createClient } from "@/lib/supabase/server"
import { createStaticClient } from "@/lib/supabase/static"

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  readTime: number
  publishedDate: string
  keyTakeaways?: string[] // Added nullable key takeaways field
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const supabase = await createClient()

  const { data, error } = await supabase.from("solar_blogs").select("*").order("published_date", { ascending: false })

  if (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }

  return data.map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    image: post.image,
    category: post.category,
    readTime: post.read_time,
    publishedDate: post.published_date,
    keyTakeaways: post.key_takeaways, // Map key takeaways from database
  }))
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = await createClient()

  const { data, error } = await supabase.from("solar_blogs").select("*").eq("slug", slug).single()

  if (error || !data) {
    console.error("Error fetching blog post:", error)
    return null
  }

  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt,
    content: data.content,
    image: data.image,
    category: data.category,
    readTime: data.read_time,
    publishedDate: data.published_date,
    keyTakeaways: data.key_takeaways, // Map key takeaways from database
  }
}

export async function getRelatedPosts(currentSlug: string, category: string, limit = 3): Promise<BlogPost[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("solar_blogs")
    .select("*")
    .eq("category", category)
    .neq("slug", currentSlug)
    .order("published_date", { ascending: false })
    .limit(limit)

  if (error) {
    console.error("Error fetching related posts:", error)
    return []
  }

  return data.map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    image: post.image,
    category: post.category,
    readTime: post.read_time,
    publishedDate: post.published_date,
    keyTakeaways: post.key_takeaways, // Map key takeaways from database
  }))
}

export async function getBlogCategories(): Promise<string[]> {
  const supabase = await createClient()

  const { data, error } = await supabase.from("solar_blogs").select("category")

  if (error) {
    console.error("Error fetching categories:", error)
    return []
  }

  const categories = [...new Set(data.map((post) => post.category))]
  return categories
}

export async function getAllBlogPostsStatic(): Promise<BlogPost[]> {
  const supabase = createStaticClient()

  const { data, error } = await supabase
    .from("solar_blogs")
    .select("*")
    .not("slug", "is", null) // Exclude posts without slugs
    .not("published_date", "is", null) // Exclude posts without dates
    .order("published_date", { ascending: false })

  if (error) {
    console.error("Error fetching blog posts for sitemap:", error)
    return []
  }

  return data
    .filter((post) => post.slug && post.title && post.published_date) // Double-check required fields
    .map((post) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      category: post.category,
      readTime: post.read_time,
      publishedDate: post.published_date,
      keyTakeaways: post.key_takeaways,
    }))
}

export async function getRecentPosts(limit = 5): Promise<BlogPost[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("solar_blogs")
    .select("*")
    .order("published_date", { ascending: false })
    .limit(limit)

  if (error) {
    console.error("Error fetching recent posts:", error)
    return []
  }

  return data.map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    image: post.image,
    category: post.category,
    readTime: post.read_time,
    publishedDate: post.published_date,
    keyTakeaways: post.key_takeaways,
  }))
}
