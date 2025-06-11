import React from 'react';
import { Droplet, Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavigation = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Droplet size={28} className="text-red-500 mr-2" />
              <span className="text-xl font-bold">
                Cat<span className="text-red-500">Blood</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Dedicated to saving feline lives through blood donation. 
              Our mission is to ensure every cat in need has access to life-saving blood products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" onClick={(e) => handleNavigation('home', e)} className="text-gray-400 hover:text-red-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNavigation('about', e)} className="text-gray-400 hover:text-red-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNavigation('donate', e)} className="text-gray-400 hover:text-red-500 transition-colors">Donate Blood</a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNavigation('locations', e)} className="text-gray-400 hover:text-red-500 transition-colors">Find Locations</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Emergency Requests</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">FAQs</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Donor Eligibility</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Donation Process</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Cat Blood Types</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Research & Publications</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Veterinary Partners</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">info@catblood.org</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">(800) 555-CATS</span>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-colors"
                >
                  Contact Form
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} CatBlood Organization. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-red-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;