"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, Mail, Clock } from "lucide-react"

interface RelatedPost {
  slug: string
  title: string
  image: string
  category: string
  readTime: number
}

interface RecentPost {
  slug: string
  title: string
  image: string
  publishedDate: string
  readTime: number
}

interface BlogRightSidebarProps {
  relatedPosts: RelatedPost[]
  recentPosts: RecentPost[]
  currentCategory: string
}

export function BlogRightSidebar({ relatedPosts, recentPosts, currentCategory }: BlogRightSidebarProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual form submission logic
    alert("Thank you! We will contact you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <aside className="space-y-8">
      <div className="bg-gradient-to-br from-forest to-olive rounded-xl p-6 text-white shadow-lg">
        <h3 className="text-xl font-bold mb-2">Need Expert Guidance?</h3>
        <p className="text-white/90 text-sm mb-6">Get personalized solar solutions for your needs</p>

        <div className="space-y-3 mb-6">
          <a
            href="tel:18001204771200"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-3 transition-all group"
          >
            <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Phone className="h-4 w-4" />
            </div>
            <div className="text-left">
              <div className="text-xs text-white/80">Toll Free</div>
              <div className="font-semibold">1800 120 477120</div>
            </div>
          </a>

          <a
            href="mailto:admin@shwetasolar.in"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-3 transition-all group"
          >
            <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Mail className="h-4 w-4" />
            </div>
            <div className="text-left">
              <div className="text-xs text-white/80">Email Us</div>
              <div className="font-semibold text-sm">admin@shwetasolar.in</div>
            </div>
          </a>
        </div>

        <Button asChild className="w-full bg-white text-forest hover:bg-white/90">
          <Link href="/contact">
            Get Free Quote
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>

      {recentPosts.length > 0 && (
        <div className="bg-white rounded-xl p-6 shadow-md border border-sage/10">
          <h3 className="text-lg font-bold text-forest mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-olive rounded-full"></span>
            Recent Articles
          </h3>
          <div className="space-y-4">
            {recentPosts.slice(0, 4).map((post) => (
              <Link
                key={post.slug}
                href={`/newsroom/blog/${post.slug}`}
                className="group block pb-4 border-b border-sage/10 last:border-0 last:pb-0"
              >
                <div className="flex gap-4">
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-sage/10">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-forest group-hover:text-olive transition-colors line-clamp-2 leading-snug mb-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-olive/60">
                      <span>
                        {new Date(post.publishedDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {relatedPosts.length > 0 && (
        <div className="bg-white rounded-xl p-6 shadow-md border border-sage/10">
          <h3 className="text-lg font-bold text-forest mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-forest rounded-full"></span>
            Related Articles
          </h3>
          <div className="space-y-4">
            {relatedPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/newsroom/blog/${post.slug}`}
                className="group block pb-4 border-b border-sage/10 last:border-0 last:pb-0"
              >
                <div className="flex gap-4">
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-sage/10">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge className="mb-2 text-xs bg-sage/20 text-forest border-0">{post.category}</Badge>
                    <h4 className="text-sm font-semibold text-forest group-hover:text-olive transition-colors line-clamp-2 leading-snug mb-1">
                      {post.title}
                    </h4>
                    <p className="text-xs text-olive/60">{post.readTime} min read</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Button
            asChild
            variant="outline"
            className="w-full mt-4 border-forest/20 text-forest hover:bg-sage/10 bg-transparent"
          >
            <Link href="/newsroom/blog">
              View All Articles
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      )}

      <div className="bg-sage/5 rounded-xl p-6 border border-sage/20">
        <h3 className="text-lg font-bold text-forest mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-olive rounded-full"></span>
          Explore More
        </h3>
        <div className="space-y-2">
          <Link
            href="/products/mono-perc"
            className="flex items-center justify-between p-3 rounded-lg hover:bg-white transition-all group"
          >
            <span className="text-sm font-medium text-forest">Our Products</span>
            <ArrowRight className="h-4 w-4 text-olive group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/resources/calculator"
            className="flex items-center justify-between p-3 rounded-lg hover:bg-white transition-all group"
          >
            <span className="text-sm font-medium text-forest">Solar Calculator</span>
            <ArrowRight className="h-4 w-4 text-olive group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/resources/downloads"
            className="flex items-center justify-between p-3 rounded-lg hover:bg-white transition-all group"
          >
            <span className="text-sm font-medium text-forest">Resources</span>
            <ArrowRight className="h-4 w-4 text-olive group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </aside>
  )
}
