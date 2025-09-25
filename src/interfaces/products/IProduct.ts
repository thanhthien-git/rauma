import { MediaAsset, ProductAttribute, ProductVariant } from '@/types/product'
import { SKU } from '../skus/ISku'
import { IProductCard } from './IProductCardProps'
import { IReviewCard } from '../IReviewCard'

export interface IProduct {
  id: string
  shopId: string
  slug: string
  name: string
  shortDescription: string
  brandId?: string
  categoryIds: string[]
  tags: string[]
  defaultSkuId?: string
  variantTypes: ProductVariant[]
  attributes: ProductAttribute[]
  media: MediaAsset[]
  status: ITEM_STATUS
  createAt: Date
  updateAt: Date
}

export interface IProductResponse {
  product: IProduct
  skus: SKU[]
  details: DetailProductTab[]
  featuredProduct: IProductCard[]
  productDescriptionHTML: string
  reviews: IReviewCard[]
}

export enum ITEM_STATUS {
  ACTIVE = 'active',
  ARCHIVED = 'archived',
}

export type DetailProductTab = {
  label: string
  value: string | string[]
  link?: string | string[]
}
