import React, { useState } from 'react';
import { Phone, AlertTriangle } from 'lucide-react';
import VitalCard from '../VitalCard';
import HealthMetrics from '../HealthMetrics';

const GuardianDashboard: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState('John Doe');

  const patients = [
    { id: 1, name: 'John Doe', status: 'normal' },
    { id: 2, name: 'Jane Smith', status: 'warning' },
  ];

  const emergencyContact = () => {
    alert('Emergency services contacted!');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <select 
            value={selectedPatient}
            onChange={(e) => setSelectedPatient(e.target.value)}
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {patients.map((patient) => (
              <option key={patient.id} value={patient.name}>
                {patient.name}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={emergencyContact}
          className="flex items-center px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700"
        >
          <Phone className="w-5 h-5 mr-2" />
          Emergency Contact
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Patient Overview</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium">Status</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">Stable</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium">Last Check</span>
              <span>2 hours ago</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium">Next Medication</span>
              <span>Lisinopril - 3:00 PM</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            {[1, 2].map((_, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div>
                  <p className="font-medium">Missed afternoon medication</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HealthMetrics />
    </div>
  );
};

export default GuardianDashboard;