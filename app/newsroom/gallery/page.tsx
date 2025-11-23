import { getAllGalleryItems } from "@/lib/gallery"
import { GalleryClient } from "@/components/gallery-client"
import { createClient } from "@/lib/supabase/server"

export const revalidate = 3600

export default async function GalleryPage() {
  const galleryItems = await getAllGalleryItems()
  const supabase = await createClient()

  const { data: posts } = await supabase
    .from("social_media_posts")
    .select("*")
    .order("published_at", { ascending: false })
    .limit(12)

  const socialPosts = (posts || []).map((post) => ({
    id: post.id,
    platform: post.platform,
    image: post.image_url,
    caption: post.title || post.content || "",
    date: new Date(post.published_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    likes: 0,
    postUrl: post.post_url,
  }))

  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-forest to-olive text-cream">
        <div className="container mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-cream/90 max-w-2xl">
            Visual stories from our journey, events, and social media highlights
          </p>
        </div>
      </section>

      <GalleryClient galleryItems={galleryItems} socialPosts={socialPosts} />
    </div>
  )
}
