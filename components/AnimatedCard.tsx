'use client'

import { useRef, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'

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
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      data-magnetic="default"
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-8 transition-all duration-500 hover:border-red-500/20 hover:shadow-[0_20px_60px_rgba(220,38,38,0.1)] ${className}`}
      style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Glossy border overlay */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 50%, transparent 100%)',
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Spotlight gradient */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isHovering
            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(220, 38, 38, 0.08), transparent 40%)`
            : 'none',
        }}
      />

      {/* Top accent border on hover */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute top-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-transparent via-red-500 to-transparent"
      />

      {/* Header */}
      {(label || title) && (
        <div className="mb-6 flex flex-col gap-2 relative z-10">
          {label && (
            <span className="text-xs font-semibold uppercase tracking-wider text-red-500">
              {label}
            </span>
          )}
          {title && (
            <h3 className="text-2xl font-serif font-bold text-white transition-colors group-hover:text-red-400">
              {title}
            </h3>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex-grow relative z-10">{children}</div>
    </motion.div>
  )
}
