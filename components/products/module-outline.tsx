import type { ModuleFamily } from "@/lib/products"

const COLUMNS = 6
const MAX_HEIGHT_PX = 260

export function ModuleOutline({ family: f, scaleLengthMm }: { family: ModuleFamily; scaleLengthMm: number }) {
  const height = Math.round((f.lengthMm / scaleLengthMm) * MAX_HEIGHT_PX)
  const width = Math.round((f.widthMm / f.lengthMm) * height)
  const rowsPerHalf = f.cells / COLUMNS / 2

  const half = (
    <div
      className="grid flex-1 gap-px"
      style={{ gridTemplateColumns: `repeat(${COLUMNS}, 1fr)`, gridTemplateRows: `repeat(${rowsPerHalf}, 1fr)` }}
    >
      {Array.from({ length: COLUMNS * rowsPerHalf }, (_, i) => (
        <span key={i} className="rounded-[1px] bg-primary-foreground/10" />
      ))}
    </div>
  )

  return (
    <figure className="flex items-end gap-3" aria-label={`${f.model} drawn to scale, ${f.lengthMm} by ${f.widthMm} millimetres`}>
      <div className="flex flex-col items-center gap-2">
        <div
          className="flex flex-col gap-1 rounded-md border-4 border-foreground/25 bg-forest p-1 shadow-lg"
          style={{ height, width }}
        >
          {half}
          {half}
        </div>
        <figcaption className="text-xs tabular-nums text-muted-foreground">{f.widthMm} mm</figcaption>
      </div>
      <div className="flex flex-col items-center gap-1 pb-7 text-xs tabular-nums text-muted-foreground" style={{ height: height + 28 }}>
        <span className="w-px flex-1 bg-border" />
        <span className="[writing-mode:vertical-rl]">{f.lengthMm} mm</span>
        <span className="w-px flex-1 bg-border" />
      </div>
    </figure>
  )
}
