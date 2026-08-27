'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { navigationItems } from '@/app/data'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import Button from './Button'

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
        'fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center w-[95%] max-w-[1400px] h-[60px] md:h-[76px] rounded-[24px] transition-all duration-200',
        isScrolled || mobileMenuOpen
          ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-[30px] border border-white/40 dark:border-slate-700/50 shadow-lg'
          : 'bg-white/40 dark:bg-slate-900/40 backdrop-blur-[10px] border border-white/20 dark:border-slate-700/30 shadow-md'
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
            className="h-8 w-auto md:h-10"
          />
          <span className="sr-only">Manmohan Tiwari</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.id === 'gallery' ? '/gallery' : sectionHref(item.id)}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                'text-[15px] font-medium transition-all duration-300 hover:text-red-600 relative group',
                activeSection === item.id ? 'text-red-600' : 'text-slate-700 dark:text-slate-300'
              )}
            >
              {item.label}
              <span
                className={cn(
                  'absolute -bottom-[4px] left-0 w-full h-[2px] bg-red-600 transition-transform duration-300 origin-left',
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 z-50 pr-1">
          <Button href={sectionHref('selected-work')} variant="icon" aria-label="View selected work" className="h-10 w-10 md:h-11 md:w-11">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
          </Button>
          <Button href={sectionHref('contact')} variant="icon" aria-label="Contact Manmohan" className="hidden md:inline-flex h-11 w-11">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          </Button>

          <Button
            variant="icon"
            className="md:hidden"
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
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl flex flex-col items-center py-6 gap-5 md:hidden shadow-xl animate-in fade-in slide-in-from-top-2 duration-300">
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
                activeSection === item.id ? 'text-red-600' : 'text-slate-700 dark:text-slate-300'
              )}
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 mt-2">
            <Button href={sectionHref('contact')} variant="icon" aria-label="Contact Manmohan" className="h-11 w-11">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
