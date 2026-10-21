import { getAllGalleryItems } from "@/lib/gallery"
import { GalleryClient } from "@/components/gallery-client"
import { createClient } from "@/lib/supabase/server"
import { PageHero } from "@/components/site/page-hero"

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
    <div className="min-h-screen bg-cream">
      <PageHero
        eyebrow="Newsroom"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Newsroom", path: "/newsroom" },
          { name: "Gallery", path: "/newsroom/gallery" },
        ]}
        title="Gallery"
        intro="Visual stories from our journey, events, and social media highlights."
      />

      <GalleryClient galleryItems={galleryItems} socialPosts={socialPosts} />
    </div>
  )
}
