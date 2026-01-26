'use client';
import React from 'react';
import Image from 'next/image';
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
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="relative inline-block mb-8"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 dark:from-cyan-400/20 dark:to-blue-400/20 blur-3xl" />
                        <Image
                            src="/logo-axyon.png"
                            alt="Axyon Logo"
                            width={128}
                            height={128}
                            className="relative h-24 w-24 md:h-32 md:w-32 drop-shadow-2xl"
                            priority
                        />
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-5 py-2.5 mb-8 border border-blue-100 dark:bg-gray-800 dark:text-cyan-400 dark:border-cyan-400/20"
                    >
                        <Sparkles className="w-4 h-4 text-blue-500 dark:text-cyan-400" />
                        <span className="text-sm font-medium">{t('hero.tagline')}</span>
                        <Sparkles className="w-4 h-4 text-blue-500 dark:text-cyan-400" />
                    </motion.div>

                    {/* Título com rich text */}
                    <motion.h1
                        variants={fadeInUp}
                        className="mb-6 leading-tight text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100"
                    >
                        {t.rich('hero.title', {
                            highlight: (chunks) => (
                                <span className="text-blue-600 dark:text-cyan-400 font-extrabold">
        {chunks}
      </span>
                            ),
                        })}
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300"
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
                            className="group bg-blue-600 dark:bg-cyan-400 text-white dark:text-gray-900 px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-blue-700 dark:hover:bg-cyan-300 transition-all flex items-center justify-center gap-2"
                        >
                            <span>{t('hero.cta.projects')}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="border-2 border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-gray-900 transition-all"
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
                                className="group bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 cursor-pointer hover:border-blue-400 dark:hover:border-cyan-400 transition-colors duration-300"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                                    {t(stat.labelKey)}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl -z-10" />
        </section>
    );
};

export default Hero;