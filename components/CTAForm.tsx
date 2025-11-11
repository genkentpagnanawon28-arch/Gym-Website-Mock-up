
import React, { useState } from 'react';
import { LogoIcon } from '../constants';

const CTAForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && email && phone) {
            // In a real app, you would send this data to a server
            console.log({ name, email, phone });
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <section className="py-20 bg-black">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto bg-gray-800 p-10 rounded-lg border border-yellow-400">
                         <LogoIcon className="h-16 w-16 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Thank You!</h2>
                        <p className="text-lg text-gray-300">
                            Your 3-day free pass is reserved! We've sent the details to your email. We can't wait to see you at the gym!
                        </p>
                    </div>
                </div>
            </section>
        );
    }


    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="bg-gray-800 rounded-lg p-8 md:p-12 shadow-2xl border-t-4 border-yellow-400">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                            Ready to Start?
                        </h2>
                        <p className="mt-4 text-lg text-yellow-400 font-semibold">
                           Claim Your FREE 3-Day Pass Now!
                        </p>
                        <p className="mt-2 text-gray-400 max-w-xl mx-auto">
                            Fill out the form below and we'll send your free pass right to your inbox. No commitments, no hidden fees.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Full Name"
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>
                             <div>
                                <label htmlFor="phone" className="sr-only">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Phone Number"
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-8 bg-yellow-400 text-gray-900 font-bold py-4 px-6 rounded-lg text-lg hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105"
                        >
                            Start My Free Trial
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CTAForm;
