import { Funnel } from 'lucide-react'
import { FilterGroup } from './filter-group'
import { filters } from '@/constants/menu/client-search-filters'
import { PriceRange } from './filter-price-range'
import { Button } from '../../button'

export default function FilterSideBar() {
  return (
    <div className="flex flex-col w-lg">
      <div className="flex items-center gap-5">
        <Funnel size={14} />
        <div className="font-spring text-base text-gray-900 dark:text-gray-100">Search Filter</div>
      </div>
      <div className="flex flex-col pt-5 gap-6">
        <FilterGroup title={filters.shipFrom.title} options={filters.shipFrom.options} />
        <FilterGroup title={filters.shipOption.title} options={filters.shipOption.options} />
        <div className="border-b pb-6 ">
          <PriceRange />
        </div>
        <FilterGroup title={filters.shipType.title} options={filters.shipOption.options} />
        <FilterGroup title={filters.condition.title} options={filters.condition.options} />
        <FilterGroup title={filters.payment.title} options={filters.payment.options} />
        <FilterGroup title={filters.rating.title} options={filters.rating.options} type="star" />
        <FilterGroup title={filters.promotion.title} options={filters.promotion.options} />
        <Button className="cursor-pointer">DELETE ALL</Button>
      </div>
    </div>
  )
}
