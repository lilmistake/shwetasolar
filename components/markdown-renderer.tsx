"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import Image from "next/image"
import type { ComponentPropsWithoutRef } from "react"
import { generateHeadingId } from "@/lib/utils"

export function MarkdownRenderer({ content }: { content: string }) {
  if (!content) {
    return <div className="text-olive">No content available</div>
  }

  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        className="prose prose-lg max-w-none"
        components={{
          img: ({ node, ...props }: ComponentPropsWithoutRef<"img">) => {
            const src = props.src || ""
            const alt = props.alt || ""

            return (
              <span className="block my-10">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={alt}
                  width={1200}
                  height={600}
                  className="rounded-xl w-full h-auto shadow-md"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                {alt && <span className="block text-center text-sm text-olive/70 mt-3 italic font-light">{alt}</span>}
              </span>
            )
          },
          a: ({ node, ...props }: ComponentPropsWithoutRef<"a">) => (
            <a
              {...props}
              className="text-forest font-medium underline decoration-sage hover:decoration-forest transition-colors"
              target={props.href?.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            />
          ),
          h1: ({ node, children, ...props }: ComponentPropsWithoutRef<"h1">) => {
            const text = String(children)
            const id = generateHeadingId(text)
            return (
              <h1
                id={id}
                className="text-4xl font-bold text-forest mt-16 mb-6 font-heading scroll-mt-28 leading-tight"
                {...props}
              >
                {children}
              </h1>
            )
          },
          h2: ({ node, children, ...props }: ComponentPropsWithoutRef<"h2">) => {
            const text = String(children)
            const id = generateHeadingId(text)
            return (
              <h2
                id={id}
                className="text-3xl font-bold text-forest mt-12 mb-5 font-heading scroll-mt-28 leading-tight"
                {...props}
              >
                {children}
              </h2>
            )
          },
          h3: ({ node, children, ...props }: ComponentPropsWithoutRef<"h3">) => {
            const text = String(children)
            const id = generateHeadingId(text)
            return (
              <h3
                id={id}
                className="text-2xl font-semibold text-forest mt-10 mb-4 font-heading scroll-mt-28 leading-snug"
                {...props}
              >
                {children}
              </h3>
            )
          },
          p: ({ node, ...props }: ComponentPropsWithoutRef<"p">) => (
            <p className="text-olive/90 text-lg leading-relaxed mb-6 font-light" {...props} />
          ),
          ul: ({ node, ...props }: ComponentPropsWithoutRef<"ul">) => <ul className="space-y-3 mb-8 ml-6" {...props} />,
          ol: ({ node, ...props }: ComponentPropsWithoutRef<"ol">) => <ol className="space-y-3 mb-8 ml-6" {...props} />,
          li: ({ node, ...props }: ComponentPropsWithoutRef<"li">) => (
            <li
              className="text-olive/90 text-lg leading-relaxed pl-2 relative before:content-[''] before:absolute before:left-[-1rem] before:top-[0.7rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-forest/60"
              {...props}
            />
          ),
          blockquote: ({ node, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
            <blockquote
              className="border-l-4 border-forest/40 pl-6 py-4 my-8 italic text-olive/80 bg-sage/5 rounded-r-lg"
              {...props}
            />
          ),
          code: ({ node, inline, ...props }: ComponentPropsWithoutRef<"code"> & { inline?: boolean }) => {
            if (inline) {
              return (
                <code className="bg-sage/30 text-forest px-2 py-1 rounded text-base font-mono font-medium" {...props} />
              )
            }
            return (
              <code
                className="block bg-forest/95 text-cream p-6 rounded-xl overflow-x-auto my-8 font-mono text-sm leading-relaxed shadow-lg"
                {...props}
              />
            )
          },
          table: ({ node, ...props }: ComponentPropsWithoutRef<"table">) => (
            <div className="overflow-x-auto my-8 rounded-xl border border-sage/30 shadow-sm">
              <table className="w-full" {...props} />
            </div>
          ),
          th: ({ node, ...props }: ComponentPropsWithoutRef<"th">) => (
            <th className="bg-sage/20 text-forest font-semibold p-4 text-left border-b-2 border-sage/40" {...props} />
          ),
          td: ({ node, ...props }: ComponentPropsWithoutRef<"td">) => (
            <td className="p-4 text-olive/90 border-b border-sage/20" {...props} />
          ),
          strong: ({ node, ...props }: ComponentPropsWithoutRef<"strong">) => (
            <strong className="font-semibold text-forest" {...props} />
          ),
          em: ({ node, ...props }: ComponentPropsWithoutRef<"em">) => (
            <em className="italic text-olive/90" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
