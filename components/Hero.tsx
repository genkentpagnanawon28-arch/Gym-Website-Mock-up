
import React from 'react';

interface HeroProps {
    onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
    return (
        <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white bg-black">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=1060')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
            <div className="relative z-10 p-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4">
                    Your Fitness Transformation <br /> Begins at <span className="text-yellow-400">KFitness</span>
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
                    Experience Cebu's premier 24/7 training and recovery gym. Premium equipment, expert trainers, and a community that inspires.
                </p>
                <button
                    onClick={onCtaClick}
                    className="bg-yellow-400 text-gray-900 font-bold py-4 px-10 text-lg rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-yellow-400/20"
                >
                    Get My 3-Day Free Pass
                </button>
            </div>
        </section>
    );
};

export default Hero;
