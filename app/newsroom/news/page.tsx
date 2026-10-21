import { Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { getAllNews } from "@/lib/news"
import Link from "next/link"
import { PageHero } from "@/components/site/page-hero"

export default async function NewsPage() {
  const newsAnnouncements = await getAllNews()

  return (
    <div className="min-h-screen bg-cream">
      <PageHero
        eyebrow="Newsroom"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Newsroom", path: "/newsroom" },
          { name: "Company News", path: "/newsroom/news" },
        ]}
        title="Company News"
        intro="Latest press coverage and announcements from Shweta Solar."
      />

      <section className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="space-y-8">
          {newsAnnouncements.map((news, index) => (
            <div key={news.id}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow border border-sage/20">
                <CardContent className="p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-olive text-sm">
                      <Calendar className="h-4 w-4" />
                      {new Date(news.publishedDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-forest mb-4">{news.title}</h2>
                  <p className="text-olive leading-relaxed mb-6">{news.content}</p>
                  {news.externalUrl && (
                    <Button asChild className="bg-forest hover:bg-olive text-cream">
                      <Link href={news.externalUrl} target="_blank" rel="noopener noreferrer">
                        Read Full Article
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
              {index < newsAnnouncements.length - 1 && <Separator className="my-8" />}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
