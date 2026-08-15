import { ArrowUpRight, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-slate-50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(185,28,28,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.9),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl font-medium tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Let&apos;s build something <span className="text-red-600 italic">meaningful.</span>
          </h2>

          <p className="mt-5 text-base text-slate-400 sm:text-lg">
            Have a project in mind? Let&apos;s talk.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <a
              href="mailto:bca005@pimrindore.in"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-red-900/30 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href="https://wa.me/917999863810"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-transparent px-7 py-3.5 text-sm font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-500/10 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-slate-400 sm:text-[15px]">
            <a href="#top" className="transition-colors duration-300 hover:text-red-400">
              Home
            </a>
            <span aria-hidden="true" className="text-slate-700">
              &middot;
            </span>
            <a href="#experience" className="transition-colors duration-300 hover:text-red-400">
              About
            </a>
            <span aria-hidden="true" className="text-slate-700">
              &middot;
            </span>
            <a href="#selected-work" className="transition-colors duration-300 hover:text-red-400">
              Work
            </a>
            <span aria-hidden="true" className="text-slate-700">
              &middot;
            </span>
            <a href="#expertise" className="transition-colors duration-300 hover:text-red-400">
              Services
            </a>
            <span aria-hidden="true" className="text-slate-700">
              &middot;
            </span>
            <a href="#contact" className="transition-colors duration-300 hover:text-red-400">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-left text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Manmohan Tiwari. All rights reserved.
          </p>

          <div className="flex items-center justify-start gap-4 text-slate-400 sm:justify-end">
            <a
              href="https://github.com/Trumos-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:text-red-400 hover:shadow-lg hover:shadow-red-950/20"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/manmohan-tiwari-87b2873b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:text-red-400 hover:shadow-lg hover:shadow-red-950/20"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
