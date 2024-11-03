import React from 'react';
import { Clock, Check } from 'lucide-react';

const MedicationReminder: React.FC = () => {
  const medications = [
    {
      name: 'Lisinopril',
      time: '9:00 AM',
      taken: true,
    },
    {
      name: 'Metformin',
      time: '2:00 PM',
      taken: false,
    },
    {
      name: 'Aspirin',
      time: '8:00 PM',
      taken: false,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Medication Schedule</h2>
      <div className="space-y-4">
        {medications.map((med, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium">{med.name}</p>
                <p className="text-sm text-gray-500">{med.time}</p>
              </div>
            </div>
            {med.taken ? (
              <span className="flex items-center text-emerald-600">
                <Check className="w-5 h-5 mr-1" />
                Taken
              </span>
            ) : (
              <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Take Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicationReminder;