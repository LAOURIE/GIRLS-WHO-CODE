import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  ChartBarIcon,
  UserGroupIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  GlobeAltIcon // Import GlobeAltIcon here
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-blue-900 text-white flex flex-col w-64 shadow-lg">
      <div className="p-6 text-center bg-blue-800">
        <h1 className="text-3xl font-extrabold tracking-wide">girls who</h1>
        <h1 className="text-3xl font-extrabold tracking-wide">CODE</h1>
      </div>
      <nav className="mt-6 flex-grow">
        <NavLink to="/dashboard/home" className="flex items-center py-3 px-6 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
          <HomeIcon className="h-6 w-6 mr-3" />
          Home
        </NavLink>
        <NavLink to="/dashboard/by-the-numbers" className="flex items-center py-3 px-6 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
          <ChartBarIcon className="h-6 w-6 mr-3" />
          By the Numbers
        </NavLink>
        <NavLink to="/dashboard/deepening" className="flex items-center py-3 px-6 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
          <UserGroupIcon className="h-6 w-6 mr-3" />
          Deepening
        </NavLink>
        <NavLink to="/dashboard/expanding" className="flex items-center py-3 px-6 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
          <BriefcaseIcon className="h-6 w-6 mr-3" />
          Expanding
        </NavLink>
        <NavLink to="/dashboard/our-partners" className="flex items-center py-3 px-6 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
          <BuildingOffice2Icon className="h-6 w-6 mr-3" />
          Our Partners
        </NavLink>
        <NavLink to="/dashboard/financials" className="flex items-center py-3 px-6 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
          <CurrencyDollarIcon className="h-6 w-6 mr-3" />
          Financials
        </NavLink>
        <NavLink to="/dashboard/vision2019" className="flex items-center py-3 px-6 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
          <GlobeAltIcon className="h-6 w-6 mr-3" />
          Vision for 2019
        </NavLink>
        <NavLink to="/border-navbar" className="flex items-center py-3 px-6 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
  <GlobeAltIcon className="h-6 w-6 mr-3" />
  Border Navbar
</NavLink>

      </nav>
      <div className="p-6 bg-blue-800 text-center">
        <p className="text-sm font-light">&copy; 2024 girls CODE</p>
      </div>
    </div>
  );
};

export default Sidebar;
