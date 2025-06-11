import React from 'react';
import { Clipboard, Award, Heart, CheckCircle } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-red-600 dark:bg-red-700 flex items-center justify-center mb-4">
          {icon}
        </div>
        <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-red-600 dark:border-red-700 flex items-center justify-center text-red-600 dark:text-red-500 font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

const DonationProcess: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">The Donation Process</h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Donating blood is a simple, safe process for healthy cats. Here's what to expect when you bring your
            feline friend to donate blood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Step 
            number={1}
            title="Registration"
            description="Complete an online registration form with your cat's information and health history."
            icon={<Clipboard size={24} className="text-white" />}
          />
          
          <Step 
            number={2}
            title="Screening"
            description="Your cat will undergo a physical examination and blood test to ensure they're healthy."
            icon={<CheckCircle size={24} className="text-white" />}
          />
          
          <Step 
            number={3}
            title="Donation"
            description="The actual blood collection takes just 10-15 minutes, and your cat will be comfortable."
            icon={<Heart size={24} className="text-white" />}
          />
          
          <Step 
            number={4}
            title="Recovery"
            description="After donation, your cat will receive a treat and rest for a short period before going home."
            icon={<Award size={24} className="text-white" />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Is My Cat Eligible?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Between 1-8 years old</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Weighs at least 10 pounds (4.5kg)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Current on vaccinations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Indoor-only lifestyle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Friendly temperament</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">No history of serious illness</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.pexels.com/photos/7725966/pexels-photo-7725966.jpeg"
              alt="Cat at veterinary clinic"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-800/90 dark:from-red-700/90 dark:to-red-900/90 p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">Benefits for Donor Cats</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-white mr-2 mt-1 flex-shrink-0" />
                  <span>Free blood typing and health screening</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-white mr-2 mt-1 flex-shrink-0" />
                  <span>Complimentary annual checkups</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-white mr-2 mt-1 flex-shrink-0" />
                  <span>Priority access to blood products if ever needed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-white mr-2 mt-1 flex-shrink-0" />
                  <span>Special donor cat recognition program</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-white mr-2 mt-1 flex-shrink-0" />
                  <span>Gift bag with treats and toys after each donation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationProcess;