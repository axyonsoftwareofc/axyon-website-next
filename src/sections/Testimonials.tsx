// src/sections/Testimonials.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const Testimonials = () => {
    const t = useTranslations();

    const testimonials = [
        {
            id: 1,
            contentKey: 'testimonials.1.content',
            nameKey: 'testimonials.1.name',
            roleKey: 'testimonials.1.role',
            companyKey: 'testimonials.1.company',
            avatar: 'https://i.pravatar.cc/150?img=12',
            rating: 5,
        },
        {
            id: 2,
            contentKey: 'testimonials.2.content',
            nameKey: 'testimonials.2.name',
            roleKey: 'testimonials.2.role',
            companyKey: 'testimonials.2.company',
            avatar: 'https://i.pravatar.cc/150?img=45',
            rating: 5,
        },
        {
            id: 3,
            contentKey: 'testimonials.3.content',
            nameKey: 'testimonials.3.name',
            roleKey: 'testimonials.3.role',
            companyKey: 'testimonials.3.company',
            avatar: 'https://i.pravatar.cc/150?img=33',
            rating: 5,
        },
        {
            id: 4,
            contentKey: 'testimonials.4.content',
            nameKey: 'testimonials.4.name',
            roleKey: 'testimonials.4.role',
            companyKey: 'testimonials.4.company',
            avatar: 'https://i.pravatar.cc/150?img=27',
            rating: 5,
        },
        {
            id: 5,
            contentKey: 'testimonials.5.content',
            nameKey: 'testimonials.5.name',
            roleKey: 'testimonials.5.role',
            companyKey: 'testimonials.5.company',
            avatar: 'https://i.pravatar.cc/150?img=51',
            rating: 5,
        },
        {
            id: 6,
            contentKey: 'testimonials.6.content',
            nameKey: 'testimonials.6.name',
            roleKey: 'testimonials.6.role',
            companyKey: 'testimonials.6.company',
            avatar: 'https://i.pravatar.cc/150?img=38',
            rating: 5,
        },
    ];

    const stats = [
        { value: '50+', labelKey: 'testimonials.stats.clients' },
        { value: '4.9/5', labelKey: 'testimonials.stats.rating' },
        { value: '95%', labelKey: 'testimonials.stats.retention' },
        { value: '100%', labelKey: 'testimonials.stats.delivered' },
    ];

    return (
        <section id="testimonials" className="py-20 md:py-32" style={{ backgroundColor: 'var(--bg)' }}>
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={false}
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    {/* Cabeçalho */}
                    <div className="text-center mb-16 md:mb-20">
                        <motion.div
                            variants={fadeInUp}
                            style={{
                                backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)',
                                color: 'var(--primary)',
                                borderColor: 'color-mix(in srgb, var(--primary) 20%, transparent)'
                            }}
                            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-6 border"
                        >
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">{t('testimonials.badge')}</span>
                        </motion.div>

                        <motion.h2 variants={fadeInUp} className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: 'var(--text-strong)' }}>
                            {t('testimonials.title')} <span className="gradient-text">{t('testimonials.titleHighlight')}</span>
                        </motion.h2>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
                            {t('testimonials.subtitle')}
                        </motion.p>
                    </div>

                    {/* Grid de Depoimentos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-20">
                        {testimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                variants={fadeInUp}
                                style={{
                                    backgroundColor: 'var(--surface)',
                                    borderColor: 'var(--border)'
                                }}
                                className="group relative rounded-2xl p-6 md:p-8 border hover:border-primary transition-all duration-300 hover:shadow-lg"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 opacity-10">
                                    <Quote className="w-16 h-16" style={{ color: 'var(--primary)' }} />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="mb-6 relative z-10 leading-relaxed text-sm md:text-base" style={{ color: 'var(--text)' }}>
                                    &ldquo;{t(testimonial.contentKey)}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 border-t pt-6" style={{ borderTopColor: 'var(--border)' }}>
                                    <Image
                                        src={testimonial.avatar}
                                        alt={t(testimonial.nameKey)}
                                        width={56}
                                        height={56}
                                        style={{ borderColor: 'color-mix(in srgb, var(--primary) 30%, transparent)' }}
                                        className="rounded-full border-2 group-hover:border-primary transition-colors duration-300"
                                    />
                                    <div>
                                        <h4 className="font-semibold" style={{ color: 'var(--text-strong)' }}>
                                            {t(testimonial.nameKey)}
                                        </h4>
                                        <p className="text-sm" style={{ color: 'var(--muted)' }}>
                                            {t(testimonial.roleKey)}
                                        </p>
                                        <p className="text-xs font-medium" style={{ color: 'var(--primary)' }}>
                                            {t(testimonial.companyKey)}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Estatísticas */}
                    <motion.div
                        variants={fadeInUp}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 md:mb-16"
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                style={{
                                    background: 'linear-gradient(to bottom right, color-mix(in srgb, var(--primary) 5%, transparent), color-mix(in srgb, var(--accent) 5%, transparent))',
                                    borderColor: 'color-mix(in srgb, var(--primary) 20%, transparent)'
                                }}
                                className="text-center p-6 rounded-xl border"
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

                    {/* CTA */}
                    <motion.div variants={fadeInUp} className="text-center">
                        <p className="mb-6 text-lg" style={{ color: 'var(--muted)' }}>
                            {t('testimonials.cta.text')}
                        </p>
                        <button className="btn-primary px-8 py-3.5 rounded-lg font-semibold text-lg">
                            {t('testimonials.cta.button')}
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;