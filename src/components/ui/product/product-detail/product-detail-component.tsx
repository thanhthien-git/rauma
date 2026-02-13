'use client'

import ProductDetailImages from './product-detail-image'
import ProductDetailContent from './product-detail-content'
import { useMemo } from 'react'
import ProductTabs from './product-detail-tabs'
import { mockApi } from '@/mocks/product/product.mock'

export default function ProductDetailComponent() {
  const { product, skus } = mockApi
  const thumbnails = useMemo(() => {
    return Array.from([...product.media.map((m) => m.url), ...skus.flatMap((sku) => sku.images)])
  }, [product.media, skus])
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-5">
        <div className="col-span-1 md:col-span-3">
          <ProductDetailImages urls={thumbnails} />
        </div>
        <div className="col-span-1 md:col-span-2">
          <ProductDetailContent details={mockApi} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:pt-5 md:pt-15">
        <div className="col-span-1 md:col-span-5 text-black">
          <div className="">
            <ProductTabs product={mockApi} />
          </div>
        </div>
      </div>
    </>
  )
}
