import { IQuickCart } from '@/interfaces/IQuickCart'
import { toVND } from '@/utils/utils'
import Image from '@/components/ui/customizes/image'
interface CartItemProps {
  props: IQuickCart
}
export default function QuickCartItem({ props }: Readonly<CartItemProps>) {
  const { productId, product, price, url } = props
  return (
    <div className="flex items-center gap-2 p-2 bg-white">
      <div className="w-12 h-12 flex-shrink-0">
        <Image url={url} alt="Quần jean nam" className="rounded" />
      </div>

      <div className="flex-1 text-sm text-gray-800 truncate">Quần jean nam SUÔNG ống rộng</div>

      <div className="text-base font-semibold text-sm">168.000đ</div>
    </div>
  )
}
