import React from 'react';
import { SectionTitle, Button } from '../components/UI';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-400">We are here to assist you with your luxury property needs.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <SectionTitle title="Visit Our Office" subtitle="Location" />
            <div className="space-y-8 mt-8">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4 text-yellow-700">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                  <p className="text-gray-600">123 Luxury Avenue, Bandra West<br/>Mumbai, Maharashtra 400050</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4 text-yellow-700">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210<br/>+91 22 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4 text-yellow-700">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">contact@brickaura.com<br/>support@brickaura.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4 text-yellow-700">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Hours</h3>
                  <p className="text-gray-600">Mon - Sat: 10:00 AM - 7:00 PM<br/>Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="font-serif text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow"></textarea>
              </div>

              <Button className="w-full justify-center py-4 text-lg">Send Message</Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;