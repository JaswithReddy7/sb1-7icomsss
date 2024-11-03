import React, { useState } from 'react';
import { Heart, Activity, Droplets, Scale, Percent } from 'lucide-react';
import VitalCard from '../VitalCard';
import HealthMetrics from '../HealthMetrics';
import MedicationReminder from '../MedicationReminder';
import AlertsPanel from '../AlertsPanel';

const UserDashboard: React.FC = () => {
  const [showAlerts, setShowAlerts] = useState(false);

  const vitals = [
    {
      icon: <Heart className="w-5 h-5 text-rose-600" />,
      title: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      trend: '-2.5',
      status: 'normal' as const,
    },
    {
      icon: <Droplets className="w-5 h-5 text-blue-600" />,
      title: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      trend: '1.2',
      status: 'normal' as const,
    },
    {
      icon: <Scale className="w-5 h-5 text-emerald-600" />,
      title: 'BMI',
      value: '23.5',
      unit: 'kg/m²',
      trend: '-0.8',
      status: 'normal' as const,
    },
    {
      icon: <Percent className="w-5 h-5 text-amber-600" />,
      title: 'Fat Percentage',
      value: '18.2',
      unit: '%',
      trend: '-1.5',
      status: 'normal' as const,
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {vitals.map((vital, index) => (
          <VitalCard key={index} {...vital} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HealthMetrics />
        <MedicationReminder />
      </div>

      {showAlerts && <AlertsPanel onClose={() => setShowAlerts(false)} />}
    </div>
  );
};

export default UserDashboard;