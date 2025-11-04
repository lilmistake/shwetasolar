"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Trash2, Loader2 } from "lucide-react"
import { deleteNews } from "@/lib/actions/news"

export function DeleteNewsButton({ newsId }: { newsId: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this article?")) {
      return
    }

    setLoading(true)
    try {
      await deleteNews(newsId)
      router.refresh()
    } catch (error) {
      alert("Failed to delete article")
      setLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleDelete}
      disabled={loading}
      className="text-red-600 hover:text-red-700 bg-transparent"
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
    </Button>
  )
}
