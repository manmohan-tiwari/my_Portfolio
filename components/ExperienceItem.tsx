'use client'

import { motion } from 'framer-motion'

interface ExperienceItemProps {
  role: string
  company: string
  duration: string
  responsibilities: string[]
  index: number
}

export default function ExperienceItem({ role, company, duration, responsibilities, index }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-red-500/20 transition-all duration-500"
      style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-serif font-bold text-white mb-1">{role}</h3>
          <p className="text-red-500 font-medium">{company}</p>
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border border-white/[0.06] bg-white/[0.03] text-neutral-400">
          {duration}
        </span>
      </div>

      <ul className="space-y-3">
        {responsibilities.map((item, i) => (
          <li key={i} className="text-neutral-400 text-sm flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
