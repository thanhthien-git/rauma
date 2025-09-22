'use client'

import { Card, CardContent, CardHeader } from '../ui/card'
import ProductList from '../ui/product/product-list'

const products = [
  {
    id: '1',
    name: 'Wireless Headphones Pro',
    originPrice: 2500000,
    salePrice: 1990000,
    discountPercent: 20,
    imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
    sold: 320,
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Smart Watch Series 7',
    originPrice: 6000000,
    salePrice: 4790000,
    discountPercent: 20,
    imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
    sold: 540,
    rating: 4.7,
  },
  {
    id: '3',
    name: 'Minimal Sofa',
    originPrice: 12000000,
    salePrice: 8990000,
    discountPercent: 25,
    imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
    sold: 210,
    rating: 4.3,
  },
  {
    id: '4',
    name: 'Fashion Sneakers',
    originPrice: 1800000,
    salePrice: 1290000,
    discountPercent: 28,
    imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
    sold: 890,
    rating: 4.8,
  },
  {
    id: '5',
    name: 'Gaming Laptop X1',
    originPrice: 28000000,
    salePrice: 23900000,
    discountPercent: 15,
    imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
    sold: 110,
    rating: 4.6,
  },
  // ...các sản phẩm khác
]

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
