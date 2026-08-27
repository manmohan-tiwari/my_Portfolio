'use client'

import Image from 'next/image'

/**
 * Hero visual slot.
 *
 * Today: renders the static portrait (current behaviour, zero cost).
 * Later: drop a self-hosted .mp4/.webm you export from Higgsfield into
 * /public/assets/hero/loop.mp4 and pass its path as `videoSrc` — no other
 * code changes needed, and this never calls any generation API at runtime.
 * The video only autoplays muted+loop, so it costs nothing beyond hosting
 * the file — no client-side fetch to a paid endpoint.
 */
export function HeroMedia({
  imageSrc,
  imageAlt,
  videoSrc,
}: {
  imageSrc: string
  imageAlt: string
  videoSrc?: string
}) {
  return (
    <div className="absolute inset-x-[7%] top-[3%] bottom-[12%] overflow-hidden rounded-[2.5rem] border border-white/70 bg-slate-200 shadow-[0_28px_70px_rgba(15,23,42,0.2)] dark:border-slate-700">
      {videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={videoSrc}
          poster={imageSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
      ) : (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 768px) 42vw, 88vw"
          className="object-cover object-center"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-white/5"
      />
    </div>
  )
}