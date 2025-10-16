import { TitleRow } from '@/constants/enums/cart.enum'
import { CartHeaderRow, CartItemRow, CartRow, CartSpacerRow } from '@/types/cart'
import { stores } from '@/mocks/cart/cart.mock'
import { DataTable } from './cart-data-table'
import { columns } from './cart-columns'

const storeFlat: CartRow[] = [
  { id: `header-top`, type: TitleRow.SPACER } as CartSpacerRow,
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
    { id: `spacer-${store.id}`, type: TitleRow.SPACER } as CartSpacerRow,
  ]),
]
export default function CartPage() {
  return <DataTable columns={columns} data={storeFlat} />
}
