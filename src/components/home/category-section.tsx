"use client";

import { useCallback, useState } from "react";
import { clientCategoriesMenu } from "@/constants/menu/client-category-menu";
import { Card, CardContent, CardHeader } from "../ui/card";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ClientCategorySection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => {
      return !prev;
    });
  }, []);
  return (
    <Card className="border-0 shadow-none dark:bg-gray-950 rounded-t-2xl p-0 gap-0 bg-card-0">
      <CardHeader className="flex items-center justify-between h-full bg-white p-4">
        <h1 className="font-spring text-2xl text-gray-900 dark:text-gray-100">
          CATEGORIES
        </h1>

        <button
          className="lg:hidden flex items-center gap-1 text-gray-700 dark:text-gray-200"
          onClick={handleToggle}
        >
          {isOpen ? (
            <>
              <ChevronUp size={20} />
            </>
          ) : (
            <>
              <ChevronDown size={20} />
            </>
          )}
        </button>
      </CardHeader>

      {/* collapse content */}
      <CardContent
        className={clsx(
          "p-0 overflow-hidden transition-[max-height] duration-300 ease-in-out",
          isOpen ? "max-h-[1000px]" : "max-h-0 lg:max-h-none"
        )}
      >
        <div
          className={clsx(
            "grid border-t border-l border-gray-200 dark:border-gray-700",
            "grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4"
          )}
        >
          {clientCategoriesMenu.map((category) => (
            <div
              key={category.name}
              className={clsx(
                "group flex flex-col items-center justify-center gap-3 p-4",
                "bg-white dark:bg-gray-900 border-r border-b border-gray-200 dark:border-gray-700",
                "transition-all duration-300 cursor-pointer"
              )}
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full border
                 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200
                 group-hover:bg-black group-hover:text-white group-hover:border-black
                 transition-all duration-300"
              >
                {category.icon}
              </div>
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 group-hover:text-black">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
