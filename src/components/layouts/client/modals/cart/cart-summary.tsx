'use client'

import LeftCartSummary from '@/components/ui/cart/cart-summary/left-cart-summary'
import MiddleCartSummary from '@/components/ui/cart/cart-summary/middle-cart-summary'
import RightCartSummary from '@/components/ui/cart/cart-summary/right-cart-summary'

export default function CartSummaryBar() {
  return (
    <div className="w-full flex items-center justify-between bg-white border-t border-gray-200 h-16 px-2">
      <LeftCartSummary />
      <MiddleCartSummary />
      <RightCartSummary />
    </div>
  )
}
