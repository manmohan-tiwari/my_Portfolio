'use client'

import { useEffect, useState, useCallback } from 'react'
import { m, useMotionValue, useSpring } from 'framer-motion'

export default function MagneticCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isTextHovering, setIsTextHovering] = useState(false)
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
    const textEl = target.closest('h1, h2, h3, h4, h5, h6, p, a, span, li, label, button')
    const textHovering = Boolean(textEl?.textContent?.trim())

    setIsTextHovering(textHovering)

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
      <m.div
        className="gpu-animated fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <m.div
          animate={{
            width: isHovering ? (hoverType === 'button' ? 64 : 48) : 10,
            height: isHovering ? (hoverType === 'button' ? 64 : 48) : 10,
            opacity: isVisible ? 1 : 0,
            scale: isClicking ? 0.8 : 1,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="rounded-full"
          style={{
            backgroundColor: isTextHovering ? '#facc15' : '#ef4444',
            boxShadow: isTextHovering
              ? '0 0 24px rgba(250, 204, 21, 0.75)'
              : '0 0 20px rgba(239, 68, 68, 0.5)',
          }}
        />
      </m.div>

      <m.div
        className="gpu-animated fixed top-0 left-0 pointer-events-none z-[9997] rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(250, 204, 21, 0.2) 0%, rgba(250, 204, 21, 0.08) 35%, transparent 72%)',
          filter: 'blur(4px)',
        }}
        animate={{
          width: isTextHovering ? 180 : 0,
          height: isTextHovering ? 180 : 0,
          opacity: isTextHovering && isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />

      {/* Outer ring */}
      <m.div
        className="gpu-animated fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <m.div
          animate={{
            width: isHovering ? (hoverType === 'button' ? 80 : 56) : 40,
            height: isHovering ? (hoverType === 'button' ? 80 : 56) : 40,
            opacity: isVisible ? (isHovering ? 0.8 : 0.3) : 0,
            scale: isClicking ? 0.9 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="rounded-full border border-red-500/40"
          style={{
            x: magneticXSpring,
            y: magneticYSpring,
            borderColor: isTextHovering ? 'rgba(250, 204, 21, 0.6)' : 'rgba(239, 68, 68, 0.4)',
            boxShadow: isTextHovering
              ? '0 0 30px rgba(250, 204, 21, 0.35)'
              : isHovering
                ? '0 0 30px rgba(239, 68, 68, 0.2)'
                : 'none',
          }}
        />
      </m.div>

      <style jsx global>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  )
}
