'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { paymentMethods } from '@/constants/payment/methods'

export default function PaymentMethodButton() {
  return (
    <Tabs defaultValue={paymentMethods[0].value} className=" w-full">
      <TabsList>
        {paymentMethods.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            <p className="text-[13px]">{tab.name}</p>
          </TabsTrigger>
        ))}
      </TabsList>
      {paymentMethods.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="h-10 flex items-center justify-between border gap-2 rounded-md pl-3 pr-1.5">
            <p className="text-[13px]">{tab.content}</p>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
