import React, { useState } from 'react';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { PillLink } from './Navigation';

interface Location {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const locations: Location[] = [
  {
    id: 1,
    name: "台北中央動物醫院",
    address: "台北市信義區信義路五段7號",
    city: "台北市 110",
    phone: "(02) 2345-6789",
    hours: "週一至週五：上午8點-下午8點，週六日：上午9點-下午5點",
    coordinates: {
      lat: 25.0330,
      lng: 121.5654
    }
  },
  {
    id: 2,
    name: "新北愛心動物診所",
    address: "新北市板橋區中山路一段161號",
    city: "新北市 220",
    phone: "(02) 2987-6543",
    hours: "週一至週五：上午9點-下午7點，週六：上午10點-下午4點",
    coordinates: {
      lat: 25.0173,
      lng: 121.4648
    }
  },
  {
    id: 3,
    name: "桃園北區寵物醫療中心",
    address: "桃園市桃園區復興路195號",
    city: "桃園市 330",
    phone: "(03) 3456-7890",
    hours: "週一至週四：上午8點-下午6點，週五：上午8點-下午5點",
    coordinates: {
      lat: 24.9936,
      lng: 121.3010
    }
  },
  {
    id: 4,
    name: "台中東區貓咪專科診所",
    address: "台中市東區建成路87號",
    city: "台中市 401",
    phone: "(04) 2234-5678",
    hours: "週一至週五：上午7點-下午7點，週六：上午8點-下午2點",
    coordinates: {
      lat: 24.1477,
      lng: 120.6736
    }
  }
];

const LocationMap: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const filteredLocations = locations.filter(location => 
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="locations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">尋找捐血據點</h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            我們有多個合作獸醫診所，您的愛貓可以在這些地點進行捐血。
            找到最近的據點來預約時間。
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="搜尋城市或據點名稱..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MapPin size={18} className="text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">捐血中心</h3>
              
              <div className="space-y-3">
                {filteredLocations.map(location => (
                  <div 
                    key={location.id}
                    onClick={() => setActiveLocation(location.id)}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeLocation === location.id 
                        ? 'bg-red-600 text-white shadow-md' 
                        : 'bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                    }`}
                  >
                    <h4 className="font-medium">{location.name}</h4>
                    <p className={`text-sm ${activeLocation === location.id ? 'text-white/90' : 'text-gray-500 dark:text-gray-400'}`}>
                      {location.city}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-300 dark:bg-gray-700 relative">
              {/* Placeholder for map - in a real implementation, this would be an actual map */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                <p className="text-gray-500 dark:text-gray-400">互動式地圖將顯示在這裡</p>
              </div>
            </div>
            
            {activeLocation && (
              <div className="p-6">
                {filteredLocations.map(location => location.id === activeLocation && (
                  <div key={location.id}>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{location.name}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="flex items-start">
                        <MapPin size={20} className="text-red-600 dark:text-red-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">地址</h4>
                          <p className="text-gray-700 dark:text-gray-300">{location.address}</p>
                          <p className="text-gray-700 dark:text-gray-300">{location.city}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone size={20} className="text-red-600 dark:text-red-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">電話</h4>
                          <p className="text-gray-700 dark:text-gray-300">{location.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start md:col-span-2">
                        <Clock size={20} className="text-red-600 dark:text-red-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">營業時間</h4>
                          <p className="text-gray-700 dark:text-gray-300">{location.hours}</p>
                        </div>
                      </div>
                    </div>
                    
                    <a href="/appointment" className="inline-flex items-center text-red-600 dark:text-red-500 font-medium hover:underline">
                      預約時間
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <PillLink label="所有據點" href="#" active />
          <PillLink label="台北市" href="#" />
          <PillLink label="新北市" href="#" />
          <PillLink label="桃園市" href="#" />
          <PillLink label="台中市" href="#" />
        </div>
      </div>
    </section>
  );
};

export default LocationMap;