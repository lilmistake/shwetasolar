"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function createAlbum(formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@shwetasolar.in") {
    throw new Error("Unauthorized")
  }

  const imagesJson = formData.get("images") as string
  const images = JSON.parse(imagesJson)

  const { error } = await supabase.from("solar_gallery").insert({
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    event_date: formData.get("event_date") as string,
    folder: formData.get("folder") as string,
    images: images,
  })

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/gallery")
  revalidatePath("/newsroom/gallery")
}

export async function updateAlbum(id: string, formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@shwetasolar.in") {
    throw new Error("Unauthorized")
  }

  const imagesJson = formData.get("images") as string
  const images = JSON.parse(imagesJson)

  const { error } = await supabase
    .from("solar_gallery")
    .update({
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      event_date: formData.get("event_date") as string,
      folder: formData.get("folder") as string,
      images: images,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/gallery")
  revalidatePath("/newsroom/gallery")
}

export async function deleteAlbum(id: string) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@shwetasolar.in") {
    throw new Error("Unauthorized")
  }

  const { error } = await supabase.from("solar_gallery").delete().eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/gallery")
  revalidatePath("/newsroom/gallery")
}
