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
        <footer style={{ backgroundColor: 'var(--surface-2)', borderTopColor: 'var(--border)' }} className="border-t">
            <div className="container mx-auto px-6">
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6 group">
                            <div className="relative">
                                <Image
                                    src="/logo-axyon.png"
                                    alt="Axyon Logo"
                                    width={48}
                                    height={48}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="glow-primary absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold gradient-text">
                                    AXYON
                                </span>
                                <p className="text-sm" style={{ color: 'var(--muted)' }}>SOFTWARE</p>
                            </div>
                        </div>

                        <p className="mb-6 max-w-md" style={{ color: 'var(--muted)' }}>
                            {t('footer.description')}
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    style={{
                                        backgroundColor: 'var(--surface)',
                                        color: 'var(--muted)'
                                    }}
                                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([key, section]) => (
                        <div key={key}>
                            <h4 className="font-semibold mb-4 text-lg" style={{ color: 'var(--text-strong)' }}>
                                {t(section.titleKey)}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            style={{ color: 'var(--muted)' }}
                                            className="hover:text-primary transition-colors"
                                        >
                                            {t(link.labelKey)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="py-8 border-t" style={{ borderTopColor: 'var(--border)' }}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <h4 className="font-semibold mb-2" style={{ color: 'var(--text-strong)' }}>
                                {t('footer.newsletter.title')}
                            </h4>
                            <p className="text-sm" style={{ color: 'var(--muted)' }}>
                                {t('footer.newsletter.subtitle')}
                            </p>
                        </div>
                        <form className="flex gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder={t('footer.newsletter.placeholder')}
                                style={{
                                    backgroundColor: 'var(--surface)',
                                    borderColor: 'var(--border)',
                                    color: 'var(--text)'
                                }}
                                className="flex-1 md:w-64 border rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                            />
                            <button
                                type="submit"
                                className="btn-primary px-6 py-3 rounded-lg font-semibold"
                            >
                                {t('footer.newsletter.button')}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="py-6 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTopColor: 'var(--border)' }}>
                    <div className="text-sm" style={{ color: 'var(--muted)' }}>
                        {t.raw('footer.copyright').replace('{{year}}', new Date().getFullYear().toString())}
                    </div>
                    <div className="text-sm flex gap-6" style={{ color: 'var(--muted)' }}>
                        <a href="#" className="hover:text-primary transition-colors">
                            {t('footer.legal.terms')}
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            {t('footer.legal.privacy')}
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            {t('footer.legal.cookies')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;