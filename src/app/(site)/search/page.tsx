import ProductList from '@/components/ui/product/product-list'
import FilterSideBar from '@/components/ui/search/filter-side-bar/filter-side-bar'
import RelatedStore from '@/components/ui/search/related-products-section/related-store'
import { SortBar } from '@/components/ui/search/related-products-section/sort-bar'
import { ShopCard } from '@/components/ui/search/related-products-section/store-card'
import SearchResult from '@/components/ui/search/result-for-query'
import { products } from '@/mocks/product/product.mock'

export default function SearchPage() {
  return (
    <section className="flex sm:flex-row gap-3 px-1 sm:px-4 py-4">
      <FilterSideBar />
      <div className="flex flex-col">
        <SearchResult query="Baseus Official Mall" />
        {/* <RelatedStore query="Baseus Official Mall" />
        <ShopCard
          name="Baseus Official Mall"
          domain="baseus.official.mall.vn"
          logo="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          followers="1,2tr"
          following="17"
          products={235}
          rating={4.9}
          replyRate="100%"
          replyTime="trong vài phút"
        /> */}
        <SortBar />

        <ProductList hasSidebar={true} products={products} />
      </div>
    </section>
  )
}
