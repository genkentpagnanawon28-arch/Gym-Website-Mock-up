
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Why <span className="text-yellow-400">KFitness</span> Stands Out</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We're more than just a gym. We're your partner in achieving peak physical and mental wellness.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feature, index) => (
                        <div key={index} className="bg-gray-800 p-8 rounded-lg text-center border border-gray-700 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-gray-900 mx-auto mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
