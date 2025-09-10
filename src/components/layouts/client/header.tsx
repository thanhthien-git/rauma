'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import QuickNotification from './modals/notifications/notification'
import QuickCart from './modals/cart/cart'
import QuickUser from './modals/user/user'
import AnnouncementBar from '@/components/home/annoucement-bar'
import QuickSearchBar from './modals/search'

export default function ClientHeader() {
  return (
    <>
      <AnnouncementBar />
      <div className="w-full border-b bg-white dark:bg-gray-900">
        <div className="container mx-auto flex h-24 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.svg"
              alt="RAUMA Merce"
              width={180}
              height={180}
              priority
              className="w-24 sm:w-44 h-auto"
            />
          </Link>

          {/* Search bar */}
          <QuickSearchBar />

          {/* Notification */}
          <QuickNotification />

          {/* Cart */}
          <QuickCart />

          {/* User */}
          <QuickUser />
        </div>
      </div>
    </>
  )
}
