import { IProductResponse } from '@/interfaces/products/IProduct'
import { toVND } from '@/utils/utils'
import clsx from 'clsx'
import {
  CreditCard,
  MessageCircle,
  MessageCircleMore,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from 'lucide-react'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import ProductVariantSelector from './product-variant-option'
import ProductDetailAction from './product-detail-action'
import useScreen from '@/hooks/useScreen'
import { Button } from '../../button'

interface IProductDetailProps {
  details: IProductResponse
}
type PriceMap = Record<string, { salePrice: number; price: number }>

export default function ProductDetailContent({ details }: Readonly<IProductDetailProps>) {
  const { product, skus } = details
  const { isMobile } = useScreen()
  const { variantTypes } = product

  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({})
  const [quantity, setQuantity] = useState<number>(1)

  const handleChange = useCallback((count: number) => {
    setQuantity((prev) => prev + count)
  }, [])

  const handleInputQuantity = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const validCount = Math.max(1, Number(e.target.value))
    setQuantity(validCount)
  }, [])

  const handleSelectVariant = useCallback((variantId: string, option: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [variantId]: option,
    }))
  }, [])

  const priceMap: PriceMap = skus.reduce((acc, sku) => {
    const key = sku.optionValueIds.join('-')
    acc[key] = { price: sku.price, salePrice: sku.salePrice ?? 0 }
    return acc
  }, {} as PriceMap)

  const displayPriceForVariant = useMemo(() => {
    const key = Object.values(selectedVariants).join('-')
    const skuPrice = priceMap[key]

    const price = skuPrice?.price ?? skus[0].price
    const salePrice = skuPrice?.salePrice

    return {
      price,
      salePrice: salePrice ?? 0,
      discountPercentage: salePrice ? Math.round(((price - salePrice) / price) * 100) : undefined,
    }
  }, [selectedVariants, priceMap, skus])

  const displayPrice = useMemo(() => {
    const { salePrice, price, discountPercentage } = displayPriceForVariant
    if (salePrice) {
      return (
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">{toVND(price)}</span>
          <span className="text-gray-400 line-through">{toVND(price)}</span>
          <span className="text-red-500 font-semibold">-{discountPercentage}%</span>
        </div>
      )
    }
    return <span className="text-2xl font-bold">{toVND(price)}</span>
  }, [displayPriceForVariant])

  return (
    <div className="flex flex-col gap-5">
      {/* Title & Rating */}
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex text-yellow-500">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} />
          </div>
          <span className="text-gray-600 text-sm">4.5/5</span>
        </div>
      </div>

      {/* Price */}
      {displayPrice}

      {/* Description */}
      <p className="text-gray-600">{product.shortDescription}</p>

      {!isMobile && (
        <>
          <ProductVariantSelector
            variantTypes={variantTypes}
            onSelectVariant={handleSelectVariant}
            selectVariants={selectedVariants}
          />
          <ProductDetailAction
            quantity={quantity}
            onClickButton={handleChange}
            onInputQuantity={handleInputQuantity}
          />
        </>
      )}

      {/* Bottom navigation for Mobile */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full grid grid-cols-2 items-center h-16 bg-white border-t shadow-lg z-50 shadow">
          {/* Nửa trái: 2 nút */}
          <div className="flex flex-1 divide-x divide-gray-400">
            <button className="flex-1 flex items-center justify-center">
              <MessageCircleMore size={28} color="black" />
            </button>
            <button className="flex-1 flex items-center justify-center">
              <ShoppingCart size={28} color="black" />
            </button>
          </div>

          <button className="flex-1 flex items-center justify-center bg-black text-white h-full">
            <CreditCard size={28} className="mr-2" />
            Buy Now
          </button>
        </div>
      )}
    </div>
  )
}
