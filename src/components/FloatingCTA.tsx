// src/components/FloatingCTA.tsx
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
                                style={{
                                    backgroundColor: 'var(--surface)',
                                    borderColor: 'var(--border)',
                                }}
                                className="rounded-2xl shadow-2xl border p-5 max-w-xs"
                            >
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    style={{ color: 'var(--muted)' }}
                                    className="absolute top-3 right-3 hover:opacity-70 transition-opacity"
                                    aria-label="Fechar"
                                >
                                    <X className="w-4 h-4" />
                                </button>

                                <div className="flex items-start gap-3 mb-4">
                                    <div className="icon-container w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1" style={{ color: 'var(--text-strong)' }}>
                                            {t('cta.title')}
                                        </h4>
                                        <p className="text-sm" style={{ color: 'var(--muted)' }}>
                                            {t('cta.subtitle')}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={handleClick}
                                    className="btn-primary w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    {t('cta.button')}
                                </button>

                                <p className="text-xs text-center mt-3" style={{ color: 'var(--muted)' }}>
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
                        <span
                            className="absolute inset-0 rounded-full opacity-20 animate-ping"
                            style={{
                                backgroundColor: 'var(--primary)',
                                animationDuration: '3s'
                            }}
                        />

                        <div className="relative flex items-center gap-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden btn-primary">
                            <div className="w-14 h-14 flex items-center justify-center">
                                <MessageCircle className="w-6 h-6" />
                            </div>

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