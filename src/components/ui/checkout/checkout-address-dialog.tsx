'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { RadioGroup, RadioGroupItem } from '../radio-group'
import { ClientDialog } from '../customizes/dialog'

export default function AddressDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [selected, setSelected] = useState<number>(1)
  const [openAdd, setOpenAdd] = useState(false)

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

  return (
    <ClientDialog
      open={isOpen}
      onOpenChange={onClose}
      title="My Address"
      onCancel={onClose}
      onConfirm={() => console.log('Confirm address:', selected)}
    >
      <RadioGroup
        value={selected.toString()}
        onValueChange={(val) => setSelected(Number(val))}
        className="space-y-4"
      >
        {mockAddresses.map((addr) => (
          <div key={addr.id} className="space-y-2">
            <div className="flex justify-between items-start gap-3">
              <label className="flex items-start gap-2 cursor-pointer">
                <RadioGroupItem value={addr.id.toString()} />
                <div>
                  <p className="font-semibold text-gray-900">
                    {addr.name}
                    <span className="text-gray-600 font-normal"> | (+84) {addr.phone}</span>
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

              <Button variant="ghost" size="sm" className="text-blue-500">
                Edit
              </Button>
            </div>
          </div>
        ))}
      </RadioGroup>

      <Button variant="outline" className="w-full mt-10" onClick={() => setOpenAdd(true)}>
        + Add New Address
      </Button>
    </ClientDialog>
  )
}
