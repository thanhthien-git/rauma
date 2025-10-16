'use client'

import { useState } from 'react'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
import { MapPin } from 'lucide-react'
import { Button } from '../button'
import AddressDialog from './checkout-address-dialog'

export interface UserAddress {
  name: string
  phone: string
  address: string
  status: boolean
}

interface AddressProps {
  user: UserAddress[]
}

export default function AddressSection({ user }: AddressProps) {
  const [addresses, setAddresses] = useState<UserAddress[]>(user)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const activeAddress = addresses.find((ad) => ad.status === true)
  const inactiveAddresses = addresses.filter((ad) => ad.status === false)

  //If change address on BE pls change logic in FE
  const handleChangeAddress = (selectedAddress: UserAddress) => {
    setAddresses((prev) =>
      prev.map((ad) => ({
        ...ad,
        status: ad.address === selectedAddress.address ? true : false,
      })),
    )
    setIsDialogOpen(false)
  }

  return (
    <>
      <div className="bg-white flex w-full ">
        <Item variant="outline" className="w-full">
          <ItemMedia variant="icon" className="bg-white">
            <MapPin color="black" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-lg"> Your Address</ItemTitle>
            <ItemDescription>
              {activeAddress && (
                <span className="space-y-2 block">
                  <span className="flex items-center gap-3">
                    <span className="font-semibold text-gray-900">
                      {activeAddress.name}
                      <span> | (+84)</span> {activeAddress.phone}
                    </span>
                  </span>
                  <span className="text-black block">
                    {activeAddress.address}{' '}
                    <span className="px-1 py-0.5 text-black text-[9px] border border-black">
                      Default
                    </span>
                  </span>
                </span>
              )}
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button
              onClick={() => setIsDialogOpen(true)}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm ml-4 whitespace-nowrap"
              size="sm"
              variant="ghost"
            >
              Change
            </Button>
          </ItemActions>
        </Item>
      </div>
      <AddressDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  )
}
