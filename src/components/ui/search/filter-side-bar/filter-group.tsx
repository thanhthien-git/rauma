'use client'

import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import StarRating from './filter-rating-star'
import { FilterGroupProps } from '@/interfaces/search'

export function FilterGroup({ title, options, limit = 4, type = 'default' }: FilterGroupProps) {
  const [open, setOpen] = useState(false)

  const visibleOptions = options.slice(0, limit)
  const hiddenOptions = options.slice(limit)

  const renderOptionLabel = (label: string | number) => {
    if (type === 'star' && typeof label === 'number') {
      return <StarRating value={label} />
    }
    return <span>{label}</span>
  }

  return (
    <div className="text-sm space-y-2 border-b pb-6">
      <h3 className="font-medium text-gray-800">{title}</h3>

      <div className="space-y-2">
        {visibleOptions.map((opt, idx) => (
          <label
            key={opt.value ?? idx}
            className={cn(
              'flex items-center gap-2 cursor-pointer',
              type === 'star' && 'hover:bg-gray-50 p-1 rounded-md',
            )}
          >
            {type !== 'star' && (
              <Checkbox id={String(opt.value ?? opt.label)} className="bg-white" />
            )}
            {renderOptionLabel(opt.label)}
          </label>
        ))}
      </div>

      {hiddenOptions.length > 0 && (
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleContent className="space-y-2 mt-2">
            {hiddenOptions.map((opt, idx) => (
              <label
                key={opt.value ?? idx}
                className={cn(
                  'flex items-center gap-2 cursor-pointer',
                  type === 'star' && 'hover:bg-gray-50 p-1 rounded-md',
                )}
              >
                {type !== 'star' && <Checkbox id={String(opt.value ?? opt.label)} />}
                {renderOptionLabel(opt.label)}
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
