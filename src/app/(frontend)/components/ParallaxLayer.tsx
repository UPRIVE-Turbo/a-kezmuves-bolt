'use client'

import { useEffect, useRef, type ReactNode } from 'react'

export default function ParallaxLayer({
  children,
  speed = 0.15,
  className = '',
}: {
  children: ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const offset = window.scrollY * speed
        node.style.transform = `translate3d(0, ${offset}px, 0)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
