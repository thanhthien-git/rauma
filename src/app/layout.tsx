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
          {children}
          <footer>
            <ClientFooter />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
