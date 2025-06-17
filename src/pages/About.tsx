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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">我們的使命</h1>
            <p className="text-xl mb-8">
              致力於透過志願捐血拯救貓咪生命。
              我們連結供血貓與需要輸血的貓咪，確保每隻貓咪都能
              獲得救命的血液製品。
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
              <div className="text-gray-600 dark:text-gray-400">拯救生命</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 dark:text-red-500 mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-400">供血貓</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 dark:text-red-500 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">合作診所</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 dark:text-red-500 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">緊急服務</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-red-600 dark:text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">專業團隊</h3>
              <p className="text-gray-600 dark:text-gray-400">
                我們的獸醫專業人員都接受過貓咪捐血程序的專業訓練。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <Award className="w-12 h-12 text-red-600 dark:text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">品質標準</h3>
              <p className="text-gray-600 dark:text-gray-400">
                我們在血液採集、處理和儲存方面維持最高標準。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <Building2 className="w-12 h-12 text-red-600 dark:text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">現代化設施</h3>
              <p className="text-gray-600 dark:text-gray-400">
                最先進的設備和設施確保安全高效的捐血過程。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <Heart className="w-12 h-12 text-red-600 dark:text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">愛心照護</h3>
              <p className="text-gray-600 dark:text-gray-400">
                我們優先考慮每隻供血貓的舒適和福祉。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              我們的領導團隊
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src="https://images.pexels.com/photos/5723961/pexels-photo-5723961.jpeg"
                    alt="陳醫師"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">陳雅雯醫師</h3>
                <p className="text-gray-600 dark:text-gray-400">醫療總監</p>
              </div>

              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src="https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg"
                    alt="王醫師"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">王志明醫師</h3>
                <p className="text-gray-600 dark:text-gray-400">營運總監</p>
              </div>

              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src="https://images.pexels.com/photos/5722129/pexels-photo-5722129.jpeg"
                    alt="李醫師"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">李美玲醫師</h3>
                <p className="text-gray-600 dark:text-gray-400">研究總監</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;