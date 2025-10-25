'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ProductCount } from './product-count'

export function SortBar() {
  const [active, setActive] = useState('Liên Quan')
  const [priceSort, setPriceSort] = useState<'asc' | 'desc' | null>(null)

  const tabs = ['Liên Quan', 'Mới Nhất', 'Bán Chạy', 'Giá']

  return (
    <div className="bg-white px-4 flex items-center justify-between border py-2 mt-4">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-gray-500">Sắp xếp theo</span>

        {tabs.map((tab) =>
          tab === 'Giá' ? (
            <DropdownMenu key={tab}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={`rounded-sm px-4 flex items-center gap-1 ${
                    active === tab
                      ? 'bg-primary text-primary-foreground border-primary hover:bg-primary'
                      : 'bg-transparent'
                  }`}
                  onClick={() => setActive(tab)}
                >
                  {tab}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem
                  onClick={() => setPriceSort('asc')}
                  className={priceSort === 'asc' ? 'bg-accent' : ''}
                >
                  Giá: Thấp → Cao
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setPriceSort('desc')}
                  className={priceSort === 'desc' ? 'bg-accent' : ''}
                >
                  Giá: Cao → Thấp
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              key={tab}
              variant="outline"
              size="sm"
              className={`rounded-sm px-4 ${
                active === tab
                  ? 'bg-primary text-primary-foreground border-primary hover:bg-primary hover:text-primary-foreground'
                  : 'bg-transparent'
              }`}
              onClick={() => {
                setActive(tab)
                setPriceSort(null)
              }}
            >
              {tab}
            </Button>
          ),
        )}
      </div>
      <div>
        <ProductCount currentPage={1} perPage={10} total={100} />
      </div>
    </div>
  )
}
