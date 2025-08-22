import type { Metadata } from "next";
import "./globals.css";
import ClientFooter from "@/components/layouts/client/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "RAUMA Merce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-satoshi">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col bg-gray-100">
            <main className="flex-1">{children}</main>
            <footer className="mt-auto">
              <ClientFooter />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
