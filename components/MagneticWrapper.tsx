'use client'

import { useRef, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MagneticWrapperProps {
  children: ReactNode
  className?: string
  strength?: number
  type?: 'default' | 'link' | 'button'
}

export default function MagneticWrapper({ 
  children, 
  className = '', 
  strength = 0.3,
  type = 'default'
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      data-magnetic={type}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
