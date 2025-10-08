import { TitleRow } from '@/constants/enums/cart.enum'
import { CartRow } from '@/types/cart'
import { stores } from '@/mocks/cart/cart.mock'
import { DataTable } from './data-table'
import { columns } from './columns'

const storeFlat: CartRow[] = stores.flatMap((store) => [
  { id: `header-${store.id}`, storeName: store.name, type: TitleRow.HEADER },
  ...store.items.map((item) => ({ ...item, type: TitleRow.ITEM, storeName: store.name })),
  { id: `spacer-${store.id}`, type: TitleRow.SPACER },
])
export default function CartPage() {
  return <DataTable columns={columns} data={storeFlat} />
}
