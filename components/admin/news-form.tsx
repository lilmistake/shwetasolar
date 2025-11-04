"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { createNews, updateNews } from "@/lib/actions/news"
import { Loader2 } from "lucide-react"

interface NewsFormProps {
  news?: {
    id: string
    title: string
    content: string
    excerpt: string | null
    external_url: string | null
    image: string | null
    published_date: string
  }
}

export function NewsForm({ news }: NewsFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      if (news) {
        await updateNews(news.id, formData)
      } else {
        await createNews(formData)
      }
      router.push("/admin/news")
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
            <Input id="title" name="title" defaultValue={news?.title || ""} required placeholder="Article title" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              name="excerpt"
              defaultValue={news?.excerpt || ""}
              placeholder="Brief summary of the article"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              defaultValue={news?.content || ""}
              required
              placeholder="Full article content"
              rows={10}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="external_url">External URL</Label>
            <Input
              id="external_url"
              name="external_url"
              type="url"
              defaultValue={news?.external_url || ""}
              placeholder="https://example.com/article"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              name="image"
              type="url"
              defaultValue={news?.image || ""}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="published_date">Published Date</Label>
            <Input
              id="published_date"
              name="published_date"
              type="datetime-local"
              defaultValue={
                news?.published_date
                  ? new Date(news.published_date).toISOString().slice(0, 16)
                  : new Date().toISOString().slice(0, 16)
              }
              required
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {news ? "Update Article" : "Create Article"}
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
