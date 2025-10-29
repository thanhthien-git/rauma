'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { boolean, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

interface EditAddressDialogProps {
  open: boolean
  onClose: () => void
  defaultValues?: {
    name: string
    phone: string
    address: string
    isDefault?: boolean
  }
  onSave?: (data: { name: string; phone: string; address: string; isDefault: boolean }) => void
}

const editAddressSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z
    .string()
    .regex(/^[0-9+ ]{8,15}$/, 'Invalid phone number')
    .min(8, 'Phone number too short'),
  address: z.string().min(5, 'Address is required'),
  isDefault: z.boolean().optional(),
})

type EditAddressForm = z.infer<typeof editAddressSchema>

export default function EditAddressDialog({
  open,
  onClose,
  defaultValues,
  onSave,
}: EditAddressDialogProps) {
  const form = useForm<EditAddressForm>({
    resolver: zodResolver(editAddressSchema),
    defaultValues: defaultValues || {
      name: 'Alex Parker',
      phone: '(+84) +1 (555) 823-3470',
      address: '383/1H Elm Street, Apt 12, Midtown, New York, NY, USA',
      isDefault: false,
    },
  })

  const handleSubmit = (data: EditAddressForm) => {
    const finalData = {
      ...data,
      isDefault: data.isDefault ?? false,
    }

    onSave?.(finalData)

    toast.success('Address saved!', {
      description: `${finalData.name} • ${finalData.isDefault ? 'Default' : 'Not default'}`,
    })

    onClose()
  }
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Address</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isDefault"
              render={({ field }) => (
                <FormItem className="pt-2">
                  <div className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                    </FormControl>
                    <FormLabel className="font-normal m-0">Set as default address</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <DialogFooter className="pt-4">
              <Button variant="outline" type="button" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
