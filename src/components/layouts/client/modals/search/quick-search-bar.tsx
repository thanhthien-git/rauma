'use client'

import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { AutoComplete } from '@/components/ui/search/autocomplete'
import { getList } from '@/lib/utils'

export default function QuickSearchBar() {
  const frameworks = [
    {
      value: 'next.js',
      label: 'Next.js',
    },
    {
      value: 'sveltekit',
      label: 'SvelteKit',
    },
    {
      value: 'nuxt.js',
      label: 'Nuxt.js',
    },
    {
      value: 'remix',
      label: 'Remix',
    },
    {
      value: 'astro',
      label: 'Astro',
    },
  ]
  const [searchValue, setSearchValue] = useState<string>('')
  const [selectedValue, setSelectedValue] = useState<string>('')
  const { data, isLoading } = useQuery({
    queryKey: ['data', searchValue],
    queryFn: () => getList(searchValue),
  })
  return (
    <>
      {/* Desktop Search */}
      <div className="hidden lg:flex flex-1 max-w-3xl">
        <AutoComplete
          selectedValue={selectedValue}
          onSelectedValueChange={setSelectedValue}
          searchValue={searchValue}
          onSearchValueChange={setSearchValue}
          items={data ?? []}
          isLoading={isLoading}
          emptyMessage="No product found."
        />
        <Button variant="default" size="icon" className="h-12 w-14 rounded-r-full rounded-l-none">
          <Search className="h-6 w-6" />
        </Button>
      </div>
    </>
  )
}
