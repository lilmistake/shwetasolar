"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function createSocialPost(formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@shwetasolar.in") {
    throw new Error("Unauthorized")
  }

  const { error } = await supabase.from("social_media_posts").insert({
    title: formData.get("title") as string,
    content: formData.get("content") as string,
    image_url: formData.get("image_url") as string,
    post_url: formData.get("post_url") as string,
    platform: formData.get("platform") as string,
    post_type: formData.get("post_type") as string,
    published_at: formData.get("published_at") as string,
  })

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/social")
  revalidatePath("/newsroom/gallery")
}

export async function updateSocialPost(id: string, formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@shwetasolar.in") {
    throw new Error("Unauthorized")
  }

  const { error } = await supabase
    .from("social_media_posts")
    .update({
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      image_url: formData.get("image_url") as string,
      post_url: formData.get("post_url") as string,
      platform: formData.get("platform") as string,
      post_type: formData.get("post_type") as string,
      published_at: formData.get("published_at") as string,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/social")
  revalidatePath("/newsroom/gallery")
}

export async function deleteSocialPost(id: string) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@shwetasolar.in") {
    throw new Error("Unauthorized")
  }

  const { error } = await supabase.from("social_media_posts").delete().eq("id", id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/admin/social")
  revalidatePath("/newsroom/gallery")
}
