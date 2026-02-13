'use client'

import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ value }: { value: number }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn('w-4 h-4', i < value ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300')}
        />
      ))}
      <span className="ml-1 text-xs text-gray-500">& Up</span>
    </div>
  )
}
