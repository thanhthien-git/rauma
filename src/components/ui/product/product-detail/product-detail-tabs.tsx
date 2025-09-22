'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProductReviews from './product-detail-review'
import ProductDetailTab from './product-detail-tab'
import ProductDescription from './product-description'
import { motion } from 'framer-motion'

export default function ProductTabs() {
  return (
    <Tabs defaultValue="details" className="w-full">
      <div className="bg-gradient-to-r from-gray-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 ">
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
      </div>

      {/* Tab contents */}
      <div className="pt-4">
        <TabsContent value="details" className="mt-0 focus-visible:outline-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ProductDetailTab />
          </motion.div>
        </TabsContent>

        <TabsContent value="descriptions" className="mt-0 focus-visible:outline-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ProductDescription />
          </motion.div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-0 focus-visible:outline-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ProductReviews />
          </motion.div>
        </TabsContent>
      </div>
    </Tabs>
  )
}
