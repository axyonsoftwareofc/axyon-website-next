import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

const locales = ['pt', 'en', 'es'];

export default getRequestConfig(async ({ requestLocale }) => {
    // 1. Tenta obter locale da URL
    let locale = await requestLocale;

    // 2. Se não tiver na URL, tenta do cookie
    if (!locale) {
        const cookieStore = await cookies();
        const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;

        if (cookieLocale && locales.includes(cookieLocale)) {
            locale = cookieLocale;
        }
    }

    // 3. Fallback para 'pt'
    if (!locale || !locales.includes(locale)) {
        locale = 'pt';
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});