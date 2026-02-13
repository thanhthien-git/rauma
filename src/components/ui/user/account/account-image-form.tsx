'use client'

import { Button } from '@/components/ui/button'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form'

export function ProfileImageField({ control }: { control: any }) {
  return (
    <FormField
      control={control}
      name="image"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Profile Image</FormLabel>
          <FormControl>
            <div className="flex items-center justify-center space-y-3">
              {field.value ? (
                <div className="relative">
                  <img
                    src={
                      typeof field.value === 'string'
                        ? field.value
                        : URL.createObjectURL(field.value[0])
                    }
                    alt="Preview"
                    className="w-32 h-32 rounded-md object-cover border"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute -top-2 -right-2 rounded-full bg-white shadow w-6 h-6"
                    onClick={() => field.onChange('')}
                  >
                    ✕
                  </Button>
                </div>
              ) : (
                <label
                  htmlFor="picture"
                  className="w-32 h-32 flex flex-col items-center justify-center rounded-md border-2 border-dashed border-muted-foreground/25 cursor-pointer hover:border-primary transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a1 1 0 001 1h14a1 1 0 001-1v-1M12 12v9m0 0l-3-3m3 3l3-3M12 3v9"
                    />
                  </svg>
                  <span className="text-xs mt-1 text-muted-foreground">Upload Image</span>
                </label>
              )}
              <input
                id="picture"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) field.onChange([file])
                }}
              />
            </div>
          </FormControl>
          <FormDescription className="flex items-center justify-center space-y-3">
            Only use JPG, PNG.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
