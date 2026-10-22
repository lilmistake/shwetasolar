import Image from "next/image"
import type { Segment } from "@/lib/products"

export function UseCaseTiles({ segment }: { segment: Segment }) {
  return (
    <ul className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
      {segment.useCases.map((u) => {
        const src = segment.useCaseImages?.[u]
        return (
          <li key={u} className="relative flex aspect-[4/5] items-end overflow-hidden rounded-2xl bg-forest">
            {src && (
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent" aria-hidden="true" />
            <p className="relative p-4 text-lg font-semibold text-primary-foreground md:p-5 md:text-xl">{u}</p>
          </li>
        )
      })}
    </ul>
  )
}
