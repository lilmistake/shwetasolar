import { getAllBlogPostsStatic } from "@/lib/blog"

export default async function newsSitemap() {
  const posts = await getAllBlogPostsStatic()

  return posts
    .filter((post) => post.publishedDate)
    .map((post) => ({
      url: `https://shwetasolar.in/newsroom/blog/${post.slug}`,
      lastModified: new Date(post.publishedDate),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      news: {
        title: post.title,
        publicationDate: post.publishedDate,
        publicationName: "Shweta Solar Blog",
      },
    }))
}
