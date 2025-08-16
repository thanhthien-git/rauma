import { IQuickCart } from "@/interfaces/IQuickCart";
import { toVND } from "@/utils/utils";

interface CartItemProps {
  props: IQuickCart;
}

export default function QuickCartItem({ props }: Readonly<CartItemProps>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { product, price, productId } = props;
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-gray-900">{product}</span>
      <span className="text-xs text-gray-500">{toVND(price)}</span>
    </div>
  );
}
