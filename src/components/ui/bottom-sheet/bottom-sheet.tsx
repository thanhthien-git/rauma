'use client'

import { X } from 'lucide-react'
import { ReactNode, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

interface BottomSheetProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  className?: string
}

const ANIM_MS = 300

export default function BottomSheet({
  isOpen,
  onClose,
  children,
  title,
  className,
}: Readonly<BottomSheetProps>) {
  const [mounted, setMounted] = useState<boolean>(isOpen)
  const [visible, setVisible] = useState<boolean>(false)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (isOpen) {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current)
        timerRef.current = null
      }
      setMounted(true)
      requestAnimationFrame(() => setVisible(true))
    } else if (mounted) {
      setVisible(false)
      timerRef.current = window.setTimeout(() => {
        setMounted(false)
        timerRef.current = null
      }, ANIM_MS)
    }

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }, [isOpen, mounted])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-end">
      <button
        type="button"
        aria-label="Close bottom sheet overlay"
        className={clsx(
          'absolute inset-0 bg-black/40 transition-opacity duration-300',
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        onClick={onClose}
      />

      <div
        className={clsx(
          'relative w-full bg-white rounded-t-2xl p-4 shadow-lg max-h-[90vh] overflow-y-auto',
          visible ? 'animate-slide-up' : 'animate-slide-down',
          className,
        )}
      >
        <button onClick={onClose} className="absolute top-3 right-3" aria-label="Close">
          <X size={24} />
        </button>

        {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}

        {children}
      </div>
    </div>
  )
}
