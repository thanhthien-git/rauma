'use client'

import BreadcrumbDetailProduct from './product-breadcrumb'
import ProductDetailComponent from './product-detail-component'

export default function ProductDetailMainPage() {
  return (
    <div className="flex flex-col p-2 mx-0 my-0 sm:mx-5 sm:my-5 lg:mt-0 lg:mx-20 lg:px-5  ">
      <div className="hidden sm:flex items-center justify-start h-12">
        <BreadcrumbDetailProduct />
      </div>
      <div className="bg-white p-2 lg:p-5">
        <ProductDetailComponent />
      </div>
    </div>
  )
}
