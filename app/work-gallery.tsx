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
    <section className="section wrap work-gallery-section" id="gallery" data-section="gallery">
      <div className={`section-head work-gallery-head reveal ${isVisible ? 'is-visible' : ''}`}>
        <p className="eyebrow">WORK GALLERY</p>
        <h2>A visual archive of what I&apos;ve built.</h2>
        <p className="section-lede">
          Selected interfaces, products, business systems, and experiments developed across web, mobile, and AI.
        </p>
      </div>

      <div className={`work-gallery-filter reveal ${isVisible ? 'is-visible' : ''}`} role="tablist" aria-label="Work gallery filters">
        {galleryFilterOptions.map((filter) => (
          <button
            key={filter}
            type="button"
            className={filter === activeFilter ? 'is-active' : ''}
            onClick={() => setActiveFilter(filter)}
            aria-pressed={filter === activeFilter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className={`work-gallery-grid reveal ${isVisible ? 'is-visible' : ''}`} aria-label="Portfolio work gallery">
        {visibleItems.map(({ project, projectIndex, image, imageIndex }) => {
          const isFeature = image.size === 'feature'
          const screenshotLabel = imageIndex === 0 ? 'primary screenshot' : 'secondary screenshot'
          const href = project.galleryHref ?? `/#project-${projectIndex + 1}`
          const isExternal = href.startsWith('http')

          return (
            <a
              key={`${project.title}-${image.image}`}
              className={`gallery-tile ${isFeature ? 'is-feature' : 'is-standard'}`}
              href={href}
              {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
              aria-label={`${project.title}, ${project.galleryLabel}, view selected work`}
            >
              <div className="gallery-media">
                <AssetImage
                  src={image.image}
                  alt={`${project.title} ${screenshotLabel}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw"
                  className="gallery-shot"
                  objectFit="contain"
                />

                <div className="gallery-overlay">
                  <div className="gallery-overlay-copy">
                    <span className="gallery-overlay-project">{project.title}</span>
                    <span className="gallery-overlay-category">{project.galleryLabel}</span>
                  </div>
                  <span className="gallery-overlay-link">
                    View Project <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              <div className="gallery-meta">
                <span>{project.title}</span>
                <small>{project.galleryLabel}</small>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
