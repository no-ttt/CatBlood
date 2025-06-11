import React, { useState } from 'react';
import { User, Heart, FileText, Calendar, Phone, MapPin, AlertTriangle, Download, Eye } from 'lucide-react';
import { User as UserType, Pet } from '../App';

interface MemberDashboardProps {
  user: UserType;
  onNavigate: (path: string) => void;
}

const MemberDashboard: React.FC<MemberDashboardProps> = ({ user, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock pet data
  const mockPets: Pet[] = [
    {
      id: '1',
      name: 'Fluffy',
      birthday: '2020-03-15',
      chipNumber: '900123456789012',
      bloodType: 'Type A',
      healthStatus: 'Healthy',
      lastCheckup: '2024-01-15',
      isDonor: true,
      ownerId: user.id
    }
  ];

  // Mock health reports
  const mockReports = [
    {
      id: '1',
      petId: '1',
      date: '2024-01-15',
      type: 'Blood Test',
      status: 'Normal',
      downloadUrl: '#'
    },
    {
      id: '2',
      petId: '1',
      date: '2023-12-10',
      type: 'Health Checkup',
      status: 'Normal',
      downloadUrl: '#'
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Registered Pets</h3>
              <p className="text-3xl font-bold text-red-600 dark:text-red-500">{mockPets.length}</p>
            </div>
            <Heart size={32} className="text-red-600 dark:text-red-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Donations</h3>
              <p className="text-3xl font-bold text-green-600 dark:text-green-500">3</p>
            </div>
            <FileText size={32} className="text-green-600 dark:text-green-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lives Saved</h3>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-500">2</p>
            </div>
            <Heart size={32} className="text-blue-600 dark:text-blue-500" />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">My Pets</h3>
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
                    <p className="text-gray-600 dark:text-gray-400">Blood Type: {pet.bloodType}</p>
                    <p className="text-gray-600 dark:text-gray-400">Health Status: {pet.healthStatus}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    pet.isDonor 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                    {pet.isDonor ? 'Donor' : 'Regular Member'}
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Last Checkup: {pet.lastCheckup}
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
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Health Reports</h3>
        <div className="space-y-4">
          {mockReports.map(report => (
            <div key={report.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{report.type}</h4>
                  <p className="text-gray-600 dark:text-gray-400">Test Date: {report.date}</p>
                  <span className={`inline-block px-2 py-1 rounded text-sm ${
                    report.status === 'Normal'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {report.status}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Eye size={16} className="mr-1" />
                    View
                  </button>
                  <button className="flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                    <Download size={16} className="mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Professional Consultation Service</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          If you have any questions about health reports, our professional veterinary team is always ready to provide consultation services.
        </p>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Phone size={16} className="mr-2" />
          Contact Professional Consultation
        </button>
      </div>
    </div>
  );

  const renderBloodRequest = () => (
    <div className="space-y-6">
      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
        <div className="flex items-start">
          <AlertTriangle size={24} className="text-red-600 dark:text-red-500 mr-3 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Emergency Blood Request</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If your pet needs emergency blood transfusion, please fill out the following form. We will immediately match you with suitable blood donors.
            </p>
            <button 
              onClick={() => onNavigate('blood-request')}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Apply for Emergency Blood
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Blood Request Records</h3>
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">No blood request records at this time</p>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              Name
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
              Email
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
              Phone Number
            </label>
            <input
              type="tel"
              value={user.phone}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              ID Number
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
              Address
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
            Update Information
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Member Center</h1>
          <p className="text-gray-600 dark:text-gray-400">Welcome back, {user.name}</p>
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
                  Overview
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
                  Health Reports
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
                  Blood Requests
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
                  Personal Profile
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'reports' && renderReports()}
            {activeTab === 'blood-request' && renderBloodRequest()}
            {activeTab === 'profile' && renderProfile()}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MemberDashboard;