'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ReviewDetailCard from '../../review/review-detail-product-card'

interface Review {
  id: number
  name: string
  date: string
  rating: number
  comment: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Samantha D.',
    date: 'August 14, 2023',
    rating: 4.5,
    comment:
      'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.',
  },
  {
    id: 2,
    name: 'Alex M.',
    date: 'August 15, 2023',
    rating: 5,
    comment:
      'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
  },
  {
    id: 3,
    name: 'Ethan R.',
    date: 'August 16, 2023',
    rating: 4,
    comment:
      'This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
  },
  {
    id: 4,
    name: 'Samantha D.',
    date: 'August 14, 2023',
    rating: 4.5,
    comment:
      'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.',
  },
  {
    id: 5,
    name: 'Alex M.',
    date: 'August 15, 2023',
    rating: 5,
    comment:
      'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
  },
  {
    id: 6,
    name: 'Ethan R.',
    date: 'August 16, 2023',
    rating: 4,
    comment:
      'This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
  },
]

export default function ProductReviews() {
  return (
    <div className="space-y-6">
      <div className="border-b flex justify-between items-center pb-2">
        <CardTitle className="text-xl font-semibold">ALL REVIEWS (451)</CardTitle>
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
