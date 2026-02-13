'use client'
import CheckoutHeader from '@/components/layouts/client/header/checkout-header'

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-50 bg-white shadow">
        <CheckoutHeader page={'checkout'} showSearch={false} />
      </header>
      <main className="py-10">{children}</main>
    </div>
  )
}
