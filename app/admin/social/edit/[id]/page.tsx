import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { SocialPostForm } from "@/components/admin/social-post-form"
import { notFound } from "next/navigation"

export default async function EditSocialPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@shwetasolar.in") {
    redirect("/admin/login")
  }

  const { data: post, error } = await supabase.from("social_media_posts").select("*").eq("id", id).single()

  if (error || !post) {
    notFound()
  }

  return (
    <div className="container mx-auto p-6 md:p-10 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Edit Social Media Post</h1>
        <p className="text-muted-foreground mt-1">Update social media post details</p>
      </div>

      <SocialPostForm post={post} />
    </div>
  )
}
