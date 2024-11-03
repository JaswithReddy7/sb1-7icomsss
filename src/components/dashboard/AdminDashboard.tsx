import React, { useState } from 'react';
import { Users, Bell, AlertTriangle, Phone } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');

  const patients = [
    { id: 1, name: 'John Doe', status: 'normal', guardian: 'Mary Doe', lastUpdate: '2 hours ago' },
    { id: 2, name: 'Jane Smith', status: 'warning', guardian: 'Bob Smith', lastUpdate: '1 hour ago' },
    { id: 3, name: 'Alice Johnson', status: 'alert', guardian: 'Tom Johnson', lastUpdate: '30 mins ago' },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      normal: 'bg-emerald-100 text-emerald-700',
      warning: 'bg-amber-100 text-amber-700',
      alert: 'bg-rose-100 text-rose-700',
    }[status];
    return <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles}`}>{status}</span>;
  };

  const handleEmergency = (patientId: number) => {
    alert(`Emergency services contacted for patient ${patientId}`);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm mb-6">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">System Overview</h2>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="all">All Patients</option>
              <option value="normal">Normal</option>
              <option value="warning">Warning</option>
              <option value="alert">Alert</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-indigo-600" />
                <div>
                  <p className="text-sm text-gray-600">Total Patients</p>
                  <p className="text-2xl font-bold">{patients.length}</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Bell className="w-6 h-6 text-amber-600" />
                <div>
                  <p className="text-sm text-gray-600">Active Alerts</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-6 h-6 text-rose-600" />
                <div>
                  <p className="text-sm text-gray-600">Critical Cases</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-4">Patient</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Guardian</th>
                <th className="pb-4">Last Update</th>
                <th className="pb-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {patients.map((patient) => (
                <tr key={patient.id} className="text-sm">
                  <td className="py-4">{patient.name}</td>
                  <td className="py-4">{getStatusBadge(patient.status)}</td>
                  <td className="py-4">{patient.guardian}</td>
                  <td className="py-4">{patient.lastUpdate}</td>
                  <td className="py-4">
                    <button
                      onClick={() => handleEmergency(patient.id)}
                      className="flex items-center px-3 py-1 text-rose-600 hover:bg-rose-50 rounded-lg"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Emergency
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;