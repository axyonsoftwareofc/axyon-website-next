// src/sections/Services.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Smartphone,
    Palette,
    Building,
    ShoppingCart,
    BarChart3,
    ArrowRight,
    CheckCircle
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const Services = () => {
    const t = useTranslations();

    const services = [
        {
            id: 1,
            titleKey: 'services.web.title',
            descKey: 'services.web.desc',
            icon: <Code className="w-8 h-8" />,
            featuresKey: 'services.web.features',
        },
        {
            id: 2,
            titleKey: 'services.mobile.title',
            descKey: 'services.mobile.desc',
            icon: <Smartphone className="w-8 h-8" />,
            featuresKey: 'services.mobile.features',
        },
        {
            id: 3,
            titleKey: 'services.design.title',
            descKey: 'services.design.desc',
            icon: <Palette className="w-8 h-8" />,
            featuresKey: 'services.design.features',
        },
        {
            id: 4,
            titleKey: 'services.enterprise.title',
            descKey: 'services.enterprise.desc',
            icon: <Building className="w-8 h-8" />,
            featuresKey: 'services.enterprise.features',
        },
        {
            id: 5,
            titleKey: 'services.ecommerce.title',
            descKey: 'services.ecommerce.desc',
            icon: <ShoppingCart className="w-8 h-8" />,
            featuresKey: 'services.ecommerce.features',
        },
        {
            id: 6,
            titleKey: 'services.consulting.title',
            descKey: 'services.consulting.desc',
            icon: <BarChart3 className="w-8 h-8" />,
            featuresKey: 'services.consulting.features',
        }
    ];

    return (
        <section id="services" className="py-20 md:py-32" style={{ backgroundColor: 'var(--bg)' }}>
            <div className="container">
                <motion.div
                    initial={false}
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    {/* Cabeçalho */}
                    <div className="text-center mb-16 md:mb-20">
                        <motion.h2
                            variants={fadeInUp}
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold"
                            style={{ color: 'var(--text-strong)' }}
                        >
                            {t('services.title')}
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl max-w-2xl mx-auto"
                            style={{ color: 'var(--muted)' }}
                        >
                            {t('services.subtitle')}
                        </motion.p>
                    </div>

                    {/* Grid de serviços */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={fadeInUp}
                                style={{
                                    backgroundColor: 'var(--surface)',
                                    borderColor: 'var(--border)'
                                }}
                                className="group border rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                            >
                                {/* Ícone - SEMPRE AZUL */}
                                <div className="icon-container w-16 h-16 rounded-xl mb-6 flex items-center justify-center">
                                    {service.icon}
                                </div>

                                {/* Título */}
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300" style={{ color: 'var(--text-strong)' }}>
                                    {t(service.titleKey)}
                                </h3>

                                {/* Descrição */}
                                <p className="mb-8 leading-relaxed" style={{ color: 'var(--muted)' }}>
                                    {t(service.descKey)}
                                </p>

                                {/* Features */}
                                <div className="space-y-3 mb-8">
                                    {t(service.featuresKey).split(', ').map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-emerald-400 flex-shrink-0" />
                                            <span className="text-sm" style={{ color: 'var(--text)' }}>
                                                {feature.trim()}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Botão de ação */}
                                <button className="flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all duration-300" style={{ color: 'var(--primary)' }}>
                                    {t('services.more')}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Final */}
                    <motion.div
                        variants={fadeInUp}
                        className="text-center mt-16 md:mt-24"
                    >
                        <div
                            style={{
                                background: 'linear-gradient(to right, color-mix(in srgb, var(--primary) 5%, transparent), color-mix(in srgb, var(--accent) 5%, transparent))',
                                borderColor: 'var(--border)'
                            }}
                            className="inline-flex flex-col sm:flex-row gap-4 items-center p-8 md:p-10 rounded-2xl border"
                        >
                            <div className="text-left">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--text-strong)' }}>
                                    {t('services.cta.title')}
                                </h3>
                                <p style={{ color: 'var(--muted)' }}>
                                    {t('services.cta.subtitle')}
                                </p>
                            </div>
                            <button className="whitespace-nowrap btn-primary px-8 py-3.5 rounded-lg font-semibold">
                                {t('services.cta.button')}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;