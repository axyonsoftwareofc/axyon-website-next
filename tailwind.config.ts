// src/tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // 🔵 Brand Principal (Azul Axyon)
                primary: {
                    DEFAULT: '#2563EB',
                    hover: '#1D4ED8',
                },

                // ⚡ Accent (Ciano Axyon)
                accent: {
                    DEFAULT: '#22D3EE',
                    hover: '#06B6D4',
                },

                // 🌊 Navy
                navy: '#071B2E',

                // ☀️ Light Mode Neutrals
                light: {
                    bg: '#F8FAFC',
                    surface: '#FFFFFF',
                    'surface-2': '#F1F5F9',
                    border: '#E2E8F0',
                    'text-strong': '#0F172A',
                    text: '#334155',
                    muted: '#64748B',
                },

                // 🌙 Dark Mode Neutrals
                dark: {
                    bg: '#061427',
                    surface: '#0B1F3A',
                    'surface-2': '#0E2A4A',
                    border: '#173455',
                    'text-strong': '#EAF2FF',
                    text: '#C7D6F3',
                    muted: '#8FA7C9',
                },
            },

            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },

            backgroundImage: {
                'gradient-axyon': 'linear-gradient(135deg, #2563EB 0%, #22D3EE 100%)',
            },

            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
                'glow-primary': '0 0 20px rgba(37, 99, 235, 0.3)',
                'glow-accent': '0 0 20px rgba(34, 211, 238, 0.3)',
            },
        },
    },
    plugins: [],
};

export default config;