'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { toast } from 'sonner'
import AddressDialog from '@/components/ui/checkout/checkout-address-dialog'
import AddAddressDialog from '@/components/ui/checkout/checkout-add-address'
import EditAddressDialog from '@/components/ui/checkout/checkout-edit-address'

export default function AccountAddressPage() {
  const [selected, setSelected] = useState<number>(1)
  const [openAdd, setOpenAdd] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const mockAddresses = [
    {
      id: 1,
      name: 'Alex Parker',
      phone: '+1 (555) 823-3470',
      address: '383/1H Elm Street, Apt 12, Midtown, New York, NY, USA',
      tags: ['Default'],
    },
    {
      id: 2,
      name: 'Maya Collins',
      phone: '+1 (555) 932-6142',
      address: '1742 Oak Avenue, Suite 6, Riverside, Los Angeles, CA, USA',
    },
    {
      id: 3,
      name: 'Ethan Brooks',
      phone: '+1 (555) 823-7748',
      address: '643/59B Maple Road, Unit 3, Greenfield, Seattle, WA, USA',
    },
  ]

  function handleConfirm() {
    toast.success('Address selected!', {
      description: `Using address ID ${selected}`,
    })
  }

  return (
    <Card className="p-0 border-0 shadow-none">
      <CardHeader className="py-4 bg-black rounded-t-lg">
        <CardTitle className="text-white">My Addresses</CardTitle>
        <CardDescription className="text-white">
          Manage your saved addresses for faster checkout.
        </CardDescription>
      </CardHeader>
      <Separator className="my-2" />
      <CardContent className="mt-4 space-y-6">
        <RadioGroup
          value={selected.toString()}
          onValueChange={(val) => setSelected(Number(val))}
          className="space-y-4"
        >
          {mockAddresses.map((addr) => (
            <div
              key={addr.id}
              className="p-4 rounded-lg border hover:border-primary transition-colors"
            >
              <div className="flex justify-between items-start gap-3">
                <label className="flex items-start gap-2 cursor-pointer w-full">
                  <RadioGroupItem value={addr.id.toString()} />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {addr.name}
                      <span className="text-gray-600 font-normal"> | {addr.phone}</span>
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{addr.address}</p>
                    <div className="flex gap-2 mt-1 flex-wrap">
                      {addr.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="border text-xs px-2 py-0.5 bg-gray-100 text-gray-700"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </label>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-500"
                  onClick={() => setOpenEdit(true)}
                >
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </RadioGroup>

        <div className="flex justify-between items-center pt-6 border-t">
          <Button variant="outline" className="w-fit" onClick={() => setOpenAdd(true)}>
            + Add New Address
          </Button>
          <Button onClick={handleConfirm}>Save Changes</Button>
        </div>
      </CardContent>
      <AddAddressDialog open={openAdd} onClose={() => setOpenAdd(false)} />
      <EditAddressDialog open={openEdit} onClose={() => setOpenEdit(false)} />{' '}
    </Card>
  )
}
