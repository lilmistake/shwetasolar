"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Save, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { createBlog, updateBlog } from "@/lib/actions/blogs"
import ReactMarkdown from "react-markdown"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface BlogFormProps {
  blog?: {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    image: string
    author: string
    category: string
    read_time: number
    published_date: string
    key_takeaways: string[]
  }
}

export function BlogForm({ blog }: BlogFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPreview, setShowPreview] = useState(false)

  const [formData, setFormData] = useState({
    title: blog?.title || "",
    slug: blog?.slug || "",
    excerpt: blog?.excerpt || "",
    content: blog?.content || "",
    image: blog?.image || "",
    author: blog?.author || "",
    category: blog?.category || "",
    read_time: blog?.read_time || 5,
    published_date: blog?.published_date
      ? new Date(blog.published_date).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
    key_takeaways: blog?.key_takeaways?.join("\n") || "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const blogData = {
        ...formData,
        key_takeaways: formData.key_takeaways.split("\n").filter((line) => line.trim()),
        read_time: Number(formData.read_time),
      }

      if (blog) {
        await updateBlog(blog.id, blogData)
      } else {
        await createBlog(blogData)
      }

      router.push("/admin/blogs")
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save blog post")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Enter the basic details of your blog post</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => {
                    const title = e.target.value
                    setFormData({
                      ...formData,
                      title,
                      slug: title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, ""),
                    })
                  }}
                  required
                />
              </div>

              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="read_time">Read Time (minutes)</Label>
                  <Input
                    id="read_time"
                    type="number"
                    value={formData.read_time}
                    onChange={(e) => setFormData({ ...formData, read_time: Number(e.target.value) })}
                    min="1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="published_date">Published Date</Label>
                  <Input
                    id="published_date"
                    type="date"
                    value={formData.published_date}
                    onChange={(e) => setFormData({ ...formData, published_date: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="key_takeaways">Key Takeaways (one per line)</Label>
                <Textarea
                  id="key_takeaways"
                  value={formData.key_takeaways}
                  onChange={(e) => setFormData({ ...formData, key_takeaways: e.target.value })}
                  rows={4}
                  placeholder="First takeaway&#10;Second takeaway&#10;Third takeaway"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Content</CardTitle>
                  <CardDescription>Write your blog post content in Markdown</CardDescription>
                </div>
                <Button type="button" variant="outline" size="sm" onClick={() => setShowPreview(!showPreview)}>
                  {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={showPreview ? "preview" : "editor"} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="editor" onClick={() => setShowPreview(false)}>
                    Editor
                  </TabsTrigger>
                  <TabsTrigger value="preview" onClick={() => setShowPreview(true)}>
                    Preview
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="editor" className="mt-4">
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={20}
                    className="font-mono"
                    placeholder="Write your content in Markdown..."
                    required
                  />
                </TabsContent>
                <TabsContent value="preview" className="mt-4">
                  <div className="prose prose-sm max-w-none border rounded-lg p-4 min-h-[500px] bg-white">
                    <ReactMarkdown>{formData.content}</ReactMarkdown>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      {error && <div className="bg-red-50 text-red-600 p-4 rounded-lg mt-6">{error}</div>}

      <div className="flex items-center justify-between mt-6">
        <Button variant="outline" asChild type="button">
          <Link href="/admin/blogs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Cancel
          </Link>
        </Button>
        <Button type="submit" disabled={loading}>
          <Save className="mr-2 h-4 w-4" />
          {loading ? "Saving..." : blog ? "Update Post" : "Create Post"}
        </Button>
      </div>
    </form>
  )
}
