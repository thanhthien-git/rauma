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
  okBtn?: boolean
  textBtn?: string
}

const ANIM_MS = 300

export default function BottomSheet({
  isOpen,
  onClose,
  children,
  title,
  className,
  okBtn,
  textBtn = 'OK',
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
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close bottom sheet overlay"
        className={clsx(
          'absolute inset-0 bg-black/40 transition-opacity duration-300',
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        onClick={onClose}
      />

      {/* Bottom sheet */}
      <div
        className={clsx(
          'relative w-full bg-white rounded-t-2xl shadow-lg max-h-[90vh] flex flex-col',
          visible ? 'animate-slide-up' : 'animate-slide-down',
          className,
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b sticky top-0 bg-white z-10 rounded-t-2xl">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          <button onClick={onClose} aria-label="Close">
            <X size={24} />
          </button>
        </div>

        {/* Body (scrollable) */}
        <div className="flex-1 overflow-y-auto px-4 py-3">{children}</div>

        {/* Footer (optional OK button) */}
        {okBtn && (
          <div className="px-4 py-3 border-t sticky bottom-0 bg-white z-10">
            <button
              onClick={onClose}
              className="w-full h-12 bg-black text-white rounded-lg 
          transform active:scale-95 transition-transform duration-150 ease-in-out "
            >
              {textBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
