import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Edit, Images } from "lucide-react"
import Link from "next/link"
import { DeleteAlbumButton } from "@/components/admin/delete-album-button"

export default async function AdminGalleryPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@shwetasolar.in") {
    redirect("/admin/login")
  }

  const { data: albums, error } = await supabase
    .from("solar_gallery")
    .select("*")
    .order("event_date", { ascending: false })

  return (
    <div className="container mx-auto p-6 md:p-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Event Albums</h1>
          <p className="text-muted-foreground mt-1">Manage photo galleries and event albums</p>
        </div>
        <Button asChild>
          <Link href="/admin/gallery/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Album
          </Link>
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
          Error loading albums: {error.message}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {albums?.map((album) => {
          const imageCount = Array.isArray(album.images) ? album.images.length : 0
          return (
            <Card key={album.id}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Images className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{imageCount} photos</span>
                </div>
                <CardTitle className="line-clamp-2">{album.title}</CardTitle>
                <CardDescription>{new Date(album.event_date).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                {album.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{album.description}</p>
                )}
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Link href={`/admin/gallery/edit/${album.id}`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Link>
                  </Button>
                  <DeleteAlbumButton albumId={album.id} />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {albums?.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground mb-4">No event albums yet</p>
          <Button asChild>
            <Link href="/admin/gallery/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Album
            </Link>
          </Button>
        </Card>
      )}
    </div>
  )
}
