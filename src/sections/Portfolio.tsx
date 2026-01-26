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
        <section id="portfolio" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-950">
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
                            {t('portfolio.title')} <span className="text-blue-600 dark:text-cyan-400">{t('portfolio.titleHighlight')}</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                            {t('portfolio.subtitle')}
                        </motion.p>
                    </div>

                    {/* Filtros */}
                    <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-16">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-base ${
                                    activeFilter === filter.id
                                        ? 'bg-blue-600 dark:bg-cyan-400 text-white dark:text-gray-900 shadow-lg'
                                        : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                                }`}
                            >
                                {activeFilter === filter.id && <Filter className="w-4 h-4" />}
                                {filter.label}
                            </button>
                        ))}
                    </motion.div>

                    {/* Grid de Projetos */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={fadeInUp}
                                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-lg"
                            >
                                {/* Imagem do projeto */}
                                <div className="h-56 lg:h-64 overflow-hidden">
                                    <div
                                        className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 group-hover:scale-105 transition-transform duration-500"
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
                                                className="flex-1 btn-primary text-center py-2.5 text-sm font-medium"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Eye className="w-4 h-4 inline mr-2" />
                                                {t('portfolio.demo')}
                                            </a>
                                            <a
                                                href={project.github}
                                                className="flex-1 btn-secondary text-center py-2.5 text-sm font-medium"
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
                                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                                            {t(project.titleKey)}
                                        </h3>
                                        <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0" />
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                                        {t(project.descKey)}
                                    </p>

                                    {/* Tags de tecnologias */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full text-gray-700 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>

                                    {/* Badge de categoria */}
                                    <div className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-blue-100 dark:bg-cyan-400/10 text-blue-700 dark:text-cyan-400 border border-blue-300 dark:border-cyan-400/30">
                                        {project.category.toUpperCase()}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Final */}
                    <motion.div
                        variants={fadeInUp}
                        className="text-center mt-16 md:mt-24"
                    >
                        <button className="group btn-primary px-8 py-3.5 text-lg">
                            {t('portfolio.cta')}
                            <ChevronRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-gray-700 dark:text-gray-400 text-sm mt-4">
                            {t('portfolio.ctaSubtitle')}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
