import { createClient } from "@/lib/supabase/server"

export interface NewsItem {
  id: string
  title: string
  content: string
  publishedDate: string
  externalUrl?: string
  excerpt?: string
  image?: string
}

export async function getAllNews(): Promise<NewsItem[]> {
  const supabase = await createClient()

  const { data, error } = await supabase.from("solar_news").select("*").order("published_date", { ascending: false })

  if (error) {
    console.error("Error fetching news:", error)
    return []
  }

  return data.map((item) => ({
    id: item.id,
    title: item.title,
    content: item.content,
    publishedDate: item.published_date,
    externalUrl: item.external_url,
    excerpt: item.excerpt,
    image: item.image,
  }))
}
