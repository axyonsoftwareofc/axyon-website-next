// src/components/LanguageSwitcher.tsx
'use client';

import { useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSwitcher = () => {
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    const [pendingLocale, setPendingLocale] = useState<string | null>(null);

    const languages = [
        { code: 'pt', name: 'Português', flag: '🇧🇷' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
    ];

    const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

    // useEffect para modificar o cookie quando pendingLocale muda
    useEffect(() => {
        if (pendingLocale && typeof window !== 'undefined') {
            document.cookie = `NEXT_LOCALE=${pendingLocale}; path=/; max-age=31536000`;
            window.location.reload();
        }
    }, [pendingLocale]);

    const changeLanguage = (newLocale: string) => {
        setPendingLocale(newLocale);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
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
                                className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                                    locale === language.code
                                        ? 'text-blue-600 dark:text-cyan-400 font-semibold'
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
                                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400" />
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