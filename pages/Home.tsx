import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ArrowRight, Star } from 'lucide-react';
import { PROPERTIES, TESTIMONIALS } from '../constants';
import { PropertyCard, SectionTitle, Button } from '../components/UI';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/properties?search=${searchTerm}`);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
            alt="Luxury Home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Discover Your <br/>
              <span className="text-yellow-400">Perfect Sanctuary</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
              Experience the pinnacle of luxury living with our curated collection of India's most exclusive properties.
            </p>

            <form onSubmit={handleSearch} className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/30 max-w-2xl mx-auto flex">
              <div className="flex-grow flex items-center px-6">
                <Search className="text-white/70 h-5 w-5 mr-3" />
                <input 
                  type="text" 
                  placeholder="Search by location, property type..." 
                  className="bg-transparent border-none outline-none text-white placeholder-white/70 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Search
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <SectionTitle title="Featured Residences" subtitle="Exclusively Curated" />
            <Link 
              to="/properties" 
              className="hidden md:flex items-center text-slate-600 hover:text-yellow-600 transition-colors mb-12 group"
            >
              View All Properties <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.slice(0, 3).map((property, idx) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <Button to="/properties" variant="outline">View All Properties</Button>
          </div>
        </div>
      </section>

      {/* Location Categories */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-600/10 rounded-full blur-3xl transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title="Prime Locations" subtitle="Explore" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'Mumbai', img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop' },
              { name: 'Bangalore', img: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800&auto=format&fit=crop' },
              { name: 'Goa', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop' },
              { name: 'Hyderabad', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop' }
            ].map((city, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => navigate(`/properties?search=${city.name}`)}
              >
                <img src={city.img} alt={city.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold">{city.name}</h3>
                    <p className="text-yellow-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">View Properties</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Client Stories" subtitle="Testimonials" centered />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {TESTIMONIALS.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-xl relative shadow-sm border border-gray-100"
              >
                <div className="absolute -top-6 left-8 bg-yellow-600 rounded-full p-2 shadow-lg">
                   <Star className="text-white h-6 w-6" fill="white" />
                </div>
                <p className="text-gray-600 italic mb-6 pt-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-xs text-yellow-600 uppercase tracking-wide">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">Ready to find your dream home?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join our exclusive list of clientele and get early access to off-market luxury listings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact">Contact an Agent</Button>
            <Button to="/properties" variant="outline">Browse Listings</Button>
          </div>
        </div>
      </section>
      
      {/* Quick form import at bottom of page usually good for lead capture */}
    </div>
  );
};

export default Home;