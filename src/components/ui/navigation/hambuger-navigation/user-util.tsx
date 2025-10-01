import { UtilItem } from '@/types/menu'
import UserUtilItem from './util-item'
import { CircleQuestionMark, Handbag, ShoppingBasket, Store, UserIcon } from 'lucide-react'

const UserUtilList: UtilItem[] = [
  { icon: <UserIcon />, name: 'My profile' },
  { icon: <Handbag />, name: 'Bag' },
  { icon: <ShoppingBasket />, name: 'Orders' },
  { icon: <Store />, name: 'Find some store' },
]
export default function MenuUserUtil() {
  return (
    <>
      <UserUtilItem utilItem={UserUtilList} />
    </>
  )
}
