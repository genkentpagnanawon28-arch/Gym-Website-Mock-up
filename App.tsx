
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTAForm from './components/CTAForm';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Services from './components/Services';

const App: React.FC = () => {
    const ctaFormRef = useRef<HTMLDivElement>(null);

    const scrollToCta = () => {
        ctaFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header onCtaClick={scrollToCta} />
            <main>
                <Hero onCtaClick={scrollToCta} />
                <Features />
                <Services />
                <Gallery />
                <Testimonials />
                <div ref={ctaFormRef} id="cta-form">
                    <CTAForm />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
