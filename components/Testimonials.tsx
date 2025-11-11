
import React from 'react';
import { TESTIMONIALS, QuoteIcon } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">What Our <span className="text-yellow-400">Members Say</span></h2>
                    <p className="text-gray-400 mt-4">Real stories from people just like you.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="bg-gray-800 p-8 rounded-lg border border-gray-700 flex flex-col">
                            <QuoteIcon className="w-10 h-10 text-yellow-400 mb-4" />
                            <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                <img
                                    className="w-12 h-12 rounded-full mr-4 object-cover"
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                />
                                <div>
                                    <p className="font-bold text-white">{testimonial.name}</p>
                                    <p className="text-sm text-yellow-400">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
