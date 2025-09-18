'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProductReviews from './product-detail-review'

export default function ProductTabs() {
  return (
    <Tabs defaultValue="reviews" className="w-full">
      {/* Tabs header */}
      <TabsList className="w-full flex justify-arround border-b bg-transparent h-auto">
        <TabsTrigger
          value="details"
          className="text-base data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none pb-2 "
        >
          Product Details
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="text-base data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none pb-2"
        >
          Rating & Reviews
        </TabsTrigger>
        <TabsTrigger
          value="faqs"
          className="text-base data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none pb-2"
        >
          FAQs
        </TabsTrigger>
      </TabsList>

      {/* Tab contents */}
      <TabsContent value="details" className="pt-6">
        <div className="text-gray-700">
          <h3 className="text-lg font-semibold mb-2">Product Description</h3>
          <p>
            This t-shirt is crafted from premium cotton with a minimalist yet stylish design.
            Perfect for both casual and semi-formal wear.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="reviews" className="pt-6">
        <ProductReviews />
      </TabsContent>

      <TabsContent value="faqs" className="pt-6">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">What is the fabric?</h4>
            <p className="text-gray-600 text-sm">
              The t-shirt is made of 100% organic cotton for maximum comfort.
            </p>
          </div>
          <div>
            <h4 className="font-medium">Is it machine washable?</h4>
            <p className="text-gray-600 text-sm">
              Yes, we recommend washing at 30°C with similar colors.
            </p>
          </div>
          <div>
            <h4 className="font-medium">Do you ship internationally?</h4>
            <p className="text-gray-600 text-sm">
              Yes, we ship worldwide with standard and express options.
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
