import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { ChangeEvent, useCallback, useMemo } from 'react'
import { ACTION } from './product-detail-content'
import { Button } from '../../button'

interface IProductDetailAction {
  quantity: number
  onClickButton: (count: number) => void
  onInputQuantity: (e: ChangeEvent<HTMLInputElement>) => void
  action?: ACTION
}

export default function ProductDetailAction({
  quantity,
  action,
  onClickButton,
  onInputQuantity,
}: Readonly<IProductDetailAction>) {
  const displayAction = useMemo(() => {
    const buttons = []

    if (action === ACTION.ADD_TO_CART || action === undefined) {
      buttons.push(
        <Button
          key="add"
          className={`h-12 bg-black text-white rounded-lg flex items-center justify-center
          transform active:scale-95 transition-transform duration-150 ease-in-out 
          ${action === ACTION.ADD_TO_CART ? 'w-full' : 'w-fit'}`}
          type="button"
        >
          <ShoppingCart size={20} className="mr-2" /> Add to cart
        </Button>,
      )
    }

    if (action === ACTION.PURCHASE || action === undefined) {
      buttons.push(
        <Button
          key="buy"
          className={`h-12 bg-black text-white rounded-lg 
          transform active:scale-95 transition-transform duration-150 ease-in-out 
          ${action === ACTION.PURCHASE ? 'w-full' : 'w-fit'}`}
          type="button"
        >
          Buy Now
        </Button>,
      )
    }

    return buttons
  }, [action])

  return (
    <div className="flex flex-col gap-6">
      <div
        className="inline-flex items-center border rounded-lg h-12 w-fit 
                focus-within:ring focus-within:ring-black 
                transition-shadow duration-200 ease-in-out"
      >
        <button
          className="flex items-center justify-center px-3 h-full"
          onClick={() => onClickButton(-1)}
          disabled={quantity === 1}
        >
          <Minus size={18} />
        </button>
        <input
          type="number"
          value={quantity === 0 ? '' : quantity}
          placeholder="0"
          onChange={onInputQuantity}
          className="w-16 text-center text-black bg-white outline-none border-none
    appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
    [&::-moz-appearance]:textfield h-full"
        />
        <button
          className="flex items-center justify-center px-3 h-full"
          onClick={() => onClickButton(1)}
        >
          <Plus size={18} />
        </button>
      </div>
      <div className="flex flex-row gap-4 ">{displayAction}</div>
    </div>
  )
}
