import { createClient } from "@/lib/supabase/server"

export interface GalleryImage {
  url: string
  caption: string
}

export interface GalleryItem {
  id: string
  title: string
  description: string | null
  folder: string
  images: GalleryImage[]
  eventDate: string | null
}

export async function getAllGalleryItems(): Promise<GalleryItem[]> {
  const supabase = await createClient()

  const { data, error } = await supabase.from("solar_gallery").select("*").order("event_date", { ascending: false })

  if (error) {
    console.error("Error fetching gallery items:", error)
    return []
  }

  return data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    folder: item.folder,
    images: item.images as GalleryImage[],
    eventDate: item.event_date,
  }))
}

export async function getGalleryFolders(): Promise<string[]> {
  const supabase = await createClient()

  const { data, error } = await supabase.from("solar_gallery").select("folder")

  if (error) {
    console.error("Error fetching gallery folders:", error)
    return []
  }

  const folders = [...new Set(data.map((item) => item.folder))]
  return folders
}
