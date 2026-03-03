import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import { Property } from '../types';
import { motion } from 'framer-motion';

export const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  onClick?: () => void;
  to?: string;
}> = ({ children, variant = 'primary', className = '', onClick, to }) => {
  const baseClasses = "px-8 py-3 rounded-none font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-sm tracking-wider uppercase";
  const variants = {
    primary: "bg-yellow-600 text-white hover:bg-yellow-700 shadow-md",
    outline: "border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white",
    white: "bg-white text-slate-900 hover:bg-gray-100"
  };

  const content = (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }
  return content;
};

export const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform perspective-1000 border border-gray-100"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-900 rounded-sm">
          {property.type}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">
            {property.title}
          </h3>
          <span className="text-yellow-600 font-bold text-lg">{property.price}</span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-4 text-sm">
          <MapPin className="h-4 w-4 mr-1" />
          {property.location}
        </div>
        
        <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-4 mb-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4 text-yellow-600" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-yellow-600" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4 text-yellow-600" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
        
        <Link 
          to={`/properties/${property.id}`}
          className="w-full block text-center py-2 bg-slate-50 text-slate-700 font-medium text-sm hover:bg-slate-900 hover:text-white transition-colors duration-300 rounded-lg uppercase tracking-wider"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export const SectionTitle: React.FC<{ title: string; subtitle: string; centered?: boolean }> = ({ title, subtitle, centered = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-2 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="font-serif text-3xl md:text-4xl font-bold text-slate-900"
    >
      {title}
    </motion.h2>
    <div className={`h-1 w-20 bg-yellow-500 mt-4 ${centered ? 'mx-auto' : ''}`} />
  </div>
);

export const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className="bg-white rounded-xl shadow-lg p-4 animate-pulse h-96">
        <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-20 bg-gray-200 rounded mb-4"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
    ))}
  </div>
);