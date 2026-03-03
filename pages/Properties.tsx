import React, { useState, useEffect } from 'react';
import { PROPERTIES } from '../constants';
import { PropertyCard, SectionTitle, LoadingSkeleton } from '../components/UI';
import { Filter, Search } from 'lucide-react';

const Properties = () => {
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [search, setSearch] = useState('');

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProperties = PROPERTIES.filter(prop => {
    const matchesType = filterType === 'All' || prop.type === filterType;
    const matchesSearch = prop.location.toLowerCase().includes(search.toLowerCase()) || 
                          prop.title.toLowerCase().includes(search.toLowerCase());
    
    // Simple price logic for demo (Parsing string like '₹12.5 Cr')
    let matchesPrice = true;
    if (priceRange !== 'All') {
      const priceVal = parseFloat(prop.price.replace(/[^\d.]/g, ''));
      if (priceRange === 'Under 5Cr') matchesPrice = priceVal < 5;
      if (priceRange === '5Cr - 10Cr') matchesPrice = priceVal >= 5 && priceVal <= 10;
      if (priceRange === 'Above 10Cr') matchesPrice = priceVal > 10;
    }

    return matchesType && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Exclusive Collection</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Browse through India's finest luxury real estate listings.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Filters Card */}
        <div className="bg-white rounded-xl shadow-xl p-6 mb-12 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Search Location</label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input 
                  type="text"
                  placeholder="E.g. Mumbai, Worli..."
                  className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Property Type</label>
              <select 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500 bg-white"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option>All</option>
                <option>Villa</option>
                <option>Penthouse</option>
                <option>Apartment</option>
                <option>Estate</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Price Range</label>
              <select 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500 bg-white"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option>All</option>
                <option>Under 5Cr</option>
                <option>5Cr - 10Cr</option>
                <option>Above 10Cr</option>
              </select>
            </div>

            <div className="flex items-end">
              <button 
                className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition-colors flex justify-center items-center gap-2"
                onClick={() => {
                  setFilterType('All');
                  setPriceRange('All');
                  setSearch('');
                }}
              >
                <Filter className="h-4 w-4" /> Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Listings Grid */}
        {loading ? (
          <LoadingSkeleton />
        ) : filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map(prop => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif text-gray-400 mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;