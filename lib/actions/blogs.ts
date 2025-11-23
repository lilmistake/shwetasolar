"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function createBlog(data: {
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  category: string
  read_time: number
  published_date: string
  key_takeaways: string[]
}) {
  const supabase = await createClient()

  const { error } = await supabase.from("solar_blogs").insert({
    ...data,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  })

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/blogs")
  revalidatePath("/newsroom/blog")
  revalidatePath(`/newsroom/blog/${data.slug}`)
}

export async function updateBlog(
  id: string,
  data: {
    title: string
    slug: string
    excerpt: string
    content: string
    image: string
    author: string
    category: string
    read_time: number
    published_date: string
    key_takeaways: string[]
  },
) {
  const supabase = await createClient()

  const { error } = await supabase
    .from("solar_blogs")
    .update({
      ...data,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/blogs")
  revalidatePath("/newsroom/blog")
  revalidatePath(`/newsroom/blog/${data.slug}`)
}

export async function deleteBlog(id: string) {
  const supabase = await createClient()

  const { error } = await supabase.from("solar_blogs").delete().eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/blogs")
  revalidatePath("/newsroom/blog")
}
