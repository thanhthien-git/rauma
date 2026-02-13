'use client'

import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { menuItems } from '@/constants/menu/client-hambuger'
import { MenuItem } from '@/types/menu'
import { useEffect, useState } from 'react'
import MenuMember from './menu-member'
import MenuUserUtil from './user-util'
import MenuBody from './menu-body'

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false)
  const [activeMenuItems, setActiveMenuItems] = useState<MenuItem[]>(menuItems)
  const [history, setHistory] = useState<MenuItem[][]>([])

  const handleItemClick = (item: MenuItem) => {
    if (item.subMenu) {
      setHistory((prev) => [...prev, activeMenuItems])
      setActiveMenuItems(item.subMenu)
    } else {
      setOpen(false)
    }
  }
  const handleBack = () => {
    setHistory((prev) => {
      const prevMenu = prev[prev.length - 1] || menuItems
      setActiveMenuItems(prevMenu)
      return prev.slice(0, -1)
    })
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden bg-white">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-full gap-0 max-w-full h-full overflow-y-auto flex flex-col p-0 "
      >
        <div className=" px-6 py-6 overflow">
          <MenuBody
            menu={activeMenuItems}
            onItemClick={handleItemClick}
            showBack={history.length > 0}
            onBack={handleBack}
          />
        </div>
        <MenuMember />
        <MenuUserUtil />
      </SheetContent>
    </Sheet>
  )
}
