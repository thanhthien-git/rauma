import { Icon } from 'next/dist/lib/metadata/types/metadata-types'

export type MenuItem = {
  title: string
  href?: string
  subMenu?: MenuItem[]
}
export type UtilItem = {
  icon: React.ReactElement
  name: string
}
