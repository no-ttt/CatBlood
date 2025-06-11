import React, { useState } from 'react';
import { Building2, Search, MapPin, Phone, Filter, Users } from 'lucide-react';
import { User as UserType } from '../App';

interface VetDashboardProps {
  user: UserType;
  onNavigate: (path: string) => void;
}

interface DonorInfo {
  id: string;
  petName: string;
  bloodType: string;
  ownerName: string;
  ownerPhone: string;
  address: string;
  lastDonation: string;
  isAvailable: boolean;
}

const VetDashboard: React.FC<VetDashboardProps> = ({ user, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('search');
  const [searchFilters, setSearchFilters] = useState({
    bloodType: '',
    region: '',
    availability: 'all'
  });

  // Mock donor data
  const mockDonors: DonorInfo[] = [
    {
      id: '1',
      petName: 'Fluffy',
      bloodType: 'Type A',
      ownerName: 'John Smith',
      ownerPhone: '0912345678',
      address: '123 Main Street, New York, NY 10001',
      lastDonation: '2024-01-15',
      isAvailable: true
    },
    {
      id: '2',
      petName: 'Mimi',
      bloodType: 'Type B',
      ownerName: 'Jane Doe',
      ownerPhone: '0923456789',
      address: '456 Oak Avenue, Los Angeles, CA 90210',
      lastDonation: '2023-12-20',
      isAvailable: true
    },
    {
      id: '3',
      petName: 'Shadow',
      bloodType: 'Type A',
      ownerName: 'Mike Johnson',
      ownerPhone: '0934567890',
      address: '789 Pine Street, Chicago, IL 60601',
      lastDonation: '2024-02-01',
      isAvailable: false
    }
  ];

  const filteredDonors = mockDonors.filter(donor => {
    if (searchFilters.bloodType && donor.bloodType !== searchFilters.bloodType) return false;
    if (searchFilters.region && !donor.address.includes(searchFilters.region)) return false;
    if (searchFilters.availability === 'available' && !donor.isAvailable) return false;
    if (searchFilters.availability === 'unavailable' && donor.isAvailable) return false;
    return true;
  });

  const renderSearch = () => (
    <div className="space-y-6">
      {/* Search Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Search Blood Donors</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              Blood Type
            </label>
            <select
              value={searchFilters.bloodType}
              onChange={(e) => setSearchFilters(prev => ({ ...prev, bloodType: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">All Blood Types</option>
              <option value="Type A">Type A</option>
              <option value="Type B">Type B</option>
              <option value="Type AB">Type AB</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              Region
            </label>
            <select
              value={searchFilters.region}
              onChange={(e) => setSearchFilters(prev => ({ ...prev, region: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">All Regions</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="Houston">Houston</option>
              <option value="Phoenix">Phoenix</option>
              <option value="Philadelphia">Philadelphia</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              Availability
            </label>
            <select
              value={searchFilters.availability}
              onChange={(e) => setSearchFilters(prev => ({ ...prev, availability: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">All</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg flex items-center justify-center">
              <Search size={20} className="mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Search Results</h3>
          <span className="text-gray-600 dark:text-gray-400">Found {filteredDonors.length} donors</span>
        </div>
        
        <div className="space-y-4">
          {filteredDonors.map(donor => (
            <div key={donor.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {donor.petName} ({donor.bloodType})
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">Owner: {donor.ownerName}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      donor.isAvailable
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {donor.isAvailable ? 'Available' : 'Unavailable'}
                    </span>
                  </div>
                  
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Phone size={16} className="mr-2" />
                      {donor.ownerPhone}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      {donor.address}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Last Donation: {donor.lastDonation}
                  </p>
                </div>
                
                <div className="ml-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                    Contact Owner
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Display */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Donor Location Map</h3>
        <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Google Map showing donor location markers</p>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Clinic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              Veterinarian Name
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
              Clinic Name
            </label>
            <input
              type="text"
              value={user.hospitalName || ''}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              Contact Phone
            </label>
            <input
              type="tel"
              value={user.phone}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              readOnly
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
            Update Information
          </button>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Service Status</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-600 dark:text-green-400 font-medium">✓ Paid - Can query donor information</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Registration Date: 2024-01-01</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">∞</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Unlimited Queries</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Veterinary Management Center</h1>
          <p className="text-gray-600 dark:text-gray-400">Welcome back, {user.hospitalName}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Side Menu */}
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('search')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'search'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Search size={20} className="inline mr-3" />
                  Search Donors
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Building2 size={20} className="inline mr-3" />
                  Clinic Profile
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {activeTab === 'search' && renderSearch()}
            {activeTab === 'profile' && renderProfile()}
          </div>
        </div>
      </div>
    </main>
  );
};

export default VetDashboard;