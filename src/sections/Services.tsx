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
            color: 'from-blue-500 to-cyan-400'
        },
        {
            id: 2,
            titleKey: 'services.mobile.title',
            descKey: 'services.mobile.desc',
            icon: <Smartphone className="w-8 h-8" />,
            featuresKey: 'services.mobile.features',
            color: 'from-purple-500 to-pink-400'
        },
        {
            id: 3,
            titleKey: 'services.design.title',
            descKey: 'services.design.desc',
            icon: <Palette className="w-8 h-8" />,
            featuresKey: 'services.design.features',
            color: 'from-green-500 to-emerald-400'
        },
        {
            id: 4,
            titleKey: 'services.enterprise.title',
            descKey: 'services.enterprise.desc',
            icon: <Building className="w-8 h-8" />,
            featuresKey: 'services.enterprise.features',
            color: 'from-orange-500 to-yellow-400'
        },
        {
            id: 5,
            titleKey: 'services.ecommerce.title',
            descKey: 'services.ecommerce.desc',
            icon: <ShoppingCart className="w-8 h-8" />,
            featuresKey: 'services.ecommerce.features',
            color: 'from-red-500 to-rose-400'
        },
        {
            id: 6,
            titleKey: 'services.consulting.title',
            descKey: 'services.consulting.desc',
            icon: <BarChart3 className="w-8 h-8" />,
            featuresKey: 'services.consulting.features',
            color: 'from-indigo-500 to-blue-400'
        }
    ];

    return (
        <section id="services" className="py-20 md:py-32 bg-white dark:bg-gray-900">
            <div className="container">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {/* Cabeçalho */}
                    <div className="text-center mb-16 md:mb-20">
                        <motion.h2
                            variants={fadeInUp}
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100"
                        >
                            {t('services.title')}
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300"
                        >
                            {t('services.subtitle')}
                        </motion.p>
                    </div>

                    {/* Grid de serviços */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={fadeInUp}
                                className="card group hover:border-blue-400 dark:hover:border-cyan-400 hover:shadow-lg transition-all duration-300"
                            >
                                {/* Ícone com gradiente */}
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 flex items-center justify-center`}>
                                    <div className="text-white">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Título */}
                                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                                    {t(service.titleKey)}
                                </h3>

                                {/* Descrição */}
                                <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {t(service.descKey)}
                                </p>

                                {/* Features */}
                                <div className="space-y-3 mb-8">
                                    {t(service.featuresKey).split(', ').map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-emerald-400 flex-shrink-0" />
                                            <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature.trim()}
                      </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Botão de ação */}
                                <button className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-semibold text-sm hover:gap-3 transition-all duration-300">
                                    {t('services.more')}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Final */}
                    <motion.div
                        variants={fadeInUp}
                        className="text-center mt-16 md:mt-24"
                    >
                        <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-gray-700">
                            <div className="text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    {t('services.cta.title')}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-400">
                                    {t('services.cta.subtitle')}
                                </p>
                            </div>
                            <button className="btn-primary whitespace-nowrap px-8 py-3.5">
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