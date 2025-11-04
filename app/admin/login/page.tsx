"use client"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Chrome } from "lucide-react"

export default function AdminLoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleGoogleLogin = async () => {
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/admin/dashboard`,
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      })
      if (error) throw error
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>Sign in with your Google account to access the admin dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">{error}</div>
              )}
              <Button onClick={handleGoogleLogin} className="w-full" disabled={isLoading} size="lg">
                <Chrome className="mr-2 h-5 w-5" />
                {isLoading ? "Signing in..." : "Sign in with Google"}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Only admin@shwetasolar.in can access the admin dashboard
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
