import React from 'react';
import EmergencySection from '../components/EmergencySection';

const Emergency: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600/40 to-red-800/40 dark:from-red-700/40 dark:to-red-900/40">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7470785/pexels-photo-7470785.jpeg')] bg-cover bg-center opacity-25"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Emergency Blood Services</h1>
            <p className="text-xl mb-8">
              24/7 emergency blood services for veterinary professionals.
              Quick response times for critical cases.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <EmergencySection />

      {/* Additional Information */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Emergency Protocol
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Before Requesting Blood
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li>• Have patient's blood type information ready</li>
                  <li>• Prepare current medical records</li>
                  <li>• Know the quantity needed</li>
                  <li>• Have your veterinary license number available</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li>• Immediate response to your call</li>
                  <li>• Blood type verification</li>
                  <li>• Delivery time estimate</li>
                  <li>• Follow-up care instructions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Emergency;