'use client'

import { IProductCard } from '@/interfaces/products/IProductCardProps'
import ProductCard from './product-card'
import clsx from 'clsx'
import { PackageX } from 'lucide-react'
import PaginationComponent from '../pagination/paginate'

export interface IProductListProps {
  products?: IProductCard[]
  hasSidebar?: boolean
}

export default function ProductList({ products, hasSidebar = false }: Readonly<IProductListProps>) {
  return (
    <div className="flex flex-col">
      <div
        className={clsx(
          'grid gap-4 p-4 grid-cols-2 sm:grid-cols-4 ',
          hasSidebar ? 'lg:grid-cols-5' : 'lg:grid-cols-6',
        )}
      >
        {products && products.length > 0 ? (
          products.map((product) => <ProductCard product={product} key={product.id} />)
        ) : (
          <div className="flex flex-col items-center justify-center w-full py-10 text-gray-500">
            <PackageX size={48} className="mb-2" />
            <p>No products found</p>
          </div>
        )}
      </div>

      <div className="p-4">
        <PaginationComponent
          totalPages={10}
          currentPage={1}
          onPageChange={() => console.log('hello world')}
        />
      </div>
    </div>
  )
}
