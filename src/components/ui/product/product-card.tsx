'use client'
import { IProductCard } from '@/interfaces/products/IProductCardProps'
import { slugAndId, toVND } from '@/utils/utils'
import clsx from 'clsx'
import { Star, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import LogoLoader from '../loading/logo-loader'
import ProductCardBottom from './product-card-bottom'
import Image from '../customizes/image'
import Link from 'next/link'

interface IProductCardProps {
  product: Readonly<IProductCard>
  isFlashSale?: boolean
  variant?: 'default' | 'small'
}
export default function ProductCard({
  product,
  isFlashSale = false,
  variant = 'default',
}: Readonly<IProductCardProps>) {
  const { id, discountPercent, imageUrl, name } = product

  return (
    <Link href={`/product/${slugAndId(name, id)}`}>
      <div
        className={clsx(
          'flex flex-col items-center justify-between gap-3 border-1 ',
          'bg-white dark:bg-gray-900 dark:border-gray-700',
          'transition-all duration-300 cursor-pointer hover:shadow-md',
        )}
        key={id}
      >
        <div
          className={clsx(
            'relative w-full flex items-center justify-center overflow-hidden border-b-1',
            variant === 'default' && 'aspect-square',
            variant === 'small' && 'aspect-[4/3] h-[160px]',
          )}
        >
          <Image url={imageUrl} />

          {discountPercent > 0 && (
            <span
              className={clsx(
                'absolute top-0 right-0',
                'bg-red-500 text-white text-xs font-bold',
                'px-2 py-1 shadow',
              )}
            >
              -{discountPercent}%
            </span>
          )}
        </div>

        <ProductCardBottom product={product} isFlashSale={isFlashSale} />
      </div>
    </Link>
  )
}
