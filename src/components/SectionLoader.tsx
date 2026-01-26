'use client';

const SectionLoader = () => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 dark:bg-[#0A192F]">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="relative">
                    <div className="w-12 h-12 border-4 border-gray-200 dark:border-[#1E3A5F] rounded-full"></div>
                    <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-blue-600 dark:border-t-[#64FFDA] rounded-full animate-spin"></div>
                </div>

                {/* Texto */}
                <p className="text-gray-600 dark:text-[#8892B0] text-sm font-medium">
                    Carregando...
                </p>
            </div>
        </div>
    );
};

export default SectionLoader;
