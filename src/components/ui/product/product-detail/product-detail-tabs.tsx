'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProductReviews from './product-detail-review'
import ProductDetailTab from './product-detail-tab'
import ProductDescription from './product-description'

export default function ProductTabs() {
  return (
    <Tabs defaultValue="details" className="w-full">
      {/* Tabs header */}
      <TabsList className="w-full flex justify-evenly bg-transparent h-auto">
        <TabsTrigger
          value="details"
          className="text-base data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none pb-2"
        >
          Details
        </TabsTrigger>

        <TabsTrigger
          value="descriptions"
          className="text-base data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none pb-2"
        >
          Descriptions
        </TabsTrigger>

        <TabsTrigger
          value="reviews"
          className="text-base data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none pb-2"
        >
          Rating & Reviews
        </TabsTrigger>
      </TabsList>

      {/* Tab contents */}
      <TabsContent value="details" className="pt-6">
        <ProductDetailTab />
      </TabsContent>

      <TabsContent value="descriptions" className="pt-6">
        <ProductDescription />
      </TabsContent>

      <TabsContent value="reviews" className="pt-6">
        <ProductReviews />
      </TabsContent>
    </Tabs>
  )
}
