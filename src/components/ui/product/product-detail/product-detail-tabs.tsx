'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import ProductReviews from './product-detail-review'
import ProductDetailTab from './product-detail-tab'
import ProductDescription from './product-description'
import { motion } from 'framer-motion'
import { IProductResponse } from '@/interfaces/products/IProduct'
import BottomSheet from '../../bottom-sheet/bottom-sheet'
import { ACTION } from './product-detail-content'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Spinner } from '../../spinner'

export default function ProductTabs({ product }: { product: IProductResponse }) {
  const [sheetState, setSheetState] = useState<{ isOpen: boolean }>({
    isOpen: false,
  })
  const handleSetAction = (isOpen: boolean) => {
    setSheetState({
      isOpen,
    })
  }
  const [activeTab, setActiveTab] = useState('details')

  const [isLoading, setIsLoading] = useState(false)

  const handleTabChange = (value: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setActiveTab(value)
      setIsLoading(false)
    }, 400)
  }
  const { details, featuredProduct, productDescriptionHTML, reviews } = product
  return (
    <>
      {/* Desktop: Tabs */}
      <div className="hidden md:block">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="bg-gradient-to-r from-gray-50 to-gray-50 dark:from-gray-800 dark:to-gray-900">
            <TabsList className="w-full flex justify-evenly bg-transparent h-auto">
              <TabsTrigger
                value="details"
                className="text-base data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none pb-2"
              >
                Details
              </TabsTrigger>
              <TabsTrigger
                value="descriptions"
                className="text-base data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none pb-2"
              >
                Descriptions
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="text-base data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none pb-2"
              >
                Rating & Reviews
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="pt-4">
            {isLoading ? (
              <div className="flex items-center justify-center">
                <Spinner />
              </div>
            ) : (
              <>
                <TabsContent value="details" className="mt-0 focus-visible:outline-none">
                  <ProductDetailTab featuredProduct={featuredProduct} detail={details} />
                </TabsContent>
                <TabsContent value="descriptions" className="mt-0 focus-visible:outline-none">
                  <ProductDescription productDescriptionHTML={productDescriptionHTML} />
                </TabsContent>
                <TabsContent value="reviews" className="mt-0 focus-visible:outline-none">
                  <ProductReviews reviews={reviews} />
                </TabsContent>
              </>
            )}
          </div>
        </Tabs>
      </div>

      {/* Mobile: Accordion */}
      <div className="block md:hidden">
        <section
          className="bg-white shadow-sm cursor-pointer"
          onClick={() => handleSetAction(true)}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <h3 className="font-semibold text-sm text-gray-800">Specification</h3>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <span>Stock,Style</span>
              <ChevronRight size={18} className="mx-1 text-gray-400" />
            </div>
          </div>
        </section>

        <section className="bg-white shadow-sm">
          <Accordion type="single" collapsible defaultValue="description">
            <AccordionItem value="description" className="border-none">
              <AccordionTrigger className="flex items-center justify-between px-4 py-3 font-semibold text-sm text-gray-800 hover:no-underline">
                Description
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-sm text-gray-700">
                <ProductDescription productDescriptionHTML={productDescriptionHTML} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="bg-white shadow-sm">
          <h3 className="px-4 py-3 font-semibold text-sm text-gray-800">Product Ratings</h3>
          <div className="px-4 pb-4 text-sm text-gray-700">
            <ProductReviews reviews={reviews} />
          </div>
        </section>
      </div>
      <BottomSheet
        isOpen={sheetState.isOpen}
        onClose={() => handleSetAction(false)}
        title="Specification"
        okBtn={true}
      >
        <ProductDetailTab featuredProduct={featuredProduct} detail={details} />
      </BottomSheet>
    </>
  )
}
