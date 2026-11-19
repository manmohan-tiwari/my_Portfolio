'use client'

import {
  projects,
  expertiseGroups,
  leadershipItems,
  stackedPanels,
  profileImage,
  experienceItems,
} from './data'
import ProjectCard from '@/components/ProjectCard'
import SkillBadge from '@/components/SkillBadge'
import ExperienceItem from '@/components/ExperienceItem'
import AnimatedCard from '@/components/AnimatedCard'
import Button from '@/components/Button'
import { HeroMedia } from '@/components/HeroMedia'
import TextReveal from '@/components/TextReveal'
import MagneticWrapper from '@/components/MagneticWrapper'
import ParallaxSection from '@/components/ParallaxSection'
import TiltCard from '@/components/TiltCard'
import { WorkGallery } from './work-gallery'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="top" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-10 overflow-hidden">
        {/* Fullscreen background pattern/image */}
        <div className="absolute inset-0 z-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black md:bg-gradient-to-r md:from-black md:to-transparent"></div>
          {/* Additional bottom gradient for smooth transition */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

          {/* Hero Content Left */}
          <div className="w-full max-w-3xl flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 mt-10 md:mt-0">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-sm font-semibold tracking-wider mb-8 w-max backdrop-blur-md">
              AVAILABLE FOR NEW PROJECTS
            </span>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] text-white mb-6" style={{ perspective: 800 }}>
              <TextReveal text="Tech crafted with" />{' '}
              <TextReveal text="empathy." className="text-red-500 italic" delay={0.3} />
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-xl leading-relaxed">
              I build web applications, mobile products, business systems, and AI-powered tools with a focus on reliable engineering, thoughtful interfaces, and software that works in the real world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <MagneticWrapper type="button" strength={0.25} className="w-max">
                <Button href="#selected-work" className="px-8 py-4 text-[15px]">
                  View selected work
                </Button>
              </MagneticWrapper>
              <MagneticWrapper type="button" strength={0.25} className="w-max">
                <Button href="#expertise" variant="secondary" className="px-8 py-4 text-[15px]">
                  Explore expertise
                </Button>
              </MagneticWrapper>
            </div>

            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase">
              TECH CRAFTED WITH EMPATHY · PURPOSE IN EVERY PIXEL
            </p>
          </div>

          {/* Hero Media Right */}
          <div className="relative hidden md:block w-full max-w-md aspect-[4/5] shrink-0">
            <ParallaxSection speed={0.15}>
              <HeroMedia imageSrc={profileImage} imageAlt="Manmohan Tiwari" />
            </ParallaxSection>
          </div>

        </div>
      </section>

      {/* Expertise Panels Grid - Moved outside hero section for better spacing */}
      <section className="py-0 bg-transparent px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackedPanels.map((panel, index) => (
            <TiltCard key={panel.id} max={6}>
              <AnimatedCard label={panel.subtitle} title={panel.title} index={index} className="h-full">
                <div className="flex flex-wrap gap-2 mt-4">
                  {panel.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold px-2 py-1 bg-red-600/10 border border-red-600/20 text-red-400 rounded backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </AnimatedCard>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="selected-work" className="py-24 bg-transparent px-6 lg:px-12 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <ParallaxSection speed={0.1} className="mb-12 md:mb-16">
            <p className="font-serif text-4xl md:text-5xl lg:text-[3.2rem] leading-tight text-white mb-3">
              Selected work.
            </p>
            <p className="text-xs md:text-[13px] font-semibold tracking-[0.22em] uppercase text-neutral-500">
              All projects, technologies, and languages used.
            </p>
          </ParallaxSection>

          <div className="flex flex-col">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Work Gallery Section */}
      <section className="py-24 bg-transparent px-6 lg:px-12 border-t border-white/[0.06]">
        <WorkGallery isVisible />
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-24 bg-transparent px-6 lg:px-12 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ParallaxSection speed={0.12} className="order-2 md:order-1">
            <p className="text-red-500 font-semibold tracking-wider text-sm mb-4 uppercase">
              Profile
            </p>
            <h2 className="max-w-xl text-white mb-6">Building software that solves real problems.</h2>
            <p className="text-neutral-400 leading-relaxed mb-4 max-w-xl">
              I&apos;m a BCA student at Prestige Institute of Management and Research, Indore, graduating in 2027.
              I build Flutter applications under my personal brand, Trumos, alongside web and backend systems in
              PHP, React, and AI-integrated tools.
            </p>
            <p className="text-neutral-400 leading-relaxed max-w-xl">
              Currently focused on internships, campus placements, and preparing for a Master&apos;s in CS/AI/ML
              abroad, targeting the 2028 intake.
            </p>
          </ParallaxSection>
          <div className="order-1 md:order-2 relative w-full max-w-sm mx-auto aspect-[4/5]">
            <TiltCard max={5}>
              <HeroMedia imageSrc={profileImage} imageAlt="Manmohan Tiwari profile" />
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-transparent px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <p className="text-red-500 font-semibold tracking-wider text-sm mb-4 uppercase">
              02 / Technical Expertise
            </p>
            <h2 className="max-w-3xl text-white">Organized capability groups, presented cleanly.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseGroups.map((group, index) => (
              <TiltCard key={group.title} max={6}>
                <AnimatedCard title={group.title} index={index} className="h-full">
                  <div className="flex flex-wrap gap-3 mt-4">
                    {group.items.map(item => (
                      <SkillBadge key={item} skill={item} />
                    ))}
                  </div>
                </AnimatedCard>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-transparent px-6 lg:px-12 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <p className="text-red-500 font-semibold tracking-wider text-sm mb-4 uppercase">
              03 / Experience
            </p>
            <h2 className="text-white">Professional journey & internships.</h2>
          </div>

          <div className="flex flex-col gap-6">
            {experienceItems.map((item, index) => (
              <ExperienceItem
                key={`${item.company}-${item.role}`}
                role={item.role}
                company={item.company}
                duration={item.duration}
                responsibilities={item.responsibilities}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Academic Section */}
      <section id="leadership" className="py-24 bg-transparent px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          {/* Leadership */}
          <TiltCard max={4} className="h-full">
            <AnimatedCard label="04 / Leadership" title="Technical Head" index={0} className="h-full">
              <div className="mt-2">
                <p className="font-semibold text-neutral-200 mb-2">
                  Data Analytics and Information System Club (DAIS Club)
                </p>
                <p className="text-sm text-neutral-500 mb-8">Prestige Institute of Management & Research</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold tracking-wider text-red-500 mb-3 uppercase">Responsibilities</p>
                  <ul className="space-y-2">
                    {leadershipItems.responsibilities.map(item => (
                      <li key={item} className="text-neutral-400 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-wider text-red-500 mb-3 uppercase">Key Activities</p>
                  <ul className="space-y-2">
                    {leadershipItems.activities.map(item => (
                      <li key={item} className="text-neutral-400 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          </TiltCard>

          {/* Academic */}
          <TiltCard max={4} className="h-full" >
            <div id="academic">
              <AnimatedCard label="05 / Academic Background" title="Education" index={1} className="h-full">
                <div className="space-y-8 mt-2">
                  <div>
                    <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Degree</p>
                    <p className="font-serif text-xl font-medium text-white">Bachelor of Computer Applications</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Institute</p>
                    <p className="font-serif text-lg text-neutral-400">
                      Prestige Institute of Management and Research, Deemed to be University
                    </p>
                  </div>
                  <div className="flex gap-12">
                    <div>
                      <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Timeline</p>
                      <p className="font-medium text-white">2024-2027</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">CGPA</p>
                      <p className="font-medium text-red-500">8.5</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </TiltCard>

        </div>
      </section>
    </div>
  )
}