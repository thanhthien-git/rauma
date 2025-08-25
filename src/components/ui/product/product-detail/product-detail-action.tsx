import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { ChangeEvent } from 'react'
import { Button } from '../../button'

interface IProductDetailAction {
  quantity: number
  onClickButton: (count: number) => void
  onInputQuantity: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function ProductDetailAction({
  quantity,
  onClickButton,
  onInputQuantity,
}: Readonly<IProductDetailAction>) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-6">
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
            value={quantity}
            onChange={(e) => onInputQuantity(e)}
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
      </div>
      <div className="flex flex-row gap-4">
        <Button
          className="w-fit h-12 bg-black text-white rounded-lg
             flex items-center justify-center
             transform active:scale-95 transition-transform duration-150 ease-in-out"
          type="button"
        >
          <ShoppingCart size={20} /> Add to cart
        </Button>
        <Button
          className="w-fit bg-black text-white rounded-lg h-12 
             transform active:scale-95 transition-transform duration-150 ease-in-out"
          type="button"
        >
          Buy Now
        </Button>
      </div>
    </div>
  )
}
