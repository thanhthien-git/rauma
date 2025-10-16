'use client'
export default function PaymentMethodButton({ value, label, isActive, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm rounded border transition-all ${
        isActive
          ? 'border-black bg-black text-white'
          : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
      }`}
    >
      {label}
    </button>
  )
}
