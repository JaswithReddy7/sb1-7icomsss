import React from 'react';

interface RoleCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({
  title,
  description,
  icon,
  color,
  onClick,
}) => {
  const getColorClasses = (color: string) => ({
    rose: 'hover:bg-rose-50 hover:border-rose-200 group-hover:text-rose-600',
    emerald: 'hover:bg-emerald-50 hover:border-emerald-200 group-hover:text-emerald-600',
    indigo: 'hover:bg-indigo-50 hover:border-indigo-200 group-hover:text-indigo-600',
  })[color];

  return (
    <button
      onClick={onClick}
      className={`group p-6 rounded-xl border-2 border-gray-100 bg-white transition-all duration-200 ${getColorClasses(color)} hover:shadow-md text-left w-full`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </button>
  );
};

export default RoleCard;