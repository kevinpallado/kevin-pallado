'use client'

import { useEffect, useState } from 'react'

export function IndustryRotator({ items, interval = 2200 }: { items: string[]; interval?: number }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length < 2) return
    const id = setInterval(() => setIndex((current) => (current + 1) % items.length), interval)
    return () => clearInterval(id)
  }, [items.length, interval])

  return (
    <p className="industry-rotator">
      <span className="industry-label">Systems built for</span>
      <span className="sr-only">{items.join(', ')}</span>
      <span className="industry-track" aria-hidden="true">
        {items.map((item, itemIndex) => (
          <span key={item} className={`industry-item${itemIndex === index ? ' industry-item-active' : ''}`}>{item}</span>
        ))}
      </span>
    </p>
  )
}
