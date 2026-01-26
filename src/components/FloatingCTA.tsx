'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

const FloatingCTA: React.FC = () => {
    const t = useTranslations();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Mostra após 2 segundos se não rolou
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const handleClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        setIsExpanded(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
                >
                    {/* Card expandido */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                className="bg-white dark:bg-[#112240] rounded-2xl shadow-2xl border border-gray-200 dark:border-[#1E3A5F] p-5 max-w-xs"
                            >
                                {/* Botão fechar */}
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-[#8892B0] dark:hover:text-[#CCD6F6] transition-colors"
                                    aria-label="Fechar"
                                >
                                    <X className="w-4 h-4" />
                                </button>

                                {/* Conteúdo */}
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-100 dark:bg-[#1E3A5F] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Sparkles className="w-5 h-5 text-blue-600 dark:text-[#64FFDA]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-[#CCD6F6] mb-1">
                                            {t('cta.title')}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-[#8892B0]">
                                            {t('cta.subtitle')}
                                        </p>
                                    </div>
                                </div>

                                {/* Botão CTA */}
                                <button
                                    onClick={handleClick}
                                    className="w-full bg-blue-600 dark:bg-[#64FFDA] text-white dark:text-[#0A192F] py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-[#52e0c4] transition-colors duration-200 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    {t('cta.button')}
                                </button>

                                <p className="text-xs text-center text-gray-500 dark:text-[#8892B0] mt-3">
                                    {t('cta.response')}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Botão flutuante principal */}
                    <button
                        onMouseEnter={() => setIsExpanded(true)}
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="relative group"
                        aria-label={t('cta.tooltip')}
                    >
                        {/* Pulse sutil - apenas 1 anel, bem lento */}
                        <span
                            className="absolute inset-0 rounded-full bg-blue-600 dark:bg-[#64FFDA] animate-ping opacity-20"
                            style={{ animationDuration: '3s' }}
                        />

                        {/* Botão principal */}
                        <div className="relative flex items-center gap-3 bg-blue-600 dark:bg-[#64FFDA] text-white dark:text-[#0A192F] rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden">
                            {/* Ícone */}
                            <div className="w-14 h-14 flex items-center justify-center">
                                <MessageCircle className="w-6 h-6" />
                            </div>

                            {/* Texto que expande */}
                            <div
                                className={`overflow-hidden whitespace-nowrap transition-all duration-200 ${
                                    isExpanded ? 'w-auto opacity-100 pr-5' : 'w-0 opacity-0'
                                }`}
                            >
                                <span className="font-semibold">{t('cta.tooltip')}</span>
                            </div>
                        </div>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
