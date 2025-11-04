import Link from "next/link"
import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog"

export const dynamic = "force-dynamic"

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const params = await searchParams
  const allBlogPosts = await getAllBlogPosts()
  const categories = await getBlogCategories()
  const allCategories = ["All", ...categories]

  const selectedCategory = params.category || "All"

  if (allBlogPosts.length === 0) {
    return (
      <div className="min-h-screen bg-cream pt-24">
        <section className="relative h-[600px] overflow-hidden">
          <Image
            src="/solar-panels-on-green-factory-roof-with-trees.jpg"
            alt="Shweta Solar Blog"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/50 to-forest/80" />

          <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <Link href="/newsroom" className="text-cream/80 hover:text-cream transition-colors">
                  Newsroom
                </Link>
                <span className="text-cream/60">›</span>
                <span className="text-cream">Blog</span>
              </div>

              <h1 className="font-heading text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight">
                Insights & Innovation in Solar Energy
              </h1>
              <p className="text-cream/90 text-xl md:text-2xl leading-relaxed max-w-3xl">
                Explore the latest trends, technologies, and sustainable practices shaping the future of renewable
                energy
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-32">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12 border border-sage/20">
              <h2 className="font-heading text-4xl font-bold text-forest mb-4">Coming Soon</h2>
              <p className="text-olive text-lg leading-relaxed">
                We're working on bringing you insightful articles about solar energy, sustainability, and innovation.
                Check back soon for our latest content.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const featuredPost = allBlogPosts[0] // First post is featured
  const popularPosts = allBlogPosts.slice(1, 4)
  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesCategory
  })

  const isFiltering = selectedCategory !== "All"
  const displayedFeaturedPost = isFiltering ? filteredPosts[0] : featuredPost
  const displayedPopularPosts = isFiltering ? filteredPosts.slice(1, 4) : popularPosts
  const displayedAllPosts = isFiltering ? filteredPosts.slice(4) : filteredPosts

  return (
    <div className="min-h-screen bg-cream pt-24">
      <section className="relative h-[600px] overflow-hidden">
        <Image
          src="/solar-panels-on-green-factory-roof-with-trees.jpg"
          alt="Shweta Solar Blog"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/50 to-forest/80" />

        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/newsroom" className="text-cream/80 hover:text-cream transition-colors">
                Newsroom
              </Link>
              <span className="text-cream/60">›</span>
              <span className="text-cream">Blog</span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight">
              Insights & Innovation in Solar Energy
            </h1>
            <p className="text-cream/90 text-xl md:text-2xl leading-relaxed max-w-3xl">
              Explore the latest trends, technologies, and sustainable practices shaping the future of renewable energy
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-sage/20 bg-white sticky top-20 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 flex-wrap">
            {allCategories.map((category) => (
              <Link key={category} href={`/newsroom/blog${category !== "All" ? `?category=${category}` : ""}`}>
                <Button
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className={
                    selectedCategory === category
                      ? "bg-forest text-cream hover:bg-olive"
                      : "border-sage/30 text-olive hover:bg-sage/10"
                  }
                >
                  {category}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest">
            {isFiltering ? "Filtered Articles" : "Popular Articles"}
          </h2>
          {isFiltering && (
            <p className="text-olive mt-2">
              Found {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          {displayedFeaturedPost && (
            <Link href={`/newsroom/blog/${displayedFeaturedPost.slug}`} className="lg:col-span-3">
              <div className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white group h-full rounded-2xl cursor-pointer">
                <div className="relative h-[400px] overflow-hidden rounded-t-2xl">
                  <Image
                    src={displayedFeaturedPost.image || "/placeholder.svg"}
                    alt={displayedFeaturedPost.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                <div className="pb-8 px-8">
                  <Badge className="bg-sage/20 text-forest mb-4 mt-6">{displayedFeaturedPost.category}</Badge>
                  <h3 className="font-heading text-3xl font-bold text-forest mb-4 group-hover:text-olive transition-colors">
                    {displayedFeaturedPost.title}
                  </h3>
                  <p className="text-olive leading-relaxed mb-4">{displayedFeaturedPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-olive">
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {displayedFeaturedPost.readTime} min read
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          <div className="lg:col-span-2 space-y-8">
            {displayedPopularPosts.map((post) => (
              <Link key={post.slug} href={`/newsroom/blog/${post.slug}`}>
                <div className="overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white group rounded-xl cursor-pointer">
                  <div className="flex gap-0">
                    <div className="relative w-40 h-40 flex-shrink-0 overflow-hidden rounded-l-xl">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        sizes="160px"
                      />
                    </div>
                    <div className="flex-1 min-w-0 pb-4 px-4 pt-4">
                      <Badge className="bg-sage/20 text-forest text-xs mb-2">{post.category}</Badge>
                      <h4 className="font-heading text-lg font-bold text-forest mb-2 line-clamp-2 group-hover:text-olive transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-olive text-sm line-clamp-2">{post.excerpt}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {displayedAllPosts.length > 0 && (
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest mb-8">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedAllPosts.map((post) => (
                <Link key={post.slug} href={`/newsroom/blog/${post.slug}`}>
                  <div className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white h-full group rounded-xl cursor-pointer">
                    <div className="relative h-56 overflow-hidden rounded-t-xl">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="pb-6 px-6 pt-4">
                      <Badge className="mb-3 bg-sage/20 text-forest">{post.category}</Badge>
                      <h3 className="font-heading text-xl font-bold text-forest mb-3 line-clamp-2 group-hover:text-olive transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-olive mb-4 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-olive">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime} min read
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-forest group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-olive text-lg">No articles found matching your criteria.</p>
            <Link href="/newsroom/blog">
              <Button className="mt-4 bg-forest text-cream hover:bg-olive">Clear Filters</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
