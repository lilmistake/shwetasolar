import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, ExternalLink, Edit } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DeleteSocialPostButton } from "@/components/admin/delete-social-post-button"

export default async function AdminSocialPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@shwetasolar.in") {
    redirect("/admin/login")
  }

  // Fetch all social media posts
  const { data: posts, error } = await supabase
    .from("social_media_posts")
    .select("*")
    .order("published_at", { ascending: false })

  return (
    <div className="container mx-auto p-6 md:p-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Social Media Posts</h1>
          <p className="text-muted-foreground mt-1">Manage Instagram posts and social content</p>
        </div>
        <Button asChild>
          <Link href="/admin/social/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Post
          </Link>
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
          Error loading posts: {error.message}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            {post.image_url && (
              <div className="relative aspect-square">
                <Image
                  src={post.image_url || "/placeholder.svg"}
                  alt={post.title || "Social media post"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title || "Untitled Post"}</CardTitle>
              <CardDescription>
                {new Date(post.published_at).toLocaleDateString()} • {post.platform}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.content}</p>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Link href={`/admin/social/edit/${post.id}`}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Link>
                </Button>
                {post.post_url && (
                  <Button asChild variant="outline" size="sm">
                    <a href={post.post_url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                <DeleteSocialPostButton postId={post.id} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {posts?.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground mb-4">No social media posts yet</p>
          <Button asChild>
            <Link href="/admin/social/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Post
            </Link>
          </Button>
        </Card>
      )}
    </div>
  )
}
