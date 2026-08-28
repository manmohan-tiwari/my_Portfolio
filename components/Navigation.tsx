'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { navigationItems } from '@/app/data'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import MagneticWrapper from './MagneticWrapper'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const sectionHref = (id: string) => pathname === '/gallery' ? `/#${id}` : `#${id}`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center w-[95%] max-w-[1400px] h-[60px] md:h-[76px] rounded-[24px] transition-all duration-300',
        isScrolled || mobileMenuOpen
          ? 'bg-black/60 backdrop-blur-[30px] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-black/30 backdrop-blur-[10px] border border-white/[0.05] shadow-md'
      )}
    >
      <div className="w-full px-4 md:px-6 flex items-center justify-between">
        <a
          href={sectionHref('top')}
          aria-label="Manmohan Tiwari home"
          className="flex items-center gap-3 z-50 pl-2 shrink-0"
        >
          <Image
            src="/assets/mylogo.png"
            alt="Manmohan Tiwari logo"
            width={893}
            height={279}
            priority
            className="h-8 w-auto md:h-10 invert"
          />
          <span className="sr-only">Manmohan Tiwari</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <MagneticWrapper key={item.id} type="link" strength={0.15}>
              <a
                href={item.id === 'gallery' ? '/gallery' : sectionHref(item.id)}
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  'text-[15px] font-medium transition-all duration-300 hover:text-red-500 relative group inline-block py-2',
                  activeSection === item.id ? 'text-red-500' : 'text-neutral-400'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-[4px] left-0 w-full h-[2px] bg-gradient-to-r from-red-600 to-red-400 transition-transform duration-300 origin-left',
                    activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  )}
                />
              </a>
            </MagneticWrapper>
          ))}
        </nav>

        <div className="flex items-center gap-3 z-50 pr-1">
          <a
            href={sectionHref('selected-work')}
            className="flex items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/[0.05] border border-white/[0.08] text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
            aria-label="View selected work"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
          </a>
          <a
            href={sectionHref('contact')}
            className="hidden md:inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/[0.05] border border-white/[0.08] text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
            aria-label="Contact Manmohan"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          </a>

          <button
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-white/[0.05] border border-white/[0.08] text-white"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-black/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl flex flex-col items-center py-6 gap-5 md:hidden shadow-2xl shadow-black/50 animate-in fade-in slide-in-from-top-2 duration-300">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.id === 'gallery' ? '/gallery' : sectionHref(item.id)}
              onClick={() => {
                setActiveSection(item.id)
                setMobileMenuOpen(false)
              }}
              className={cn(
                'text-[16px] font-medium transition-all',
                activeSection === item.id ? 'text-red-500' : 'text-neutral-400'
              )}
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 mt-2">
            <a
              href={sectionHref('contact')}
              className="flex items-center justify-center h-11 w-11 rounded-full bg-white/[0.05] border border-white/[0.08] text-white hover:bg-red-600 transition-all"
              aria-label="Contact Manmohan"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
