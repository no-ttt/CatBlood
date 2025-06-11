import React from 'react';
import { Users, Award, Building2, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600/40 to-red-800/40 dark:from-red-700/40 dark:to-red-900/40">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg')] bg-cover bg-center opacity-25"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl mb-8">
              Dedicated to saving feline lives through voluntary blood donation.
              We connect donor cats with those in need, ensuring every cat has
              access to life-saving blood products.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 dark:text-red-500 mb-2">5000+</div>
              <div className="text-gray-600 dark:text-gray-400">Lives Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 dark:text-red-500 mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-400">Donor Cats</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 dark:text-red-500 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Partner Clinics</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 dark:text-red-500 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-red-600 dark:text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our veterinary professionals are specially trained in feline blood donation procedures.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <Award className="w-12 h-12 text-red-600 dark:text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quality Standards</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We maintain the highest standards in blood collection, processing, and storage.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <Building2 className="w-12 h-12 text-red-600 dark:text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Modern Facilities</h3>
              <p className="text-gray-600 dark:text-gray-400">
                State-of-the-art equipment and facilities ensure safe and efficient donations.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <Heart className="w-12 h-12 text-red-600 dark:text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Compassionate Care</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We prioritize the comfort and well-being of every donor cat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <img
                  src="https://images.pexels.com/photos/5723961/pexels-photo-5723961.jpeg"
                  alt="Dr. Sarah Chen"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dr. Sarah Chen</h3>
              <p className="text-gray-600 dark:text-gray-400">Medical Director</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <img
                  src="https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg"
                  alt="Dr. Michael Rodriguez"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dr. Michael Rodriguez</h3>
              <p className="text-gray-600 dark:text-gray-400">Operations Director</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <img
                  src="https://images.pexels.com/photos/5722129/pexels-photo-5722129.jpeg"
                  alt="Dr. Emily Thompson"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dr. Emily Thompson</h3>
              <p className="text-gray-600 dark:text-gray-400">Research Director</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;