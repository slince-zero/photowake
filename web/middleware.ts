import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

// 创建 next-intl 中间件
const intlMiddleware = createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: 'always'
})

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 从路径中提取语言代码
  const pathnameLocale = pathname.split('/')[1]
  // 如果使用了无效的语言代码，重定向到默认语言版本
  if (pathnameLocale && !routing.locales.includes(pathnameLocale as "en" | "zh")) {
    const newPathname = pathname.replace(`/${pathnameLocale}`, `/${routing.defaultLocale}`)
    return NextResponse.redirect(new URL(newPathname, request.url))
  }
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}
