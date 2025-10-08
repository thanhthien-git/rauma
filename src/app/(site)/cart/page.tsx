import CartSummaryBar from '@/components/layouts/client/modals/cart/cart-summary'
import CartPage from '@/components/ui/cart/cart-table/page'

export default function Cart() {
  return (
    <div className=" w-full h-full">
      <CartPage />
      <div className="sticky bottom-0 shadow">
        <CartSummaryBar />
      </div>
    </div>
  )
}
