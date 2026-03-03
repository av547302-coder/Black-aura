import React from 'react';
import { SectionTitle } from '../components/UI';
import { TEAM } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
             <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Building" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="font-serif text-5xl md:text-6xl font-bold mb-6"
          >
            The Art of Living
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Brick Aura represents the finest luxury real estate in India. We don't just sell homes; we curate lifestyles.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <SectionTitle title="Our Heritage" subtitle="Since 2010" />
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Founded on the principles of integrity, discretion, and excellence, Brick Aura has established itself as the premier luxury real estate agency in the region.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our portfolio includes some of the most significant transactions in Mumbai, Bangalore, and Delhi. We cater to High Net Worth Individuals (HNIs), NRIs, and corporate leaders who demand nothing but the best.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <span className="block text-4xl font-bold text-yellow-600 mb-2">₹500Cr+</span>
                <span className="text-sm uppercase tracking-wider text-gray-500">Assets Managed</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-yellow-600 mb-2">1200+</span>
                <span className="text-sm uppercase tracking-wider text-gray-500">Happy Families</span>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-yellow-500 rounded-xl"></div>
             <img 
               src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop" 
               alt="Meeting" 
               className="rounded-xl shadow-2xl relative z-10 w-full"
             />
          </div>
        </div>

        {/* Team */}
        <SectionTitle title="Meet Our Experts" subtitle="The Team" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
          {TEAM.map((member) => (
            <motion.div 
              key={member.id}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="h-80 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-serif text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-yellow-600 font-medium mb-4">{member.role}</p>
                <div className="text-gray-500 text-sm space-y-1">
                  <p>{member.phone}</p>
                  <p>{member.email}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;