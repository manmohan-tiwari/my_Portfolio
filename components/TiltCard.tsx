'use client'

import { useRef, ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltCardProps {
    children: ReactNode
    className?: string
    max?: number
    scale?: number
}

export default function TiltCard({
    children,
    className = '',
    max = 8,
    scale = 1.02,
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springConfig = { stiffness: 150, damping: 20, mass: 0.5 }
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), springConfig)
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), springConfig)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        x.set((e.clientX - rect.left) / rect.width - 0.5)
        y.set((e.clientY - rect.top) / rect.height - 0.5)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <div style={{ perspective: 1200 }} className={className}>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale }}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                transition={{ scale: { duration: 0.4, ease: 'easeOut' } }}
                className="h-full w-full"
            >
                {children}
            </motion.div>
        </div>
    )
}