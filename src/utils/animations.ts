/* Arquivo: src/utils/animations.ts */
/* Animações Minimalistas e Elegantes - Sem Piscar */

import type { Variants } from 'framer-motion';

// Fade in com leve movimento para cima
export const fadeInUp: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

// Fade in simples
export const fadeIn: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

// Container com stagger - ajustado para evitar piscar
export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

// Entrada com escala sutil
export const scaleIn: Variants = {
    initial: {
        opacity: 0,
        scale: 0.95,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

// Slide lateral esquerda
export const slideInLeft: Variants = {
    initial: {
        opacity: 0,
        x: -30,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

// Slide lateral direita
export const slideInRight: Variants = {
    initial: {
        opacity: 0,
        x: 30,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

// Para cards - animação mais sutil
export const cardVariant: Variants = {
    initial: {
        opacity: 0,
        y: 15,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
};

// Hover suave para cards (aplicar no whileHover)
export const hoverScale = {
    scale: 1.02,
    transition: {
        duration: 0.2,
        ease: 'easeOut',
    },
};

// Tap feedback
export const tapScale = {
    scale: 0.98,
};
