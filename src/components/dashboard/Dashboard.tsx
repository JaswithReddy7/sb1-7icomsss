import React from 'react';
import UserDashboard from './UserDashboard';
import GuardianDashboard from './GuardianDashboard';
import AdminDashboard from './AdminDashboard';

interface DashboardProps {
  role: string;
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  const DashboardComponent = {
    user: UserDashboard,
    guardian: GuardianDashboard,
    admin: AdminDashboard,
  }[role];

  return <DashboardComponent />;
};

export default Dashboard;