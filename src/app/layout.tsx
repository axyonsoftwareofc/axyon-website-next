// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0A192F" },
    ],
};

export const metadata: Metadata = {
    metadataBase: new URL("https://axyon.com.br"),
    title: "Axyon Software House - Desenvolvimento de Software e Soluções Digitais",
    description:
        "Desenvolvemos aplicações web, apps mobile, e-commerce e sistemas empresariais sob medida. Software house especializada em transformar ideias em soluções digitais de sucesso.",
    keywords: [
        "desenvolvimento web",
        "aplicativos mobile",
        "software house",
        "sistemas empresariais",
        "e-commerce",
        "react",
        "next.js",
        "node.js",
        "consultoria tech",
    ],
    authors: [{ name: "Axyon Software House" }],
    creator: "Axyon Software House",
    publisher: "Axyon Software House",
    robots: "index, follow",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://axyon.com.br",
        siteName: "Axyon Software House",
        title: "Axyon Software House - Soluções Digitais",
        description:
            "Transformamos ideias em realidade digital. Desenvolvimento de software de alta qualidade.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Axyon Software House",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Axyon Software House - Soluções Digitais",
        description:
            "Transformamos ideias em realidade digital. Desenvolvimento de software de alta qualidade.",
        images: ["/og-image.jpg"],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
        <head>
            {/* Script crítico para aplicar tema ANTES do React hidratar */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                            (function() {
                                try {
                                    var theme = localStorage.getItem('theme');
                                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                    
                                    if (theme === 'dark' || (!theme && prefersDark)) {
                                        document.documentElement.classList.add('dark');
                                    } else {
                                        document.documentElement.classList.remove('dark');
                                    }
                                } catch (e) {}
                            })();
                        `,
                }}
            />
        </head>
        <body className={`${inter.variable} font-sans antialiased`}>
        <NextIntlClientProvider>
            <Providers>{children}</Providers>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
