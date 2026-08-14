'use client'

import Image from 'next/image'
import { useState } from 'react'

export function AssetImage({
  src,
  alt,
  className,
  width,
  height,
  fill = false,
  priority = false,
  sizes,
  objectFit = 'cover',
}: {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  sizes?: string
  objectFit?: 'cover' | 'contain'
}) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className={`${className ?? ''} asset-fallback`} aria-label={alt} role="img">
        Missing asset: {src}
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      sizes={sizes}
      onError={() => setHasError(true)}
      style={fill ? { objectFit } : undefined}
    />
  )
}
