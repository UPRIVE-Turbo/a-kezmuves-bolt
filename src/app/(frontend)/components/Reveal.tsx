'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type RevealVariant = 'up' | 'left' | 'right' | 'scale'

const variantClass: Record<RevealVariant, string> = {
  up: 'reveal-up',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
}

export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
}: {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${variantClass[variant]} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
