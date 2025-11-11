
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Premium <span className="text-yellow-400">Services</span></h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Everything you need to reach your goals under one roof.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden group">
                            <img src={service.imageUrl} alt={service.title} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-75 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-300">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
