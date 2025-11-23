import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, ExternalLink, Edit, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { DeleteNewsButton } from "@/components/admin/delete-news-button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default async function AdminNewsPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@shwetasolar.in") {
    redirect("/admin/login")
  }

  const { data: news, error } = await supabase
    .from("solar_news")
    .select("*")
    .order("published_date", { ascending: false })

  return (
    <div className="container mx-auto p-6 md:p-10">
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/dashboard">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>News Articles</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">News Articles</h1>
          <p className="text-muted-foreground mt-1">Manage news coverage and press releases</p>
        </div>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/admin/news/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Article
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/admin/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
          Error loading news: {error.message}
        </div>
      )}

      <div className="space-y-4">
        {news?.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="mb-2">{article.title}</CardTitle>
                  <CardDescription>{new Date(article.published_date).toLocaleDateString()}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/admin/news/edit/${article.id}`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Link>
                  </Button>
                  {article.external_url && (
                    <Button asChild variant="outline" size="sm">
                      <a href={article.external_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  <DeleteNewsButton newsId={article.id} />
                </div>
              </div>
            </CardHeader>
            {article.excerpt && (
              <CardContent>
                <p className="text-sm text-muted-foreground">{article.excerpt}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {news?.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground mb-4">No news articles yet</p>
          <Button asChild>
            <Link href="/admin/news/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Article
            </Link>
          </Button>
        </Card>
      )}
    </div>
  )
}
