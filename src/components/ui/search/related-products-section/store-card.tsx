'use client'

import Image from 'next/image'
import { Star, Clock, MessageSquare, ShoppingBag } from 'lucide-react'

interface ShopCardProps {
  name: string
  domain: string
  logo: string
  followers: string
  following: string
  products: number
  rating: number
  replyRate: string
  replyTime: string
}

export function ShopCard({
  name,
  domain,
  logo,
  followers,
  following,
  products,
  rating,
  replyRate,
  replyTime,
}: ShopCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 border rounded-lg p-4 bg-white">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image src={logo} alt={name} width={64} height={64} />
      </div>

      {/* Info */}
      <div className="flex-1 space-y-2 text-center md:text-left">
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500 text-sm">{domain}</p>
        </div>
        <p className="text-xs text-gray-600">
          <span className="text-red-500 font-medium">{followers}</span> Người Theo Dõi |{' '}
          <span className="text-red-500 font-medium">{following}</span> Đang Theo
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-end gap-4 text-sm text-gray-700">
        <div className="flex items-center gap-1">
          <ShoppingBag className="w-4 h-4 text-red-500" />
          <span>{products} Sản Phẩm</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span>{rating} Đánh Giá</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare className="w-4 h-4 text-blue-500" />
          <span>{replyRate} Tỉ Lệ Phản Hồi</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-orange-500" />
          <span>{replyTime}</span>
        </div>
      </div>
    </div>
  )
}
