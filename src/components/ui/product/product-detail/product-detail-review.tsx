'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ReviewDetailCard from '../../review/review-detail-product-card'
import { IReviewCard } from '@/interfaces/IReviewCard'
import { Star } from 'lucide-react'
import RatingStars from '../../review/rating-star'

export default function ProductReviews({ reviews }: { reviews: IReviewCard[] }) {
  return (
    <div className="space-y-6">
      <div className="flex md:border-b justify-between items-center sm:p-0 md:p-4 sm:pb-0 md:pb-2">
        <div className="flex items-center gap-3">
          <CardTitle className="hidden md:block text-xl font-semibold">ALL REVIEWS (451)</CardTitle>

          <div className="flex items-center gap-1">
            <RatingStars rating={4.5} />
            <span className="text-sm font-medium text-gray-700">4.5</span>
          </div>
        </div>

        <Button variant="outline">Write a Review</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ReviewDetailCard data={reviews} />
      </div>

      <div className="flex justify-center">
        <Button variant="outline">Load More Reviews</Button>
      </div>
    </div>
  )
}
