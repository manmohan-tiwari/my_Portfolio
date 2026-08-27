'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/app/data'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div initial="rest" whileHover="hover" whileTap="hover" animate="rest" className="group relative overflow-hidden border-b border-slate-200/70 bg-transparent transition-colors duration-300 dark:border-slate-800/70">
      <motion.div aria-hidden="true" variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }} transition={{ duration: 0.35, ease: 'easeOut' }} className="pointer-events-none absolute inset-0 -z-10 rounded-2xl border border-white/40 bg-white/40 shadow-[0_8px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5" />

      <motion.div variants={{ rest: { x: 0 }, hover: { x: 4 } }} transition={{ duration: 0.35, ease: 'easeOut' }} className="relative z-10 flex flex-col gap-5 px-2 py-7 md:flex-row md:items-center md:py-9 lg:gap-8">
        <div className="flex w-full shrink-0 items-start gap-4 md:w-[18rem] md:gap-5 lg:w-[22rem]">
          <span className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-400 transition-colors duration-300 group-hover:text-red-600">{project.number}</span>
          <div className="min-w-0">
            <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{project.category}</p>
            <h3 className="text-2xl leading-tight text-slate-900 dark:text-white md:text-[1.9rem] lg:text-[2.1rem]">{project.title}</h3>
            <p className="mt-2 text-xs font-medium tracking-[0.08em] text-red-700 dark:text-red-400">{project.role}</p>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300 md:text-[17px]">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => <span key={tech} className="border border-slate-200/80 bg-slate-50/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-300">{tech}</span>)}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-4 md:min-w-[11rem] md:justify-end">
          {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-red-700 transition-colors duration-300 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400">View Live<ArrowUpRight className="h-3.5 w-3.5" /></a> : <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Available on request</span>}
          <motion.span aria-hidden="true" variants={{ rest: { x: 0, color: '#94a3b8' }, hover: { x: 8, color: '#dc2626' } }} transition={{ duration: 0.3, ease: 'easeOut' }} className="text-2xl leading-none dark:text-slate-500">→</motion.span>
        </div>
      </motion.div>

      {project.primaryImage ? <motion.div aria-hidden="true" variants={{ rest: { opacity: 0, x: 12, scale: 0.97 }, hover: { opacity: 1, x: -8, scale: 1 } }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="pointer-events-none absolute right-4 top-1/2 z-0 hidden w-[220px] -translate-y-1/2 overflow-hidden rounded-2xl border border-white/50 bg-white/60 shadow-[0_18px_48px_rgba(15,23,42,0.16)] backdrop-blur-xl xl:block dark:border-white/10 dark:bg-slate-900/60">
        <img src={project.primaryImage} alt={`${project.title} preview`} className="pointer-events-none h-36 w-full object-cover object-top" loading="lazy" />
      </motion.div> : null}
    </motion.div>
  )
}
