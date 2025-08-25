import { MediaAsset, ProductAttribute, ProductVariant } from '@/types/product'
import { SKU } from '../skus/ISku'

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
}

export enum ITEM_STATUS {
  ACTIVE = 'active',
  ARCHIVED = 'archived',
}
