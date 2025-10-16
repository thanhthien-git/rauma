import AddressSection from '@/components/ui/checkout/checkout-address-section'
import ProductList from '@/components/ui/checkout/checkout-product-list'
import ShippingSection from '@/components/ui/checkout/checkout-shipping-section'
import { mockOrderData } from '@/mocks/checkout/checkout.mock'

export default async function CheckoutPage() {
  const data = mockOrderData

  const total = data.products.reduce((sum, p) => sum + p.price * p.quantity, 0) + data.shipping.fee

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <AddressSection user={data.userAddress} />
      <ProductList />
      <ShippingSection />
    </div>
  )
}
