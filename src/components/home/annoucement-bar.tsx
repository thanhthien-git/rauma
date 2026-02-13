'use client'

import { X } from 'lucide-react'

export default function AnnouncementBar({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative flex justify-center items-center w-full bg-black text-white text-sm py-2 px-4">
      <p>
        Sign up and get <span className="font-semibold">20% off</span> to your first order.{' '}
        <a href="/register" className="underline hover:text-gray-300">
          Sign Up Now
        </a>
      </p>
      <button onClick={onClose} className="absolute right-4">
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
