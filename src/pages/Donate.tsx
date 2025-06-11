import React from 'react';
import { Calendar, Clock, FileText, Stethoscope } from 'lucide-react';
import { CTAButton } from '../components/Navigation';

const Donate: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600/40 to-red-800/40 dark:from-red-700/40 dark:to-red-900/40">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg')] bg-cover bg-center opacity-25"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Donor</h1>
            <p className="text-xl mb-8">
              Your cat can be a hero. Register today to help save feline lives
              through blood donation.
            </p>
            <CTAButton primary>Schedule Appointment</CTAButton>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            How to Become a Donor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-lg text-center">
                <Calendar className="w-12 h-12 text-red-600 dark:text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Schedule</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Book an appointment at your nearest donation center
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-red-200 dark:bg-red-800"></div>
            </div>

            <div className="relative">
              <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-lg text-center">
                <FileText className="w-12 h-12 text-red-600 dark:text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Register</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Complete the donor registration form
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-red-200 dark:bg-red-800"></div>
            </div>

            <div className="relative">
              <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-lg text-center">
                <Stethoscope className="w-12 h-12 text-red-600 dark:text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Screening</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Quick health check and blood typing
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-red-200 dark:bg-red-800"></div>
            </div>

            <div className="relative">
              <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-lg text-center">
                <Clock className="w-12 h-12 text-red-600 dark:text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Donate</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  15-minute donation process
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Donor Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mr-3"></span>
                  Age: 1-8 years old
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mr-3"></span>
                  Weight: Minimum 10 pounds
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mr-3"></span>
                  Up-to-date vaccinations
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mr-3"></span>
                  Indoor lifestyle
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mr-3"></span>
                  Good health condition
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mr-3"></span>
                  Friendly temperament
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-800 dark:from-red-700 dark:to-red-900 p-8 rounded-lg shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Donor Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Free annual health screenings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Blood type testing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Priority blood products if needed
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Donor recognition program
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Gift bag after each donation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Helping save lives
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donate;