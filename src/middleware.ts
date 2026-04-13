import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const locales = ['pt', 'en', 'es'];
const defaultLocale = 'pt';

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always',
});

export default async function middleware(request: NextRequest) {
    // Verificar se há cookie de locale
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;

    // Se tem cookie E é diferente do locale da URL, redirecionar
    if (cookieLocale && locales.includes(cookieLocale)) {
        const { pathname } = request.nextUrl;

        // Extrair locale atual da URL
        const pathnameLocale = pathname.split('/')[1];

        // Se o locale da URL for diferente do cookie, redirecionar
        if (pathnameLocale && locales.includes(pathnameLocale) && pathnameLocale !== cookieLocale) {
            const newPathname = pathname.replace(`/${pathnameLocale}`, `/${cookieLocale}`);
            return NextResponse.redirect(new URL(newPathname, request.url));
        }
    }

    // Executar middleware do next-intl
    return intlMiddleware(request);
}

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};