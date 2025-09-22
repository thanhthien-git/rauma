'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DetailProductTabItem } from '@/types/product'
import { ChevronRight } from 'lucide-react'
import ProductCard from '../product-card'

export default function ProductDetailTab() {
  const details: DetailProductTabItem[] = [
    {
      label: 'Category',
      value: ['Beauty', 'Hair Care', 'Shampoo'],
      link: ['#', '#', '#'],
    },

    { label: 'Promotion Stock', value: 'IN STOCK' },
    { label: 'Remaining Quantity', value: 'IN STOCK' },
    { label: 'Shirt Style', value: 'Classic' },
    { label: 'Collar', value: 'Shirt Collar' },
    { label: 'Collar Type', value: 'Spread Collar' },
    { label: 'Tall Fit', value: 'No' },
    { label: 'Origin', value: 'Vietnam' },
    { label: 'Cuff Style', value: 'French Cuff' },
    { label: 'Custom Order', value: 'No' },
    { label: 'Pattern', value: 'Plain' },
    { label: 'Sleeve Length', value: 'Short Sleeve' },
    { label: 'Oversized', value: 'No' },
    { label: 'Occasion', value: 'Work' },
    { label: 'Material', value: 'KATE, SILK' },
    { label: 'Style', value: 'UNIFORM' },
    { label: 'Manufacturer Name', value: 'VUONG NAM ONLINE' },
    { label: 'Manufacturer Address', value: 'VUONG NAM ONLINE' },
    { label: 'Shipped From', value: 'Long An' },
  ]
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
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-6">
      <div className="md:col-span-5">
        <Card className="!border-0 shadow-none dark:bg-white pt-0 bg-card-0 gap-0">
          <CardHeader className="flex items-center justify-between p-4">
            <CardTitle className="text-xl">PRODUCT DETAILS</CardTitle>
          </CardHeader>

          <CardContent className="p-0">
            {details.map((item, index) => (
              <div key={index} className="py-3 px-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {/* Label */}
                <span className="text-gray-500 md:col-span-1">{item.label}</span>

                {/* Value */}
                <div className="font-medium sm:col-span-1 md:col-span-2 break-words whitespace-normal">
                  {Array.isArray(item.value) ? (
                    ['Shopee', ...item.value].map((val, i) => (
                      <span key={i} className="inline-flex items-center">
                        <a
                          href={item.link && item.link[i]}
                          className="text-blue-800 hover:text-black"
                        >
                          {val}
                        </a>
                        {i < item.value.length && (
                          <ChevronRight size={18} className="mx-1 text-gray-400" />
                        )}
                      </span>
                    ))
                  ) : item.link ? (
                    <a href={item.link as string} className="text-gray-600 hover:text-black">
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <aside className="hidden md:block space-y-4 pt-5 md:col-span-1">
        <h3 className="text-gray-500">Top Sản Phẩm Nổi Bật</h3>
        <div className="flex flex-col gap-5 ">
          {products.map((p) => (
            <ProductCard product={p} key={p.id} isFlashSale variant="small" />
          ))}
        </div>
      </aside>
    </div>
  )
}
