// src/sections/Hero.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const Hero = () => {
    const t = useTranslations();

    const stats = [
        { value: '50+', labelKey: 'hero.stats.projects' },
        { value: '99%', labelKey: 'hero.stats.satisfaction' },
        { value: '3x', labelKey: 'hero.stats.roi' },
        { value: '24/7', labelKey: 'hero.stats.support' },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="container">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={false}
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    {/* Badge */}
                    <motion.div
                        variants={fadeInUp}
                        style={{
                            backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)',
                            color: 'var(--primary)',
                            borderColor: 'color-mix(in srgb, var(--primary) 20%, transparent)'
                        }}
                        className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-8 border"
                    >
                        <Sparkles className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                        <span className="text-sm font-medium">{t('hero.tagline')}</span>
                        <Sparkles className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                    </motion.div>

                    {/* Título com rich text */}
                    <motion.h1
                        variants={fadeInUp}
                        className="mb-6 leading-tight text-5xl md:text-6xl lg:text-7xl font-bold"
                        style={{ color: 'var(--text-strong)' }}
                    >
                        {t.rich('hero.title', {
                            highlight: (chunks) => (
                                <span className="gradient-text font-extrabold">
                                    {chunks}
                                </span>
                            ),
                        })}
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed"
                        style={{ color: 'var(--muted)' }}
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16 md:mb-20"
                    >
                        <button
                            onClick={() => scrollToSection('portfolio')}
                            className="btn-primary group px-8 py-3.5 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2"
                        >
                            <span>{t('hero.cta.projects')}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-secondary px-8 py-3.5 rounded-lg font-semibold text-lg transition-all"
                        >
                            {t('hero.cta.expert')}
                        </button>
                    </motion.div>

                    {/* Estatísticas */}
                    <motion.div
                        variants={fadeInUp}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: 'var(--surface)',
                                    borderColor: 'var(--border)'
                                }}
                                className="group border rounded-xl p-6 cursor-pointer hover:border-primary transition-colors duration-300"
                            >
                                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
                                    {stat.value}
                                </div>
                                <div className="text-sm md:text-base" style={{ color: 'var(--muted)' }}>
                                    {t(stat.labelKey)}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl -z-10" style={{ backgroundColor: 'color-mix(in srgb, var(--primary) 5%, transparent)' }} />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl -z-10" style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 5%, transparent)' }} />
        </section>
    );
};

export default Hero;