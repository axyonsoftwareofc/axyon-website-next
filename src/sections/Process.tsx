// src/sections/Process.tsx
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
        },
        {
            number: '02',
            titleKey: 'process.step2.title',
            descKey: 'process.step2.desc',
            icon: <Pencil className="w-6 h-6" />,
        },
        {
            number: '03',
            titleKey: 'process.step3.title',
            descKey: 'process.step3.desc',
            icon: <Code className="w-6 h-6" />,
        },
        {
            number: '04',
            titleKey: 'process.step4.title',
            descKey: 'process.step4.desc',
            icon: <TestTube className="w-6 h-6" />,
        },
        {
            number: '05',
            titleKey: 'process.step5.title',
            descKey: 'process.step5.desc',
            icon: <Rocket className="w-6 h-6" />,
        }
    ];

    const metrics = [
        { value: '30%', labelKey: 'process.metrics.faster' },
        { value: '40%', labelKey: 'process.metrics.cost' },
        { value: '99%', labelKey: 'process.metrics.satisfaction' },
        { value: '24/7', labelKey: 'process.metrics.support' },
    ];

    return (
        <section id="process" className="py-20 md:py-32" style={{ backgroundColor: 'var(--surface-2)' }}>
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={false}
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    {/* Cabeçalho */}
                    <div className="text-center mb-16 md:mb-20">
                        <motion.h2 variants={fadeInUp} className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: 'var(--text-strong)' }}>
                            {t('process.title')}
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
                            {t('process.subtitle')}
                        </motion.p>
                    </div>

                    {/* Linha do tempo - Desktop */}
                    <motion.div className="hidden lg:block relative" variants={fadeInUp}>
                        {/* Linha conectora AZUL→CIANO */}
                        <div
                            className="absolute left-0 right-0 top-14 h-0.5"
                            style={{
                                background: 'linear-gradient(to right, color-mix(in srgb, var(--primary) 30%, transparent), var(--primary), color-mix(in srgb, var(--accent) 30%, transparent))'
                            }}
                        ></div>

                        <div className="flex justify-between">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="relative flex flex-col items-center w-56"
                                >
                                    {/* Número e Ícone - GRADIENTE AZUL→CIANO */}
                                    <div
                                        className="w-28 h-28 rounded-full flex items-center justify-center mb-6 z-10 shadow-lg"
                                        style={{
                                            background: 'var(--gradient)'
                                        }}
                                    >
                                        <div
                                            className="w-24 h-24 rounded-full flex flex-col items-center justify-center"
                                            style={{ backgroundColor: 'var(--bg)' }}
                                        >
                                            <span className="text-2xl font-bold" style={{ color: 'var(--text-strong)' }}>{step.number}</span>
                                            <div className="mt-1" style={{ color: 'var(--primary)' }}>
                                                {step.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Conteúdo */}
                                    <div className="text-center">
                                        <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-strong)' }}>
                                            {t(step.titleKey)}
                                        </h3>
                                        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                                            {t(step.descKey)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Versão Mobile/Tablet */}
                    <div className="lg:hidden space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-6"
                                variants={fadeInUp}
                            >
                                {/* Número e Ícone */}
                                <div
                                    className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg"
                                    style={{
                                        background: 'var(--gradient)'
                                    }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-full flex flex-col items-center justify-center"
                                        style={{ backgroundColor: 'var(--bg)' }}
                                    >
                                        <span className="text-lg font-bold" style={{ color: 'var(--text-strong)' }}>{step.number}</span>
                                    </div>
                                </div>

                                {/* Conteúdo */}
                                <div className="pt-2">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: 'var(--text-strong)' }}>
                                        {t(step.titleKey)}
                                    </h3>
                                    <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                                        {t(step.descKey)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Métricas/Resultados */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-20 md:mt-24"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {metrics.map((metric, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: 'var(--surface)',
                                        borderColor: 'var(--border)'
                                    }}
                                    className="text-center p-6 rounded-xl border hover:border-primary transition-colors duration-300"
                                >
                                    <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
                                        {metric.value}
                                    </div>
                                    <div className="text-sm md:text-base" style={{ color: 'var(--muted)' }}>
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