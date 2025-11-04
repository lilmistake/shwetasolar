import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { NewsForm } from "@/components/admin/news-form"
import { notFound } from "next/navigation"

export default async function EditNewsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@shwetasolar.in") {
    redirect("/admin/login")
  }

  const { data: news, error } = await supabase.from("solar_news").select("*").eq("id", id).single()

  if (error || !news) {
    notFound()
  }

  return (
    <div className="container mx-auto p-6 md:p-10 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Edit News Article</h1>
        <p className="text-muted-foreground mt-1">Update news article details</p>
      </div>

      <NewsForm news={news} />
    </div>
  )
}
