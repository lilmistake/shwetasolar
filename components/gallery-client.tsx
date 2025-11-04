"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Folder, Instagram, Facebook, Linkedin, Twitter, ImageOff, FileX } from "lucide-react"

interface GalleryImage {
  id: string
  url: string
  caption: string
}

interface GalleryItem {
  id: string
  title: string
  folder: string
  eventDate: string | null
  images: GalleryImage[]
}

interface SocialPost {
  id: string
  platform: string
  image: string
  caption: string
  date: string
  likes: number
  postUrl?: string
}

interface GalleryClientProps {
  galleryItems: GalleryItem[]
  socialPosts: SocialPost[]
}

export function GalleryClient({ galleryItems, socialPosts }: GalleryClientProps) {
  const [selectedFolder, setSelectedFolder] = useState<GalleryItem | null>(null)
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null)

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-5 w-5" />
      case "facebook":
        return <Facebook className="h-5 w-5" />
      case "linkedin":
        return <Linkedin className="h-5 w-5" />
      case "twitter":
        return <Twitter className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <>
      <div className="container mx-auto px-6 py-12">
        {/* Event Folders */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-forest mb-8">Event Albums</h2>
          {galleryItems.length === 0 ? (
            <div className="text-center py-16 bg-sage/10 rounded-lg border-2 border-dashed border-sage/30">
              <FileX className="h-16 w-16 text-sage mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-forest mb-2">No Event Albums Yet</h3>
              <p className="text-olive max-w-md mx-auto">
                Event photo albums will appear here once they are uploaded. Check back soon for updates from our latest
                events and milestones.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryItems.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-sage/20"
                  onClick={() => setSelectedFolder(item)}
                >
                  <div className="relative h-48">
                    <Image
                      src={item.images[0]?.url || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-cream mb-2">
                        <Folder className="h-4 w-4" />
                        <span className="text-sm">{item.images.length} photos</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-heading text-lg font-bold text-forest mb-1">{item.title}</h3>
                    <p className="text-sm text-olive">
                      {item.eventDate
                        ? new Date(item.eventDate).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })
                        : item.folder}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Social Media Posts */}
        <section>
          <h2 className="font-heading text-3xl font-bold text-forest mb-8">Social Media Highlights</h2>
          {socialPosts.length === 0 ? (
            <div className="text-center py-16 bg-sage/10 rounded-lg border-2 border-dashed border-sage/30">
              <ImageOff className="h-16 w-16 text-sage mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-forest mb-2">No Social Posts Yet</h3>
              <p className="text-olive max-w-md mx-auto">
                Our latest social media posts will appear here. Follow us on Instagram, LinkedIn, Facebook, and Twitter
                to stay updated with our journey.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialPosts.map((post) => (
                <Link
                  key={post.id}
                  href={post.postUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-sage/20 h-full">
                    <div className="relative aspect-square bg-sage/5">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.caption}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-forest text-cream">{getPlatformIcon(post.platform)}</Badge>
                        <span className="text-xs text-olive">{post.date}</span>
                      </div>
                      <p className="text-sm text-olive mb-2 line-clamp-2">{post.caption}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Folder Dialog */}
      <Dialog open={!!selectedFolder} onOpenChange={() => setSelectedFolder(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-cream">
          {selectedFolder && (
            <div>
              <div className="mb-6">
                <h2 className="font-heading text-3xl font-bold text-forest mb-2">{selectedFolder.title}</h2>
                <p className="text-olive">
                  {selectedFolder.eventDate
                    ? new Date(selectedFolder.eventDate).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })
                    : selectedFolder.folder}{" "}
                  • {selectedFolder.images.length} photos
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {selectedFolder.images.map((image) => (
                  <div
                    key={image.id}
                    className="relative h-48 cursor-pointer rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image src={image.url || "/placeholder.svg"} alt={image.caption} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-cream">
          {selectedImage && (
            <div>
              <div className="relative h-[70vh] mb-4">
                <Image
                  src={selectedImage.url || "/placeholder.svg"}
                  alt={selectedImage.caption}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-olive">{selectedImage.caption}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
