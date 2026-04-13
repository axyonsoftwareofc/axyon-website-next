import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import SectionLoader from '@/components/SectionLoader';

// Hero NÃO usa dynamic (aparece imediatamente)
import Hero from '@/sections/Hero';
import dynamic from "next/dynamic";

// Apenas seções ABAIXO DA DOBRA usam dynamic
const Services = dynamic(() => import('@/sections/Services'), {
    loading: () => <SectionLoader />,
});

const Portfolio = dynamic(() => import('@/sections/Portfolio'), {
    loading: () => <SectionLoader />,
});

const Process = dynamic(() => import('@/sections/Process'), {
    loading: () => <SectionLoader />,
});

const Testimonials = dynamic(() => import('@/sections/Testimonials'), {
    loading: () => <SectionLoader />,
});

const Contact = dynamic(() => import('@/sections/Contact'), {
    loading: () => <SectionLoader />,
});

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <Hero /> {/* ← SEM LAZY LOAD */}
                <Services />
                <Portfolio />
                <Process />
                <Testimonials />
                <Contact />
            </main>
            <FloatingCTA />
            <Footer />
        </div>
    );
}