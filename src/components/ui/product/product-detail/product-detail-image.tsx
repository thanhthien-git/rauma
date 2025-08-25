'use client'

import clsx from 'clsx'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useCallback, useState } from 'react'
import useScreen from '@/hooks/useScreen'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const THUMB_SIZE_DESKTOP = 150
const GAP = 24
const VISIBLE_COUNT = 3
const MAIN_SIZE_DESKTOP = 500

interface ProductImagesCarouselProps {
  urls: Readonly<string[]>
}

export default function ProductDetailImages({ urls }: Readonly<ProductImagesCarouselProps>) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  const { isMobile } = useScreen()

  const handlePrev = useCallback(() => {
    setStartIndex((prev) => Math.max(0, prev - VISIBLE_COUNT))
  }, [])

  const handleNext = useCallback(() => {
    setStartIndex((prev) => Math.min(urls.length - VISIBLE_COUNT, prev + VISIBLE_COUNT))
  }, [urls.length])

  const handleSetIndex = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  if (isMobile) {
    return (
      <div className="w-full flex justify-center">
        <Swiper spaceBetween={10} onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}>
          {urls.map((src) => (
            <SwiperSlide key={src}>
              <img src={src} alt={`thumb-${src}`} className="w-[100vw] h-[100vw] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  }

  return (
    <div className="flex gap-4">
      {/* Thumbnails dọc */}
      <div className="flex flex-col justify-start gap-6 relative">
        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full border bg-white shadow hover:bg-gray-100"
          >
            <ChevronUp size={20} />
          </button>
        )}

        <div
          className="overflow-hidden"
          style={{ height: VISIBLE_COUNT * THUMB_SIZE_DESKTOP + GAP * (VISIBLE_COUNT - 1) }}
        >
          <div
            className="flex flex-col gap-6 transition-transform duration-300"
            style={{ transform: `translateY(-${startIndex * (THUMB_SIZE_DESKTOP + GAP)}px)` }}
          >
            {urls.map((src, idx) => (
              <button
                key={src}
                onClick={() => handleSetIndex(idx)}
                className={clsx(
                  'w-[150px] h-[150px] rounded-lg cursor-pointer overflow-hidden border border-solid transform transition-all duration-200 active:scale-95',
                  currentIndex === idx
                    ? 'shadow-lg border-black'
                    : 'border-transparent hover:border-gray-400',
                )}
              >
                <img
                  src={src}
                  alt={`thumb-${idx}`}
                  className="w-full h-full object-cover rounded"
                />
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex + VISIBLE_COUNT >= urls.length}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full border bg-white shadow hover:bg-gray-100 disabled:opacity-30"
        >
          <ChevronDown size={20} />
        </button>
      </div>

      <div className="flex justify-center">
        <img
          src={urls[currentIndex]}
          alt="main"
          style={{ width: MAIN_SIZE_DESKTOP, height: MAIN_SIZE_DESKTOP }}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  )
}
