import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <main className="pt-20">
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Contact Us</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-red-600 dark:text-red-500 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Phone</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Emergency: (800) 555-CATS</p>
                <p className="text-gray-600 dark:text-gray-400">General: (555) 123-4567</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-red-600 dark:text-red-500 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Email</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">info@catblood.org</p>
                <p className="text-gray-600 dark:text-gray-400">emergency@catblood.org</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-red-600 dark:text-red-500 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Address</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Main Street<br />
                  New York, NY 10001
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-red-600 dark:text-red-500 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Hours</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Monday - Friday: 8am - 8pm<br />
                  Saturday - Sunday: 9am - 5pm
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;