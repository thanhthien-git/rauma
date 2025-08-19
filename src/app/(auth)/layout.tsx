"use client";

import { AnimatePresence, motion } from "framer-motion";
import { RefreshCcw, ShieldCheck, Tag, Truck } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  const pathname = usePathname();

  return (
    <div className="relative flex min-h-screen w-full">
      {/* LEFT */}
      <div className="hidden lg:flex flex-1 bg-black text-white relative overflow-hidden px-20">
        <LeftContent />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3.62 35.278"
          preserveAspectRatio="none"
          className="absolute top-0 right-0 h-full w-[400px] scale-x-[-1]"
        >
          <path
            d="M.092 0S.267 27.04 3.62 35.278H.092z"
            opacity=".2"
            fill="#ffffff"
          />
          <path
            d="M.092 0s.154 27.04 3.102 35.278H.092z"
            opacity=".2"
            fill="#ffffff"
          />
          <path
            d="M.092 0s.131 27.04 2.646 35.278H.092zM.092 0v35.278H0V0z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col justify-center w-full lg:w-auto lg:min-w-[640px] px-12 py-16 bg-white relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            layout
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="flex flex-col justify-center h-full px-8 max-w-lg space-y-8 z-10">
      {/* Slogan */}
      <div className="space-y-4">
        <Feature letter="R" text="eliable products" />
        <Feature letter="A" text="ffordable value" />
        <Feature letter="U" text="nique style" />
        <Feature letter="M" text="odern" />
        <Feature letter="A" text="mazing" />
      </div>

      {/* Icons & Benefits */}
      <div className="flex space-x-6 pt-8">
        <div className="flex items-center space-x-2">
          <Truck className="w-6 h-6 text-gray-200" />
          <span className="text-gray-200">Free Shipping</span>
        </div>

        <div className="flex items-center space-x-2">
          <Tag className="w-6 h-6 text-gray-200" />
          <span className="text-gray-200">Best Deals</span>
        </div>

        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-6 h-6 text-gray-200" />
          <span className="text-gray-200">Warranty</span>
        </div>

        <div className="flex items-center space-x-2">
          <RefreshCcw className="w-6 h-6 text-gray-200" />
          <span className="text-gray-200">Easy Return</span>
        </div>
      </div>
    </div>
  );
}

function Feature({ letter, text }: { letter: string; text: string }) {
  return (
    <div className="flex items-center cursor-default">
      <strong className="font-spring text-gray-100 text-6xl mr-3 drop-shadow-md">
        {letter}
      </strong>
      <span className="font-spring text-3xl tracking-wide bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent animate-gradient">
        {text}
      </span>
    </div>
  );
}
