'use client'
import ClientSearchBar from '@/components/ui/search/search-bar'
import Image from 'next/image'
import Link from 'next/link'
interface ICheckoutHeaderProps {
  page: 'cart' | 'checkout'
  showSearch: boolean
}
const headerValue = [
  { key: 'cart', name: 'Shopping Cart' },
  { key: 'checkout', name: 'Checkout' },
]
export default function CheckoutHeader({ page, showSearch }: ICheckoutHeaderProps) {
  const currentValue = headerValue.find((item) => item.key === page)?.name
  return (
    <div className="h-20 flex items-center justify-between ">
      <div className="flex items-center justify-center ml-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.svg"
            alt="RAUMA Merce"
            width={180}
            height={180}
            priority
            className="w-24 sm:w-44 h-auto"
          />

          <div className="h-6 w-px bg-gray-700 mx-2" />

          <div className="text-lg font-semibold">{currentValue}</div>
        </Link>
      </div>
      {showSearch && (
        <div className="flex-1 max-w-3xl px-2 sm:px-0 mr-10">
          <ClientSearchBar />
        </div>
      )}
    </div>
  )
}
