import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'vi'];
const publicPages = ['/', '/sign-in', '/sign-up'];

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuth = Boolean(request.cookies.get('accessToken')?.value);

  // Check if the pathname is not a public page
  const isPublicPage = publicPages.some((page) => pathname.includes(`${page}`));

  if (!isPublicPage && !isAuth) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  if (pathname.includes('/admin')) {
    // For admin routes, just continue without applying internationalization
    return NextResponse.next();
  }

  // Apply the internationalization middleware
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale: 'en',
  });
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
