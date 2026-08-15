'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigationItems } from './data'

function getHref(id: string) {
  return id === 'gallery' ? '/gallery' : `/#${id}`
}

export function SiteHeader({ activeSection }: { activeSection: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner wrap">
        <Link className="brand-lockup" href="/#top" aria-label="Manmohan Tiwari home">
          <Image
            src="/assets/mylogo.png"
            alt="Manmohan Tiwari logo"
            width={893}
            height={279}
            priority
            className="h-8 w-auto"
          />
          <span className="sr-only">Manmohan Tiwari</span>
        </Link>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <Link
                key={item.id}
                href={getHref(item.id)}
                className={isActive ? 'is-active' : ''}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="header-actions">
          <Link className="header-cta" href="/#contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s Connect <ArrowUpRight size={16} />
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="footer wrap">
      <span>Manmohan Tiwari</span>
      <span>Software Developer</span>
      <span>Indore, India</span>
    </footer>
  )
}
