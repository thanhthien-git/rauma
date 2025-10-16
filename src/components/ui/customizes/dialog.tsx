'use client'

import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface BaseDialogLayoutProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  children?: React.ReactNode
  confirmLabel?: string
  cancelLabel?: string
  onConfirm?: () => void
  onCancel?: () => void
  showFooter?: boolean
  footerChildren?: React.ReactNode
}

export function ClientDialog({
  open,
  onOpenChange,
  title,
  children,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  showFooter = true,
  footerChildren,
}: BaseDialogLayoutProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="[&>button]:hidden ">
        {title && (
          <DialogHeader className="sticky pb-5 border-b border-gray-200">
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
        )}

        <div className="py-2 overflow-y-hidden max-h-[80vh]">{children}</div>

        {showFooter && (
          <DialogFooter className="pt-3 flex justify-end gap-2 border-t border-gray-200">
            {footerChildren ? (
              footerChildren
            ) : (
              <>
                <Button variant="outline" onClick={onCancel || (() => onOpenChange(false))}>
                  {cancelLabel}
                </Button>
                <Button onClick={onConfirm} className="bg-black text-white">
                  {confirmLabel}
                </Button>
              </>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
