'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import { AlertNumberInput } from './alert-dialog-number-input'

export default function NumberInput({ value, min = 1, max = Infinity, product }: any) {
  const [quantity, setQuantity] = useState(value ?? min)
  const [showDialog, setShowDialog] = useState(false)
  useEffect(() => {
    if (value !== undefined) {
      setQuantity(value)
    }
  }, [value])

  const handleDecrement = () => {
    if (quantity <= min) {
      setShowDialog(true)
      return
    }
    const newValue = Math.max(quantity - 1, min)
    setQuantity(newValue)
  }

  const handleIncrement = () => {
    const newValue = Math.min(quantity + 1, max)
    setQuantity(newValue)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let num = Number(e.target.value)

    if (isNaN(num)) num = min

    if (num < min) {
      setShowDialog(true)
      num = min
    } else if (num > max) {
      num = max
    }

    setQuantity(num)
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-2 bg-white border border-gray-200 p-1 rounded-md">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDecrement}
          className="h-10 w-10 rounded-md hover:bg-gray-100"
        >
          <Minus className="h-4 w-4" />
        </Button>

        <input
          type="number"
          min={min}
          max={max}
          value={quantity}
          onChange={handleInputChange}
          className="no-arrow w-10 text-center border-none focus-visible:ring-0"
        />

        <Button
          variant="ghost"
          size="icon"
          onClick={handleIncrement}
          className="h-10 w-10 rounded-md hover:bg-gray-100"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <AlertNumberInput
        product={product}
        openDialog={showDialog}
        onClose={() => setShowDialog(false)}
      />
    </div>
  )
}
