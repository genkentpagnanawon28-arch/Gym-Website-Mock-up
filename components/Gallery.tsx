
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Inside <span className="text-yellow-400">Our Gym</span></h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">A glimpse into the environment where transformations happen.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {GALLERY_IMAGES.map((img, index) => (
                        <div key={index} className={`overflow-hidden rounded-lg ${img.span === 'col' ? 'col-span-2' : ''} ${img.span === 'row' ? 'row-span-2' : ''}`}>
                            <img
                                src={img.src}
                                alt={`KFitness Gym Image ${index + 1}`}
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
