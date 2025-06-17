import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <main className="pt-20">
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">聯絡我們</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-red-600 dark:text-red-500 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">電話</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">緊急專線：(02) 555-CATS</p>
                <p className="text-gray-600 dark:text-gray-400">一般諮詢：(02) 123-4567</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-red-600 dark:text-red-500 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">電子信箱</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">info@catblood.org</p>
                <p className="text-gray-600 dark:text-gray-400">emergency@catblood.org</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-red-600 dark:text-red-500 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">地址</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  台北市信義區信義路五段7號<br />
                  台北101大樓
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-red-600 dark:text-red-500 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">服務時間</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  週一至週五：上午8點 - 下午8點<br />
                  週六至週日：上午9點 - 下午5點
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">發送訊息給我們</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">姓名</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="請輸入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">電子信箱</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="請輸入您的電子信箱"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">主旨</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="請輸入訊息主旨"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">訊息內容</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="請輸入您的訊息內容"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  發送訊息
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