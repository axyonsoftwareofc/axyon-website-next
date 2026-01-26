'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Pencil, Code, TestTube, Rocket } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const Process = () => {
    const t = useTranslations();

    const steps = [
        {
            number: '01',
            titleKey: 'process.step1.title',
            descKey: 'process.step1.desc',
            icon: <Search className="w-6 h-6" />,
            color: 'from-blue-500 to-cyan-400'
        },
        {
            number: '02',
            titleKey: 'process.step2.title',
            descKey: 'process.step2.desc',
            icon: <Pencil className="w-6 h-6" />,
            color: 'from-purple-500 to-pink-400'
        },
        {
            number: '03',
            titleKey: 'process.step3.title',
            descKey: 'process.step3.desc',
            icon: <Code className="w-6 h-6" />,
            color: 'from-green-500 to-emerald-400'
        },
        {
            number: '04',
            titleKey: 'process.step4.title',
            descKey: 'process.step4.desc',
            icon: <TestTube className="w-6 h-6" />,
            color: 'from-orange-500 to-yellow-400'
        },
        {
            number: '05',
            titleKey: 'process.step5.title',
            descKey: 'process.step5.desc',
            icon: <Rocket className="w-6 h-6" />,
            color: 'from-red-500 to-rose-400'
        }
    ];

    const metrics = [
        { value: '30%', labelKey: 'process.metrics.faster' },
        { value: '40%', labelKey: 'process.metrics.cost' },
        { value: '99%', labelKey: 'process.metrics.satisfaction' },
        { value: '24/7', labelKey: 'process.metrics.support' },
    ];

    return (
        <section id="process" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-950">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {/* Cabeçalho */}
                    <div className="text-center mb-16 md:mb-20">
                        <motion.h2 variants={fadeInUp} className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                            {t('process.title')}
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                            {t('process.subtitle')}
                        </motion.p>
                    </div>

                    {/* Linha do tempo - Desktop */}
                    <motion.div className="hidden lg:block relative" variants={fadeInUp}>
                        {/* Linha conectora */}
                        <div className="absolute left-0 right-0 top-14 h-0.5 bg-gradient-to-r from-cyan-400/30 via-cyan-400/50 to-cyan-400/30"></div>

                        <div className="flex justify-between">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="relative flex flex-col items-center w-56"
                                >
                                    {/* Número e Ícone */}
                                    <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 z-10 shadow-lg`}>
                                        <div className="w-24 h-24 bg-gray-900 dark:bg-gray-950 rounded-full flex flex-col items-center justify-center">
                                            <span className="text-2xl font-bold text-white">{step.number}</span>
                                            <div className="text-white mt-1">
                                                {step.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Conteúdo */}
                                    <div className="text-center">
                                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                                            {t(step.titleKey)}
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                                            {t(step.descKey)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Versão Mobile/Tablet */}
                    <motion.div
                        className="lg:hidden space-y-8"
                        variants={staggerContainer}
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-6"
                                variants={fadeInUp}
                            >
                                {/* Número e Ícone */}
                                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex-shrink-0 flex items-center justify-center shadow-lg`}>
                                    <div className="w-16 h-16 bg-gray-900 dark:bg-gray-950 rounded-full flex flex-col items-center justify-center">
                                        <span className="text-lg font-bold text-white">{step.number}</span>
                                    </div>
                                </div>

                                {/* Conteúdo */}
                                <div className="pt-2">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                        {t(step.titleKey)}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                                        {t(step.descKey)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Métricas/Resultados */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-20 md:mt-24"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {metrics.map((metric, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-cyan-400 transition-colors duration-300"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                                        {metric.value}
                                    </div>
                                    <div className="text-sm md:text-base text-gray-700 dark:text-gray-400">
                                        {t(metric.labelKey)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
