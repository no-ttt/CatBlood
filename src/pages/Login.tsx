import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { User } from '../App';

interface LoginProps {
  onLogin: (user: User) => void;
  onNavigate: (path: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'owner' | 'vet'>('owner');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock login validation
    setTimeout(() => {
      const mockUser: User = {
        id: '1',
        type: userType,
        name: userType === 'owner' ? 'John Smith' : 'Dr. Johnson',
        email,
        phone: '0912345678',
        address: userType === 'owner' ? '123 Main Street, New York, NY 10001' : undefined,
        idNumber: userType === 'owner' ? 'A123456789' : undefined,
        hospitalName: userType === 'vet' ? 'Love Animal Hospital' : undefined,
        isLoggedIn: true
      };

      onLogin(mockUser);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Member Login</h1>
            <p className="text-gray-600 dark:text-gray-400">Login to your account to access full features</p>
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <div className="flex rounded-lg bg-gray-100 dark:bg-gray-700 p-1">
              <button
                type="button"
                onClick={() => setUserType('owner')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  userType === 'owner'
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                Pet Owner
              </button>
              <button
                type="button"
                onClick={() => setUserType('vet')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  userType === 'vet'
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                Veterinary Clinic
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Please enter your email"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Please enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-medium py-3 rounded-lg transition-colors"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Don't have an account?
              <button
                onClick={() => onNavigate(userType === 'owner' ? 'pet-registration' : 'vet-registration')}
                className="text-red-600 dark:text-red-500 hover:underline ml-1"
              >
                Register now
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;