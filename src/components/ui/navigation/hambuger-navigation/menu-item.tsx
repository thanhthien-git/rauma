'use client'

import * as React from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'
import { MenuItem } from '@/types/menu'

export const MenuItemComponent: React.FC<{ item: MenuItem; depth?: number }> = ({
  item,
  depth = 0,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  if (item.subMenu) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button
            className={cn(
              'flex w-full items-center justify-between py-2 text-lg font-medium transition-colors hover:text-primary',
              depth > 0 && 'pl-4',
            )}
          >
            {item.title}
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {item.subMenu.map((subItem) => (
            <MenuItemComponent key={subItem.title} item={subItem} depth={depth + 1} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <a
      href={item.href}
      className={cn(
        'block py-2 text-lg font-medium transition-colors hover:text-primary',
        depth > 0 && 'pl-4',
        item.href === '/' && 'text-primary',
      )}
    >
      {item.title}
    </a>
  )
}
