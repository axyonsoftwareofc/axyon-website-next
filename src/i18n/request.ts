// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

const locales = ['pt', 'en', 'es'];

export default getRequestConfig(async ({ requestLocale }) => {
    // 1. Tenta obter locale da URL (se usar routing internacional)
    let locale = await requestLocale;

    // 2. Se não estiver na URL, tenta do cookie
    if (!locale) {
        const cookieStore = await import('next/headers').then(mod => mod.cookies());
        const cookie = cookieStore.get('NEXT_LOCALE')?.value;
        locale = cookie;
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