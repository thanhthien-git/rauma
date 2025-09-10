'use client'

import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'keen-slider/keen-slider.min.css'
import { ReviewCard } from './review-card'

const reviewCards = [
  {
    name: 'Sarah 1',
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
    verified: true,
  },
  {
    name: 'David 2',
    review: 'Great customer service and super fast shipping. Definitely my go-to shop!',
    rating: 5,
    verified: true,
  },
  {
    name: 'Anna K.3',
    review:
      'The variety is amazing. I always find something that matches my style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.',
    rating: 4,
    verified: true,
  },
  {
    name: 'Sarah 1',
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
    verified: true,
  },
  {
    name: 'David 2',
    review: 'Great customer service and super fast shipping. Definitely my go-to shop!',
    rating: 5,
    verified: true,
  },
  {
    name: 'Anna K.3',
    review:
      'The variety is amazing. I always find something that matches my style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.',
    rating: 4,
    verified: true,
  },
  {
    name: 'Sarah 1',
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
    verified: true,
  },
  {
    name: 'David 2',
    review: 'Great customer service and super fast shipping. Definitely my go-to shop!',
    rating: 5,
    verified: true,
  },
  {
    name: 'Anna K.3',
    review:
      'The variety is amazing. I always find something that matches my style. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.',
    rating: 4,
    verified: true,
  },
]

export default function CustomerFeedback() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 24 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
  })

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w mx-auto">
        {/* Heading + Controls */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-spring text-2xl text-gray-900 dark:text-gray-100">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="p-2 border rounded-full hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="p-2 border rounded-full hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {reviewCards.map((t, idx) => (
            <div key={idx} className="keen-slider__slide">
              <ReviewCard reviewCard={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
