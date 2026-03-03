import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import { MapPin, Bed, Bath, Square, Phone, MessageCircle, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '../components/UI';
import { motion } from 'framer-motion';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const property = PROPERTIES.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-serif mb-4">Property Not Found</h2>
        <Button to="/properties">Back to Listings</Button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Gallery Section */}
      <div className="h-[60vh] md:h-[80vh] bg-slate-100 relative group">
        <img 
          src={property.images[activeImage]} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
        
        {/* Thumbnails */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-white/20 backdrop-blur-md p-2 rounded-full">
          {property.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-yellow-500 scale-110' : 'border-transparent opacity-70'}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white rounded-xl shadow-xl p-8 mb-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-5 w-5 mr-2 text-yellow-600" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="block text-3xl font-bold text-yellow-600">{property.price}</span>
                  <span className="text-sm text-gray-400 uppercase tracking-wide">For Sale</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-100 mb-8">
                <div className="text-center">
                  <Bed className="h-8 w-8 mx-auto text-slate-700 mb-2" />
                  <span className="block font-bold text-xl">{property.beds}</span>
                  <span className="text-xs text-gray-400 uppercase">Bedrooms</span>
                </div>
                <div className="text-center border-l border-gray-100">
                  <Bath className="h-8 w-8 mx-auto text-slate-700 mb-2" />
                  <span className="block font-bold text-xl">{property.baths}</span>
                  <span className="text-xs text-gray-400 uppercase">Bathrooms</span>
                </div>
                <div className="text-center border-l border-gray-100">
                  <Square className="h-8 w-8 mx-auto text-slate-700 mb-2" />
                  <span className="block font-bold text-xl">{property.sqft}</span>
                  <span className="text-xs text-gray-400 uppercase">Square Ft</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold mb-4">Description</h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {property.description}
              </p>

              <h3 className="font-serif text-2xl font-bold mb-6">Amenities & Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mr-3" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Virtual Tour Placeholder */}
            <div className="bg-slate-900 rounded-xl p-8 text-center text-white relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-serif text-2xl mb-4 relative z-10">360° Virtual Tour</h3>
              <p className="text-gray-400 mb-6 relative z-10">Experience this property from the comfort of your home.</p>
              <Button variant="outline" className="relative z-10 border-white text-white hover:bg-white hover:text-slate-900">Start Tour</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl p-8 sticky top-24 border border-gray-100">
              <h3 className="font-serif text-xl font-bold mb-6 text-center">Interested in this property?</h3>
              
              <div className="flex items-center mb-6">
                <img src="https://picsum.photos/id/1006/100/100" className="w-16 h-16 rounded-full mr-4" alt="Agent" />
                <div>
                  <h4 className="font-bold">Rohan Oberoi</h4>
                  <p className="text-sm text-gray-500">Senior Estate Manager</p>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-yellow-600 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-yellow-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Phone className="h-5 w-5" /> Schedule a Visit
                </button>
                <button className="w-full bg-green-500 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-md">
                  <MessageCircle className="h-5 w-5" /> WhatsApp Inquiry
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:border-yellow-500" />
                  <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:border-yellow-500" />
                  <input type="tel" placeholder="Your Phone" className="w-full p-3 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:border-yellow-500" />
                  <textarea placeholder="Message" rows={3} className="w-full p-3 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:border-yellow-500"></textarea>
                  <Button className="w-full justify-center">Send Inquiry</Button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;