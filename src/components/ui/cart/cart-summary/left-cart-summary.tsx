'use client'

import { Checkbox } from '@/components/ui/checkbox'

export default function LeftCartSummary() {
  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="flex items-center gap-2">
        <Checkbox />
        <span>Select All (14)</span>
      </div>
      <button className="text-gray-600 hover:text-primary">Delete</button>
    </div>
  )
}
