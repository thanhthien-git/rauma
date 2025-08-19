import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "bg-gray-100 placeholder:text-gray-400 selection:bg-gray-800 selection:text-white border-gray-200 flex h-14 w-full rounded-2xl border px-4 text-base shadow-sm transition-all outline-none",
        "focus:bg-white focus:border-gray-800 focus:ring-4 focus:ring-gray-100 hover:border-gray-400 hover:shadow-md",
        className
      )}
      {...props}
    />
  );
}

export { Input };
