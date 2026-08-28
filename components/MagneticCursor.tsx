'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MagneticCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [hoverType, setHoverType] = useState<'default' | 'link' | 'button'>('default')
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const magneticX = useMotionValue(0)
  const magneticY = useMotionValue(0)
  const magneticXSpring = useSpring(magneticX, { damping: 15, stiffness: 150 })
  const magneticYSpring = useSpring(magneticY, { damping: 15, stiffness: 150 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)

    if (!isVisible) setIsVisible(true)

    const target = e.target as HTMLElement
    const magneticEl = target.closest('[data-magnetic]') as HTMLElement

    if (magneticEl) {
      const rect = magneticEl.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY

      const strength = 0.3
      magneticX.set(distanceX * strength)
      magneticY.set(distanceY * strength)

      const type = magneticEl.getAttribute('data-magnetic') as 'link' | 'button' | 'default'
      setHoverType(type || 'default')
      setIsHovering(true)
    } else {
      magneticX.set(0)
      magneticY.set(0)
      setIsHovering(false)
      setHoverType('default')
    }
  }, [cursorX, cursorY, magneticX, magneticY, isVisible])

  const handleMouseDown = useCallback(() => setIsClicking(true), [])
  const handleMouseUp = useCallback(() => setIsClicking(false), [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseDown, handleMouseUp])

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  return (
    <>
      {/* Main cursor dot - Red accent */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? (hoverType === 'button' ? 64 : 48) : 10,
            height: isHovering ? (hoverType === 'button' ? 64 : 48) : 10,
            opacity: isVisible ? 1 : 0,
            scale: isClicking ? 0.8 : 1,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]"
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            x: magneticXSpring,
            y: magneticYSpring,
            width: isHovering ? (hoverType === 'button' ? 80 : 56) : 40,
            height: isHovering ? (hoverType === 'button' ? 80 : 56) : 40,
            opacity: isVisible ? (isHovering ? 0.8 : 0.3) : 0,
            scale: isClicking ? 0.9 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="rounded-full border border-red-500/40"
          style={{
            boxShadow: isHovering ? '0 0 30px rgba(239,68,68,0.2)' : 'none',
          }}
        />
      </motion.div>

      <style jsx global>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  )
}
