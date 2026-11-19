'use client'

import { domMax, LazyMotion, MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'

export default function MotionProvider({ children }: { children: ReactNode }) {
    return (
        <LazyMotion features={domMax} strict>
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </LazyMotion>
    )
}
