"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Trash2, Loader2 } from "lucide-react"
import { deleteAlbum } from "@/lib/actions/gallery"

export function DeleteAlbumButton({ albumId }: { albumId: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this album? This will also delete all photos in the album.")) {
      return
    }

    setLoading(true)
    try {
      await deleteAlbum(albumId)
      router.refresh()
    } catch (error) {
      alert("Failed to delete album")
      setLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleDelete}
      disabled={loading}
      className="text-red-600 hover:text-red-700 bg-transparent"
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
    </Button>
  )
}
