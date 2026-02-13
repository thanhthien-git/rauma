'use client'
import CheckoutHeader from '@/components/layouts/client/header/checkout-header'

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-50 bg-white shadow">
        <CheckoutHeader page={'cart'} showSearch={true} />
      </header>
      <main className="px-0 md:px-0 lg:px-10 xl:px-40 py-0 md:py-10">{children}</main>
    </div>
  )
}
