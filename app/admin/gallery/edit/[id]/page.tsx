import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { AlbumForm } from "@/components/admin/album-form"
import { notFound } from "next/navigation"

export default async function EditAlbumPage({
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

  const { data: album, error } = await supabase.from("solar_gallery").select("*").eq("id", id).single()

  if (error || !album) {
    notFound()
  }

  return (
    <div className="container mx-auto p-6 md:p-10 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Edit Event Album</h1>
        <p className="text-muted-foreground mt-1">Update album details and photos</p>
      </div>

      <AlbumForm album={album} />
    </div>
  )
}
