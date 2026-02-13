'use client'

import * as React from 'react'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CartRow } from '@/types/cart'
import { TitleRow } from '@/constants/enums/cart.enum'
import { Checkbox } from '@/components/ui/checkbox'
import Image from '@/components/ui/customizes/image'
import NumberInput from '@/components/ui/cart/number-input'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
  })

  return (
    <div className="overflow-hidden bg-white">
      {/* Desktop / Tablet Table */}
      <div className="hidden sm:block">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="h-12 text-center">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                const item = row.original as CartRow
                if (item.type === TitleRow.SPACER) {
                  return (
                    <TableRow key={row.id}>
                      <TableCell colSpan={columns.length} className="h-10 bg-muted border-muted" />
                    </TableRow>
                  )
                } else if (item.type === TitleRow.HEADER) {
                  return (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="font-semibold">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  )
                }

                return (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              })
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Layout */}
      <div className="block sm:hidden divide-y divide-gray-100">
        {table.getRowModel().rows.map((row) => {
          const item = row.original as CartRow
          if (item.type === TitleRow.SPACER) {
            return <div key={row.id} className="h-10 bg-muted border-muted" />
          } else if (item.type === TitleRow.HEADER) {
            return (
              <div key={row.id} className="flex font-semibold p-3 items-center">
                <div className="mr-2 ">
                  {flexRender(
                    row.getVisibleCells()[0].column.columnDef.cell,
                    row.getVisibleCells()[0].getContext(),
                  )}
                </div>

                {row
                  .getVisibleCells()
                  .slice(1)
                  .map((cell) => (
                    <div key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </div>
                  ))}
              </div>
            )
          }
          if (item.type !== TitleRow.ITEM) return null

          return (
            <div key={row.id} className="flex items-start gap-3 p-3 border-t">
              <div className=" flex justify-center gap-2 items-center">
                <Checkbox
                  checked={row.getIsSelected()}
                  onCheckedChange={(checked) => row.toggleSelected(!!checked)}
                />
                <div className="w-[70px] h-[70px]">
                  <Image url={item.image} alt={item.name} />
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-medium leading-tight line-clamp-2">{item.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Variation: {item.variation}</p>
                </div>

                <div className="mt-2 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    {item.oldPrice && (
                      <span className="line-through text-gray-400 text-xs">
                        {item.oldPrice.toLocaleString('vi-VN')}₫
                      </span>
                    )}
                    <span className="text-[15px] font-semibold text-black-600">
                      {item.price.toLocaleString('vi-VN')}₫
                    </span>
                  </div>

                  <div className="mt-1 flex justify-start">
                    <NumberInput product={item} value={item.quantity} />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
