import { ListOrdered, LogOutIcon, UserIcon, Wallet } from "lucide-react";

export const quickUserMenu = [
  {
    icon: <UserIcon className="h-4 w-4" />,
    text: "Your profile",
  },
  {
    icon: <ListOrdered className="h-4 w-4" />,
    text: "Your orders",
  },
  {
    icon: <Wallet className="h-4 w-4" />,
    text: "Your payment",
  },
  {
    icon: <LogOutIcon className="h-4 w-4" />,
    text: "Log out",
  },
];
