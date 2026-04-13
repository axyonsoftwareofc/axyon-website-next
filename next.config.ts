import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'i.pravatar.cc' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
        ],
    },

    // Silenciar warning do Turbopack sobre lockfiles
    turbopack: {
        root: process.cwd(),
    },
};

export default withNextIntl(nextConfig);