'use client'

import { useEffect, useState } from 'react'

export default function useScreen() {
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024,
  )

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = width < 640
  const isTablet = width >= 640 && width < 1024
  const isDesktop = width >= 1024

  return { width, isMobile, isTablet, isDesktop }
}
