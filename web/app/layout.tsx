import type { Metadata } from 'next'
import { inter } from './utils/font'
import './globals.css'
import { Providers, ClerkProviderWithTheme } from './providers'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

export const metadata: Metadata = {
  title: 'Photo Wake',
  description: 'avator generator',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const messages = await getMessages()

  return (
    <html lang='en' className='h-full' suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased h-full bg-white dark:bg-zinc-900`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <ClerkProviderWithTheme>{children}</ClerkProviderWithTheme>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
