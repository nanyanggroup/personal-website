import Image from "next/image"

import type { Photo as PhotoData } from "@/lib/site"

export function Photo({
  photo,
  sizes,
  priority = false,
}: {
  photo: PhotoData
  sizes: string
  priority?: boolean
}) {
  return (
    <figure>
      <div className={`relative overflow-hidden bg-muted ${photo.aspect}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm">
        <span className="font-heading text-base">{photo.title}</span>
        <span className="shrink-0 text-muted-foreground">{photo.meta}</span>
      </figcaption>
    </figure>
  )
}
