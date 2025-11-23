import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BlogForm } from "@/components/admin/blog-form"

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user || user.email !== "admin@shwetasolar.in") {
    redirect("/admin/login")
  }

  // Fetch the blog post
  const { data: blog, error: blogError } = await supabase.from("solar_blogs").select("*").eq("id", id).single()

  if (blogError || !blog) {
    redirect("/admin/blogs")
  }

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
              <BreadcrumbLink href="/admin/blogs">Blog Posts</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit Post</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Blog Post</h1>

      <BlogForm blog={blog} />
    </div>
  )
}
