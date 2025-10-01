import { MenuItem } from '@/types/menu'
import { MenuList } from '../../list/list-menu'

interface MenuBodyProps {
  menu: MenuItem[]
  onItemClick: (item: MenuItem) => void
  showBack?: boolean
  onBack?: () => void
}

export default function MenuBody({ menu, onItemClick, showBack, onBack }: MenuBodyProps) {
  return (
    <div>
      <MenuList menu={menu} onItemClick={onItemClick} showBack={showBack} onBack={onBack} />
    </div>
  )
}
