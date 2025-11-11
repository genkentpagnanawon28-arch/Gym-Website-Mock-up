
import React from 'react';
import { LogoIcon } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                            <LogoIcon className="h-10 w-10" />
                            <span className="text-2xl font-bold text-white">KFITNESSPH</span>
                        </div>
                        <p className="text-gray-400">&copy; {new Date().getFullYear()} KFitness PH. All Rights Reserved.</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
                        <div>
                            <h4 className="font-bold text-yellow-400 mb-2">LOCATIONS</h4>
                            <p className="text-gray-400">Mandaue City, Cebu</p>
                            <p className="text-gray-400">Cebu City, Cebu</p>
                        </div>
                        <div>
                           <h4 className="font-bold text-yellow-400 mb-2">FOLLOW US</h4>
                           <div className="flex justify-center space-x-4">
                                <a href="https://www.instagram.com/kfitnessphcebu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.343 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm0 1.625c-2.403 0-2.748.01-3.725.058-.975.045-1.504.207-1.857.344-.467.182-.86.399-1.249.787-.388.388-.604.782-.787 1.249-.137.353-.3.882-.344 1.857-.049.977-.058 1.322-.058 3.725s.01 2.748.058 3.725c.045.975.207 1.504.344 1.857.182.466.399.86.787 1.249.388.388.782.604 1.249.787.353.137.882.3 1.857.344.977.049 1.322.058 3.725.058s2.748-.01 3.725-.058c.975-.045 1.504-.207 1.857-.344.467-.182.86-.399 1.249-.787.388-.388.604-.782-.787-1.249-.137-.353-.3-.882-.344-1.857-.049-.977-.058-1.322-.058-3.725s.01-2.748.058-3.725c.045-.975.207-1.504.344-1.857.182-.467.399-.86.787-1.249.388-.388.782-.604 1.249-.787.353-.137.882-.3 1.857-.344.977-.049 1.322-.058 3.725-.058zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.622a3.487 3.487 0 110-6.975 3.487 3.487 0 010 6.975zm6.355-9.886a1.233 1.233 0 100-2.467 1.233 1.233 0 000 2.467z" clipRule="evenodd" /></svg>
                                </a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
