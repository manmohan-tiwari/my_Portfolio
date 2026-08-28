'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
}

export default function ParallaxSection({ 
  children, 
  className = '', 
  speed = 0.2,
  direction = 'up'
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]
  )

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
