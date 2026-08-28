'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedMeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Red & Black focused palette
    const colors = [
      { r: 220, g: 38, b: 38 },    // red-600
      { r: 185, g: 28, b: 28 },    // red-700
      { r: 239, g: 68, b: 68 },    // red-500
      { r: 40, g: 40, b: 40 },     // dark gray
      { r: 20, g: 20, b: 20 },     // near black
    ]

    const blobs = colors.map((color, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 400 + Math.random() * 500,
      color,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      phase: (i * Math.PI * 2) / colors.length,
    }))

    const animate = () => {
      timeRef.current += 0.003

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dark base
      ctx.fillStyle = 'rgba(5, 5, 5, 0.3)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      blobs.forEach((blob) => {
        blob.x += blob.speedX + Math.sin(timeRef.current + blob.phase) * 0.3
        blob.y += blob.speedY + Math.cos(timeRef.current + blob.phase) * 0.2

        if (blob.x < -blob.radius) blob.x = canvas.width + blob.radius
        if (blob.x > canvas.width + blob.radius) blob.x = -blob.radius
        if (blob.y < -blob.radius) blob.y = canvas.height + blob.radius
        if (blob.y > canvas.height + blob.radius) blob.y = -blob.radius

        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        )

        gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.06)`)
        gradient.addColorStop(0.5, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.02)`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: 'blur(80px)' }}
    />
  )
}
