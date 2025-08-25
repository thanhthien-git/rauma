'use client'

import ProductDetailImages from './product-detail-image'
import ProductDetailContent from './product-detail-content'
import { useMemo } from 'react'
import { IProductResponse, ITEM_STATUS } from '@/interfaces/products/IProduct'
import { mock } from 'node:test'
const mockApi: IProductResponse = {
  product: {
    id: 'prod_001',
    shopId: 'shop_123',
    slug: 'one-life-graphic-tshirt',
    shortDescription:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    name: 'ONE LIFE GRAPHIC T-SHIRT',
    brandId: 'brand_456',
    categoryIds: ['cat_tshirt', 'cat_men'],
    tags: ['tshirt', 'graphic', 'streetwear'],
    defaultSkuId: 'sku_001',
    variantTypes: [
      { id: 'color', name: 'Color', options: ['green', 'blue', 'black'] },
      { id: 'size', name: 'Size', options: ['S', 'M', 'L', 'XL'] },
    ],
    attributes: [
      { id: 'material', name: 'Material', value: '100% Cotton' },
      { id: 'fit', name: 'Fit', value: 'Regular' },
    ],
    media: [
      {
        id: 'img_2',
        url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800',
        isPrimary: true,
      },
    ],
    status: ITEM_STATUS.ACTIVE,
    createAt: new Date('2025-01-01T10:00:00Z'),
    updateAt: new Date('2025-02-01T10:00:00Z'),
  },
  skus: [
    {
      id: 'green-S',
      productId: 'prod_001',
      skuCode: 'TSHIRT-GREEN-S',
      optionValueIds: ['green', 'S'],
      price: 260,
      salePrice: 100,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 200,
      dimension: { l: 30, w: 20, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'green-M',
      productId: 'prod_001',
      skuCode: 'TSHIRT-GREEN-M',
      optionValueIds: ['green', 'M'],
      price: 270,
      salePrice: 110,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 210,
      dimension: { l: 31, w: 21, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'green-L',
      productId: 'prod_001',
      skuCode: 'TSHIRT-GREEN-L',
      optionValueIds: ['green', 'L'],
      price: 280,
      salePrice: 120,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 220,
      dimension: { l: 32, w: 22, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'green-XL',
      productId: 'prod_001',
      skuCode: 'TSHIRT-GREEN-XL',
      optionValueIds: ['green', 'XL'],
      price: 290,
      salePrice: 130,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 230,
      dimension: { l: 33, w: 23, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },

    {
      id: 'blue-S',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLUE-S',
      optionValueIds: ['blue', 'S'],
      price: 270,
      salePrice: 110,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 200,
      dimension: { l: 30, w: 20, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'blue-M',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLUE-M',
      optionValueIds: ['blue', 'M'],
      price: 280,
      salePrice: 120,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 210,
      dimension: { l: 31, w: 21, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'blue-L',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLUE-L',
      optionValueIds: ['blue', 'L'],
      price: 290,
      salePrice: 130,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 220,
      dimension: { l: 32, w: 22, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'blue-XL',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLUE-XL',
      optionValueIds: ['blue', 'XL'],
      price: 300,
      salePrice: 140,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 230,
      dimension: { l: 33, w: 23, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },

    {
      id: 'black-S',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLACK-S',
      optionValueIds: ['black', 'S'],
      price: 280,
      salePrice: 120,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 200,
      dimension: { l: 30, w: 20, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'black-M',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLACK-M',
      optionValueIds: ['black', 'M'],
      price: 290,
      salePrice: 130,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 210,
      dimension: { l: 31, w: 21, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'black-L',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLACK-L',
      optionValueIds: ['black', 'L'],
      price: 300,
      salePrice: 140,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 220,
      dimension: { l: 32, w: 22, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
    {
      id: 'black-XL',
      productId: 'prod_001',
      skuCode: 'TSHIRT-BLACK-XL',
      optionValueIds: ['black', 'XL'],
      price: 310,
      salePrice: 150,
      images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'],
      weightGrams: 230,
      dimension: { l: 33, w: 23, h: 5, unit: 'cm' },
      status: ITEM_STATUS.ACTIVE,
      createAt: new Date('2025-01-01T10:00:00Z'),
      updateAt: new Date('2025-02-01T10:00:00Z'),
    },
  ],
}

export default function ProductDetailComponent() {
  const { product, skus } = mockApi
  const thumbnails = useMemo(() => {
    return Array.from(
      new Set([...product.media.map((m) => m.url), ...skus.flatMap((sku) => sku.images)]),
    )
  }, [product.media, skus])
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
      <div className="col-span-1 md:col-span-3">
        <ProductDetailImages urls={thumbnails} />
      </div>
      <div className="col-span-1 md:col-span-2">
        <ProductDetailContent details={mockApi} />
      </div>
    </div>
  )
}
