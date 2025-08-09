import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Satoshi App",
  description: "Using Satoshi font with Next.js + Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-satoshi">{children}</body>
    </html>
  );
}
