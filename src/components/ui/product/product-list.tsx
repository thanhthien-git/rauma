import { IProductCard } from '@/interfaces/products/IProductCardProps'
import ProductCard from './product-card'
import useScreen from '@/hooks/useScreen'
import { useMemo } from 'react'
import clsx from 'clsx'
import { PackageX } from 'lucide-react'
import PaginationComponent from '../pagination/paginate'

interface IProductListProps {
  products?: IProductCard[]
}

export default function ProductList({ products }: Readonly<IProductListProps>) {
  const { isMobile, isTablet } = useScreen()

  const itemsPerView = useMemo(() => {
    if (isMobile) return 2
    if (isTablet) return 4
    return 6
  }, [isMobile, isTablet])

  return (
    <>
      <div className={clsx('grid gap-4 p-4', `grid-cols-${itemsPerView}`)}>
        {products && products.length > 0 ? (
          products.map((product) => <ProductCard product={product} key={product.id} />)
        ) : (
          <div className="flex flex-col items-center justify-center w-full py-10 text-gray-500">
            <PackageX size={48} className="mb-2" />
            <p>No products found</p>
          </div>
        )}
      </div>
      <div>
        <PaginationComponent
          totalPages={10}
          currentPage={1}
          onPageChange={() => console.log(`hello world`)}
        />
      </div>
    </>
  )
}
