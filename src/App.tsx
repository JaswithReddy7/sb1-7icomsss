import React, { useState } from 'react';
import LoginPage from './components/auth/LoginPage';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const [user, setUser] = useState<{ role: string } | null>(null);

  const handleLogin = (role: string) => {
    setUser({ role });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-indigo-50">
      {user ? (
        <Dashboard role={user.role} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;