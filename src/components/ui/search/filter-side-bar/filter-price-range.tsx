'use client'

import { useState } from 'react'
import { Slider } from '../../slider'

interface PriceRangeProps {
  min?: number
  max?: number
  step?: number
  defaultValue?: [number, number]
}

export function PriceRange({
  min = 0,
  max = 50000000,
  step = 1000,
  defaultValue = [12000000, 35000000],
}: PriceRangeProps) {
  const [values, setValues] = useState<[number, number]>(defaultValue)

  return (
    <div className="space-y-4 text-sm">
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white">Price Range</h3>
        <p className="text-gray-500 dark:text-gray-400">
          Set your budget range (đ{values[0]} - {values[1]}).
        </p>
      </div>

      <Slider
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onValueChange={(val) => setValues(val as [number, number])}
      />
    </div>
  )
}
