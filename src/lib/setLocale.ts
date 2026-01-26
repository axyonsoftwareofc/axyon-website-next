// src/lib/setLocale.ts
'use client';

// Função para uso em Client Components
export function setLocaleClient(locale: string) {
    // Define o cookie no lado do cliente
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;

    // Recarrega a página para aplicar o novo locale
    window.location.reload();
}