'use client'

import { Button } from '../button'

export default function CheckoutPlaceOrder() {
  return (
    <div className="space-y-3">
      <p className="text-xs text-gray-600">
        By clicking 'Place Order', you are agreeing to RaumaStore{' '}
        <a href="#" className="text-blue-600 hover:underline">
          General Transaction Terms
        </a>
      </p>
      <Button className="w-full bg-black text-white py-5 text-base font-semibold rounded">
        Place Order
      </Button>
    </div>
  )
}
