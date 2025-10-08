'use client'
import ClientHeader from '@/components/layouts/client/header'
import LogoLoader from '@/components/ui/loading/logo-loader'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { setLoading } from '@/redux/slice/loading'
import clsx from 'clsx'
import CartHeader from '@/components/layouts/client/header/cart-header'

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-50 bg-white shadow">
        <CartHeader />
      </header>
      <main className="px-0 md:px-0 lg:px-10 xl:px-40 py-10">{children}</main>
    </div>
  )
}
