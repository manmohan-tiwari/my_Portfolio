import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-georgia' })

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
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 selection:bg-red-600/30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
