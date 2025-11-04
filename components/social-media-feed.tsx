"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import Image from "next/image"

interface SocialPost {
  id: string
  platform: string
  post_type: string
  title: string | null
  content: string
  image_url: string | null
  post_url: string | null
  published_at: string
}

interface SocialMediaFeedProps {
  posts: SocialPost[]
}

const platformIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  all: ExternalLink,
}

const platformColors = {
  linkedin: "text-[#0A66C2]",
  twitter: "text-[#1DA1F2]",
  facebook: "text-[#1877F2]",
  instagram: "text-[#E4405F]",
  all: "text-[#4A5D23]",
}

export function SocialMediaFeed({ posts }: SocialMediaFeedProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => {
        const Icon = platformIcons[post.platform as keyof typeof platformIcons] || ExternalLink
        const colorClass = platformColors[post.platform as keyof typeof platformColors] || "text-[#4A5D23]"

        return (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            {post.image_url && (
              <div className="relative h-48 w-full bg-[#F5F5DC]">
                <Image
                  src={post.image_url || "/placeholder.svg"}
                  alt={post.title || "Social media post"}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Icon className={`h-5 w-5 ${colorClass}`} />
                <span className="text-sm text-muted-foreground">
                  {new Date(post.published_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              {post.title && <h3 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h3>}

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.content}</p>

              {post.post_url && (
                <Button variant="outline" size="sm" asChild>
                  <a href={post.post_url} target="_blank" rel="noopener noreferrer">
                    View Post <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </Card>
        )
      })}
    </div>
  )
}
