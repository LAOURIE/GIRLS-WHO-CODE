import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow bg-gray-100 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
