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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">成為供血貓</h1>
            <p className="text-xl mb-8">
              您的愛貓可以成為英雄。立即註冊，透過捐血幫助拯救貓咪生命。
            </p>
            <CTAButton primary>預約捐血</CTAButton>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            如何成為供血貓
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-lg text-center">
                <Calendar className="w-12 h-12 text-red-600 dark:text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">預約</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  在最近的捐血中心預約時間
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-red-200 dark:bg-red-800"></div>
            </div>

            <div className="relative">
              <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-lg text-center">
                <FileText className="w-12 h-12 text-red-600 dark:text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">註冊</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  完成供血貓註冊表單
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-red-200 dark:bg-red-800"></div>
            </div>

            <div className="relative">
              <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-lg text-center">
                <Stethoscope className="w-12 h-12 text-red-600 dark:text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">健檢</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  快速健康檢查和血型檢測
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-red-200 dark:bg-red-800"></div>
            </div>

            <div className="relative">
              <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-lg text-center">
                <Clock className="w-12 h-12 text-red-600 dark:text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">捐血</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  15分鐘捐血過程
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">供血貓條件</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mr-3"></span>
                  年齡：1-8歲
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mr-3"></span>
                  體重：至少4.5公斤
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mr-3"></span>
                  疫苗接種完整
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mr-3"></span>
                  室內生活
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mr-3"></span>
                  健康狀況良好
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mr-3"></span>
                  性格溫和
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-800 dark:from-red-700 dark:to-red-900 p-8 rounded-lg shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6">供血貓福利</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  免費年度健康檢查
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  血型檢測
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  需要時優先獲得血液製品
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  供血貓認證計畫
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  每次捐血後贈送禮品袋
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  幫助拯救生命
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