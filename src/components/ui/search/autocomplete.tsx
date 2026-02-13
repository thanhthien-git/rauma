import { cn } from '@/lib/utils'
import { Command as CommandPrimitive } from 'cmdk'
import { Check } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Input } from '../input'
import { Skeleton } from '../skeleton'
import { Popover, PopoverAnchor, PopoverContent } from '../popover'
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '../command'

type Props<T extends string> = {
  selectedValue: T
  onSelectedValueChange: (value: T) => void
  searchValue: string
  onSearchValueChange: (value: string) => void
  items: { value: T; label: string }[]
  isLoading?: boolean
  emptyMessage?: string
  placeholder?: string
}

export function AutoComplete<T extends string>({
  selectedValue,
  onSelectedValueChange,
  searchValue,
  onSearchValueChange,
  items,
  isLoading,
  emptyMessage = 'No items.',
  placeholder = 'Search...',
}: Props<T>) {
  const [open, setOpen] = useState(false)

  const labels = useMemo(
    () =>
      items.reduce(
        (acc, item) => {
          acc[item.value] = item.label
          return acc
        },
        {} as Record<string, string>,
      ),
    [items],
  )

  const reset = () => {
    onSelectedValueChange('' as T)
    onSearchValueChange('')
  }

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.relatedTarget?.hasAttribute('cmdk-list') && labels[selectedValue] !== searchValue) {
      reset()
    }
  }

  const onSelectItem = (inputValue: string) => {
    if (inputValue === selectedValue) {
      reset()
    } else {
      onSelectedValueChange(inputValue as T)
      onSearchValueChange(labels[inputValue] ?? '')
    }
    setOpen(false)
  }

  return (
    <div className="flex items-center min-w-2xl">
      <div className="relative flex-1">
        <Popover open={open} onOpenChange={setOpen}>
          <Command shouldFilter={false}>
            <PopoverAnchor asChild>
              <CommandPrimitive.Input
                asChild
                value={searchValue}
                onValueChange={onSearchValueChange}
                onKeyDown={(e) => setOpen(e.key !== 'Escape')}
                onMouseDown={() => setOpen((open) => !!searchValue || !open)}
                onFocus={() => setOpen(true)}
                onBlur={onInputBlur}
              >
                <Input
                  className="h-12 text-lg rounded-r-full rounded-r-none bg-gray-100 dark:bg-gray-800 focus:border-0"
                  placeholder={placeholder}
                />
              </CommandPrimitive.Input>
            </PopoverAnchor>
            {!open && <CommandList aria-hidden="true" className="hidden" />}
            <PopoverContent
              align="start"
              sideOffset={4}
              className="p-0 w-[var(--radix-popover-trigger-width)] min-w-full"
              onOpenAutoFocus={(e) => e.preventDefault()}
              onInteractOutside={(e) => {
                if (e.target instanceof Element && e.target.hasAttribute('cmdk-input')) {
                  e.preventDefault()
                }
              }}
            >
              <CommandList>
                {isLoading && (
                  <CommandPrimitive.Loading>
                    <div className="p-1">
                      <Skeleton className="h-6 w-full" />
                    </div>
                  </CommandPrimitive.Loading>
                )}
                {items.length > 0 && !isLoading ? (
                  <CommandGroup>
                    {items.map((option) => (
                      <CommandItem
                        key={option.value}
                        value={option.value}
                        onMouseDown={(e) => e.preventDefault()}
                        onSelect={onSelectItem}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            selectedValue === option.value ? 'opacity-100' : 'opacity-0',
                          )}
                        />
                        {option.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ) : null}
                {!isLoading ? <CommandEmpty>{emptyMessage ?? 'No items.'}</CommandEmpty> : null}
              </CommandList>
            </PopoverContent>
          </Command>
        </Popover>
      </div>
    </div>
  )
}
