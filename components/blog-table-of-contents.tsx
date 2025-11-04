"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { cn, generateHeadingId } from "@/lib/utils"
import { ChevronRight, ChevronDown } from "lucide-react"

interface TOCItem {
  id: string
  text: string
  level: number
  children?: TOCItem[]
}

interface BlogTableOfContentsProps {
  content: string
}

export function BlogTableOfContents({ content }: BlogTableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const [manuallyToggled, setManuallyToggled] = useState<Map<string, boolean>>(new Map())
  const isClickingRef = useRef(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const headingRegex = /^(#{1,3})\s+(.+)$/gm
    const matches = [...content.matchAll(headingRegex)]

    const tocItems: TOCItem[] = []
    let currentH2: TOCItem | null = null

    matches.forEach((match) => {
      const level = match[1].length
      const text = match[2].trim()
      const id = generateHeadingId(text)
      const item: TOCItem = { id, text, level }

      if (level === 2) {
        item.children = []
        tocItems.push(item)
        currentH2 = item
      } else if (level === 3 && currentH2) {
        currentH2.children!.push(item)
      } else if (level === 1) {
        tocItems.push(item)
        currentH2 = null
      }
    })

    setHeadings(tocItems)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickingRef.current) return

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newActiveId = entry.target.id
            setActiveId(newActiveId)

            headings.forEach((heading) => {
              const wasManuallyToggled = manuallyToggled.has(heading.id)

              if (heading.id === newActiveId && !wasManuallyToggled) {
                setExpandedSections((prev) => new Set(prev).add(heading.id))
              } else if (heading.children?.some((child) => child.id === newActiveId)) {
                if (!wasManuallyToggled) {
                  setExpandedSections((prev) => new Set(prev).add(heading.id))
                }
              }
            })
          }
        })
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: 1.0,
      },
    )

    observerRef.current = observer

    setTimeout(() => {
      const allHeadingIds = headings.flatMap((h) => (h.children ? [h.id, ...h.children.map((c) => c.id)] : [h.id]))
      const headingElements = allHeadingIds.map((id) => document.getElementById(id)).filter(Boolean)

      headingElements.forEach((element) => {
        if (element) observer.observe(element)
      })
    }, 100)

    return () => observer.disconnect()
  }, [headings, manuallyToggled])

  const scrollToHeading = (id: string) => {
    isClickingRef.current = true
    setActiveId(id)

    const element = document.getElementById(id)
    if (element) {
      const yOffset = -100
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })

      setTimeout(() => {
        isClickingRef.current = false
      }, 1000)
    }
  }

  const toggleSection = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setExpandedSections((prev) => {
      const newSet = new Set(prev)
      const willBeExpanded = !newSet.has(id)

      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }

      setManuallyToggled((prev) => new Map(prev).set(id, willBeExpanded))

      return newSet
    })
  }

  if (headings.length === 0) return null

  return (
    <nav className="sticky top-24 h-fit" aria-label="Table of contents">
      <div className="space-y-1">
        <div className="text-xs font-semibold text-olive/60 uppercase tracking-wider mb-4 px-3">On This Page</div>
        <ul className="space-y-0.5 border-l-2 border-sage/30">
          {headings.map((heading) => {
            const isExpanded = expandedSections.has(heading.id)
            const hasChildren = heading.children && heading.children.length > 0

            return (
              <li key={heading.id}>
                {heading.level === 2 ? (
                  <>
                    <div className="flex items-start">
                      <button
                        onClick={() => scrollToHeading(heading.id)}
                        className={cn(
                          "group flex items-start gap-2 flex-1 text-left py-2 px-3 -ml-[2px] border-l-2 transition-all duration-200",
                          activeId === heading.id
                            ? "border-forest text-forest font-medium bg-sage/10"
                            : "border-transparent text-olive/70 hover:text-forest hover:border-sage",
                        )}
                      >
                        <ChevronRight
                          className={cn(
                            "h-4 w-4 mt-0.5 flex-shrink-0 transition-transform",
                            activeId === heading.id ? "opacity-100" : "opacity-0 group-hover:opacity-50",
                          )}
                        />
                        <span className="text-sm leading-tight flex-1">{heading.text}</span>
                      </button>
                      {hasChildren && (
                        <button
                          onClick={(e) => toggleSection(heading.id, e)}
                          className="p-2 hover:bg-sage/10 rounded transition-colors"
                          aria-label={isExpanded ? "Collapse section" : "Expand section"}
                        >
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-olive/70 transition-transform duration-200",
                              isExpanded ? "rotate-0" : "-rotate-90",
                            )}
                          />
                        </button>
                      )}
                    </div>
                    {hasChildren && isExpanded && (
                      <ul className="space-y-0.5">
                        {heading.children!.map((child) => (
                          <li key={child.id}>
                            <button
                              onClick={() => scrollToHeading(child.id)}
                              className={cn(
                                "group flex items-start gap-2 w-full text-left py-2 px-3 pl-9 -ml-[2px] border-l-2 transition-all duration-200",
                                activeId === child.id
                                  ? "border-forest text-forest font-medium bg-sage/10"
                                  : "border-transparent text-olive/70 hover:text-forest hover:border-sage",
                              )}
                            >
                              <ChevronRight
                                className={cn(
                                  "h-4 w-4 mt-0.5 flex-shrink-0 transition-transform",
                                  activeId === child.id ? "opacity-100" : "opacity-0 group-hover:opacity-50",
                                )}
                              />
                              <span className="text-sm leading-tight">{child.text}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => scrollToHeading(heading.id)}
                    className={cn(
                      "group flex items-start gap-2 w-full text-left py-2 px-3 -ml-[2px] border-l-2 transition-all duration-200",
                      activeId === heading.id
                        ? "border-forest text-forest font-medium bg-sage/10"
                        : "border-transparent text-olive/70 hover:text-forest hover:border-sage",
                    )}
                  >
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 mt-0.5 flex-shrink-0 transition-transform",
                        activeId === heading.id ? "opacity-100" : "opacity-0 group-hover:opacity-50",
                      )}
                    />
                    <span className="text-sm leading-tight">{heading.text}</span>
                  </button>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
