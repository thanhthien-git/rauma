"use client";

import ClientHeader from "@/components/layouts/client/header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <ClientHeader />
      </header>
      <main>{children}</main>
    </>
  );
}
