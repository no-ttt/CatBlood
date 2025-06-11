import React, { useState } from 'react';
import { Building2, User, Phone, MapPin, CreditCard, FileText, CheckCircle } from 'lucide-react';

interface VetRegistrationProps {
  onNavigate: (path: string) => void;
}

interface VetFormData {
  doctorName: string;
  hospitalName: string;
  hospitalAddress: string;
  contactPhone: string;
  email: string;
  licenseNumber: string;
  agreeToTerms: boolean;
}

const VetRegistration: React.FC<VetRegistrationProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<VetFormData>({
    doctorName: '',
    hospitalName: '',
    hospitalAddress: '',
    contactPhone: '',
    email: '',
    licenseNumber: '',
    agreeToTerms: false
  });

  const handleInputChange = (field: keyof VetFormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    alert('Registration successful! You can now query blood donor information.');
    onNavigate('login');
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step) => (
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
          {step < 3 && (
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Veterinary Clinic Basic Information</h2>
        <p className="text-gray-600 dark:text-gray-400">Please fill in your veterinary clinic's basic information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Veterinarian Name *
          </label>
          <div className="relative">
            <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={formData.doctorName}
              onChange={(e) => handleInputChange('doctorName', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Please enter veterinarian name"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Veterinary License Number *
          </label>
          <div className="relative">
            <FileText size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={formData.licenseNumber}
              onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Please enter license number"
              required
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Clinic Name *
          </label>
          <div className="relative">
            <Building2 size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={formData.hospitalName}
              onChange={(e) => handleInputChange('hospitalName', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Please enter clinic name"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Contact Information</h2>
        <p className="text-gray-600 dark:text-gray-400">Please fill in your contact details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Contact Phone *
          </label>
          <div className="relative">
            <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              value={formData.contactPhone}
              onChange={(e) => handleInputChange('contactPhone', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Please enter contact phone"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Please enter email"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Clinic Address *
          </label>
          <div className="relative">
            <MapPin size={20} className="absolute left-3 top-3 text-gray-400" />
            <textarea
              value={formData.hospitalAddress}
              onChange={(e) => handleInputChange('hospitalAddress', e.target.value)}
              rows={3}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Please enter complete clinic address"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Confirmation & Payment</h2>
        <p className="text-gray-600 dark:text-gray-400">Please confirm your information and complete payment</p>
      </div>

      {/* Data Confirmation */}
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Registration Information Confirmation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600 dark:text-gray-400">Veterinarian Name:</span>
            <span className="text-gray-900 dark:text-white ml-2">{formData.doctorName}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Clinic Name:</span>
            <span className="text-gray-900 dark:text-white ml-2">{formData.hospitalName}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Contact Phone:</span>
            <span className="text-gray-900 dark:text-white ml-2">{formData.contactPhone}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Email:</span>
            <span className="text-gray-900 dark:text-white ml-2">{formData.email}</span>
          </div>
          <div className="md:col-span-2">
            <span className="text-gray-600 dark:text-gray-400">Clinic Address:</span>
            <span className="text-gray-900 dark:text-white ml-2">{formData.hospitalAddress}</span>
          </div>
        </div>
      </div>

      {/* Service Description */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Service Features</h3>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li>• Query blood donor information in specified areas</li>
          <li>• Obtain donor contact information</li>
          <li>• Emergency blood matching service</li>
          <li>• Blood type compatibility query system</li>
        </ul>
      </div>

      {/* Fee Explanation */}
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Fee Breakdown</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">One-time Registration Fee</span>
            <span className="text-gray-900 dark:text-white">$500</span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            * After payment, you will have permanent access to query services and donor contact information
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-2 flex justify-between font-bold">
            <span className="text-gray-900 dark:text-white">Total</span>
            <span className="text-red-600 dark:text-red-500">$500</span>
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
            I have read and agree to the
            <button className="text-red-600 dark:text-red-500 hover:underline mx-1">
              Veterinary Service Terms
            </button>
            and
            <button className="text-red-600 dark:text-red-500 hover:underline mx-1">
              Privacy Policy
            </button>
            , and promise to use the obtained contact information only for legitimate medical purposes.
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Veterinary Clinic Registration</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Register as a partner veterinary clinic to gain access to blood donor query services
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            {renderStepIndicator()}

            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              {currentStep < 3 ? (
                <button
                  onClick={handleNextStep}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!formData.agreeToTerms}
                  className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white rounded-lg"
                >
                  <CreditCard size={20} className="mr-2" />
                  Confirm & Pay
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VetRegistration;