import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/app/data'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col md:flex-row gap-6 md:gap-12 py-8 border-b border-slate-200 dark:border-slate-800 transition-all duration-300 hover:border-teal-500">
      <div className="md:w-1/3 flex flex-col gap-4">
        <span className="font-serif text-3xl text-slate-400 group-hover:text-teal-500 transition-colors">
          {project.number}
        </span>
        <div>
          <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
          <p className="text-sm font-medium text-slate-500 mb-4">{project.category}</p>
        </div>
      </div>
      
      <div className="md:w-2/3 flex flex-col justify-between">
        <div>
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg max-w-2xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-3 py-1 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold text-sm tracking-widest hover:text-teal-700 dark:hover:text-teal-300 transition-colors uppercase w-max"
          >
            View Live <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        ) : (
          <span className="text-slate-400 text-sm font-semibold tracking-widest uppercase">
            Live Project Unavailable
          </span>
        )}
      </div>
    </div>
  )
}
