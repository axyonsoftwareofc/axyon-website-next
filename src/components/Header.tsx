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
        <header className="fixed top-0 w-full bg-white/95 dark:bg-[#0A192F]/95 backdrop-blur-md z-50 border-b border-gray-200 dark:border-[#1E3A5F]/30 shadow-lg">
            <nav className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
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
                            <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        </div>

                        <div className="hidden sm:block">
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-[#64FFDA] dark:to-blue-400 bg-clip-text text-transparent">
                                AXYON
                            </span>
                            <p className="text-xs text-gray-500 dark:text-[#8892B0] -mt-1">SOFTWARE</p>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="px-4 py-2 text-gray-700 dark:text-[#A8B2D1] hover:text-blue-600 dark:hover:text-[#64FFDA] rounded-lg hover:bg-gray-100 dark:hover:bg-[#112240]/50 transition-all"
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Controles */}
                        <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200 dark:border-[#1E3A5F]">
                            <ThemeToggle />
                            <LanguageSwitcher />
                            <button className="ml-2 bg-blue-600 dark:bg-[#64FFDA] text-white dark:text-[#0A192F] px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-[#52e0c4] transition-all">
                                {t('nav.quote')}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-[#112240]/50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-blue-600 dark:text-[#64FFDA]" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700 dark:text-[#CCD6F6]" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="py-4 border-t border-gray-200 dark:border-[#1E3A5F]/30 rounded-lg bg-white dark:bg-[#112240]/50 backdrop-blur-lg">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block py-4 px-4 text-gray-700 dark:text-[#8892B0] hover:text-blue-600 dark:hover:text-[#64FFDA] hover:bg-gray-100 dark:hover:bg-[#112240]/30 rounded-lg transition-colors text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Controles Mobile */}
                        <div className="flex items-center justify-between px-4 pt-4 border-t border-gray-200 dark:border-[#1E3A5F]/30">
                            <div className="flex items-center gap-2">
                                <ThemeToggle />
                                <LanguageSwitcher />
                            </div>
                            <button
                                className="bg-blue-600 dark:bg-[#64FFDA] text-white dark:text-[#0A192F] px-6 py-2.5 rounded-lg font-semibold"
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
