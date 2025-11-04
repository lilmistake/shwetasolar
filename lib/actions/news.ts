"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function createNews(formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@shwetasolar.in") {
    throw new Error("Unauthorized")
  }

  const { error } = await supabase.from("solar_news").insert({
    title: formData.get("title") as string,
    content: formData.get("content") as string,
    excerpt: formData.get("excerpt") as string,
    external_url: formData.get("external_url") as string,
    image: formData.get("image") as string,
    published_date: formData.get("published_date") as string,
  })

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/news")
  revalidatePath("/newsroom/news")
}

export async function updateNews(id: string, formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@shwetasolar.in") {
    throw new Error("Unauthorized")
  }

  const { error } = await supabase
    .from("solar_news")
    .update({
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      excerpt: formData.get("excerpt") as string,
      external_url: formData.get("external_url") as string,
      image: formData.get("image") as string,
      published_date: formData.get("published_date") as string,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/news")
  revalidatePath("/newsroom/news")
}

export async function deleteNews(id: string) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@shwetasolar.in") {
    throw new Error("Unauthorized")
  }

  const { error } = await supabase.from("solar_news").delete().eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/news")
  revalidatePath("/newsroom/news")
}
