'use client'
import { Card, CardContent } from '@/components/ui/card'
import { BadgeCheck, Star } from 'lucide-react'
import { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { IReviewCard } from '@/interfaces/IReviewCard'

export function ReviewCard({ reviewCard }: { reviewCard: IReviewCard }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card
      className={`shadow-sm border rounded-xl transition-all duration-300 ${
        expanded ? 'h-auto' : 'h-[200px]'
      }`}
    >
      <CardContent className="p-6 flex flex-col">
        {/* Rating */}
        <div className="flex gap-1 mb-2">
          {Array.from({ length: reviewCard.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>

        {/* Name + Verified */}
        <p className="font-semibold flex items-center gap-1 mb-2">
          {reviewCard.name}
          {reviewCard.verified && (
            <span className="px-1 text-green-500 text-sm">
              <BadgeCheck />
            </span>
          )}
        </p>

        {/* Review */}
        <div className="text-sm text-gray-600">
          <p className={`${expanded ? '' : 'line-clamp-2'}`}>{reviewCard.review}</p>
          {reviewCard.review.length > 80 && (
            <button onClick={() => setExpanded(!expanded)} className="text-blue-600 text-xs mt-1">
              {expanded ? 'Hide' : 'Show more'}
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
