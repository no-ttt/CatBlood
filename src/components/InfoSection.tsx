import React from 'react';
import { Droplet, CheckCircle, AlertCircle } from 'lucide-react';

interface BloodTypeInfoProps {
  type: string;
  description: string;
  compatibility: string[];
  rarity: 'common' | 'uncommon' | 'rare';
  image: string;
}

const BloodTypeInfo: React.FC<BloodTypeInfoProps> = ({ type, description, compatibility, rarity, image }) => {
  const rarityColor = {
    common: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    uncommon: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    rare: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  };

  const rarityText = {
    common: '常見',
    uncommon: '較少見',
    rare: '罕見',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48">
        <img src={image} alt={`${type}血型的貓咪`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Droplet size={24} className="text-red-600 dark:text-red-500 mr-2" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{type}</h3>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${rarityColor[rarity]}`}>
            {rarityText[rarity]}
          </span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">相容血型：</h4>
          <div className="flex flex-wrap gap-2">
            {compatibility.map((bloodType, index) => (
              <span 
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {bloodType}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="info">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">了解貓咪血型</h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            就像人類一樣，貓咪也有不同的血型，這決定了輸血的相容性。
            了解最常見的貓咪血型以及為什麼捐血如此重要。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BloodTypeInfo 
            type="A型" 
            description="全世界家貓中最常見的血型。A型血的貓咪具有強烈的抗B抗體。"
            compatibility={["A型"]}
            rarity="common"
            image="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg"
          />
          
          <BloodTypeInfo 
            type="B型" 
            description="比A型較少見，但在某些品種中很普遍。B型血的貓咪具有非常強烈的抗A抗體。"
            compatibility={["B型"]}
            rarity="uncommon"
            image="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg"
          />
          
          <BloodTypeInfo 
            type="AB型" 
            description="最罕見的血型，在不到1%的貓咪中發現。這些貓咪對其他血型沒有抗體。"
            compatibility={["A型", "B型", "AB型"]}
            rarity="rare"
            image="https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/7725961/pexels-photo-7725961.jpeg"
              alt="接受醫療照護的貓咪"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 p-8 flex items-center">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">為什麼貓咪捐血很重要</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle size={24} className="text-red-500 mr-4 flex-shrink-0 mt-1" />
                    <p>輸血可以拯救外傷、手術和嚴重貧血的貓咪</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={24} className="text-red-500 mr-4 flex-shrink-0 mt-1" />
                    <p>一次捐血可以幫助多隻需要的貓咪</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={24} className="text-red-500 mr-4 flex-shrink-0 mt-1" />
                    <p>全國貓咪血液製品嚴重短缺</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">重要資訊</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <AlertCircle size={24} className="text-red-600 dark:text-red-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">血型相容性</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    血型匹配至關重要。不匹配的血型可能導致嚴重或致命的輸血反應。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <AlertCircle size={24} className="text-red-600 dark:text-red-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">儲存限制</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    貓咪血液製品的保存期限有限，因此定期捐血至關重要。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <AlertCircle size={24} className="text-red-600 dark:text-red-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">緊急需求</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    緊急情況需要立即獲得相容的血液製品。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;