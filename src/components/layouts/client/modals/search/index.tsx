'use client'

import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function QuickSearchBar() {
  return (
    <>
      {/* Desktop Search */}
      <div className="hidden md:flex flex-1 max-w-3xl">
        <Input
          type="search"
          placeholder="Search products..."
          className="h-12 text-lg rounded-l-full rounded-r-none bg-gray-100 dark:bg-gray-800 focus:border-0"
        />
        <Button variant="default" size="icon" className="h-12 w-14 rounded-r-full rounded-l-none">
          <Search className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Search Icon */}
      <Button variant="ghost" size="icon" className="flex md:hidden h-10 w-10">
        <Search className="h-5 w-5" />
      </Button>
    </>
  )
}
