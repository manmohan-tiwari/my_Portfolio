import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter, SiteHeader } from '../site-chrome'
import { WorkGallery } from '../work-gallery'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Gallery | Manmohan Tiwari',
  description: 'A visual archive of selected interfaces, products, business systems, and experiments built by Manmohan Tiwari.',
  openGraph: {
    title: 'Gallery | Manmohan Tiwari',
    description: 'A visual archive of selected interfaces, products, business systems, and experiments built by Manmohan Tiwari.',
    type: 'website',
    url: `${siteUrl}/gallery`,
  },
}

export default function GalleryPage() {
  return (
    <main className="site-shell gallery-page">
      <SiteHeader activeSection="gallery" />

      <section className="gallery-return wrap" aria-label="Gallery navigation">
        <Link href="/#selected-work" className="gallery-back-link">
          <span>← Back to Portfolio</span>
        </Link>
      </section>

      <WorkGallery isVisible />

      <SiteFooter />
    </main>
  )
}
