'use client'

import { HeartHandshake, ShieldCheck } from 'lucide-react'
import {
  projects,
  expertiseGroups,
  leadershipItems,
  stackedPanels
} from './data'
import ProjectCard from '@/components/ProjectCard'
import SkillBadge from '@/components/SkillBadge'
import ExperienceItem from '@/components/ExperienceItem'
import AnimatedCard from '@/components/AnimatedCard'
import Button from '@/components/Button'
import { HeroMedia } from '@/components/HeroMedia'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="top" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-10 overflow-hidden">
        {/* Fullscreen background pattern/image */}
        <div className="absolute inset-0 z-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/90 dark:to-slate-950/90 md:bg-gradient-to-r md:from-slate-50/95 md:to-transparent dark:md:from-slate-950/95 dark:md:to-slate-950/40"></div>
          {/* Additional bottom gradient for smooth transition */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

          {/* Hero Content Left */}
          <div className="w-full md:w-[58%] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 mt-10 md:mt-0">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 text-red-700 dark:text-red-500 text-sm font-semibold tracking-wider mb-8 w-max">
              AVAILABLE FOR NEW PROJECTS
            </span>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] text-slate-900 dark:text-white mb-6">
              Tech crafted with <span className="text-red-600 italic">empathy</span>.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-xl leading-relaxed">
              I build web applications, mobile products, business systems, and AI-powered tools with a focus on reliable engineering, thoughtful interfaces, and software that works in the real world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button href="#selected-work" className="px-8 py-4 text-[15px]">
                View selected work
              </Button>
              <Button href="#expertise" variant="secondary" className="px-8 py-4 text-[15px]">
                Explore expertise
              </Button>
            </div>

            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase">
              TECH CRAFTED WITH EMPATHY · PURPOSE IN EVERY PIXEL
            </p>
          </div>

          {/* Hero Visual Right */}
          <div className="w-full md:w-[42%] relative order-2 md:order-none animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="relative mx-auto md:ml-auto w-full max-w-[420px] h-[500px] sm:h-[550px] md:max-w-none md:h-[680px] lg:h-[730px]">
              <div
                aria-hidden="true"
                className="absolute inset-x-[8%] bottom-[5%] h-[24%] rounded-full bg-red-600/15 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute inset-y-[12%] right-[2%] w-[36%] rounded-full bg-sky-400/15 blur-3xl"
              />
              <HeroMedia
                imageSrc="/assets/profile/approachable-developer.jpg"
                imageAlt="Approachable software developer in a professional portrait"
              />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/25 bg-slate-950/70 p-4 text-white backdrop-blur-md">
                  <p className="text-xs font-semibold tracking-[0.18em] text-red-200 uppercase">A thoughtful partnership</p>
                  <p className="mt-1 font-serif text-xl leading-tight">Clear communication. Dependable delivery.</p>
                </div>
              <div className="absolute left-0 top-[16%] max-w-[185px] rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-lg shadow-slate-900/10 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/90">
                <HeartHandshake className="h-5 w-5 text-red-600" aria-hidden="true" />
                <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white">People-first process</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">Listening shapes every decision.</p>
              </div>

              <div className="absolute right-0 bottom-[4%] flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/90 p-3.5 shadow-lg shadow-slate-900/10 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/90">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"><ShieldCheck className="h-5 w-5" aria-hidden="true" /></span>
                <span className="pr-1 text-sm font-bold text-slate-800 dark:text-slate-100">Reliable by design</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Expertise Panels Grid - Moved outside hero section for better spacing */}
      <section className="py-0 bg-slate-50 dark:bg-slate-950 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackedPanels.map((panel, index) => (
            <AnimatedCard key={panel.id} label={panel.subtitle} title={panel.title} index={index}>
              <div className="flex flex-wrap gap-2 mt-4">
                {panel.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold px-2 py-1 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="selected-work" className="py-24 bg-white dark:bg-slate-950 px-6 lg:px-12 border-t border-red-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-serif text-4xl md:text-5xl lg:text-[3.2rem] leading-tight text-slate-900 dark:text-white mb-3">
              Selected work.
            </p>
            <p className="text-xs md:text-[13px] font-semibold tracking-[0.22em] uppercase text-slate-500 dark:text-slate-400">
              All projects, technologies, and languages used.
            </p>
          </div>

          <div className="flex flex-col">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-slate-50 dark:bg-slate-900 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <p className="text-red-600 font-semibold tracking-wider text-sm mb-4 uppercase">
              02 / Technical Expertise
            </p>
            <h2 className="max-w-3xl">Organized capability groups, presented cleanly.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseGroups.map((group, index) => (
              <AnimatedCard key={group.title} title={group.title} index={index}>
                <div className="flex flex-wrap gap-3 mt-4">
                  {group.items.map(item => (
                    <SkillBadge key={item} skill={item} />
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white dark:bg-slate-950 px-6 lg:px-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <p className="text-red-600 font-semibold tracking-wider text-sm mb-4 uppercase">
              03 / Experience
            </p>
            <h2>Professional journey & internships.</h2>
          </div>

          <div className="flex flex-col gap-6">
            <ExperienceItem
              role="PHP / MySQL Development Internship"
              company="Professional Internship"
              duration="2 months"
              responsibilities={[
                "Developed scalable backend systems using PHP and MySQL.",
                "Implemented secure REST APIs for frontend integration.",
                "Optimized database queries for improved application performance."
              ]}
              index={0}
            />
            {/* Add more ExperienceItem components here as needed */}
          </div>
        </div>
      </section>

      {/* Leadership & Academic Section */}
      <section id="leadership" className="py-24 bg-slate-50 dark:bg-slate-900 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          {/* Leadership */}
          <div className="h-full">
            <AnimatedCard label="04 / Leadership" title="Technical Head" index={0} className="h-full">
              <div className="mt-2">
                <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Data Analytics and Information System Club (DAIS Club)
                </p>
                <p className="text-sm text-slate-500 mb-8">Prestige Institute of Management & Research</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold tracking-wider text-red-700 dark:text-red-500 mb-3 uppercase">Responsibilities</p>
                  <ul className="space-y-2">
                    {leadershipItems.responsibilities.map(item => (
                      <li key={item} className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-wider text-red-700 dark:text-red-500 mb-3 uppercase">Key Activities</p>
                  <ul className="space-y-2">
                    {leadershipItems.activities.map(item => (
                      <li key={item} className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          </div>

          {/* Academic */}
          <div id="academic" className="h-full">
            <AnimatedCard label="05 / Academic Background" title="Education" index={1} className="h-full">
              <div className="space-y-8 mt-2">
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Degree</p>
                  <p className="font-serif text-xl font-medium text-slate-900 dark:text-white">Bachelor of Computer Applications</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Institute</p>
                  <p className="font-serif text-lg text-slate-700 dark:text-slate-300">
                    Prestige Institute of Management and Research, Deemed to be University
                  </p>
                </div>
                <div className="flex gap-12">
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Timeline</p>
                    <p className="font-medium text-slate-900 dark:text-white">2024-2027</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">CGPA</p>
                    <p className="font-medium text-red-700 dark:text-red-500">8.5</p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>

        </div>
      </section>
    </div>
  )
}
