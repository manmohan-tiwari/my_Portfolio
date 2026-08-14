import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Manmohan Tiwari | Software Developer',
  description:
    'Premium portfolio for Manmohan Tiwari, a software developer in Indore building web, mobile, backend, and AI-powered applications.',
  openGraph: {
    title: 'Manmohan Tiwari | Software Developer',
    description: 'Editorial portfolio focused on real projects, technical capability, experience, leadership, and contact.',
    type: 'website',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manmohan Tiwari | Software Developer',
    description: 'Editorial portfolio focused on real projects, technical capability, experience, leadership, and contact.',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Manmohan Tiwari',
  jobTitle: 'Software Developer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Indore',
    addressCountry: 'IN',
  },
  email: 'bca005@pimrindore.in',
  sameAs: [
    'https://github.com/Trumos-ai',
    'https://www.linkedin.com/in/manmohan-tiwari-87b2873b4/',
  ],
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
