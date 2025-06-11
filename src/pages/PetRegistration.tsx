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
    alert('Registration successful! We will contact you soon to arrange a health check.');
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Choose Registration Type</h2>
        <p className="text-gray-600 dark:text-gray-400">Please select your registration purpose</p>
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
            Blood Testing for My Pet
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Create a blood type profile so your pet can receive blood immediately when needed in the future
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
            Blood Donation to Help Other Pets
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Let your pet become a hero and help save other pets in need of blood transfusions
          </p>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pet Information</h2>
        <p className="text-gray-600 dark:text-gray-400">Please fill in your pet's basic information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Pet Name *
          </label>
          <input
            type="text"
            value={formData.petName}
            onChange={(e) => handleInputChange('petName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Please enter your pet's name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Date of Birth *
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
            Microchip Number *
          </label>
          <input
            type="text"
            value={formData.chipNumber}
            onChange={(e) => handleInputChange('chipNumber', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Please enter 15-digit microchip number"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Owner Information</h2>
        <p className="text-gray-600 dark:text-gray-400">Please fill in your contact information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Owner Name *
          </label>
          <input
            type="text"
            value={formData.ownerName}
            onChange={(e) => handleInputChange('ownerName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Please enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            ID Number *
          </label>
          <input
            type="text"
            value={formData.ownerIdNumber}
            onChange={(e) => handleInputChange('ownerIdNumber', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Please enter your ID number"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.ownerPhone}
            onChange={(e) => handleInputChange('ownerPhone', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Please enter your phone number"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            value={formData.ownerEmail}
            onChange={(e) => handleInputChange('ownerEmail', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Please enter your email"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Contact Address *
          </label>
          <input
            type="text"
            value={formData.ownerAddress}
            onChange={(e) => handleInputChange('ownerAddress', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Please enter your complete address"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
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
            <span className="text-gray-600 dark:text-gray-400">Registration Type:</span>
            <span className="text-gray-900 dark:text-white ml-2">
              {formData.registrationType === 'self' ? 'Blood Testing for My Pet' : 'Blood Donation to Help Other Pets'}
            </span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Pet Name:</span>
            <span className="text-gray-900 dark:text-white ml-2">{formData.petName}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Owner Name:</span>
            <span className="text-gray-900 dark:text-white ml-2">{formData.ownerName}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Contact Phone:</span>
            <span className="text-gray-900 dark:text-white ml-2">{formData.ownerPhone}</span>
          </div>
        </div>
      </div>

      {/* Fee Explanation */}
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Fee Breakdown</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Health Check Fee</span>
            <span className="text-gray-900 dark:text-white">$150</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Blood Type Testing Fee</span>
            <span className="text-gray-900 dark:text-white">$80</span>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-2 flex justify-between font-bold">
            <span className="text-gray-900 dark:text-white">Total</span>
            <span className="text-red-600 dark:text-red-500">$230</span>
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
              Terms of Service
            </button>
            and
            <button className="text-red-600 dark:text-red-500 hover:underline mx-1">
              Privacy Policy
            </button>
            , and agree to conduct pet health checks and blood type testing.
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Pet Registration</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Create a health profile for your pet and join our blood donation community
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
                Previous
              </button>

              {currentStep < 4 ? (
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

export default PetRegistration;