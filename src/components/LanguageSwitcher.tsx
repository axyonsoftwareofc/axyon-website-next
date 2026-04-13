// src/components/LanguageSwitcher.tsx
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
            document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
            const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
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
                style={{
                    backgroundColor: 'var(--surface-2)',
                    color: 'var(--text)'
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:opacity-80 transition-opacity group disabled:opacity-50"
                aria-label="Selecionar idioma"
            >
                <Globe className="w-5 h-5" />
                <span className="font-medium">{currentLanguage.flag}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />
                    <div
                        style={{
                            backgroundColor: 'var(--surface)',
                            borderColor: 'var(--border)'
                        }}
                        className="absolute right-0 mt-2 w-48 backdrop-blur-lg rounded-xl shadow-2xl border py-2 z-50"
                    >
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => changeLanguage(language.code)}
                                disabled={isPending || language.code === locale}
                                style={{
                                    color: locale === language.code ? 'var(--primary)' : 'var(--text)',
                                    backgroundColor: locale === language.code ? 'color-mix(in srgb, var(--primary) 10%, transparent)' : 'transparent'
                                }}
                                className="w-full px-4 py-3 text-left flex items-center gap-3 hover:opacity-80 transition-opacity disabled:opacity-50"
                            >
                                <span className="text-xl">{language.flag}</span>
                                <div className="flex-1">
                                    <div className="font-medium">{language.name}</div>
                                    <div className="text-xs opacity-60">
                                        {language.code.toUpperCase()}
                                    </div>
                                </div>
                                {locale === language.code && (
                                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--primary)' }} />
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