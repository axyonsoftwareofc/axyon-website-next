'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useTransition } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const languages = [
        { code: 'pt', name: 'Português', flag: '🇧🇷' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
    ];

    const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

    const changeLanguage = (newLocale: string) => {
        if (newLocale === locale) return;

        startTransition(() => {
            // Define o cookie
            document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

            // Troca a URL (/pt/... → /en/...)
            const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);

            // Navega para a nova rota
            router.push(newPathname);
            router.refresh();
        });

        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                disabled={isPending}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group disabled:opacity-50"
                aria-label="Selecionar idioma"
            >
                <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <span className="font-medium">{currentLanguage.flag}</span>
                <ChevronDown className={`w-4 h-4 text-gray-600 dark:text-gray-300 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50">
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => changeLanguage(language.code)}
                                disabled={isPending || language.code === locale}
                                className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 ${
                                    locale === language.code
                                        ? 'text-blue-600 dark:text-cyan-400 font-semibold bg-blue-50 dark:bg-gray-700/50'
                                        : 'text-gray-700 dark:text-gray-300'
                                }`}
                            >
                                <span className="text-xl">{language.flag}</span>
                                <div className="flex-1">
                                    <div className="font-medium">{language.name}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                        {language.code.toUpperCase()}
                                    </div>
                                </div>
                                {locale === language.code && (
                                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
                                )}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default LanguageSwitcher;