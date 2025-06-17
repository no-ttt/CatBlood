import React from 'react';
import { AlertTriangle, Phone, Clock, ArrowRight } from 'lucide-react';
import { CTAButton } from './Navigation';

const EmergencySection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600/40 to-red-800/40 dark:from-red-700/40 dark:to-red-900/40 text-white" id="emergency">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
              <AlertTriangle size={18} className="mr-2" />
              <span className="font-medium">緊急用血申請</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">急需用血？</h2>
            
            <p className="text-white/90 text-lg mb-8 max-w-xl">
              獸醫專業人員：如果您有需要緊急輸血的貓咪患者，
              我們可以幫助您聯繫可用的血液製品。
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Phone size={24} className="mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">緊急專線</h3>
                  <p className="text-white/90">24小時服務：(02) 555-CATS</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={24} className="mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">快速回應</h3>
                  <p className="text-white/90">我們致力於在2小時內處理並配送緊急申請</p>
                </div>
              </div>
            </div>
            
            <CTAButton>申請緊急用血</CTAButton>
          </div>
          
          <div className="md:w-1/2 bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">獸醫診所註冊</h3>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">診所名稱</label>
                  <input 
                    type="text"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/50"
                    placeholder="請輸入診所名稱"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">執照號碼</label>
                  <input 
                    type="text"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/50"
                    placeholder="請輸入執照號碼"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">聯絡人</label>
                  <input 
                    type="text"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/50"
                    placeholder="請輸入姓名"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">聯絡電話</label>
                  <input 
                    type="tel"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/50"
                    placeholder="請輸入電話號碼"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">電子信箱</label>
                  <input 
                    type="email"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/50"
                    placeholder="請輸入電子信箱"
                  />
                </div>
              </div>
              
              <div>
                <button type="submit" className="w-full bg-white text-red-600 font-medium py-3 rounded-lg hover:bg-white/90 transition-colors">
                  註冊診所
                </button>
              </div>
            </form>
            
            <div className="mt-4 text-center">
              <a href="/learn-more" className="inline-flex items-center text-white/80 text-sm hover:text-white transition-colors">
                了解更多緊急用血計畫
                <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;