'use client'
import React, { useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import CheckoutSummary from './checkout-summary-section'
import CheckoutPlaceOrder from './checkout-place-order-button'
import CheckoutPaymentOption from './checkout-payment-option'
import PaymentMethodButton from './checkout-payment-button'
import { paymentOptions } from '@/constants/payment/options'
import { paymentMethods } from '@/constants/payment/methods'

export default function PaymentSection() {
  const [paymentMethod, setPaymentMethod] = useState('cod')

  return (
    <Card className="p-6 space-y-6 bg-white">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
        <div className="flex flex-wrap gap-2">
          {paymentMethods.map((method) => (
            <PaymentMethodButton
              key={method.value}
              value={method.value}
              label={method.label}
              isActive={paymentMethod === method.value}
              onClick={() => setPaymentMethod(method.value)}
            />
          ))}
        </div>
      </div>

      {paymentOptions.map((item) => (
        <CheckoutPaymentOption key={item.id} name={item.name} detail={item.detail} />
      ))}

      <CheckoutSummary />

      <CheckoutPlaceOrder />
    </Card>
  )
}
