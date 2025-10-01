import { MenuItem } from '@/types/menu'

export const menuItems: MenuItem[] = [
  { title: 'Home', href: '/' },
  {
    title: 'Men',
    href: '/',
    subMenu: [
      {
        title: 'Clothing',
        href: '/',
        subMenu: [
          { title: 'T-Shirts', href: '/' },
          { title: 'Shirts', href: '/' },
          { title: 'Pants', href: '/' },
        ],
      },
      {
        title: 'Shoes',
        href: '/',
        subMenu: [
          { title: 'Sneakers', href: '/' },
          { title: 'Boots', href: '/' },
        ],
      },
    ],
  },
  {
    title: 'Women',
    href: '/',
    subMenu: [
      {
        title: 'Clothing',
        href: '/',
        subMenu: [
          { title: 'Dresses', href: '/' },
          { title: 'Tops', href: '/' },
          { title: 'Skirts', href: '/' },
        ],
      },
      {
        title: 'Shoes',
        href: '/',
        subMenu: [
          { title: 'Heels', href: '/' },
          { title: 'Flats', href: '/' },
        ],
      },
    ],
  },
  {
    title: 'Accessories',
    href: '/',
    subMenu: [
      { title: 'Bags', href: '/' },
      { title: 'Hats', href: '/' },
      { title: 'Jewelry', href: '/' },
    ],
  },
  {
    title: 'Sale',
    href: '/',
  },
  {
    title: 'Contact',
    href: '/',
  },
]
