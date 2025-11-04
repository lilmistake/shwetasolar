import Link from "next/link"
import { ArrowRight, FileText, ImageIcon, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Newsroom - Latest Solar Industry News, Blog & Updates",
  description:
    "Stay updated with Shweta Solar's latest news, industry insights, and solar energy articles. Explore our blog, company announcements, press releases, and event gallery.",
  openGraph: {
    title: "Shweta Solar Newsroom - Industry News & Insights",
    description:
      "Read the latest updates from Shweta Solar including solar technology trends, company milestones, and renewable energy insights from industry experts.",
  },
}

export default function NewsroomPage() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-forest to-olive text-cream">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Newsroom</h1>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl">
            Stay updated with the latest news, insights, and stories from Shweta Solar
          </p>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Card */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-sage/20 hover:border-forest overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-forest/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-forest group-hover:scale-110 transition-all duration-300">
                  <FileText className="h-8 w-8 text-forest group-hover:text-cream transition-colors" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-forest mb-4">Blog</h2>
                <p className="text-olive mb-6 leading-relaxed">
                  In-depth articles, industry insights, and thought leadership on solar energy and sustainability
                </p>
                <Button
                  asChild
                  className="bg-forest text-cream hover:bg-olive group-hover:translate-x-2 transition-all"
                >
                  <Link href="/newsroom/blog" className="flex items-center gap-2">
                    Read Articles
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Gallery Card */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-sage/20 hover:border-forest overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-forest/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-forest group-hover:scale-110 transition-all duration-300">
                  <ImageIcon className="h-8 w-8 text-forest group-hover:text-cream transition-colors" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-forest mb-4">Gallery</h2>
                <p className="text-olive mb-6 leading-relaxed">
                  Visual stories from our events, installations, and social media highlights
                </p>
                <Button
                  asChild
                  className="bg-forest text-cream hover:bg-olive group-hover:translate-x-2 transition-all"
                >
                  <Link href="/newsroom/gallery" className="flex items-center gap-2">
                    View Gallery
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* News Card */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-sage/20 hover:border-forest overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-forest/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-forest group-hover:scale-110 transition-all duration-300">
                  <Megaphone className="h-8 w-8 text-forest group-hover:text-cream transition-colors" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-forest mb-4">News</h2>
                <p className="text-olive mb-6 leading-relaxed">
                  Latest company announcements, press releases, and important updates
                </p>
                <Button
                  asChild
                  className="bg-forest text-cream hover:bg-olive group-hover:translate-x-2 transition-all"
                >
                  <Link href="/newsroom/news" className="flex items-center gap-2">
                    View News
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-sage/10">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-forest mb-8">Latest Updates</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-forest to-olive" />
              <CardContent className="p-6">
                <div className="text-sm text-olive mb-2">Blog • 2 days ago</div>
                <h3 className="font-heading text-xl font-bold text-forest mb-3">The Future of Solar Energy in India</h3>
                <p className="text-olive mb-4">
                  Exploring the technological advancements and policy changes shaping India's solar landscape...
                </p>
                <Button asChild variant="link" className="text-forest p-0">
                  <Link href="/newsroom/blog">Read More →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-sage to-olive" />
              <CardContent className="p-6">
                <div className="text-sm text-olive mb-2">News • 5 days ago</div>
                <h3 className="font-heading text-xl font-bold text-forest mb-3">
                  Shweta Solar Announces New Manufacturing Facility
                </h3>
                <p className="text-olive mb-4">
                  We're excited to announce the expansion of our manufacturing capabilities with a new state-of-the-art
                  facility...
                </p>
                <Button asChild variant="link" className="text-forest p-0">
                  <Link href="/newsroom/news">Read More →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
