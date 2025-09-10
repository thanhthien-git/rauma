// components/Hero.tsx
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const stats = [
  { value: '200+', label: 'International Brands' },
  { value: '2,000+', label: 'High-Quality Products' },
  { value: '30,000+', label: 'Happy Customers' },
]

function Star({
  className = '',
  size = 72,
  fill = 'black',
}: {
  className?: string
  size?: number
  fill?: string
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={className}
    >
      <path
        d="M256 0C240 160 160 240 0 256C160 272 240 352 256 512C272 352 352 272 512 256C352 240 272 160 256 0Z"
        fill={fill}
      />
    </svg>
  )
}

export default function ClientHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Desktop / large */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-16 py-24 grid grid-cols-2 items-center gap-8">
          {/* left content */}
          <div>
            <h1 className="font-spring uppercase text-[64px] leading-[0.9] tracking-tight">
              We provide
              <br /> <span className="block">all you need</span>
            </h1>
            <p className="mt-6 font-medium max-w-lg text-gray-700 dark:text-gray-200">
              Browse through our diverse range of meticulously crafted garments, designed to bring
              out your individuality and cater to your sense of style.
            </p>

            <div className="mt-8">
              {/* pill button */}
              <Button
                variant="default"
                className="bg-black text-white rounded-full px-10 py-6 shadow-md hover:bg-black/90"
              >
                Shop Now
              </Button>
            </div>

            <div className="mt-12 flex gap-12">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-sm text-gray-700 dark:text-gray-200">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right visuals */}
          <div className="relative min-h-[420px]">
            {/* decorative stars */}
            <Star className="text-black absolute left-40 top-12 w-26 h-26" size={80} />
            <Star className="text-black absolute right-20 top-36 w-26 h-26" size={80} />
            <Star className="text-black absolute left-10 top-60 w-12 h-12" size={48} />
            <Star className="text-black absolute right-70 top-80 w-26 h-26" size={80} />
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden bg-white relative">
        <div className="px-6 pt-10 ">
          {' '}
          {/* leave space below for image */}
          <h2 className="font-spring uppercase text-[40px] leading-tight">
            Find clothes
            <br />
            that matches your style
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-200 max-w-sm">
            Browse through our diverse range of meticulously crafted garments, designed to bring out
            your individuality and cater to your sense of style.
          </p>
          <div className="mt-4 mb-4">
            {/* pill button */}
            <Button
              variant="default"
              className="w-full bg-black text-white rounded-full px-10 py-6 shadow-md hover:bg-black/90"
            >
              Shop Now
            </Button>
          </div>
          <div className="w-full bg-white py-3">
            <div className="grid grid-cols-2 text-center">
              <div className="p-4 border-r border-gray-300">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-gray-500">International Brands</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold">2,000+</div>
                <div className="text-sm text-gray-500">High-Quality Products</div>
              </div>
              <div className="p-4 col-span-2">
                <div className="text-2xl font-bold">30,000+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile image bottom with curved overlay look */}
        <div className="w-full relative bg-white">
          <Image
            src="/assets/hero-mobile.jpg"
            alt="models mobile"
            width={1080}
            height={1350}
            className="w-full h-auto object-cover"
          />

          {/* small star on mobile */}
          <Star className="text-black absolute right-6 top-8 w-12 h-12" size={40} />
          <Star className="text-black absolute left-6 top-30 w-8 h-8" size={32} />
        </div>
      </div>
    </section>
  )
}
