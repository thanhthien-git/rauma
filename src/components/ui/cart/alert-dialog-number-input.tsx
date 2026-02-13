import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { CartItemRow } from '@/types/cart'
import { useState } from 'react'

export function AlertNumberInput({
  product,
  openDialog,
  onClose,
}: {
  product: CartItemRow
  openDialog: boolean
  onClose: () => void
}) {
  return (
    <AlertDialog open={openDialog} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Do you want to remove this item?</AlertDialogTitle>
          <AlertDialogDescription>{product.name}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>No</AlertDialogCancel>
          <AlertDialogAction>Remove</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
