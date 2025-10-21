import ProductList from '@/components/ui/product/product-list'
import FilterSideBar from '@/components/ui/search/filter-side-bar/filter-side-bar'
import { products } from '@/mocks/product/product.mock'

export default function SearchPage() {
  return (
    <section className="flex sm:flex-row gap-3 px-4 py-4">
      <FilterSideBar />
      <ProductList hasSidebar={true} products={products} />
    </section>
  )
}
