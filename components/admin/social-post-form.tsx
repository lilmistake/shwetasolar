"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { createSocialPost, updateSocialPost } from "@/lib/actions/social-posts"
import { Loader2 } from "lucide-react"

interface SocialPostFormProps {
  post?: {
    id: string
    title: string | null
    content: string | null
    image_url: string | null
    post_url: string | null
    platform: string | null
    post_type: string | null
    published_at: string
  }
}

export function SocialPostForm({ post }: SocialPostFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      if (post) {
        await updateSocialPost(post.id, formData)
      } else {
        await createSocialPost(formData)
      }
      router.push("/admin/social")
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
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" defaultValue={post?.title || ""} required placeholder="Post title" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Caption</Label>
            <Textarea
              id="content"
              name="content"
              defaultValue={post?.content || ""}
              required
              placeholder="Post caption or description"
              rows={6}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image_url">Image URL</Label>
            <Input
              id="image_url"
              name="image_url"
              type="url"
              defaultValue={post?.image_url || ""}
              required
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="post_url">Post URL (Instagram Link)</Label>
            <Input
              id="post_url"
              name="post_url"
              type="url"
              defaultValue={post?.post_url || ""}
              required
              placeholder="https://www.instagram.com/p/..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="platform">Platform</Label>
              <Input
                id="platform"
                name="platform"
                defaultValue={post?.platform || "instagram"}
                required
                placeholder="instagram"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="post_type">Post Type</Label>
              <Input
                id="post_type"
                name="post_type"
                defaultValue={post?.post_type || "image"}
                required
                placeholder="image"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="published_at">Published Date</Label>
            <Input
              id="published_at"
              name="published_at"
              type="datetime-local"
              defaultValue={
                post?.published_at
                  ? new Date(post.published_at).toISOString().slice(0, 16)
                  : new Date().toISOString().slice(0, 16)
              }
              required
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {post ? "Update Post" : "Create Post"}
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
