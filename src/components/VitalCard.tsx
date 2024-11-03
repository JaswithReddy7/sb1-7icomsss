import React from 'react';

interface VitalCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  unit: string;
  trend: string;
  status: 'normal' | 'warning' | 'alert';
}

const VitalCard: React.FC<VitalCardProps> = ({
  icon,
  title,
  value,
  unit,
  trend,
  status,
}) => {
  const statusStyles = {
    normal: 'text-emerald-600',
    warning: 'text-amber-600',
    alert: 'text-rose-600',
  };

  const trendValue = parseFloat(trend);
  const isPositive = trendValue > 0;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {icon}
          <h3 className="font-medium">{title}</h3>
        </div>
        <span className={statusStyles[status]}>●</span>
      </div>
      <div className="flex items-baseline justify-between">
        <div>
          <span className="text-2xl font-bold">{value}</span>
          <span className="text-gray-500 ml-1">{unit}</span>
        </div>
        <div className={`flex items-center ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
          {isPositive ? '↑' : '↓'} {Math.abs(trendValue)}%
        </div>
      </div>
    </div>
  );
};

export default VitalCard;