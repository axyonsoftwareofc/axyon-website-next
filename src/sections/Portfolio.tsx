// src/sections/Portfolio.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, ChevronRight, Filter } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const Portfolio = () => {
    const t = useTranslations();
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: t('portfolio.filter.all') },
        { id: 'web', label: t('portfolio.filter.web') },
        { id: 'mobile', label: t('portfolio.filter.mobile') },
        { id: 'ecommerce', label: t('portfolio.filter.ecommerce') },
        { id: 'design', label: t('portfolio.filter.design') },
    ];

    const projects = [
        {
            id: 1,
            titleKey: 'portfolio.project1.title',
            descKey: 'portfolio.project1.desc',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
            link: '#',
            github: '#'
        },
        {
            id: 2,
            titleKey: 'portfolio.project2.title',
            descKey: 'portfolio.project2.desc',
            category: 'mobile',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800',
            technologies: ['React Native', 'Firebase', 'Stripe', 'Redux'],
            link: '#',
            github: '#'
        },
        {
            id: 3,
            titleKey: 'portfolio.project3.title',
            descKey: 'portfolio.project3.desc',
            category: 'ecommerce',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800',
            technologies: ['Next.js', 'Shopify', 'Vercel', 'Tailwind'],
            link: '#',
            github: '#'
        },
        {
            id: 4,
            titleKey: 'portfolio.project4.title',
            descKey: 'portfolio.project4.desc',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
            technologies: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
            link: '#',
            github: '#'
        },
        {
            id: 5,
            titleKey: 'portfolio.project5.title',
            descKey: 'portfolio.project5.desc',
            category: 'mobile',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800',
            technologies: ['Flutter', 'TensorFlow', 'GraphQL', 'Docker'],
            link: '#',
            github: '#'
        },
        {
            id: 6,
            titleKey: 'portfolio.project6.title',
            descKey: 'portfolio.project6.desc',
            category: 'design',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800',
            technologies: ['Figma', 'Prototyping', 'Design System', 'User Testing'],
            link: '#',
            github: '#'
        },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="portfolio" className="py-20 md:py-32" style={{ backgroundColor: 'var(--surface-2)' }}>
            <div className="container mx-auto px-4 sm:px-6">
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
                            {t('portfolio.title')}{' '}
                            <span className="gradient-text">
                                {t('portfolio.titleHighlight')}
                            </span>
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl max-w-2xl mx-auto"
                            style={{ color: 'var(--muted)' }}
                        >
                            {t('portfolio.subtitle')}
                        </motion.p>
                    </div>

                    {/* Filtros */}
                    <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-16">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                style={{
                                    backgroundColor: activeFilter === filter.id ? 'var(--primary)' : 'var(--surface)',
                                    color: activeFilter === filter.id ? 'white' : 'var(--text)',
                                    borderColor: activeFilter === filter.id ? 'transparent' : 'var(--border)'
                                }}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-base border ${
                                    activeFilter === filter.id ? 'shadow-lg' : ''
                                }`}
                            >
                                {activeFilter === filter.id && <Filter className="w-4 h-4" />}
                                {filter.label}
                            </button>
                        ))}
                    </motion.div>

                    {/* Grid de Projetos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={fadeInUp}
                                layout
                                style={{
                                    backgroundColor: 'var(--surface)',
                                    borderColor: 'var(--border)'
                                }}
                                className="group relative overflow-hidden rounded-2xl border hover:border-primary transition-all duration-300 hover:shadow-lg"
                            >
                                {/* Imagem do projeto */}
                                <div className="h-56 lg:h-64 overflow-hidden">
                                    <div
                                        className="w-full h-full bg-gradient-to-br group-hover:scale-105 transition-transform duration-500"
                                        style={{
                                            backgroundImage: `url(${project.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    />
                                </div>

                                {/* Overlay hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6 w-full">
                                        <div className="flex gap-3">
                                            <a
                                                href={project.link}
                                                className="flex-1 btn-primary text-center py-2.5 rounded-lg text-sm font-medium"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Eye className="w-4 h-4 inline mr-2" />
                                                {t('portfolio.demo')}
                                            </a>
                                            <a
                                                href={project.github}
                                                className="flex-1 bg-white/10 backdrop-blur text-white text-center py-2.5 rounded-lg text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="w-4 h-4 inline mr-2" />
                                                {t('portfolio.code')}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Conteúdo */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors duration-300" style={{ color: 'var(--text-strong)' }}>
                                            {t(project.titleKey)}
                                        </h3>
                                        <ExternalLink className="w-5 h-5 flex-shrink-0 group-hover:text-primary transition-colors duration-300" style={{ color: 'var(--muted)' }} />
                                    </div>

                                    <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                                        {t(project.descKey)}
                                    </p>

                                    {/* Tags de tecnologias */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                style={{
                                                    backgroundColor: 'var(--surface-2)',
                                                    color: 'var(--muted)',
                                                    borderColor: 'var(--border)'
                                                }}
                                                className="px-3 py-1 text-xs rounded-full border"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Badge de categoria */}
                                    <div
                                        style={{
                                            backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)',
                                            color: 'var(--primary)',
                                            borderColor: 'color-mix(in srgb, var(--primary) 30%, transparent)'
                                        }}
                                        className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full border"
                                    >
                                        {project.category.toUpperCase()}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Final */}
                    <motion.div
                        variants={fadeInUp}
                        className="text-center mt-16 md:mt-24"
                    >
                        <button className="btn-primary group px-8 py-3.5 rounded-lg font-semibold text-lg transition-all">
                            {t('portfolio.cta')}
                            <ChevronRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-sm mt-4" style={{ color: 'var(--muted)' }}>
                            {t('portfolio.ctaSubtitle')}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;