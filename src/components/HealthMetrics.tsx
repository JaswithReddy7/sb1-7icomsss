import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const HealthMetrics: React.FC = () => {
  const data = [
    { time: '6:00', heartRate: 72, bloodPressure: 120 },
    { time: '9:00', heartRate: 75, bloodPressure: 122 },
    { time: '12:00', heartRate: 78, bloodPressure: 125 },
    { time: '15:00', heartRate: 74, bloodPressure: 121 },
    { time: '18:00', heartRate: 73, bloodPressure: 119 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Health Trends</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="heartRate" stroke="#e11d48" name="Heart Rate" />
            <Line type="monotone" dataKey="bloodPressure" stroke="#0891b2" name="Blood Pressure" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HealthMetrics;