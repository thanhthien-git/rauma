'use client'

import * as React from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { MenuItem } from '@/types/menu'
import { cn } from '@/lib/utils'

type Props = {
  menu: MenuItem[]
  onItemClick: (item: MenuItem) => void
  showBack?: boolean
  onBack?: () => void
}

export function MenuList({ menu, onItemClick, showBack = false, onBack }: Props) {
  return (
    <div className="flex flex-col h-full">
      {showBack && onBack && (
        <button className="flex items-center gap-2 mb-4 text-lg font-medium" onClick={onBack}>
          <ChevronLeft className="h-5 w-5" /> Back
        </button>
      )}
      <ul className="flex flex-col space-y-2 flex-1 overflow-y-auto">
        {menu.map((item) => (
          <li key={item.title}>
            {item.subMenu ? (
              <button
                className={cn(
                  'flex w-full justify-between py-3 text-2xl font-medium hover:text-primary',
                )}
                onClick={() => onItemClick(item)}
              >
                {item.title}
                <ChevronRight className="h-5 w-5" />
              </button>
            ) : (
              <a
                href={item.href}
                className="block py-3 text-2xl font-medium hover:text-primary"
                onClick={() => onItemClick(item)}
              >
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
