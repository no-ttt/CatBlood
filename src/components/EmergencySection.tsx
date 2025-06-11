import React from 'react';
import { AlertTriangle, Phone, Clock, ArrowRight } from 'lucide-react';
import { CTAButton } from './Navigation';

const EmergencySection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600/40 to-red-800/40 dark:from-red-700/40 dark:to-red-900/40 text-white" id="emergency">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
              <AlertTriangle size={18} className="mr-2" />
              <span className="font-medium">Emergency Blood Request</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Blood Urgently?</h2>
            
            <p className="text-white/90 text-lg mb-8 max-w-xl">
              For veterinary professionals: If you have a feline patient in need of an emergency blood transfusion,
              we can help connect you with available blood products.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Phone size={24} className="mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Emergency Hotline</h3>
                  <p className="text-white/90">Available 24/7: (800) 555-CATS</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={24} className="mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Rapid Response</h3>
                  <p className="text-white/90">We aim to process and deliver emergency requests within 2 hours</p>
                </div>
              </div>
            </div>
            
            <CTAButton>Request Emergency Blood</CTAButton>
          </div>
          
          <div className="md:w-1/2 bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Veterinary Clinic Registration</h3>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Clinic Name</label>
                  <input 
                    type="text"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/50"
                    placeholder="Enter clinic name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">License Number</label>
                  <input 
                    type="text"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/50"
                    placeholder="Enter license number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Contact Person</label>
                  <input 
                    type="text"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/50"
                    placeholder="Enter name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input 
                    type="tel"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/50"
                    placeholder="Enter phone number"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/50"
                    
                    placeholder="Enter email address"
                  />
                </div>
              </div>
              
              <div>
                <button type="submit" className="w-full bg-white text-red-600 font-medium py-3 rounded-lg hover:bg-white/90 transition-colors">
                  Register Clinic
                </button>
              </div>
            </form>
            
            <div className="mt-4 text-center">
              <a href="/learn-more" className="inline-flex items-center text-white/80 text-sm hover:text-white transition-colors">
                Learn more about our emergency blood program
                <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;