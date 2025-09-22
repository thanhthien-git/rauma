'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IReviewCard } from '@/interfaces/IReviewCard'
import { Star } from 'lucide-react'
import RatingStars from './rating-star'

export default function ReviewDetailCard({ data }: { data: IReviewCard[] }) {
  return (
    <>
      {data.map((review) => (
        <Card key={review.id} className="rounded-2xl shadow-sm">
          <CardContent className="p-4 space-y-3">
            <RatingStars rating={review.rating} />
            <div className="flex items-center justify-between">
              <p className="font-semibold">{review.name}</p>
              <span className="text-xs text-muted-foreground">Posted on {review.date}</span>
            </div>
            <p className="text-sm text-gray-700">{review.comment}</p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
