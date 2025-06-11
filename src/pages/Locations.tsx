import React from 'react';
import LocationMap from '../components/LocationMap';

const Locations: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600/40 to-red-800/40 dark:from-red-700/40 dark:to-red-900/40">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg')] bg-cover bg-center opacity-25"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find a Donation Location</h1>
            <p className="text-xl mb-8">
              Locate your nearest cat blood donation center and help save lives in your community.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <LocationMap />
    </main>
  );
};

export default Locations;