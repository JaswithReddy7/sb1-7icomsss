import React, { useState } from 'react';
import { User, Shield, UserCog } from 'lucide-react';
import LoginForm from './LoginForm';

interface LoginPageProps {
  onLogin: (role: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: 'user',
      title: 'Patient',
      description: 'Track your health metrics and medication schedule',
      icon: <User className="w-6 h-6 text-rose-600" />,
      color: 'rose',
    },
    {
      id: 'guardian',
      title: 'Guardian',
      description: "Monitor and support your loved ones' health journey",
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      color: 'emerald',
    },
    {
      id: 'admin',
      title: 'Administrator',
      description: 'Manage the system and oversee patient care',
      icon: <UserCog className="w-6 h-6 text-indigo-600" />,
      color: 'indigo',
    },
  ];

  if (selectedRole) {
    const roleInfo = roles.find(role => role.id === selectedRole)!;
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <LoginForm
          role={selectedRole}
          onBack={() => setSelectedRole(null)}
          onLogin={onLogin}
          roleInfo={roleInfo}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to VitalSense</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="flex items-center space-x-3 mb-3">
                {role.icon}
                <h2 className="text-xl font-semibold">{role.title}</h2>
              </div>
              <p className="text-gray-600 text-sm">{role.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;