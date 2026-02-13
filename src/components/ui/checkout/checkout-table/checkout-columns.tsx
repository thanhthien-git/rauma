'use client'
import { Checkbox } from '@/components/ui/checkbox'

import { ColumnDef } from '@tanstack/react-table'
import Image from '../../customizes/image'
import { Button } from '../../button'
import { TitleRow } from '@/constants/enums/cart.enum'
import { CartHeaderRow, CartRow } from '@/types/cart'

export const columns: ColumnDef<CartRow>[] = [
  {
    accessorKey: 'product',
    header: 'Product',
    cell: ({ row }) => {
      const item = row.original
      switch (item.type) {
        case TitleRow.HEADER:
          return <span className="font-semibold">{item.storeName}</span>
        case TitleRow.ITEM:
          return (
            <div className="flex items-center gap-4">
              <div className="w-[80px] h-[80px]">
                <Image url={item.image} alt={item.name} />
              </div>
              <div className="space-y-1">
                <p className="font-medium text-sm leading-tight">{item.name}</p>
                <p className="text-xs text-gray-500">Variation: {item.variation}</p>
              </div>
            </div>
          )

        default:
          return null
      }
    },
  },
  {
    accessorKey: 'price',
    header: () => <div className="text-center">Unit Price</div>,
    cell: ({ row }) => {
      if (row.original?.type !== TitleRow.ITEM) return null
      const { price } = row.original
      return (
        <div className="text-sm text-center">
          <span className="font-medium">{price.toLocaleString('vi-VN')}₫</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-center">Amount</div>,
    cell: ({ row }) => {
      const item = row.original
      if (item.type !== TitleRow.ITEM) return null
      return <div className="text-center">{item?.quantity}</div>
    },
  },
  {
    accessorKey: 'itemSubtotal',
    header: () => <div className="text-center">Item SubTotal</div>,
    cell: ({ row }) => {
      const item = row.original
      if (item.type !== TitleRow.ITEM) return null
      return (
        <div className="text-center">{(item.price * item.quantity).toLocaleString('vi-VN')}đ</div>
      )
    },
  },
]
