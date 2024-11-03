import React from 'react';
import { X, AlertTriangle, Bell } from 'lucide-react';

interface AlertsPanelProps {
  onClose: () => void;
}

const AlertsPanel: React.FC<AlertsPanelProps> = ({ onClose }) => {
  const alerts = [
    {
      type: 'warning',
      message: 'Blood pressure slightly elevated',
      time: '15 minutes ago',
    },
    {
      type: 'info',
      message: 'Upcoming medication: Lisinopril',
      time: '30 minutes ago',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full">
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="text-lg font-semibold">Recent Alerts</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
            >
              {alert.type === 'warning' ? (
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
              ) : (
                <Bell className="w-5 h-5 text-blue-500 flex-shrink-0" />
              )}
              <div>
                <p className="font-medium">{alert.message}</p>
                <p className="text-sm text-gray-500">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlertsPanel;