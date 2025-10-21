'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import ProductCarousel from '../ui/product/flashsale-product-carousel'
import Timer from './timer'
import { products } from '@/mocks/product/product.mock'

export default function ClientFlashsaleSection() {
  const THREE_HOURS = 3 * 60 * 60 * 1000
  const startFrom = Date.now()
  const endTimestamp = startFrom + THREE_HOURS
  return (
    <Card className="border-0 shadow-none dark:bg-gray-950 rounded-t-2xl p-0 bg-card-0 gap-0">
      <CardHeader className="flex items-center justify-between bg-white p-4 ">
        <h1 className="font-spring text-2xl text-gray-900 dark:text-gray-100">FLASH SALE</h1>
        <Timer startFromTimeStamp={endTimestamp} />
      </CardHeader>

      <CardContent className="p-0 bg-white">
        <ProductCarousel products={products} />
      </CardContent>
    </Card>
  )
}
