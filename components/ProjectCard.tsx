import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/app/data'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative border-b border-slate-200 dark:border-slate-800 bg-transparent transition-all duration-300 hover:bg-slate-50/90 hover:border-red-200 dark:hover:bg-slate-900/40">
      <div className="flex flex-col gap-5 py-7 md:py-9 md:flex-row md:items-center lg:gap-8">
        <div className="flex w-full md:w-[18rem] lg:w-[22rem] shrink-0 items-start gap-4 md:gap-5">
          <span className="mt-1 text-[0.72rem] font-semibold tracking-[0.28em] text-slate-400 uppercase transition-colors duration-300 group-hover:text-red-600">
            {project.number}
          </span>

          <div className="min-w-0">
            <p className="mb-2 text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
              {project.category}
            </p>
            <h3 className="text-2xl md:text-[1.9rem] lg:text-[2.1rem] leading-tight text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-xs font-medium tracking-[0.08em] text-red-700 dark:text-red-400">
              {project.role}
            </p>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <p className="max-w-2xl text-[15px] md:text-[17px] leading-relaxed text-slate-600 dark:text-slate-300">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-700 uppercase dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-4 md:min-w-[11rem] md:justify-end">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.18em] text-red-700 uppercase transition-colors duration-300 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400"
            >
              View Live
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span className="text-[0.72rem] font-semibold tracking-[0.18em] text-slate-500 uppercase dark:text-slate-400">
              Available on request
            </span>
          )}

          <span className="text-2xl leading-none text-slate-400 transition-all duration-300 group-hover:translate-x-2 group-hover:text-red-600 dark:text-slate-500">
            →
          </span>
        </div>
      </div>

      {project.primaryImage ? (
        <div className="pointer-events-none absolute right-4 top-1/2 z-0 hidden w-[220px] -translate-y-1/2 overflow-hidden rounded-lg border border-slate-200 bg-white opacity-0 shadow-[0_18px_48px_rgba(15,23,42,0.12)] transition-all duration-300 group-hover:translate-x-[-8px] group-hover:opacity-100 xl:block dark:border-slate-700 dark:bg-slate-900">
          <img
            src={project.primaryImage}
            alt={`${project.title} preview`}
            className="pointer-events-none h-36 w-full object-cover object-top"
          />
        </div>
      ) : null}
    </div>
  )
}
