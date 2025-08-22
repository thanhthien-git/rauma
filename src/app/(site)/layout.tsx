"use client";

import ClientHeader from "@/components/layouts/client/header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow">
        <ClientHeader />
      </header>
      <main className="container mx-auto flex-1 p-4">{children}</main>
    </div>
  );
}
