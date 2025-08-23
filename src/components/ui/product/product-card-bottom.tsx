import { IProductCard } from "@/interfaces/products/IProductCardProps";
import { toVND } from "@/utils/utils";
import clsx from "clsx";
import { ShoppingBag, Star } from "lucide-react";

interface IProductCardBottomProps {
  product: IProductCard;
  isFlashSale?: boolean;
}

export default function ProductCardBottom({
  product,
  isFlashSale = false,
}: Readonly<IProductCardBottomProps>) {
  const { name, salePrice, originPrice, sold, rating } = product;
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <div className={clsx("w-full", isFlashSale && "text-center")}>
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 truncate ">
          {name}
        </span>

        <span className="text-sm md:text-base lg:text-lg font-bold text-black dark:text-white">
          {salePrice ? toVND(salePrice) : toVND(originPrice)}
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
  );
}
