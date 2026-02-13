'use client'

import { TicketIcon } from 'lucide-react'

export default function MiddleCartSummary() {
  return (
    <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
      <TicketIcon className="h-4 w-4 text-black" />
      <span>Platform Voucher</span>
      <button className="text-blue-500 hover:underline">Select or enter code</button>
    </div>
  )
}
