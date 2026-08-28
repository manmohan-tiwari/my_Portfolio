'use client'

import { motion } from 'framer-motion'

interface OrbProps {
  size: number
  color: string
  delay: number
  duration: number
  x: string
  y: string
}

function Orb({ size, color, delay, duration, x, y }: OrbProps) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        left: x,
        top: y,
        filter: 'blur(100px)',
      }}
      animate={{
        x: [0, 40, -30, 0],
        y: [0, -50, 30, 0],
        scale: [1, 1.15, 0.85, 1],
        opacity: [0.3, 0.5, 0.2, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export default function FloatingOrbs() {
  const orbs: OrbProps[] = [
    { size: 500, color: 'rgba(220, 38, 38, 0.06)', delay: 0, duration: 25, x: '5%', y: '10%' },
    { size: 400, color: 'rgba(185, 28, 28, 0.05)', delay: 8, duration: 30, x: '60%', y: '5%' },
    { size: 450, color: 'rgba(220, 38, 38, 0.04)', delay: 15, duration: 28, x: '30%', y: '50%' },
    { size: 350, color: 'rgba(40, 40, 40, 0.08)', delay: 5, duration: 22, x: '75%', y: '60%' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <Orb key={i} {...orb} />
      ))}
    </div>
  )
}
