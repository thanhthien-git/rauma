import { ITEM_STATUS } from '../products/IProduct'

export interface SKU {
  id: string
  productId: string
  skuCode?: string
  barCode?: string
  optionValueIds: string[]
  price: number
  salePrice?: number
  images: string[]
  weightGrams?: number
  dimension?: { l?: number; w?: number; h?: number; unit?: 'cm' | 'in' }
  status: ITEM_STATUS
  createAt: Date
  updateAt: Date
}
