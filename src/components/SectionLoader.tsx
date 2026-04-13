// src/components/SectionLoader.tsx
'use client';

const SectionLoader = () => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center" style={{ backgroundColor: 'var(--bg)' }}>
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="relative">
                    <div className="w-12 h-12 border-4 rounded-full" style={{ borderColor: 'var(--border)' }}></div>
                    <div
                        className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent rounded-full animate-spin"
                        style={{ borderTopColor: 'var(--primary)' }}
                    ></div>
                </div>

                {/* Texto */}
                <p className="text-sm font-medium" style={{ color: 'var(--muted)' }}>
                    Carregando...
                </p>
            </div>
        </div>
    );
};

export default SectionLoader;