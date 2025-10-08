import { TitleRow } from '@/constants/enums/cart.enum'

export type CartRow = CartHeaderRow | CartItemRow | CartSpacerRow
export type CartHeaderRow = { id: string; storeName: string; type: TitleRow.HEADER }
export type CartItemRow = {
  id: string
  storeName: string
  type: TitleRow.ITEM
  image: string
  name: string
  variation: string
  oldPrice?: number
  price: number
  quantity: number
}
export type CartSpacerRow = { id: string; type: TitleRow.SPACER }
