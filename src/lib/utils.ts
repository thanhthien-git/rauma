import { searchData } from '@/mocks/search/search.mock'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export async function getList(filter: string) {
  await new Promise((resolve) => setTimeout(resolve, 200))
  const lowerFilter = filter.toLocaleLowerCase()
  return searchData
    .filter(({ name }) => name.toLocaleLowerCase().startsWith(lowerFilter))
    .slice(0, 20)
    .map(({ name, id }) => ({
      value: id,
      label: `${name}`,
    }))
}
