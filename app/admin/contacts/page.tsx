import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DeleteContactButton } from "@/components/admin/delete-contact-button"

export default async function ContactSubmissionsPage() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user || user.email !== "admin@shwetasolar.in") {
    redirect("/admin/login")
  }

  // Fetch all contact submissions
  const { data: submissions, error: submissionsError } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })

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
              <BreadcrumbPage>Contact Submissions</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contact Submissions</h1>
          <p className="text-muted-foreground mt-1">{submissions?.length || 0} total submission(s)</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/admin/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>

      {submissionsError && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
          Error loading submissions: {submissionsError.message}
        </div>
      )}

      <div className="grid gap-6">
        {submissions && submissions.length > 0 ? (
          submissions.map((submission) => (
            <Card key={submission.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{submission.name}</CardTitle>
                    <CardDescription>{new Date(submission.created_at).toLocaleString()}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    {submission.email && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:${submission.email}`}>
                          <Mail className="mr-2 h-4 w-4" />
                          Email
                        </a>
                      </Button>
                    )}
                    {submission.phone && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={`https://wa.me/${submission.phone.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          WhatsApp
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    )}
                    <DeleteContactButton id={submission.id} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {submission.email && (
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Email:</span>
                      <p className="text-sm">{submission.email}</p>
                    </div>
                  )}
                  {submission.phone && (
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Phone:</span>
                      <p className="text-sm">{submission.phone}</p>
                    </div>
                  )}
                  {submission.company && (
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Company:</span>
                      <p className="text-sm">{submission.company}</p>
                    </div>
                  )}
                  {submission.inquiry_type && (
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Inquiry Type:</span>
                      <p className="text-sm">{submission.inquiry_type}</p>
                    </div>
                  )}
                  {submission.product && (
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Product:</span>
                      <p className="text-sm">{submission.product}</p>
                    </div>
                  )}
                  {submission.quantity && (
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Quantity:</span>
                      <p className="text-sm">{submission.quantity}</p>
                    </div>
                  )}
                  {submission.message && (
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Message:</span>
                      <p className="text-sm whitespace-pre-wrap">{submission.message}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="py-10 text-center text-muted-foreground">No contact submissions yet.</CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
