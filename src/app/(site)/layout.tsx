// SiteLayout.tsx
'use client'

import ClientHeader from '@/components/layouts/client/header'
import LogoLoader from '@/components/ui/loading/logo-loader'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { setLoading } from '@/redux/slice/loading'
import clsx from 'clsx'

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector((state) => state.loading)
  const pathname = usePathname()
  const hiddenHeaderPaths = ['/cart', '/checkout', '/order', '/product']

  const shouldHideHeader = hiddenHeaderPaths.some((path) => pathname.startsWith(path))

  useEffect(() => {
    dispatch(setLoading(true))

    const timeout = setTimeout(() => {
      dispatch(setLoading(false))
    }, 1000)

    return () => clearTimeout(timeout)
  }, [pathname, dispatch])
  return (
    <div className="flex flex-col">
      <header className={clsx('sticky top-0 z-50 bg-white shadow', shouldHideHeader && 'hidden')}>
        <ClientHeader />
      </header>

      <main className="container mx-auto flex-1 p-0 ">{isLoading ? <LogoLoader /> : children}</main>
    </div>
  )
}
