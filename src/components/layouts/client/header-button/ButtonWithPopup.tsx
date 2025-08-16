import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useState, useCallback } from "react";
import { ButtonWithPopupProps } from "./ButtonWithPopupProps.interface";

export function ButtonWithPopup({
  count,
  onClick,
  buttonClassName,
  children,
  popupContent,
}: Readonly<ButtonWithPopupProps>) {
  const [open, setOpen] = useState(false);
  const handleMouseEnter = useCallback(() => setOpen(true), []);
  const handleMouseLeave = useCallback(() => setOpen(false), []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={`relative h-10 w-10 ${buttonClassName || ""}`}
          onClick={onClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
          {count && count > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
              {count}
            </span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="mt-2 p-0
          data-[state=open]:animate-in data-[state=open]:fade-in-80 data-[state=open]:slide-in-from-top-2
          data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-2
          duration-200 ease-out"
        align="end"
        side="top"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {popupContent}
      </PopoverContent>
    </Popover>
  );
}
