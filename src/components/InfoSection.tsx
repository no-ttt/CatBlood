import React from 'react';
import { Droplet, CheckCircle, AlertCircle } from 'lucide-react';

interface BloodTypeInfoProps {
  type: string;
  description: string;
  compatibility: string[];
  rarity: 'common' | 'uncommon' | 'rare';
  image: string;
}

const BloodTypeInfo: React.FC<BloodTypeInfoProps> = ({ type, description, compatibility, rarity, image }) => {
  const rarityColor = {
    common: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    uncommon: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    rare: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48">
        <img src={image} alt={`Cat with ${type} blood type`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Droplet size={24} className="text-red-600 dark:text-red-500 mr-2" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{type}</h3>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${rarityColor[rarity]}`}>
            {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
          </span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Compatible with:</h4>
          <div className="flex flex-wrap gap-2">
            {compatibility.map((bloodType, index) => (
              <span 
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {bloodType}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="info">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Understanding Cat Blood Types</h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Just like humans, cats have different blood types that determine compatibility for transfusions.
            Learn about the most common feline blood types and why donation is so important.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BloodTypeInfo 
            type="Type A" 
            description="The most common blood type found in domestic cats worldwide. Cats with type A blood have strong anti-B antibodies."
            compatibility={["Type A"]}
            rarity="common"
            image="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg"
          />
          
          <BloodTypeInfo 
            type="Type B" 
            description="Less common than Type A, but prevalent in certain breeds. Cats with type B have very strong anti-A antibodies."
            compatibility={["Type B"]}
            rarity="uncommon"
            image="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg"
          />
          
          <BloodTypeInfo 
            type="Type AB" 
            description="The rarest blood type, found in less than 1% of cats. These cats have no antibodies against other blood types."
            compatibility={["Type A", "Type B", "Type AB"]}
            rarity="rare"
            image="https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/7725961/pexels-photo-7725961.jpeg"
              alt="Cat receiving medical care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 p-8 flex items-center">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Why Feline Blood Donation Matters</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle size={24} className="text-red-500 mr-4 flex-shrink-0 mt-1" />
                    <p>Blood transfusions save cats in trauma, surgery, and severe anemia cases</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={24} className="text-red-500 mr-4 flex-shrink-0 mt-1" />
                    <p>One donation can help multiple cats in need</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={24} className="text-red-500 mr-4 flex-shrink-0 mt-1" />
                    <p>Critical shortage of feline blood products nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Critical Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <AlertCircle size={24} className="text-red-600 dark:text-red-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Blood Type Compatibility</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Matching blood types is crucial. Transfusion reactions can be severe or fatal with mismatched types.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <AlertCircle size={24} className="text-red-600 dark:text-red-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Storage Limitations</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Feline blood products have a limited shelf life, making regular donations essential.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <AlertCircle size={24} className="text-red-600 dark:text-red-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Emergency Needs</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Emergency situations require immediate access to compatible blood products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;