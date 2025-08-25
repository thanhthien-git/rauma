import type { Metadata } from 'next'
import './globals.css'
import ClientFooter from '@/components/layouts/client/footer'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ReduxProvider } from '@/components/providers/redux-provider'

export const metadata: Metadata = {
  title: 'RAUMA Merce',
  metadataBase: new URL('https://rauma.vercel.app'),
  description: 'Gì cũng có, mua hết ở RAUMA',
  openGraph: {
    url: 'https://rauma.vercel.app',
    siteName: 'Rauma',
    title: 'Rauma – E-Commerce',
    description: 'Gì cũng có, mua hết ở RAUMA',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://rauma.vercel.app',
              name: 'Rauma',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://rauma.vercel.app/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="font-satoshi">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ReduxProvider>
            <div className="flex flex-col bg-gray-100 min-h-screen">
              <main className="flex-grow">{children}</main>
              <footer className="mt-auto hidden sm:block">
                <ClientFooter />
              </footer>
            </div>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
