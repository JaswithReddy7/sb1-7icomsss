import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  role: string;
  onBack: () => void;
  onLogin: (role: string) => void;
  roleInfo: {
    title: string;
    icon: React.ReactNode;
    color: string;
  };
}

const LoginForm: React.FC<LoginFormProps> = ({ role, onBack, onLogin, roleInfo }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would validate credentials
    const validCredentials = {
      user: { email: 'patient@example.com', password: 'patient123' },
      guardian: { email: 'guardian@example.com', password: 'guardian123' },
      admin: { email: 'admin@example.com', password: 'admin123' },
    }[role];

    if (
      formData.email === validCredentials.email &&
      formData.password === validCredentials.password
    ) {
      onLogin(role);
    } else {
      alert('Invalid credentials');
    }
  };

  const getColorClasses = (color: string) => ({
    rose: 'bg-rose-600 hover:bg-rose-700 focus:ring-rose-200',
    emerald: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-200',
    indigo: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-200',
  })[color];

  return (
    <div className="max-w-md mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to role selection
      </button>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center space-x-3 mb-6">
          {roleInfo.icon}
          <h2 className="text-2xl font-bold text-gray-900">
            {roleInfo.title} Login
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-2 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-2 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${getColorClasses(roleInfo.color)}`}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;