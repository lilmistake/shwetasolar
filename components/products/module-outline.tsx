import type { ModuleFamily } from "@/lib/products"
import { cn } from "@/lib/utils"

const COLUMNS = 6
const MAX_HEIGHT_PX = 240

export function ModuleOutline({
  family: f,
  scaleLengthMm,
  tone = "dark",
}: {
  family: ModuleFamily
  scaleLengthMm: number
  tone?: "dark" | "light"
}) {
  const height = Math.round((f.lengthMm / scaleLengthMm) * MAX_HEIGHT_PX)
  const width = Math.round((f.widthMm / f.lengthMm) * height)
  const rowsPerHalf = f.cells / COLUMNS / 2
  const light = tone === "light"

  const half = (
    <div
      className="grid flex-1 gap-px"
      style={{ gridTemplateColumns: `repeat(${COLUMNS}, 1fr)`, gridTemplateRows: `repeat(${rowsPerHalf}, 1fr)` }}
    >
      {Array.from({ length: COLUMNS * rowsPerHalf }, (_, i) => (
        <span key={i} className="rounded-[1px] bg-primary-foreground/15" />
      ))}
    </div>
  )

  const captionClass = light ? "text-muted-foreground" : "text-primary-foreground/60"
  const lineClass = light ? "bg-foreground/20" : "bg-primary-foreground/25"

  return (
    <figure
      className="flex items-end gap-3"
      aria-label={`${f.model} drawn to scale, ${f.lengthMm} by ${f.widthMm} millimetres`}
    >
      <div className="flex flex-col items-center gap-2">
        <div
          className={cn(
            "flex flex-col gap-1 rounded-md border-4 bg-primary p-1",
            light ? "border-foreground/15 shadow-xl" : "border-primary-foreground/30 shadow-2xl",
          )}
          style={{ height, width }}
        >
          {half}
          {half}
        </div>
        <figcaption className={cn("text-xs tabular-nums", captionClass)}>{f.widthMm} mm</figcaption>
      </div>
      <div
        className={cn("flex flex-col items-center gap-1 pb-7 text-xs tabular-nums", captionClass)}
        style={{ height: height + 28 }}
      >
        <span className={cn("w-px flex-1", lineClass)} />
        <span className="[writing-mode:vertical-rl]">{f.lengthMm} mm</span>
        <span className={cn("w-px flex-1", lineClass)} />
      </div>
    </figure>
  )
}
