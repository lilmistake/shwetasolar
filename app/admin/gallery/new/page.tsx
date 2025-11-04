import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { AlbumForm } from "@/components/admin/album-form"

export default async function NewAlbumPage() {
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
        <h1 className="text-3xl font-bold">Add Event Album</h1>
        <p className="text-muted-foreground mt-1">Create a new photo album</p>
      </div>

      <AlbumForm />
    </div>
  )
}
