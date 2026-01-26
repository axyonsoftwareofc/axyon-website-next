// src/hooks/useTheme.ts
// Re-exporta o useTheme do next-themes para manter compatibilidade
// com componentes que já usam esse hook

'use client';

import { useTheme as useNextTheme } from 'next-themes';

export const useTheme = () => {
    const { setTheme, resolvedTheme, systemTheme } = useNextTheme();

    // Função toggle para compatibilidade com código existente
    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return {
        theme: resolvedTheme as 'light' | 'dark' | undefined,
        setTheme,
        toggleTheme,
        systemTheme,
        isDark: resolvedTheme === 'dark',
        isLight: resolvedTheme === 'light',
    };
};

export default useTheme;
