import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ButtonWithPopup } from "../../header-button/ButtonWithPopup";
import { UserCircle, UserIcon } from "lucide-react";
import { quickUserMenu } from "./menu";

export default function QuickUser() {
  return (
    <ButtonWithPopup
      buttonClassName="hover:bg-gray-100 transition-colors duration-200"
      popupContent={
        <Card className="w-80 max-h-100 overflow-hidden border-0 bg-white rounded-xl gap-0 p-0 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
          <CardHeader className="px-4 py-4 border-b [.border-b]:pb-0 border-gray-100">
            <CardTitle className="font-semibold text-gray-900 text-base flex items-center gap-2 h-8">
              <UserCircle className="h-4 w-4" />
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-72 overflow-y-auto custom-scrollbar">
              <ul className="divide-y divide-gray-50">
                {quickUserMenu.map((menu) => (
                  <li
                    className="px-4 py-3 hover:bg-gray-50 transition-colors duration-150 cursor-pointer group flex gap-2 items-center"
                    key={menu.text.replace(" ", "_")}
                  >
                    {menu.icon} {menu.text}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      }
    >
      <UserIcon className="h-6 w-6" />
    </ButtonWithPopup>
  );
}
