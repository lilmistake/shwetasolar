"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Play } from "lucide-react"
import { Reveal } from "@/components/topcon/reveal"
import { FACTORY_PHOTOS } from "@/lib/site"

const VIDEO_ID = "55A41N5-R0k"
const ease = [0.22, 1, 0.36, 1] as const

export function VideoSection() {
  const [playing, setPlaying] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <section aria-labelledby="video-heading" className="bg-background py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground">Our story on film</p>
            <h2 id="video-heading" className="text-balance text-4xl font-semibold text-foreground md:text-6xl">
              See where your panels are made.
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            A short walk through our Hapur plant, from the first cell to the finished, tested module.
          </p>
        </Reveal>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease }}
          className="relative isolate aspect-video overflow-hidden rounded-3xl bg-ink"
        >
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              title="Shweta Solar brand film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 size-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 flex items-center justify-center text-primary-foreground"
            >
              <span className="sr-only">Play the Shweta Solar brand film</span>
              <Image
                src={FACTORY_PHOTOS.floor.src}
                alt=""
                fill
                sizes="(min-width: 1280px) 1232px, 100vw"
                className="-z-20 object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 -z-10 bg-ink/45 transition-colors duration-500 group-hover:bg-ink/30" />
              <span className="relative flex size-20 items-center justify-center md:size-28">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary-foreground/25 [animation-duration:2.4s]" />
                <span className="relative flex size-full items-center justify-center rounded-full bg-primary-foreground text-ink shadow-2xl transition-transform duration-500 group-hover:scale-110">
                  <Play className="ml-1 size-7 fill-current md:size-9" aria-hidden="true" />
                </span>
              </span>
              <span className="absolute bottom-6 left-6 flex flex-col items-start gap-1 text-left md:bottom-10 md:left-10">
                <span className="text-xs font-medium text-primary-foreground/70 md:text-sm">Brand film</span>
                <span className="text-lg font-semibold md:text-2xl">Inside Shweta Solar</span>
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
