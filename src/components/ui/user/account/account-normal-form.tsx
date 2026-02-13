'use client'

import { Input } from '@/components/ui/input'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'

interface FormFieldItemProps {
  control: any
  name: string
  label: string
  placeholder?: string
  type?: string
}

export function FormFieldItem({
  control,
  name,
  label,
  placeholder,
  type = 'text',
}: FormFieldItemProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              className="rounded-sm h-10 text-sm"
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
