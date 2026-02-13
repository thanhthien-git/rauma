import { TitleRow } from '@/constants/enums/cart.enum'
import { CartHeaderRow, CartItemRow, CartRow, CartSpacerRow, CartTotalRow } from '@/types/cart'
import { DataTable } from './checkout-data-table'
import { columns } from './checkout-columns'
import { stores } from '@/mocks/checkout/checkout.mock'

const storeFlat: CartRow[] = [
  ...stores.flatMap((store) => [
    { id: `header-${store.id}`, storeName: store.name, type: TitleRow.HEADER } as CartHeaderRow,
    ...store.items.map(
      (item) =>
        ({
          ...item,
          type: TitleRow.ITEM,
          storeName: store.name,
        }) as CartItemRow,
    ),
    {
      id: `total-${store.id}`,
      type: TitleRow.TOTAL,
      totalPrice: store.totalPrice,
      totalQuantity: store.totalQuantity,
    } as CartTotalRow,
    { id: `spacer-${store.id}`, type: TitleRow.SPACER } as CartSpacerRow,
  ]),
]
export default function CheckoutTable() {
  return <DataTable columns={columns} data={storeFlat} />
}
