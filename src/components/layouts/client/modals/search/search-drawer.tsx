'use client'

import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import SearchTermTag from '@/components/ui/list/list-tag'
import { Search, SearchIcon } from 'lucide-react'
import { useState } from 'react'
const popularTerms = [
  'road racing',
  'sabrina 3',
  'air force 1',
  'jordan',
  'jordan 1 low',
  'air max',
  'basketball shoes',
  'backpack',
]
export function MobileSearchDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen} dismissible={false}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="flex  h-10 w-10 hover:bg-gray-100 transition-colors duration-200"
        >
          <Search className="h-5 w-5" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="fixed w-full h-full max-w-full rounded-none bg-white [&_.drawer-handle]:hidden ">
        <div className="flex flex-col h-full pt-5">
          {/* Header */}
          <div className="flex items-center p-2">
            <div className="relative w-full max-w-sm">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="pl-10 h-10" />
            </div>
            <button onClick={() => setOpen(false)} className="ml-2 text-base text-black-600">
              Cancel
            </button>
          </div>

          <div className="p-4 overflow-y-auto">
            <p className="text-sm text-gray-500 mb-5">Popular Search</p>
            <div className="flex flex-wrap gap-4">
              <SearchTermTag terms={popularTerms} />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
