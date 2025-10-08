import { IQuickCart } from '@/interfaces/IQuickCart'
import { useState } from 'react'
import { ButtonWithPopup } from '../../header-button/ButtonWithPopup'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ShoppingCart } from 'lucide-react'
import QuickCartItem from './cart-item'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function QuickCart() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProducts] = useState<IQuickCart[]>([
    {
      productId: '1',
      product: '1',
      price: 12000,
      url: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
    },
    {
      productId: '2',
      product: '2',
      price: 122,
      url: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
    },
    {
      productId: '3',
      product: '3',
      price: 123,
      url: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
    },
    {
      productId: '4',
      product: '4',
      price: 124,
      url: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
    },
    {
      productId: '5',
      product: '5',
      price: 125,
      url: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
    },
  ])

  return (
    <ButtonWithPopup
      count={products.length}
      buttonClassName="hover:bg-gray-100 transition-colors duration-200"
      popupContent={
        <Card className="w-80 max-h-100 overflow-hidden border-0 bg-white rounded-xl gap-0 p-0 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
          <CardHeader className="px-4 py-4 border-b [.border-b]:pb-0 border-gray-100">
            <CardTitle className="font-semibold text-gray-900 text-base flex items-center gap-2 h-8">
              <ShoppingCart className="h-4 w-4" />
              Cart
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-72 overflow-y-auto custom-scrollbar">
              <ul className="divide-y divide-gray-50">
                {products && products.length > 0 ? (
                  products.map((item, index) => (
                    <li
                      className="px-2 py-1 hover:bg-gray-50 transition-colors duration-150 cursor-pointer group"
                      key={`${item.price} - ${index}`}
                    >
                      <QuickCartItem props={item} />
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-8 text-center text-gray-500 text-sm">No products</li>
                )}
              </ul>
            </div>
            <div className="flex items-center justify-between border-t border-gray-100 p-3">
              <p className="text-gray-800">
                <span className="font-medium">Total</span>
                <span className="ml-2 text-sm font-semibold">
                  55,000 <span className="ml-1 text-xs text-gray-600">VND</span>
                </span>
              </p>

              <Button
                variant="default"
                className="bg-black text-white rounded px-3 py-1 shadow-md hover:bg-black/90"
                asChild
              >
                <Link href={'/cart'}>View my cart</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      }
    >
      <ShoppingCart className="h-6 w-6" />
    </ButtonWithPopup>
  )
}
