import React, { useState } from 'react';
import { User, Heart, FileText, Calendar, Phone, MapPin, AlertTriangle, Download, Eye, CreditCard, Lock, CheckCircle, Plus, X, Search } from 'lucide-react';
import { User as UserType, Pet, HealthReport, DNAReport } from '../App';

interface MemberDashboardProps {
  user: UserType;
  onNavigate: (path: string) => void;
}

const MemberDashboard: React.FC<MemberDashboardProps> = ({ user, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentProcess, setShowPaymentProcess] = useState(false);
  const [paymentStep, setPaymentStep] = useState(1);
  const [isPaid, setIsPaid] = useState(user.isPaid || false);
  const [showPetForm, setShowPetForm] = useState(false);
  const [petFormData, setPetFormData] = useState({
    name: '',
    birthday: '',
    chipNumber: '',
    bloodType: '',
    breed: '',
    weight: '',
    gender: ''
  });

  // Mock pet data
  const [mockPets, setMockPets] = useState<Pet[]>([
    {
      id: '1',
      name: '小花',
      birthday: '2020-03-15',
      chipNumber: '900123456789012',
      bloodType: 'A型',
      healthStatus: '健康',
      lastCheckup: '2024-01-15',
      isDonor: true,
      ownerId: user.id,
      breed: '美國短毛貓',
      weight: 4.5,
      gender: '母'
    },
    {
      id: '2',
      name: '小白',
      birthday: '2021-06-20',
      chipNumber: '900123456789013',
      bloodType: 'B型',
      healthStatus: '健康',
      lastCheckup: '2024-02-01',
      isDonor: false,
      ownerId: user.id,
      breed: '英國短毛貓',
      weight: 3.8,
      gender: '公'
    }
  ]);

  // Mock health reports
  const mockHealthReports: HealthReport[] = [
    {
      id: '1',
      petId: '1',
      date: '2024-01-15',
      type: '血液檢查',
      status: '正常',
      details: '血球計數正常，肝腎功能良好，建議持續觀察'
    },
    {
      id: '2',
      petId: '2',
      date: '2023-12-10',
      type: '健康檢查',
      status: '正常',
      details: '整體健康狀況良好，疫苗接種完整'
    },
    {
      id: '3',
      petId: '1',
      date: '2024-01-20',
      type: 'DNA檢測',
      status: '正常',
      details: '基因檢測完成，無遺傳疾病風險'
    }
  ];

  // Mock DNA reports
  const mockDNAReports: DNAReport[] = [
    {
      id: '1',
      petId: '1',
      date: '2024-01-15',
      bloodType: 'A型',
      geneticMarkers: ['FeLV陰性', 'FIV陰性', '遺傳性心肌病低風險'],
      healthRisks: ['腎臟疾病中等風險', '糖尿病低風險']
    },
    {
      id: '2',
      petId: '2',
      date: '2024-02-01',
      bloodType: 'B型',
      geneticMarkers: ['FeLV陰性', 'FIV陰性', '遺傳性心肌病低風險'],
      healthRisks: ['心臟疾病低風險', '腎臟疾病低風險']
    }
  ];

  const handlePaymentComplete = () => {
    setIsPaid(true);
    setShowPaymentProcess(false);
    setShowPaymentModal(false);
    setPaymentStep(1);
    alert('付費成功！您現在可以查看DNA報告。');
  };

  const handlePetFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPet: Pet = {
      id: (mockPets.length + 1).toString(),
      name: petFormData.name,
      birthday: petFormData.birthday,
      chipNumber: petFormData.chipNumber,
      bloodType: petFormData.bloodType,
      healthStatus: '健康',
      lastCheckup: new Date().toISOString().split('T')[0],
      isDonor: false,
      ownerId: user.id,
      breed: petFormData.breed,
      weight: parseFloat(petFormData.weight),
      gender: petFormData.gender
    };
    
    setMockPets([...mockPets, newPet]);
    setShowPetForm(false);
    setPetFormData({
      name: '',
      birthday: '',
      chipNumber: '',
      bloodType: '',
      breed: '',
      weight: '',
      gender: ''
    });
    alert('貓咪資料新增成功！');
  };

  const PetForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">新增貓咪資料</h3>
          <button
            onClick={() => setShowPetForm(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handlePetFormSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                貓咪姓名 *
              </label>
              <input
                type="text"
                value={petFormData.name}
                onChange={(e) => setPetFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="請輸入貓咪姓名"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                出生日期 *
              </label>
              <input
                type="date"
                value={petFormData.birthday}
                onChange={(e) => setPetFormData(prev => ({ ...prev, birthday: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                晶片號碼 *
              </label>
              <input
                type="text"
                value={petFormData.chipNumber}
                onChange={(e) => setPetFormData(prev => ({ ...prev, chipNumber: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="請輸入15位數晶片號碼"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                血型 *
              </label>
              <select
                value={petFormData.bloodType}
                onChange={(e) => setPetFormData(prev => ({ ...prev, bloodType: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              >
                <option value="">請選擇血型</option>
                <option value="A型">A型</option>
                <option value="B型">B型</option>
                <option value="AB型">AB型</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                品種 *
              </label>
              <input
                type="text"
                value={petFormData.breed}
                onChange={(e) => setPetFormData(prev => ({ ...prev, breed: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="請輸入貓咪品種"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                體重 (kg) *
              </label>
              <input
                type="number"
                step="0.1"
                value={petFormData.weight}
                onChange={(e) => setPetFormData(prev => ({ ...prev, weight: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="請輸入體重"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                性別 *
              </label>
              <select
                value={petFormData.gender}
                onChange={(e) => setPetFormData(prev => ({ ...prev, gender: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              >
                <option value="">請選擇性別</option>
                <option value="公">公</option>
                <option value="母">母</option>
              </select>
            </div>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">費用說明</h4>
            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex justify-between">
                <span>健康檢查費</span>
                <span>NT$ 150</span>
              </div>
              <div className="flex justify-between">
                <span>血型檢測費</span>
                <span>NT$ 80</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-1 flex justify-between font-bold">
                <span>總計</span>
                <span className="text-red-600 dark:text-red-500">NT$ 230</span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={() => setShowPetForm(false)}
              className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              取消
            </button>
            <button
              type="submit"
              className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg flex items-center justify-center"
            >
              <CreditCard size={16} className="mr-2" />
              確認並付費
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">註冊寵物</h3>
              <p className="text-3xl font-bold text-red-600 dark:text-red-500">{mockPets.length}</p>
            </div>
            <Heart size={32} className="text-red-600 dark:text-red-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">捐血次數</h3>
              <p className="text-3xl font-bold text-green-600 dark:text-green-500">3</p>
            </div>
            <FileText size={32} className="text-green-600 dark:text-green-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">拯救生命</h3>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-500">2</p>
            </div>
            <Heart size={32} className="text-blue-600 dark:text-blue-500" />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">我的寵物</h3>
          <button 
            onClick={() => setShowPetForm(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <Plus size={20} className="mr-2" />
            新增貓咪
          </button>
        </div>
        <div className="space-y-4">
          {mockPets.map(pet => (
            <div key={pet.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <Heart size={24} className="text-red-600 dark:text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{pet.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">血型：{pet.bloodType} | 品種：{pet.breed}</p>
                    <p className="text-gray-600 dark:text-gray-400">健康狀態：{pet.healthStatus}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    pet.isDonor 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                    {pet.isDonor ? '供血貓' : '一般會員'}
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    最後檢查：{pet.lastCheckup}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">健康報告 - 所有貓咪</h3>
        <div className="space-y-4">
          {mockHealthReports.map(report => (
            <div key={report.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {mockPets.find(pet => pet.id === report.petId)?.name} - {report.type}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">檢查日期：{report.date}</p>
                  <p className="text-gray-600 dark:text-gray-400">{report.details}</p>
                  <span className={`inline-block px-2 py-1 rounded text-sm mt-2 ${
                    report.status === '正常'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {report.status}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Eye size={16} className="mr-1" />
                    檢視
                  </button>
                  <button className="flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                    <Download size={16} className="mr-1" />
                    下載
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">專業諮詢服務</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          如果您對健康報告有任何疑問，我們的專業獸醫團隊隨時為您提供諮詢服務。
        </p>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Phone size={16} className="mr-2" />
          聯絡專業諮詢
        </button>
      </div>
    </div>
  );

  const renderDNAReports = () => (
    <div className="space-y-6">
      {isPaid ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">DNA報告 - 所有貓咪</h3>
          <div className="space-y-4">
            {mockDNAReports.map(report => (
              <div key={report.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {mockPets.find(pet => pet.id === report.petId)?.name} - 基因檢測報告
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">檢測日期：{report.date}</p>
                    <div className="mt-3 space-y-2">
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">血型：</span>
                        <span className="text-red-600 dark:text-red-500 font-bold ml-2">{report.bloodType}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">基因標記：</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {report.geneticMarkers.map((marker, index) => (
                            <span key={index} className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded text-sm">
                              {marker}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">健康風險評估：</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {report.healthRisks.map((risk, index) => (
                            <span key={index} className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 px-2 py-1 rounded text-sm">
                              {risk}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 flex space-x-2">
                    <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      <Eye size={16} className="mr-1" />
                      詳細報告
                    </button>
                    <button className="flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                      <Download size={16} className="mr-1" />
                      下載
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
          <div className="flex items-start">
            <Lock size={24} className="text-yellow-600 dark:text-yellow-500 mr-3 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">DNA報告需要付費解鎖</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                升級為付費會員即可查看詳細的DNA報告，包含血型分析、遺傳標記和健康風險評估。
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">付費功能包含：</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• 完整DNA基因檢測報告</li>
                  <li>• 血型詳細分析</li>
                  <li>• 遺傳疾病風險評估</li>
                  <li>• 個人化健康建議</li>
                  <li>• 報告下載功能</li>
                </ul>
              </div>
              <button 
                onClick={() => setShowPaymentModal(true)}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                立即升級付費會員
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderBloodRequest = () => (
    <div className="space-y-6">
      {/* Payment restriction for vets */}
      {user.type === 'vet' && !isPaid && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
          <div className="flex items-start">
            <Lock size={24} className="text-yellow-600 dark:text-yellow-500 mr-3 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">用血申請功能需要付費</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                升級為付費會員即可使用用血申請功能，包含據點查詢和緊急申請服務。
              </p>
              <button 
                onClick={() => setShowPaymentModal(true)}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                立即升級付費會員
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search and Map Section */}
      <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${user.type === 'vet' && !isPaid ? 'opacity-50 pointer-events-none' : ''}`}>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">查詢捐血據點</h3>
        
        {/* Search Box */}
        <div className="mb-6">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="搜尋城市或據點名稱..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
        
        {/* Map */}
        <div className="relative h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30">
            {/* Mock map markers */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-600 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-red-600 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-red-600 rounded-full animate-pulse"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow">
              互動式地圖 - 顯示附近捐血據點
            </p>
          </div>
        </div>
        
        {/* Location List */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900 dark:text-white">附近據點：</h4>
          {[
            { name: '台北中央動物醫院', address: '台北市信義區信義路五段7號', distance: '2.3km' },
            { name: '新北愛心動物診所', address: '新北市板橋區中山路一段161號', distance: '5.1km' },
            { name: '桃園北區寵物醫療中心', address: '桃園市桃園區復興路195號', distance: '8.7km' }
          ].map((location, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{location.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{location.address}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{location.distance}</p>
                <button className="text-xs text-red-600 dark:text-red-500 hover:underline">查看詳情</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`bg-red-50 dark:bg-red-900/20 rounded-lg p-6 ${user.type === 'vet' && !isPaid ? 'opacity-50 pointer-events-none' : ''}`}>
        <div className="flex items-start">
          <AlertTriangle size={24} className="text-red-600 dark:text-red-500 mr-3 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">緊急用血申請</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              如果您的寵物需要緊急輸血，請填寫以下表單。我們將立即為您媒合合適的供血貓。
            </p>
            <button 
              onClick={() => onNavigate('blood-request')}
              disabled={user.type === 'vet' && !isPaid}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              申請緊急用血
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">個人資料</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              姓名
            </label>
            <input
              type="text"
              value={user.name}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              電子信箱
            </label>
            <input
              type="email"
              value={user.email}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              聯絡電話
            </label>
            <input
              type="tel"
              value={user.phone}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              身分證字號
            </label>
            <input
              type="text"
              value={user.idNumber || ''}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              readOnly
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              聯絡地址
            </label>
            <input
              type="text"
              value={user.address || ''}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
            更新資料
          </button>
        </div>
      </div>

      <div className={`rounded-lg p-6 ${isPaid ? 'bg-green-50 dark:bg-green-900/20' : 'bg-yellow-50 dark:bg-yellow-900/20'}`}>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">會員狀態</h3>
        <div className="flex items-center justify-between">
          <div>
            {isPaid ? (
              <>
                <p className="text-green-600 dark:text-green-400 font-medium">✓ 付費會員 - 可查看DNA報告</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">升級日期：2024-01-01</p>
              </>
            ) : (
              <>
                <p className="text-yellow-600 dark:text-yellow-400 font-medium">⚠ 免費會員 - DNA報告功能受限</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">升級即可解鎖所有功能</p>
              </>
            )}
          </div>
          <div className="text-right">
            {!isPaid && (
              <button 
                onClick={() => setShowPaymentModal(true)}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg"
              >
                立即升級
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Payment Modal
  const PaymentModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">升級為付費會員</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">付費功能包含：</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• 完整DNA基因檢測報告</li>
              <li>• 血型詳細分析</li>
              <li>• 遺傳疾病風險評估</li>
              <li>• 個人化健康建議</li>
              <li>• 所有報告下載功能</li>
            </ul>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600 dark:text-red-500">NT$ 1,500</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">一次性付費，終身使用</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-6">
          <button
            onClick={() => setShowPaymentModal(false)}
            className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            取消
          </button>
          <button
            onClick={() => {
              setShowPaymentModal(false);
              setShowPaymentProcess(true);
            }}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center justify-center"
          >
            <CreditCard size={16} className="mr-2" />
            開始付費
          </button>
        </div>
      </div>
    </div>
  );

  // Payment Process Modal
  const PaymentProcessModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4">
        {paymentStep === 1 && (
          <>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">選擇付款方式</h3>
            <div className="space-y-3">
              <button 
                onClick={() => setPaymentStep(2)}
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-left"
              >
                <div className="font-medium text-gray-900 dark:text-white">信用卡付款</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Visa, MasterCard, JCB</div>
              </button>
              <button 
                onClick={() => setPaymentStep(2)}
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-left"
              >
                <div className="font-medium text-gray-900 dark:text-white">銀行轉帳</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">ATM 轉帳或網路銀行</div>
              </button>
              <button 
                onClick={() => setPaymentStep(2)}
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-left"
              >
                <div className="font-medium text-gray-900 dark:text-white">電子錢包</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">LINE Pay, Apple Pay</div>
              </button>
            </div>
            <button
              onClick={() => setShowPaymentProcess(false)}
              className="w-full mt-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              取消
            </button>
          </>
        )}

        {paymentStep === 2 && (
          <>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">付款資訊</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                  卡號
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                    有效期限
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                    安全碼
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                  持卡人姓名
                </label>
                <input
                  type="text"
                  placeholder="請輸入持卡人姓名"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setPaymentStep(1)}
                className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                上一步
              </button>
              <button
                onClick={() => setPaymentStep(3)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                確認付款
              </button>
            </div>
          </>
        )}

        {paymentStep === 3 && (
          <>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">付款成功！</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                您已成功升級為付費會員，現在可以查看DNA報告。
              </p>
              <button
                onClick={handlePaymentComplete}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg"
              >
                開始使用
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">會員中心</h1>
          <p className="text-gray-600 dark:text-gray-400">歡迎回來，{user.name}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Side Menu */}
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <User size={20} className="inline mr-3" />
                  總覽
                </button>
                <button
                  onClick={() => setActiveTab('reports')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'reports'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <FileText size={20} className="inline mr-3" />
                  健康報告
                </button>
                <button
                  onClick={() => setActiveTab('dna-reports')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'dna-reports'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <FileText size={20} className="inline mr-3" />
                  DNA報告
                  {!isPaid && <Lock size={16} className="inline ml-2" />}
                </button>
                <button
                  onClick={() => setActiveTab('blood-request')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'blood-request'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <AlertTriangle size={20} className="inline mr-3" />
                  用血申請
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <User size={20} className="inline mr-3" />
                  個人資料
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'reports' && renderReports()}
            {activeTab === 'dna-reports' && renderDNAReports()}
            {activeTab === 'blood-request' && renderBloodRequest()}
            {activeTab === 'profile' && renderProfile()}
          </div>
        </div>
      </div>

      {showPaymentModal && <PaymentModal />}
      {showPaymentProcess && <PaymentProcessModal />}
      {showPetForm && <PetForm />}
    </main>
  );
};

export default MemberDashboard;