"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Clock, ArrowRight, Calculator, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import type { BlogPost } from "@/lib/blog"

interface BlogSidebarProps {
  currentSlug: string
  allPosts: BlogPost[]
}

export function BlogSidebar({ currentSlug, allPosts }: BlogSidebarProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  // Get popular posts (excluding current)
  const popularPosts = allPosts.filter((post) => post.slug !== currentSlug).slice(0, 4)

  // Get unique categories
  const categories = Array.from(new Set(allPosts.map((post) => post.category)))
  const categoryCounts = categories.map((category) => ({
    name: category,
    count: allPosts.filter((post) => post.category === category).length,
  }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual form submission logic
    alert("Thank you! We will contact you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <aside className="space-y-6 sticky top-24">
      {/* Quick Enquiry Form - Primary CTA */}
      <Card className="border-forest/20 shadow-lg">
        <CardHeader className="bg-forest text-cream pb-4">
          <CardTitle className="text-xl font-heading">Get a Free Quote</CardTitle>
          <p className="text-sm text-cream/90">Start your solar journey today</p>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-forest">
                Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-sage focus:border-forest"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-forest">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-sage focus:border-forest"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-forest">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border-sage focus:border-forest"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-forest">
                Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-sage focus:border-forest resize-none"
                rows={3}
                placeholder="Tell us about your solar requirements..."
              />
            </div>
            <Button type="submit" className="w-full bg-forest hover:bg-olive text-cream">
              Request Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <div className="mt-4 pt-4 border-t border-sage/30 space-y-2">
            <a
              href="tel:18001204771200"
              className="flex items-center gap-2 text-sm text-olive hover:text-forest transition-colors"
            >
              <Phone className="h-4 w-4" />
              1800 120 477120
            </a>
            <a
              href="mailto:admin@shwetasolar.in"
              className="flex items-center gap-2 text-sm text-olive hover:text-forest transition-colors"
            >
              <Mail className="h-4 w-4" />
              admin@shwetasolar.in
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Solar Calculator CTA */}
      <Card className="border-sage/30 hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-sage/20 rounded-lg">
              <Calculator className="h-6 w-6 text-forest" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-bold text-forest mb-2">Calculate Your Savings</h3>
              <p className="text-sm text-olive mb-4">See how much you can save with solar energy</p>
              <Button
                asChild
                variant="outline"
                className="w-full border-forest text-forest hover:bg-forest hover:text-cream bg-transparent"
              >
                <Link href="/resources/calculator">
                  Try Calculator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Popular Articles */}
      <Card className="border-sage/30">
        <CardHeader>
          <CardTitle className="text-lg font-heading text-forest">Popular Articles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {popularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/newsroom/blog/${post.slug}`}
              className="flex gap-3 group hover:bg-sage/10 p-2 rounded-lg transition-colors"
            >
              <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="80px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm text-forest line-clamp-2 group-hover:text-olive transition-colors mb-1">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-olive">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>
            </Link>
          ))}
          <Button asChild variant="ghost" className="w-full text-forest hover:text-olive">
            <Link href="/newsroom/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="border-sage/30">
        <CardHeader>
          <CardTitle className="text-lg font-heading text-forest">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categoryCounts.map((category) => (
            <Link
              key={category.name}
              href={`/newsroom/blog?category=${encodeURIComponent(category.name)}`}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-sage/10 transition-colors group"
            >
              <span className="text-forest group-hover:text-olive transition-colors">{category.name}</span>
              <Badge variant="secondary" className="bg-sage/20 text-forest">
                {category.count}
              </Badge>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Products CTA */}
      <Card className="border-sage/30 bg-gradient-to-br from-sage/10 to-olive/10">
        <CardContent className="p-6 text-center">
          <h3 className="font-heading font-bold text-forest mb-2">Explore Our Products</h3>
          <p className="text-sm text-olive mb-4">Discover our range of high-efficiency solar panels</p>
          <div className="space-y-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full border-forest text-forest hover:bg-forest hover:text-cream bg-transparent"
            >
              <Link href="/products/topcon">TOPCon Panels</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full border-forest text-forest hover:bg-forest hover:text-cream bg-transparent"
            >
              <Link href="/products/hjt">HJT Panels</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full border-forest text-forest hover:bg-forest hover:text-cream bg-transparent"
            >
              <Link href="/products/mono-perc">Mono PERC</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}
