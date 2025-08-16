import { IQuickCart } from "@/interfaces/IQuickCart";
import { useState } from "react";
import { ButtonWithPopup } from "../../header-button/ButtonWithPopup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import QuickCartItem from "./cart-item";

export default function QuickCart() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProducts] = useState<IQuickCart[]>([
    { productId: "1", product: "1", price: 121 },
    { productId: "2", product: "2", price: 122 },
    { productId: "3", product: "3", price: 123 },
    { productId: "4", product: "4", price: 124 },
    { productId: "5", product: "5", price: 125 },
  ]);

  return (
    <ButtonWithPopup
      count={products.length}
      buttonClassName="hover:bg-gray-100 transition-colors duration-200"
      popupContent={
        <Card className="w-80 max-h-100 overflow-hidden border-0 bg-white rounded-xl gap-0 p-0 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
          <CardHeader className="px-4 py-4 border-b [.border-b]:pb-0 border-gray-100">
            <CardTitle className="font-semibold text-gray-900 text-base flex items-center gap-2 h-8">
              <ShoppingCart className="h-4 w-4" />
              Cart
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-72 overflow-y-auto custom-scrollbar">
              <ul className="divide-y divide-gray-50">
                {products && products.length > 0 ? (
                  products.map((item, index) => (
                    <li
                      className="px-4 py-3 hover:bg-gray-50 transition-colors duration-150 cursor-pointer group"
                      key={`${item.price} - ${index}`}
                    >
                      <QuickCartItem props={item} />
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-8 text-center text-gray-500 text-sm">
                    No products
                  </li>
                )}
              </ul>
            </div>
            <div className="p-3 border-t border-gray-100 bg-gray-50">
              <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                See all products
              </button>
            </div>
          </CardContent>
        </Card>
      }
    >
      <ShoppingCart className="h-6 w-6" />
    </ButtonWithPopup>
  );
}
