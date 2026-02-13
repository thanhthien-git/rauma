export interface FilterGroupProps {
  title: string
  options: IFilterGroupOptions[]
  limit?: number
  type?: 'default' | 'star'
}

export interface IFilterGroupOptions {
  label: string | number
  value?: string
}
