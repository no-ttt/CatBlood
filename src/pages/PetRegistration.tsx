import React, { useState } from 'react';
import { Heart, User, Calendar, CreditCard, FileText, CheckCircle } from 'lucide-react';

interface PetRegistrationProps {
  onNavigate: (path: string) => void;
}

interface PetFormData {
  petName: string;
  petBirthday: string;
  chipNumber: string;
  ownerName: string;
  ownerIdNumber: string;
  ownerPhone: string;
  ownerAddress: string;
  ownerEmail: string;
  registrationType: 'self' | 'donation';
  agreeToTerms: boolean;
}

const PetRegistration: React.FC<PetRegistrationProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<PetFormData>({
    petName: '',
    petBirthday: '',
    chipNumber: '',
    ownerName: '',
    ownerIdNumber: '',
    ownerPhone: '',
    ownerAddress: '',
    ownerEmail: '',
    registrationType: 'self',
    agreeToTerms: false
  });

  const handleInputChange = (field: keyof PetFormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    alert('註冊成功！我們將盡快聯絡您安排健康檢查。');
    onNavigate('login');
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
              step <= currentStep
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
            }`}
          >
            {step < currentStep ? <CheckCircle size={20} /> : step}
          </div>
          {step < 4 && (
            <div
              className={`w-16 h-1 mx-2 ${
                step < currentStep ? 'bg-red-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">選擇註冊類型</h2>
        <p className="text-gray-600 dark:text-gray-400">請選擇您的註冊目的</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          onClick={() => handleInputChange('registrationType', 'self')}
          className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
            formData.registrationType === 'self'
              ? 'border-red-600 bg-red-50 dark:bg-red-900/20'
              : 'border-gray-200 dark:border-gray-700 hover:border-red-300'
          }`}
        >
          <User size={32} className="text-red-600 dark:text-red-500 mb-4" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            為我的愛貓進行血型檢測
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            建立血型檔案，讓您的愛貓在未來需要時能立即獲得血液
          </p>
        </div>

        <div
          onClick={() => handleInputChange('registrationType', 'donation')}
          className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
            formData.registrationType === 'donation'
              ? 'border-red-600 bg-red-50 dark:bg-red-900/20'
              : 'border-gray-200 dark:border-gray-700 hover:border-red-300'
          }`}
        >
          <Heart size={32} className="text-red-600 dark:text-red-500 mb-4" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            捐血幫助其他寵物
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            讓您的愛貓成為英雄，幫助拯救需要輸血的其他貓咪
          </p>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">寵物資訊</h2>
        <p className="text-gray-600 dark:text-gray-400">請填寫您愛貓的基本資訊</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            寵物姓名 *
          </label>
          <input
            type="text"
            value={formData.petName}
            onChange={(e) => handleInputChange('petName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="請輸入寵物姓名"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            出生日期 *
          </label>
          <input
            type="date"
            value={formData.petBirthday}
            onChange={(e) => handleInputChange('petBirthday', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            晶片號碼 *
          </label>
          <input
            type="text"
            value={formData.chipNumber}
            onChange={(e) => handleInputChange('chipNumber', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="請輸入15位數晶片號碼"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">飼主資訊</h2>
        <p className="text-gray-600 dark:text-gray-400">請填寫您的聯絡資訊</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            飼主姓名 *
          </label>
          <input
            type="text"
            value={formData.ownerName}
            onChange={(e) => handleInputChange('ownerName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="請輸入您的姓名"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            身分證字號 *
          </label>
          <input
            type="text"
            value={formData.ownerIdNumber}
            onChange={(e) => handleInputChange('ownerIdNumber', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="請輸入身分證字號"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            聯絡電話 *
          </label>
          <input
            type="tel"
            value={formData.ownerPhone}
            onChange={(e) => handleInputChange('ownerPhone', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="請輸入聯絡電話"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            電子信箱 *
          </label>
          <input
            type="email"
            value={formData.ownerEmail}
            onChange={(e) => handleInputChange('ownerEmail', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="請輸入電子信箱"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            聯絡地址 *
          </label>
          <input
            type="text"
            value={formData.ownerAddress}
            onChange={(e) => handleInputChange('ownerAddress', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="請輸入完整地址"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">確認與付費</h2>
        <p className="text-gray-600 dark:text-gray-400">請確認您的資訊並完成付費</p>
      </div>

      {/* Data Confirmation */}
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">註冊資訊確認</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600 dark:text-gray-400">註冊類型：</span>
            <span className="text-gray-900 dark:text-white ml-2">
              {formData.registrationType === 'self' ? '為我的愛貓進行血型檢測' : '捐血幫助其他寵物'}
            </span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">寵物姓名：</span>
            <span className="text-gray-900 dark:text-white ml-2">{formData.petName}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">飼主姓名：</span>
            <span className="text-gray-900 dark:text-white ml-2">{formData.ownerName}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">聯絡電話：</span>
            <span className="text-gray-900 dark:text-white ml-2">{formData.ownerPhone}</span>
          </div>
        </div>
      </div>

      {/* Fee Explanation */}
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">費用明細</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">健康檢查費</span>
            <span className="text-gray-900 dark:text-white">NT$ 150</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">血型檢測費</span>
            <span className="text-gray-900 dark:text-white">NT$ 80</span>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-2 flex justify-between font-bold">
            <span className="text-gray-900 dark:text-white">總計</span>
            <span className="text-red-600 dark:text-red-500">NT$ 230</span>
          </div>
        </div>
      </div>

      {/* Terms Agreement */}
      <div className="space-y-4">
        <div className="flex items-start">
          <input
            type="checkbox"
            id="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
            className="mt-1 mr-3"
          />
          <label htmlFor="agreeToTerms" className="text-sm text-gray-700 dark:text-gray-300">
            我已閱讀並同意
            <button className="text-red-600 dark:text-red-500 hover:underline mx-1">
              服務條款
            </button>
            和
            <button className="text-red-600 dark:text-red-500 hover:underline mx-1">
              隱私政策
            </button>
            ，並同意進行寵物健康檢查和血型檢測。
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">寵物註冊</h1>
            <p className="text-gray-600 dark:text-gray-400">
              為您的愛貓建立健康檔案，加入我們的捐血社群
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            {renderStepIndicator()}

            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                上一步
              </button>

              {currentStep < 4 ? (
                <button
                  onClick={handleNextStep}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                >
                  下一步
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!formData.agreeToTerms}
                  className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white rounded-lg"
                >
                  <CreditCard size={20} className="mr-2" />
                  確認並付費
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PetRegistration;