"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { createAlbum, updateAlbum } from "@/lib/actions/gallery"
import { Loader2, Plus, X } from "lucide-react"

interface AlbumFormProps {
  album?: {
    id: string
    title: string
    description: string | null
    event_date: string
    images: any
    folder: string | null
  }
}

export function AlbumForm({ album }: AlbumFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Parse existing images or start with empty array
  const existingImages = album?.images ? (Array.isArray(album.images) ? album.images : []) : []
  const [imageUrls, setImageUrls] = useState<string[]>(
    existingImages.map((img: any) => (typeof img === "string" ? img : img.url || "")),
  )

  function addImageUrl() {
    setImageUrls([...imageUrls, ""])
  }

  function removeImageUrl(index: number) {
    setImageUrls(imageUrls.filter((_, i) => i !== index))
  }

  function updateImageUrl(index: number, value: string) {
    const newUrls = [...imageUrls]
    newUrls[index] = value
    setImageUrls(newUrls)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    // Add image URLs to formData
    formData.set("images", JSON.stringify(imageUrls.filter((url) => url.trim() !== "")))

    try {
      if (album) {
        await updateAlbum(album.id, formData)
      } else {
        await createAlbum(formData)
      }
      router.push("/admin/gallery")
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">{error}</div>}

          <div className="space-y-2">
            <Label htmlFor="title">Album Title</Label>
            <Input
              id="title"
              name="title"
              defaultValue={album?.title || ""}
              required
              placeholder="Event name or album title"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={album?.description || ""}
              placeholder="Brief description of the event"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="event_date">Event Date</Label>
            <Input
              id="event_date"
              name="event_date"
              type="date"
              defaultValue={
                album?.event_date
                  ? new Date(album.event_date).toISOString().split("T")[0]
                  : new Date().toISOString().split("T")[0]
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="folder">Folder Name (optional)</Label>
            <Input id="folder" name="folder" defaultValue={album?.folder || ""} placeholder="e.g., event-2024" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Photo URLs</Label>
              <Button type="button" variant="outline" size="sm" onClick={addImageUrl}>
                <Plus className="mr-2 h-4 w-4" />
                Add Photo
              </Button>
            </div>

            <div className="space-y-3">
              {imageUrls.map((url, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={url}
                    onChange={(e) => updateImageUrl(index, e.target.value)}
                    placeholder="https://example.com/photo.jpg"
                    type="url"
                  />
                  <Button type="button" variant="outline" size="icon" onClick={() => removeImageUrl(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              {imageUrls.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No photos added yet. Click "Add Photo" to add image URLs.
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {album ? "Update Album" : "Create Album"}
            </Button>
            <Button type="button" variant="outline" onClick={() => router.back()} disabled={loading}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
