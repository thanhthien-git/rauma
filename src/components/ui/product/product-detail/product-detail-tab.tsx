'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import ProductCard from '../product-card'
import { DetailProductTab, IProduct, IProductResponse } from '@/interfaces/products/IProduct'
import { IProductCard } from '@/interfaces/products/IProductCardProps'
interface DetailProductTabProps {
  detail: DetailProductTab[]
  featuredProduct: IProductCard[]
}
export default function ProductDetailTab({ detail, featuredProduct }: DetailProductTabProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="hidden md:block md:col-span-3">
        <Card className="p-0 border border-gray-100 dark:border-gray-800 ">
          <CardHeader className="border-b flex items-center justify-between p-4 !pb-2">
            <CardTitle className="text-xl">PRODUCT DETAILS</CardTitle>
          </CardHeader>

          <CardContent className="p-0">
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {detail.map((item, index) => (
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
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Mobile */}
      <div className="block md:hidden">
        <div className="bg-white divide-y">
          {detail.map((item, index) => (
            <div key={index} className="flex justify-between items-center px-4 py-3">
              <span className="text-gray-600 text-sm">{item.label}</span>
              <span className="text-gray-800 font-medium text-sm text-right max-w-[60%] break-words whitespace-normal">
                {Array.isArray(item.value) ? item.value.join(', ') : item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      <aside className="hidden md:block md:col-span-1">
        <div className="sticky top-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Featured Products
          </h3>
          <div className="space-y-4">
            {featuredProduct.map((p) => (
              <div key={p.id}>
                <ProductCard product={p} isFlashSale variant="small" />
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}
