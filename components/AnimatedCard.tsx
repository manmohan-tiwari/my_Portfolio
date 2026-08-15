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
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className={`relative bg-white dark:bg-slate-900 border border-[#E5E7EB] dark:border-slate-800 shadow-sm rounded-lg p-8 group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg overflow-hidden flex flex-col ${className}`}
    >
      {/* Top Border on Hover */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header */}
      {(label || title) && (
        <div className="mb-6 flex flex-col gap-2">
          {label && (
            <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
              {label}
            </span>
          )}
          {title && (
            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white group-hover:text-red-700 dark:group-hover:text-red-500 transition-colors">
              {title}
            </h3>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex-grow">
        {children}
      </div>
    </motion.div>
  )
}
