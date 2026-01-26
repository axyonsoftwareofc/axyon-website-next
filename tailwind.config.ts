// tailwind.config.ts
// No Tailwind v4, o darkMode é configurado via CSS (@custom-variant)
// Este arquivo é opcional, mas útil para cores customizadas

import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // DARK MODE - Cores Axyon
                primary: {
                    DEFAULT: '#0A192F',
                    light: '#112240',
                    lighter: '#1E3A5F',
                },
                secondary: '#64FFDA',
                accent: '#8892B0',
                muted: '#A8B2D1',
                light: '#CCD6F6',
                cyan: '#64FFDA',

                // LIGHT MODE
                'light-bg': '#F8FAFC',
                'light-surface': '#FFFFFF',
                'light-text': '#1E293B',
                'light-muted': '#64748B',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
                'glow-cyan': '0 0 20px rgba(100, 255, 218, 0.15)',
                'glow-blue': '0 0 20px rgba(59, 130, 246, 0.15)',
            },
        },
    },
    plugins: [],
};

export default config;
