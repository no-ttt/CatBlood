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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">緊急用血服務</h1>
            <p className="text-xl mb-8">
              為獸醫專業人員提供24小時緊急用血服務。
              針對危急病例提供快速回應時間。
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
              緊急處理流程
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  申請用血前準備
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li>• 準備好患者的血型資訊</li>
                  <li>• 備妥目前的醫療記錄</li>
                  <li>• 確認所需血液量</li>
                  <li>• 準備您的獸醫執照號碼</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  服務流程說明
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li>• 立即回應您的來電</li>
                  <li>• 血型相容性驗證</li>
                  <li>• 配送時間評估</li>
                  <li>• 後續照護指導</li>
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