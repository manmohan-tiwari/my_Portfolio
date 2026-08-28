'use client'

import { useRef, useState, ReactNode } from 'react'
import MagneticWrapper from './MagneticWrapper'

interface GlowButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function GlowButton({ 
  children, 
  href, 
  onClick, 
  className = '',
  variant = 'primary'
}: GlowButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const baseClasses = variant === 'primary'
    ? 'bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-500 hover:shadow-red-500/30'
    : 'border border-white/10 bg-white/[0.03] text-white backdrop-blur-md hover:border-red-500/30 hover:bg-red-500/5 hover:text-red-400'

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold transition-all duration-300 overflow-hidden ${baseClasses} ${className}`}
    >
      {/* Glow effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isHovering
            ? `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.2), transparent 50%)`
            : 'none',
        }}
      />

      {/* Shine sweep */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <span className="relative z-10">{children}</span>
    </div>
  )

  if (href) {
    return (
      <MagneticWrapper type="button" strength={0.2}>
        <a href={href} className="inline-block">{content}</a>
      </MagneticWrapper>
    )
  }

  return (
    <MagneticWrapper type="button" strength={0.2}>
      <button onClick={onClick} className="inline-block">{content}</button>
    </MagneticWrapper>
  )
}
