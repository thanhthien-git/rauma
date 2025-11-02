'use client'

import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ClientSearchBar() {
  return (
    <div className="flex w-full max-w-full sm:max-w-xl lg:max-w-3xl">
      <Input
        type="search"
        placeholder="Search products...13"
        className="flex-1 h-10 sm:h-12 text-sm sm:text-base rounded-l-full rounded-r-none bg-gray-100 dark:bg-gray-800 border border-gray-300 focus-visible:ring-0 focus:border-gray-400"
      />
      <Button
        variant="default"
        size="icon"
        className="h-10 sm:h-12 w-12 sm:w-14 rounded-r-full rounded-l-none"
      >
        <Search className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>
    </div>
  )
}
