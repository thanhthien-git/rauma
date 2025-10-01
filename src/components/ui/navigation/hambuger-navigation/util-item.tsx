'use client'

import { UtilItem } from '@/types/menu'

interface UtilItemProps {
  utilItem: UtilItem[]
}
export default function UserUtilItem({ utilItem }: UtilItemProps) {
  return (
    <>
      {utilItem.map((item, index) => (
        <div
          key={index}
          className="px-6 py-4 border-t text-base flex items-center gap-4 cursor-pointer"
        >
          {item.icon}
          {item.name}
        </div>
      ))}
    </>
  )
}
