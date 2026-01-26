/* Arquivo: src/utils/animations.ts */
/* Animações Minimalistas e Elegantes */

// Fade in com leve movimento para cima
export const fadeInUp = {
    initial: {
        opacity: 0,
        y: 15,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut' as const,
        },
    },
};

// Fade in simples
export const fadeIn = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: 'easeOut' as const,
        },
    },
};

// Container com stagger reduzido (mais rápido)
export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05,
        },
    },
};

// Entrada com escala sutil
export const scaleIn = {
    initial: {
        opacity: 0,
        scale: 0.95,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: 'easeOut' as const,
        },
    },
};

// Slide lateral esquerda
export const slideInLeft = {
    initial: {
        opacity: 0,
        x: -20,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut' as const,
        },
    },
};

// Slide lateral direita
export const slideInRight = {
    initial: {
        opacity: 0,
        x: 20,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut' as const,
        },
    },
};

// Para elementos que precisam de atenção (usado com moderação)
export const pulseOnce = {
    initial: { scale: 1 },
    animate: {
        scale: [1, 1.02, 1],
        transition: {
            duration: 0.3,
            ease: 'easeInOut' as const,
        },
    },
};

// Hover suave para cards (aplicar no whileHover)
export const hoverScale = {
    scale: 1.02,
    transition: {
        duration: 0.2,
        ease: 'easeOut' as const,
    },
};

// Tap feedback
export const tapScale = {
    scale: 0.98,
};
