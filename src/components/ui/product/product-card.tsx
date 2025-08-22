"use client";

import { IProductCard } from "@/interfaces/products/IProductCardProps";
import { toVND } from "@/utils/utils";
import clsx from "clsx";
import { Star, ShoppingBag } from "lucide-react";

interface IProductCardProps {
  product: Readonly<IProductCard>;
  isFlashSale?: boolean;
}
export default function ProductCard({
  product,
  isFlashSale = false,
}: Readonly<IProductCardProps>) {
  const { id, discountPercent, imageUrl, name, rating, salePrice, sold } =
    product;

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-between gap-3",
        "bg-white dark:bg-gray-900 dark:border-gray-700",
        "transition-all duration-300 cursor-pointer hover:shadow-md"
      )}
      key={id}
    >
      <div className="relative w-full aspect-square flex items-center justify-center">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />

        {discountPercent > 0 && (
          <span
            className={clsx(
              "absolute top-0 right-0",
              "bg-red-500 text-white text-xs font-bold",
              "px-2 py-1 shadow"
            )}
          >
            -{discountPercent}%
          </span>
        )}
      </div>

      <div className="w-full p-4 flex flex-col gap-4">
        <div className="w-full">
          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 truncate">
            {name}
          </span>

          <span className="text-sm md:text-base lg:text-lg font-bold text-black dark:text-white">
            {toVND(salePrice)}
          </span>
        </div>

        {!isFlashSale && (
          <div className="flex items-center justify-between w-full text-xs text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <ShoppingBag size={14} />
              <span>{sold} sold</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              <span>{rating.toFixed(1)}/5</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
