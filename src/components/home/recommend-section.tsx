'use client'

import { products } from '@/mocks/product/product.mock'
import { Card, CardContent, CardHeader } from '../ui/card'
import ProductList from '../ui/product/product-list'

export default function ClientRecommendSection() {
  return (
    <Card className="border-0 shadow-none dark:bg-gray-950 rounded-t-2xl p-0 bg-card-0 gap-0">
      <CardHeader
        className="flex items-center justify-between bg-white p-4 
                   lg:sticky lg:top-[var(--header-offset)] lg:z-20"
      >
        <h1 className="font-spring text-2xl text-gray-900 dark:text-gray-100">
          DAILY RECOMMENDATION
        </h1>
      </CardHeader>

      <CardContent className="p-0">
        <ProductList products={products} />
      </CardContent>
    </Card>
  )
}
