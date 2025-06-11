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
    name: "Central Veterinary Hospital",
    address: "123 Main Street",
    city: "New York, NY 10001",
    phone: "(212) 555-0123",
    hours: "Mon-Fri: 8am-8pm, Sat-Sun: 9am-5pm",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  {
    id: 2,
    name: "West Side Animal Clinic",
    address: "456 Park Avenue",
    city: "Los Angeles, CA 90001",
    phone: "(310) 555-0124",
    hours: "Mon-Fri: 9am-7pm, Sat: 10am-4pm",
    coordinates: {
      lat: 34.0522,
      lng: -118.2437
    }
  },
  {
    id: 3,
    name: "North Pet Medical Center",
    address: "789 Oak Drive",
    city: "Chicago, IL 60601",
    phone: "(312) 555-0125",
    hours: "Mon-Thu: 8am-6pm, Fri: 8am-5pm",
    coordinates: {
      lat: 41.8781,
      lng: -87.6298
    }
  },
  {
    id: 4,
    name: "Eastside Feline Clinic",
    address: "321 Elm Street",
    city: "Houston, TX 77001",
    phone: "(713) 555-0126",
    hours: "Mon-Fri: 7am-7pm, Sat: 8am-2pm",
    coordinates: {
      lat: 29.7604,
      lng: -95.3698
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Find a Donation Location</h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            We have multiple partner veterinary clinics where your cat can donate blood.
            Find the nearest location to schedule an appointment.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search by city or location name..."
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Donation Centers</h3>
              
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
                <p className="text-gray-500 dark:text-gray-400">Interactive map would be displayed here</p>
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
                          <h4 className="font-medium text-gray-900 dark:text-white">Address</h4>
                          <p className="text-gray-700 dark:text-gray-300">{location.address}</p>
                          <p className="text-gray-700 dark:text-gray-300">{location.city}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone size={20} className="text-red-600 dark:text-red-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                          <p className="text-gray-700 dark:text-gray-300">{location.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start md:col-span-2">
                        <Clock size={20} className="text-red-600 dark:text-red-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Hours</h4>
                          <p className="text-gray-700 dark:text-gray-300">{location.hours}</p>
                        </div>
                      </div>
                    </div>
                    
                    <a href="/appointment" className="inline-flex items-center text-red-600 dark:text-red-500 font-medium hover:underline">
                      Schedule an appointment
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <PillLink label="All Locations" href="#" active />
          <PillLink label="New York" href="#" />
          <PillLink label="Los Angeles" href="#" />
          <PillLink label="Chicago" href="#" />
          <PillLink label="Houston" href="#" />
        </div>
      </div>
    </section>
  );
};

export default LocationMap;