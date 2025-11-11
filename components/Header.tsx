
import React from 'react';
import { LogoIcon } from '../constants';

interface HeaderProps {
    onCtaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
    return (
        <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <LogoIcon className="h-10 w-10" />
                    <span className="text-2xl font-bold text-white tracking-wider">KFITNESSPH</span>
                </div>
                <button
                    onClick={onCtaClick}
                    className="hidden md:inline-block bg-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105"
                >
                    Claim Free Trial
                </button>
            </div>
        </header>
    );
};

export default Header;
