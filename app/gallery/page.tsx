import type { Metadata } from 'next'
import Link from 'next/link'
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
    <div className="px-6 pb-24 pt-32 lg:px-12">
      <section className="mx-auto mb-10 max-w-7xl" aria-label="Gallery navigation">
        <Link href="/#selected-work" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400">
          <span aria-hidden="true">←</span> Back to Portfolio
        </Link>
      </section>
      <WorkGallery isVisible />
    </div>
  )
}
