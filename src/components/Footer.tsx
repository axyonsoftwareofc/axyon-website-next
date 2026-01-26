// src/components/Footer.tsx
'use client';
import Image from 'next/image';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations();

    const footerLinks = {
        services: {
            titleKey: 'footer.services.title',
            links: [
                { labelKey: 'footer.services.web', href: '#services' },
                { labelKey: 'footer.services.mobile', href: '#services' },
                { labelKey: 'footer.services.design', href: '#services' },
                { labelKey: 'footer.services.consulting', href: '#services' }
            ]
        },
        company: {
            titleKey: 'footer.company.title',
            links: [
                { labelKey: 'footer.company.about', href: '#' },
                { labelKey: 'footer.company.portfolio', href: '#portfolio' },
                { labelKey: 'footer.company.careers', href: '#' },
                { labelKey: 'footer.company.blog', href: '#' }
            ]
        },
        legal: {
            titleKey: 'footer.legal.title',
            links: [
                { labelKey: 'footer.legal.terms', href: '#' },
                { labelKey: 'footer.legal.privacy', href: '#' },
                { labelKey: 'footer.legal.cookies', href: '#' }
            ]
        }
    };

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
        { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
        { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
        { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' }
    ];

    return (
        <footer className="bg-gray-50 dark:bg-[#112240] border-t border-gray-200 dark:border-[#1E3A5F]">
            <div className="container mx-auto px-6">
                {/* Parte superior do footer */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Logo e descrição */}
                    <div className="lg:col-span-2">
                        {/* Logo com imagem */}
                        <div className="flex items-center gap-3 mb-6 group">
                            <div className="relative">
                                <Image
                                    src="/logo-axyon.png"
                                    alt="Axyon Logo"
                                    width={48}
                                    height={48}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-[#64FFDA] dark:to-blue-400 bg-clip-text text-transparent">
                                    AXYON
                                </span>
                                <p className="text-sm text-gray-600 dark:text-gray-400">SOFTWARE</p>
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-[#8892B0] mb-6 max-w-md">
                            {t('footer.description')}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-[#1E3A5F] flex items-center justify-center text-gray-600 dark:text-[#8892B0] hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-400 dark:hover:from-[#64FFDA] dark:hover:to-blue-400 transition-all duration-300 hover:scale-110"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([key, section]) => (
                        <div key={key}>
                            <h4 className="font-semibold mb-4 text-lg text-gray-900 dark:text-white">
                                {t(section.titleKey)}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-600 dark:text-[#8892B0] hover:text-blue-600 dark:hover:text-[#64FFDA] transition-colors"
                                        >
                                            {t(link.labelKey)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="py-8 border-t border-gray-200 dark:border-[#1E3A5F]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                                {t('footer.newsletter.title')}
                            </h4>
                            <p className="text-gray-600 dark:text-[#8892B0] text-sm">
                                {t('footer.newsletter.subtitle')}
                            </p>
                        </div>
                        <form className="flex gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder={t('footer.newsletter.placeholder')}
                                className="flex-1 md:w-64 bg-white dark:bg-[#0A192F] border border-gray-300 dark:border-[#1E3A5F] rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 dark:focus:border-[#64FFDA] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-[#8892B0]"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
                            >
                                {t('footer.newsletter.button')}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Parte inferior do footer */}
                <div className="py-6 border-t border-gray-200 dark:border-[#1E3A5F] flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-gray-600 dark:text-[#8892B0] text-sm">
                        {t.raw('footer.copyright').replace('{{year}}', new Date().getFullYear().toString())}
                    </div>
                    <div className="text-gray-600 dark:text-[#8892B0] text-sm flex gap-6">
                        <a href="#" className="hover:text-blue-600 dark:hover:text-[#64FFDA] transition-colors">
                            {t('footer.legal.terms')}
                        </a>
                        <a href="#" className="hover:text-blue-600 dark:hover:text-[#64FFDA] transition-colors">
                            {t('footer.legal.privacy')}
                        </a>
                        <a href="#" className="hover:text-blue-600 dark:hover:text-[#64FFDA] transition-colors">
                            {t('footer.legal.cookies')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
