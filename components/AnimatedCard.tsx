'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  label?: string
  title?: string
  children: ReactNode
  index?: number
  className?: string
}

export default function AnimatedCard({
  label,
  title,
  children,
  index = 0,
  className = '',
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/60 p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-slate-900/50 dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] ${className}`}
    >
      {/* Top accent border on hover */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute top-0 left-0 h-[3px] w-full origin-left bg-red-600"
      />

      {/* Header */}
      {(label || title) && (
        <div className="mb-6 flex flex-col gap-2">
          {label && (
            <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
              {label}
            </span>
          )}
          {title && (
            <h3 className="text-2xl font-serif font-bold text-slate-900 transition-colors group-hover:text-red-700 dark:text-white dark:group-hover:text-red-500">
              {title}
            </h3>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex-grow">{children}</div>
    </motion.div>
  )
}