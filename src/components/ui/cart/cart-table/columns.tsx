'use client'
import { Checkbox } from '@/components/ui/checkbox'

import { ColumnDef } from '@tanstack/react-table'
import Image from '../../customizes/image'
import { Button } from '../../button'
import { TitleRow } from '@/constants/enums/cart.enum'
import { CartHeaderRow, CartRow } from '@/types/cart'
import NumberInput from '../number-input'

export const columns: ColumnDef<CartRow>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row, table }) => {
      const item = row.original as CartRow

      if (item.type === TitleRow.HEADER) {
        const storeName = item.storeName
        const storeItems = table
          .getRowModel()
          .rows.filter(
            (r) =>
              (r.original as CartHeaderRow).storeName === storeName &&
              (r.original as CartRow).type === TitleRow.ITEM,
          )

        const allSelected = storeItems.every((r) => r.getIsSelected())
        const someSelected = storeItems.some((r) => r.getIsSelected())

        return (
          <Checkbox
            checked={allSelected || (someSelected && 'indeterminate')}
            onCheckedChange={(checked) => {
              storeItems.forEach((r) => r.toggleSelected(!!checked))
            }}
            aria-label={`Select store ${storeName}`}
          />
        )
      }

      if (item.type === TitleRow.ITEM) {
        return (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(checked) => row.toggleSelected(!!checked)}
            aria-label="Select item"
          />
        )
      }
      return null
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'product',
    header: 'Product',
    cell: ({ row }) => {
      const item = row.original
      if (item.type === TitleRow.SPACER) return null
      if (item.type === TitleRow.HEADER) return <>{item.storeName}</>
      return (
        <div className="flex items-center gap-4">
          <div className="w-[80px] h-[80px]">
            <Image url={item.image} alt={item.name} />
          </div>
          <div>
            <p className="font-medium text-sm leading-tight">{item.name}</p>
            <p className="text-xs text-gray-500">Variation: {item.variation}</p>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: 'price',
    header: () => <div className="text-center">Unit Price</div>,
    cell: ({ row }) => {
      if (row.original?.type !== TitleRow.ITEM) return null
      const { price, oldPrice } = row.original
      return (
        <div className="text-sm text-center">
          {oldPrice && (
            <span className="line-through text-gray-400 mr-1 text-xs">
              {oldPrice.toLocaleString('vi-VN')}₫
            </span>
          )}
          <span className="font-medium">{price.toLocaleString('vi-VN')}₫</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'quantity',
    header: () => <div className="text-center">Quantity</div>,
    cell: ({ row }) => {
      const item = row.original
      if (item.type !== TitleRow.ITEM) return null
      return <NumberInput product={item} value={item.quantity} />
    },
  },
  {
    header: 'Total Price',
    cell: ({ row }) => {
      if (row.original.type !== 'item') return null
      const { price, quantity } = row.original
      if (row.original?.type !== 'item' || !price || !quantity) return null
      return <div>{(price * quantity).toLocaleString('vi-VN')}₫</div>
    },
  },
  {
    header: 'Actions',
    cell: ({ row }) => {
      const item = row.original
      if (item.type !== TitleRow.ITEM) return null
      return (
        <div className="flex justify-center items-center">
          <Button variant="link" size="sm" className=" px-0">
            Delete
          </Button>
        </div>
      )
    },
  },
]
