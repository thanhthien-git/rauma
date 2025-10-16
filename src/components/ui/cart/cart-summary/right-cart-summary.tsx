'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function RightCartSummary() {
  return (
    <div className="flex items-center gap-4">
      <div className="text-sm md:text-base">
        <span className="text-gray-600">Total (2 items): </span>
        <span className="text-primary font-semibold">123.000₫</span>
      </div>

      <Link href={'/checkout'}>
        <Button className="bg-foreground hover:bg-white hover:text-primary hover:border-black border border-transparent text-white text-sm md:text-base px-6 md:px-8 rounded-sm">
          Check Out
        </Button>
      </Link>
    </div>
  )
}
