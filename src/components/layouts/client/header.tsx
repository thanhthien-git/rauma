"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import QuickNotification from "./modals/notifications/notification";
import QuickCart from "./modals/cart/cart";
import QuickUser from "./modals/user/user";

export default function ClientHeader() {
  return (
    <div className="w-full border-b bg-white dark:bg-gray-900">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.svg"
            alt="RAUMA Merce"
            width={180}
            height={180}
            priority
          />
        </Link>

        {/* Search */}
        <div className="flex flex-1 max-w-3xl">
          <Input
            type="search"
            placeholder="Search products..."
            className="h-12 text-lg rounded-l-full rounded-r-none bg-gray-100 dark:bg-gray-800 focus:border-0"
          />
          <Button
            variant="default"
            size="icon"
            className="h-12 w-14 rounded-r-full rounded-l-none"
          >
            <Search className="h-6 w-6" />
          </Button>
        </div>

        {/* Notification */}
        <QuickNotification />

        {/* Cart */}
        <QuickCart />

        {/* User */}
        <QuickUser />
      </div>
    </div>
  );
}
