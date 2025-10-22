'use client'

import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StarRatingProps {
  value: number
}

function StarRating({ value }: StarRatingProps) {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn('w-4 h-4', i < value ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300')}
        />
      ))}
    </div>
  )
}

export function StarRatingList() {
  const ratings = [5, 4, 3, 2, 1]

  return (
    <div className="space-y-2">
      {ratings.map((value) => (
        <StarRating key={value} value={value} />
      ))}
    </div>
  )
}
