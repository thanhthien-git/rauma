'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

import { AccountFormLayout } from './account-form-layout'

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters.'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().optional(),
  gender: z.string().optional(),
  bod: z.string().optional(),
  image: z.any().optional(),
})

export default function AccountClientForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      gender: '',
      image: '',
      bod: '2005-05-15',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Form values:', values)
    toast('Event has been created', {
      description: 'Sunday, December 03, 2023 at 9:00 AM',
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo'),
      },
    })
  }

  return (
    <Card className="p-0 border-0 shadow-none">
      <CardHeader className="py-4 bg-black rounded-t-lg">
        <CardTitle className="text-white">Personal Information</CardTitle>
        <CardDescription className="text-white">
          Update your personal details and profile information.
        </CardDescription>
      </CardHeader>
      <Separator className="my-2" />

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <AccountFormLayout control={form.control} />
            <Button type="submit">Save Changes</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
