import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Home className="h-8 w-8 text-yellow-600" />
            <Link to="/" className="font-serif text-2xl font-bold tracking-wider text-slate-900">
              BRICK<span className="text-yellow-600">AURA</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'Properties', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`relative font-medium text-sm uppercase tracking-widest transition-colors duration-300 hover:text-yellow-600 ${
                    location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                      ? 'text-yellow-600'
                      : 'text-slate-700'
                  }`}
                >
                  {item}
                  {location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-600"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-yellow-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'Properties', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-yellow-600 hover:bg-gray-50"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Home className="h-8 w-8 text-yellow-500" />
            <span className="font-serif text-2xl font-bold tracking-wider text-white">
              BRICK<span className="text-yellow-500">AURA</span>
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
            Redefining luxury living with an exclusive collection of high-end properties. 
            Experience the art of living with Brick Aura.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-serif text-lg font-semibold mb-6 text-yellow-500">Navigation</h3>
          <ul className="space-y-3 text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/properties" className="hover:text-white transition-colors">Properties</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold mb-6 text-yellow-500">Contact</h3>
          <ul className="space-y-3 text-gray-400">
            <li>123 Luxury Avenue</li>
            <li>Bandra West, Mumbai 400050</li>
            <li>contact@brickaura.com</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>&copy; 2024 Brick Aura Realty. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Privacy Policy | Terms of Service</p>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};