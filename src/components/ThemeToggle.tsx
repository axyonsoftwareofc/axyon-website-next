// src/components/ThemeToggle.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Evita hydration mismatch - usando useLayoutEffect pattern
    useEffect(() => {
        const timer = requestAnimationFrame(() => {
            setMounted(true);
        });
        return () => cancelAnimationFrame(timer);
    }, []);

    // Não renderiza nada até montar (evita flash)
    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse" />
        );
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
            aria-label={`Alternar para modo ${isDark ? 'claro' : 'escuro'}`}
        >
            <div className="relative w-6 h-6">
                <Sun
                    className={`w-5 h-5 text-yellow-500 transition-all duration-300 absolute inset-0 ${
                        !isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                    }`}
                />
                <Moon
                    className={`w-5 h-5 text-blue-400 transition-all duration-300 absolute inset-0 ${
                        isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'
                    }`}
                />
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {isDark ? 'Modo claro' : 'Modo escuro'}
            </div>
        </button>
    );
};

export default ThemeToggle;
