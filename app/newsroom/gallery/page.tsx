import { getAllGalleryItems } from "@/lib/gallery"
import { GalleryClient } from "@/components/gallery-client"
import socialPostsData from "@/data/social-posts.json"

export default async function GalleryPage() {
  const galleryItems = await getAllGalleryItems()

  const socialPosts = socialPostsData.posts || []

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
