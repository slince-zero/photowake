import type { Metadata } from 'next'
import '@/app/globals.css'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { ClerkProviderWithTheme, Providers } from '../providers'
import { inter } from '../utils/font'

export const metadata: Metadata = {
  title: 'Photo Wake',
  description: 'avator generator',
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode
    params: { locale: string }
  }>
) {
  const { params, children } = props

  const VALID_LOCALES = ['en', 'zh']
  const locale = VALID_LOCALES.includes(params.locale) ? params.locale : 'en'
  console.log('locale', locale)

  const messages = await getMessages()

  return (
    <html lang={locale} className='h-full' suppressHydrationWarning>
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
