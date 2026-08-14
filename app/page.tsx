'use client'

import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { expertiseGroups, leadershipItems, navigationItems, stackedPanels } from './data'
import { SiteFooter, SiteHeader } from './site-chrome'

type SelectedWorkItem = {
  number: string
  title: string
  category: string
  role: string
  stack: string
  description: string
  cta: string
  href?: string
}

const selectedWork: SelectedWorkItem[] = [
  {
    number: '01',
    title: 'Jaiswal Trophy Billing System',
    category: 'BUSINESS MANAGEMENT SYSTEM',
    role: 'FULL-STACK PHP DEVELOPER',
    stack: 'PHP · MYSQL/MARIADB · PDO · JAVASCRIPT',
    description:
      'A centralized business management system for sales, purchases, inventory, customers, vendors, payments, and reporting.',
    cta: 'VIEW LIVE',
    href: 'http://nagarsoftware.in/trophy/',
  },
  {
    number: '02',
    title: 'Coaching Institute Management System',
    category: 'EDUCATION MANAGEMENT PLATFORM',
    role: 'FULL-STACK PHP DEVELOPER',
    stack: 'PHP · MYSQL/MARIADB · JAVASCRIPT · BOOTSTRAP · DOMPDF',
    description:
      'A workflow platform for enquiries, admissions, attendance, fees, receipts, and reporting for a coaching institute.',
    cta: 'LIVE PROJECT UNAVAILABLE',
  },
  {
    number: '03',
    title: 'RKAAN Technobyte',
    category: 'DIGITAL STUDIO WEBSITE',
    role: 'FRONTEND DEVELOPER / UI ENGINEER',
    stack: 'REACT · VITE · JAVASCRIPT · TAILWIND CSS',
    description:
      'A responsive AI-first digital studio website focused on technology consulting and product development.',
    cta: 'VIEW LIVE',
    href: 'https://rkkaan.netlify.app/',
  },
  {
    number: '04',
    title: 'FocusForge',
    category: 'AI PRODUCTIVITY APPLICATION',
    role: 'FULL-STACK FLUTTER DEVELOPER',
    stack: 'FLUTTER · DART · FIREBASE · GROQ API · RIVERPOD',
    description:
      'An AI-assisted productivity application designed to turn overwhelming tasks into manageable actions through energy-aware planning and intelligent assistance.',
    cta: 'VIEW LIVE',
    href: 'https://focusforgge.netlify.app/',
  },
]

