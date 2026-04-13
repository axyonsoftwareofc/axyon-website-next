// src/components/Header.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    const t = useTranslations();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        { label: t('nav.services'), href: '#services' },
        { label: t('nav.portfolio'), href: '#portfolio' },
        { label: t('nav.process'), href: '#process' },
        { label: t('nav.contact'), href: '#contact' },
    ];

    return (
        <header
            style={{
                backgroundColor: 'color-mix(in srgb, var(--surface) 95%, transparent)',
                borderBottomColor: 'var(--border)'
            }}
            className="fixed top-0 w-full backdrop-blur-md z-50 border-b shadow-lg"
        >
            <nav className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    <a href="#home" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <Image
                                src="/logo-axyon.png"
                                alt="Axyon Logo"
                                width={40}
                                height={40}
                                className="transition-transform duration-300 group-hover:scale-110"
                                priority
                            />
                            <div className="glow-primary absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        </div>

                        <div className="hidden sm:block">
                            <span className="text-xl font-bold gradient-text">
                                AXYON
                            </span>
                            <p className="text-xs -mt-1" style={{ color: 'var(--muted)' }}>SOFTWARE</p>
                        </div>
                    </a>

                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                style={{ color: 'var(--text)' }}
                                className="px-4 py-2 hover:text-primary rounded-lg hover:bg-surface-2 transition-all"
                            >
                                {item.label}
                            </a>
                        ))}

                        <div className="flex items-center gap-2 ml-4 pl-4 border-l" style={{ borderLeftColor: 'var(--border)' }}>
                            <ThemeToggle />
                            <LanguageSwitcher />
                            <button className="ml-2 btn-primary px-6 py-2.5 rounded-lg font-semibold">
                                {t('nav.quote')}
                            </button>
                        </div>
                    </div>

                    <button
                        className="md:hidden p-3 rounded-lg hover:bg-surface-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                        ) : (
                            <Menu className="w-6 h-6" style={{ color: 'var(--text)' }} />
                        )}
                    </button>
                </div>

                <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div
                        style={{
                            backgroundColor: 'var(--surface)',
                            borderTopColor: 'var(--border)'
                        }}
                        className="py-4 border-t rounded-lg backdrop-blur-lg"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                style={{ color: 'var(--text)' }}
                                className="block py-4 px-4 hover:text-primary hover:bg-surface-2 rounded-lg transition-colors text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}

                        <div className="flex items-center justify-between px-4 pt-4 border-t" style={{ borderTopColor: 'var(--border)' }}>
                            <div className="flex items-center gap-2">
                                <ThemeToggle />
                                <LanguageSwitcher />
                            </div>
                            <button
                                className="btn-primary px-6 py-2.5 rounded-lg font-semibold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('nav.quote')}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;