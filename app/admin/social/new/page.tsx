import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { SocialPostForm } from "@/components/admin/social-post-form"

export default async function NewSocialPostPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@shwetasolar.in") {
    redirect("/admin/login")
  }

  return (
    <div className="container mx-auto p-6 md:p-10 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Add Social Media Post</h1>
        <p className="text-muted-foreground mt-1">Create a new social media post</p>
      </div>

      <SocialPostForm />
    </div>
  )
}