function SectionTitle({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string
  title: string
  lede?: string
}) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {lede ? <p className="section-lede">{lede}</p> : <span />}
    </div>
  )
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('top')
  const [visibleSections, setVisibleSections] = useState<string[]>(['top'])

  const sectionIds = navigationItems.map((item) => item.id).filter((id) => id !== 'gallery')

  useEffect(() => {
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const id = entry.target.getAttribute('data-section')
          if (!id) return

          setVisibleSections((current) => (current.includes(id) ? current : [...current, id]))
        })
      },
      { threshold: 0.18 },
    )

    const activeObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible) return

        const id = visible.target.getAttribute('data-section')
        if (id) setActiveSection(id)
      },
      { rootMargin: '-22% 0px -60% 0px', threshold: [0.15, 0.25, 0.4] },
    )

    sectionIds.forEach((id) => {
      const element = document.querySelector<HTMLElement>(`[data-section="${id}"]`)
      if (!element) return

      visibilityObserver.observe(element)
      activeObserver.observe(element)
    })

    const hero = document.querySelector<HTMLElement>('[data-section="top"]')
    if (hero) {
      visibilityObserver.observe(hero)
      activeObserver.observe(hero)
    }

    return () => {
      visibilityObserver.disconnect()
      activeObserver.disconnect()
    }
  }, [sectionIds])

  return (
    <main className="site-shell">
      <SiteHeader activeSection={activeSection} />

      <section className="hero wrap" id="top" data-section="top">
        <div className={`reveal ${visibleSections.includes('top') ? 'is-visible' : ''}`}>
          <p className="eyebrow">SOFTWARE DEVELOPER / INDORE, INDIA</p>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>Software built for the real world, not just the demo.</h1>
              <p className="hero-lede">
                I build web applications, mobile products, business systems, and AI-powered tools with a focus on
                reliable engineering, thoughtful interfaces, and software that works in the real world.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#selected-work">
                  Explore Selected Work <ArrowUpRight size={16} />
                </a>
                <a className="button button-secondary" href="#contact">
                  Let&apos;s Connect
                </a>
              </div>
            </div>

            <div className="hero-panels" aria-label="Core focus areas">
              {stackedPanels.map((panel) => (
                <div className={`stack-panel stack-panel-${panel.id}`} key={panel.id}>
                  <div className="stack-panel-head">
                    <span>{panel.title}</span>
                    <small>{panel.subtitle}</small>
                  </div>
                  <div className="stack-panel-tags">
                    {panel.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section wrap selected-work-section" id="selected-work" data-section="selected-work">
        <SectionTitle
          eyebrow="01 / SELECTED WORK"
          title="An editorial project index, presented through typography and structure."
          lede="Four projects shown as a concise record of category, role, stack, and outcome."
        />

        <div className={`work-index reveal ${visibleSections.includes('selected-work') ? 'is-visible' : ''}`}>
          {selectedWork.map((project) => (
            <article className="work-entry" key={project.number}>
              <div className="work-entry-grid">
                <div className="work-number" aria-hidden="true">
                  {project.number}
                </div>

                <div className="work-copy">
                  <h3>{project.title}</h3>
                  <div className="work-meta">
                    <span>{project.category}</span>
                    <span>{project.role}</span>
                    <span>{project.stack}</span>
                  </div>
                  <p>{project.description}</p>
                </div>

                <div className="work-cta-wrap">
                  {project.href ? (
                    <a className="text-button work-cta" href={project.href} target="_blank" rel="noreferrer">
                      {project.cta} <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="text-button is-muted work-cta">{project.cta}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section wrap profile-section" id="profile" data-section="profile">
        <SectionTitle eyebrow="02 / PROFILE" title="Profile" />

        <div className={`profile-copy-only reveal ${visibleSections.includes('profile') ? 'is-visible' : ''}`}>
          <p>
            Manmohan Tiwari is a software developer building web applications, mobile applications, backend systems,
            database-driven platforms, and AI-powered products.
          </p>
          <p>
            The focus stays practical: clear interfaces, stable foundations, and software that feels dependable in
            everyday use.
          </p>
        </div>
      </section>

      <section className="section wrap" id="expertise" data-section="expertise">
        <SectionTitle
          eyebrow="03 / TECHNICAL EXPERTISE"
          title="Organized capability groups, presented without decoration."
        />

        <div className={`expertise-list reveal ${visibleSections.includes('expertise') ? 'is-visible' : ''}`}>
          {expertiseGroups.map((group) => (
            <article className="expertise-row" key={group.title}>
              <p className="expertise-label">{group.title}</p>
              <p className="expertise-items">{group.items.join(' · ')}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section wrap" id="experience" data-section="experience">
        <SectionTitle eyebrow="04 / EXPERIENCE" title="Experience" />

        <div className={`experience-block reveal ${visibleSections.includes('experience') ? 'is-visible' : ''}`}>
          <div className="experience-row">
            <strong>PHP / MySQL Development Internship</strong>
            <span>2 months</span>
          </div>
        </div>
      </section>

      <section className="section wrap" id="leadership" data-section="leadership">
        <SectionTitle
          eyebrow="05 / LEADERSHIP"
          title="Leadership"
          lede="Technical Head, Data Analytics and Information System Club (DAIS Club), Prestige Institute of Management & Research."
        />

        <div className={`leadership-grid reveal ${visibleSections.includes('leadership') ? 'is-visible' : ''}`}>
          <article className="leadership-panel">
            <p className="leadership-title">Technical Head</p>
            <p className="leadership-meta">Faculty Coordinators: Dr. Chetan Nagar · Dr. Sharda Haryani</p>

            <div className="text-group">
              <p className="text-group-label">Responsibilities</p>
              <ul>
                {leadershipItems.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="leadership-panel">
            <p className="text-group-label">Key Activities</p>
            <ul>
              {leadershipItems.activities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section wrap academic-section" id="academic" data-section="academic">
        <SectionTitle eyebrow="06 / ACADEMIC BACKGROUND" title="Academic background" />

        <div className={`academic-block reveal ${visibleSections.includes('academic') ? 'is-visible' : ''}`}>
          <div>
            <p className="academic-label">Degree</p>
            <strong>Bachelor of Computer Applications</strong>
          </div>
          <div>
            <p className="academic-label">Institute</p>
            <strong>Prestige Institute of Management and Research, Deemed to be University</strong>
          </div>
          <div>
            <p className="academic-label">Timeline</p>
            <strong>2024-2027</strong>
          </div>
          <div>
            <p className="academic-label">CGPA</p>
            <strong>8.5</strong>
          </div>
        </div>
      </section>

      <section className="section wrap contact-section" id="contact" data-section="contact">
        <div className={`contact-panel reveal ${visibleSections.includes('contact') ? 'is-visible' : ''}`}>
          <p className="eyebrow">07 / CONTACT</p>
          <h2>Let&apos;s build something meaningful.</h2>
          <p className="contact-lede">
            Open to conversations about software development, product ideas, and opportunities to build work that
            matters.
          </p>

          <div className="contact-methods" aria-label="Contact methods">
            <div>
              <span>Email</span>
              <a href="mailto:bca005@pimrindore.in">bca005@pimrindore.in</a>
            </div>
            <div>
              <span>GitHub</span>
              <a href="https://github.com/Trumos-ai" target="_blank" rel="noreferrer">
                https://github.com/Trumos-ai
              </a>
            </div>
            <div>
              <span>LinkedIn</span>
              <a href="https://www.linkedin.com/in/manmohan-tiwari-87b2873b4/" target="_blank" rel="noreferrer">
                https://www.linkedin.com/in/manmohan-tiwari-87b2873b4/
              </a>
            </div>
            <div>
              <span>WhatsApp</span>
              <a href="https://api.whatsapp.com/send?text=Hi%20Manmohan%2C%20I%27d%20like%20to%20connect." target="_blank" rel="noreferrer">
                Click to connect
              </a>
            </div>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href="mailto:bca005@pimrindore.in">
              Email Me <ArrowUpRight size={16} />
            </a>
            <a
              className="button button-secondary"
              href="https://api.whatsapp.com/send?text=Hi%20Manmohan%2C%20I%27d%20like%20to%20connect."
              target="_blank"
              rel="noreferrer"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
