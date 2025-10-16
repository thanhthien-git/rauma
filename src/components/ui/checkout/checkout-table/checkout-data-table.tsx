'use client'

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import React from 'react'
import { CartRow } from '@/types/cart'
import { TitleRow } from '@/constants/enums/cart.enum'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-hidden bg-white">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="h-12 text-center hover:bg-transparent">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              const item = row.original as CartRow
              switch (item.type) {
                case TitleRow.SPACER:
                  return (
                    <TableRow key={row.id} className="border-l-0 border-r-0">
                      <TableCell colSpan={columns.length} className="h-10 bg-muted border-muted" />
                    </TableRow>
                  )

                case TitleRow.HEADER:
                  return (
                    <TableRow key={row.id} className="hover:bg-transparent font-semibold">
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="h-12">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  )

                case TitleRow.TOTAL:
                  return (
                    <TableRow
                      key={row.id}
                      className="hover:bg-transparent border-t border-gray-200"
                    >
                      <TableCell
                        colSpan={columns.length}
                        className="h-12 text-right pr-6 font-semibold text-gray-700 bg-white"
                      >
                        Order Total{' '}
                        <span className="text-gray-500">
                          ({item.totalQuantity?.toLocaleString('vi-VN') ?? 0} items)
                        </span>{' '}
                        : <span>{item.totalPrice.toLocaleString('vi-VN')} ₫</span>
                      </TableCell>
                    </TableRow>
                  )

                default:
                  return (
                    <TableRow key={row.id} className="hover:bg-transparent">
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  )
              }
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
  )
}
