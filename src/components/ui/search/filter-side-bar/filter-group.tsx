'use client'

import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronDown } from 'lucide-react'

interface FilterGroupProps {
  title: string
  options: IFilterGroupOptions[]
  limit?: number
}
interface IFilterGroupOptions {
  label: string
  value: string
}

export function FilterGroup({ title, options, limit = 4 }: FilterGroupProps) {
  const [open, setOpen] = useState(false)

  const visibleOptions = options.slice(0, limit)
  const hiddenOptions = options.slice(limit)

  return (
    <div className="text-sm space-y-2 border-b pb-6">
      <h3 className="font-medium text-gray-800">{title}</h3>
      <div className="space-y-2">
        {visibleOptions.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
            <Checkbox id={opt.value} className="bg-white" />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>

      {hiddenOptions.length > 0 && (
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleContent className="space-y-2 mt-2">
            {hiddenOptions.map((opt) => (
              <label key={opt.value} className="flex items-center gap-2">
                <Checkbox id={opt.value} />
                <span>{opt.label}</span>
              </label>
            ))}
          </CollapsibleContent>

          <CollapsibleTrigger asChild>
            <button className="flex items-center gap-1 text-xs text-gray-500 hover:underline cursor-pointer mt-1">
              More
              <ChevronDown className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
          </CollapsibleTrigger>
        </Collapsible>
      )}
    </div>
  )
}
