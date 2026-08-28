'use client'

import { ArrowUpRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { AssetImage } from './asset-image'
import { galleryFilterOptions, projects } from './data'

type GalleryFilter = (typeof galleryFilterOptions)[number]

type GalleryItem = {
  project: (typeof projects)[number]
  projectIndex: number
  image: (typeof projects)[number]['galleryItems'][number]
  imageIndex: number
}

export function WorkGallery({ isVisible }: { isVisible: boolean }) {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('ALL')

  const items = useMemo<GalleryItem[]>(
    () =>
      projects.flatMap((project, projectIndex) =>
        project.galleryItems.map((image, imageIndex) => ({
          project,
          projectIndex,
          image,
          imageIndex,
        })),
      ),
    [],
  )

  const visibleItems = items.filter(({ project }) =>
    activeFilter === 'ALL' ? true : project.galleryCategories.includes(activeFilter),
  )

  return (
    <section className="mx-auto max-w-7xl" id="gallery" data-section="gallery">
      <div className={`mb-10 max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100' : 'translate-y-4 opacity-0'}`}>
        <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-red-600 uppercase">WORK GALLERY</p>
        <h2>A visual archive of what I&apos;ve built.</h2>
        <p className="mt-4 text-lg text-neutral-400">
          Selected interfaces, products, business systems, and experiments developed across web, mobile, and AI.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Work gallery filters">
        {galleryFilterOptions.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.14em] transition-colors ${filter === activeFilter ? 'border-red-600 bg-red-600 text-white' : 'border-white/[0.08] bg-white/[0.03] text-neutral-400 hover:border-red-500/30 hover:text-red-400'}`}
            onClick={() => setActiveFilter(filter)}
            aria-pressed={filter === activeFilter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2" aria-label="Portfolio work gallery">
        {visibleItems.map(({ project, projectIndex, image, imageIndex }) => {
          const isFeature = image.size === 'feature'
          const screenshotLabel = imageIndex === 0 ? 'primary screenshot' : 'secondary screenshot'
          const href = project.galleryHref ?? `/#project-${projectIndex + 1}`
          const isExternal = href.startsWith('http')

          return (
            <a
              key={`${project.title}-${image.image}`}
              className={`group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isFeature ? 'md:col-span-2' : ''}`}
              href={href}
              {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
              aria-label={`${project.title}, ${project.galleryLabel}, view selected work`}
            >
              <div className={`relative overflow-hidden bg-black/30 ${isFeature ? 'aspect-[2/1]' : 'aspect-[16/10]'}`}>
                <AssetImage
                  src={image.image}
                  alt={`${project.title} ${screenshotLabel}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  objectFit="contain"
                />

                <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent p-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-xl">{project.title}</span>
                    <span className="text-xs font-semibold tracking-[0.12em] text-red-200 uppercase">{project.galleryLabel}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider">
                    View Project <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 p-4">
                <span className="font-serif text-lg text-white">{project.title}</span>
                <small className="text-right text-xs font-semibold uppercase tracking-wider text-neutral-500">{project.galleryLabel}</small>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
