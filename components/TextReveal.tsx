'use client'

import { m, type Variants } from 'framer-motion'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
  once?: boolean
}

export default function TextReveal({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  once = true
}: TextRevealProps) {
  const words = text.split(' ')

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: delay },
    },
  }

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <m.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <m.span
              key={charIndex}
              variants={child}
              className="gpu-animated inline-block"
              style={{ transformOrigin: 'bottom' }}
            >
              {char}
            </m.span>
          ))}
        </span>
      ))}
    </m.span>
  )
}
