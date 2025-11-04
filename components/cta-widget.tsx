"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import type { ReactNode } from "react"

interface CTAWidgetProps {
  icon: ReactNode
  title: string
  description: string
  buttonText: string
  buttonHref: string
  variant?: "default" | "gradient" | "outline"
}

export function CTAWidget({ icon, title, description, buttonText, buttonHref, variant = "default" }: CTAWidgetProps) {
  const variantStyles = {
    default: "bg-white border-sage/20",
    gradient: "bg-gradient-to-br from-forest to-olive text-cream border-0",
    outline: "bg-sage/5 border-sage/30",
  }

  const buttonStyles = {
    default: "bg-forest text-cream hover:bg-olive",
    gradient: "bg-sage text-forest hover:bg-sage/90",
    outline: "bg-forest text-cream hover:bg-olive",
  }

  return (
    <Card className={`p-12 text-center ${variantStyles[variant]}`}>
      <div className={`inline-flex h-16 w-16 mx-auto mb-6 ${variant === "gradient" ? "text-sage" : "text-forest"}`}>
        {icon}
      </div>
      <h2 className={`font-display text-3xl font-bold mb-4 ${variant === "gradient" ? "text-cream" : "text-forest"}`}>
        {title}
      </h2>
      <p className={`text-xl mb-8 max-w-2xl mx-auto ${variant === "gradient" ? "text-cream/90" : "text-olive"}`}>
        {description}
      </p>
      <Button asChild size="lg" className={buttonStyles[variant]}>
        <Link href={buttonHref}>{buttonText}</Link>
      </Button>
    </Card>
  )
}
