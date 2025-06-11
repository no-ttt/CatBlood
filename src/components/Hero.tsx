import React from 'react';
import { Heart, Clock, MapPin } from 'lucide-react';
import { CTAButton } from './Navigation';

interface HeroProps {
  onNavigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-900/20 dark:from-red-900/30 dark:to-gray-900/40 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg')] bg-cover bg-center opacity-15 dark:opacity-10 z-[-1]"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Save a Cat's Life: <span className="text-red-600 dark:text-red-500">Donate Blood</span>
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Your cat could be a hero. Just like humans, cats need blood donations too. 
              Join our community of cat donors and help save feline lives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <CTAButton primary onClick={() => onNavigate('pet-registration')}>Register Your Cat</CTAButton>
              <CTAButton onClick={() => onNavigate('about')}>Learn More</CTAButton>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg flex items-center">
                <Heart size={24} className="text-red-600 dark:text-red-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Safe Process</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Painless, supervised donation</p>
                </div>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg flex items-center">
                <Clock size={24} className="text-red-600 dark:text-red-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Quick &amp; Easy</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Only takes 30-45 minutes</p>
                </div>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg flex items-center">
                <MapPin size={24} className="text-red-600 dark:text-red-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Multiple Locations</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Find a center near you</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute top-0 -right-4 w-72 h-72 bg-red-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
              <div className="absolute bottom-0 -left-4 w-72 h-72 bg-red-600/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg" 
                  alt="Cat at veterinary clinic"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover object-center"
                />
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-500 mb-1">5000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Lives Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave pattern */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-white dark:text-gray-900 fill-current">
          <path d="M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,218.7C672,192,768,160,864,165.3C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;