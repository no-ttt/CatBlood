import React from 'react';
import { Clipboard, Award, Heart, CheckCircle } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-red-600 dark:bg-red-700 flex items-center justify-center mb-4">
          {icon}
        </div>
        <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-red-600 dark:border-red-700 flex items-center justify-center text-red-600 dark:text-red-500 font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

const DonationProcess: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">捐血流程</h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            對健康的貓咪來說，捐血是一個簡單、安全的過程。以下是當您帶愛貓來捐血時的流程。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Step 
            number={1}
            title="註冊"
            description="填寫線上註冊表單，提供您愛貓的資訊和健康史。"
            icon={<Clipboard size={24} className="text-white" />}
          />
          
          <Step 
            number={2}
            title="篩檢"
            description="您的愛貓將接受身體檢查和血液檢測，確保健康狀況良好。"
            icon={<CheckCircle size={24} className="text-white" />}
          />
          
          <Step 
            number={3}
            title="捐血"
            description="實際的血液採集只需10-15分鐘，您的愛貓會感到舒適。"
            icon={<Heart size={24} className="text-white" />}
          />
          
          <Step 
            number={4}
            title="恢復"
            description="捐血後，您的愛貓會得到點心並短暫休息後再回家。"
            icon={<Award size={24} className="text-white" />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">我的愛貓符合條件嗎？</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">年齡介於1-8歲</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">體重至少4.5公斤</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">疫苗接種完整</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">室內生活</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">性格友善</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">無嚴重疾病史</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.pexels.com/photos/7725966/pexels-photo-7725966.jpeg"
              alt="獸醫診所的貓咪"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-800/90 dark:from-red-700/90 dark:to-red-900/90 p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">供血貓的福利</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-white mr-2 mt-1 flex-shrink-0" />
                  <span>免費血型檢測和健康篩檢</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-white mr-2 mt-1 flex-shrink-0" />
                  <span>免費年度健康檢查</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-white mr-2 mt-1 flex-shrink-0" />
                  <span>如有需要可優先獲得血液製品</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-white mr-2 mt-1 flex-shrink-0" />
                  <span>特殊供血貓認證計畫</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-white mr-2 mt-1 flex-shrink-0" />
                  <span>每次捐血後贈送點心和玩具禮品袋</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationProcess;