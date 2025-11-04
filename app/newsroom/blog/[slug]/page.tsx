import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getBlogPostBySlug, getAllBlogPostsStatic, getAllBlogPosts, getRecentPosts } from "@/lib/blog"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { ShareButton } from "@/components/share-button"
import { BlogTableOfContents } from "@/components/blog-table-of-contents"
import { BlogRightSidebar } from "@/components/blog-right-sidebar"
import { Breadcrumb } from "@/components/breadcrumb"
import type { Metadata } from "next"

export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await getAllBlogPostsStatic()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, "solar energy", "renewable energy", "Shweta Solar"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      images: [post.image || "/images/logo.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image || "/images/logo.webp"],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allPosts = await getAllBlogPosts()
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      image: p.image || "/placeholder.svg",
      category: p.category,
      readTime: p.readTime,
    }))

  const recentPostsData = await getRecentPosts(5)
  const recentPosts = recentPostsData
    .filter((p) => p.slug !== post.slug)
    .slice(0, 4)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      image: p.image || "/placeholder.svg",
      publishedDate: p.publishedDate,
      readTime: p.readTime,
    }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.publishedDate,
            dateModified: post.publishedDate,
            author: {
              "@type": "Organization",
              name: "Shweta Solar",
            },
            publisher: {
              "@type": "Organization",
              name: "Shweta Solar",
              logo: {
                "@type": "ImageObject",
                url: "https://shwetasolar.in/images/logo.webp",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://shwetasolar.in/newsroom/blog/${slug}`,
            },
          }),
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-cream to-white pt-24">
        <div className="container mx-auto px-4 py-12">
          <Breadcrumb
            items={[
              { label: "Newsroom", href: "/newsroom" },
              { label: "Blog", href: "/newsroom/blog" },
              { label: post.title },
            ]}
          />

          <Button asChild variant="ghost" className="mb-8 text-forest hover:text-olive">
            <Link href="/newsroom/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="grid lg:grid-cols-[280px_1fr] xl:grid-cols-[280px_1fr_320px] gap-8 xl:gap-12">
            {/* Left Sidebar - Table of Contents */}
            <aside aria-label="Navigation" className="hidden lg:block">
              <BlogTableOfContents content={post.content} />
            </aside>

            {/* Main Content */}
            <article className="min-w-0 max-w-4xl">
              <div className="mb-10">
                <Badge className="mb-4 bg-sage text-forest hover:bg-sage/80">{post.category}</Badge>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-forest mb-6 leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-olive/70 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <time dateTime={post.publishedDate}>
                      {new Date(post.publishedDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    {post.readTime} min read
                  </div>
                  <ShareButton title={post.title} />
                </div>
              </div>

              <div className="relative h-[400px] md:h-[500px] mb-12 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                />
              </div>

              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="bg-gradient-to-br from-sage/20 to-olive/10 rounded-2xl p-8 mb-12 border-l-4 border-forest">
                  <div className="flex items-start gap-4">
                    <div className="bg-forest rounded-full p-3 flex-shrink-0">
                      <Lightbulb className="h-6 w-6 text-cream" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-forest mb-4">Key Takeaways</h2>
                      <ul className="space-y-3">
                        {post.keyTakeaways.map((takeaway, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-forest font-bold mt-1">•</span>
                            <span className="text-olive leading-relaxed">{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 shadow-sm border border-sage/10">
                <MarkdownRenderer content={post.content} />
              </div>
            </article>

            <div className="hidden xl:block">
              <BlogRightSidebar relatedPosts={relatedPosts} recentPosts={recentPosts} currentCategory={post.category} />
            </div>
          </div>

          <div className="xl:hidden mt-12">
            <BlogRightSidebar relatedPosts={relatedPosts} recentPosts={recentPosts} currentCategory={post.category} />
          </div>
        </div>
      </div>
    </>
  )
}
