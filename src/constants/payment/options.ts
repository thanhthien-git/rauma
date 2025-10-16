import { PaymentOptions } from '@/types/checkout'

export const paymentOptions: PaymentOptions[] = [
  {
    id: 'cod',
    value: 'cod',
    icon: 'cod',
    name: 'Cash on Delivery',
    detail: 'You will be charged extra ₫0 for this payment method.',
  },
]
