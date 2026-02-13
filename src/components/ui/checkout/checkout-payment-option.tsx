'use client'
export default function CheckoutPaymentOption({ name, detail }: any) {
  return (
    <div className="flex items-center gap-3 p-3 rounded border border-gray-200">
      <div className="flex-1">
        <div className="text-sm font-medium text-gray-900">{name}</div>
        <div className="text-xs text-gray-500">{detail}</div>
      </div>
    </div>
  )
}
