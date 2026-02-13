'use client'

import { Star } from 'lucide-react'

export default function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex text-yellow-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}
