'use client'
import { Card } from '@/components/ui/card'
import CheckoutSummary from './checkout-summary-section'
import CheckoutPlaceOrder from './checkout-place-order-button'
import PaymentMethodButton from './checkout-payment-button'

export default function PaymentSection() {
  return (
    <Card className="p-6 bg-white rounded-none shadow-none">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
        <div className="flex flex-wrap gap-2">
          <PaymentMethodButton />
        </div>
      </div>
      <CheckoutSummary />
      <CheckoutPlaceOrder />
    </Card>
  )
}
