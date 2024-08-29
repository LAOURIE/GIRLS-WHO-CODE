import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  ChartBarIcon,
  UserGroupIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const LandingPage = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-blue-900 text-white">
      {/* Top Center Heading */}
      <div className="text-center py-8">
        <h1 className="text-5xl font-bold">Girls Who Code 2018 Annual Report</h1>
      </div>

      {/* Image and Message Section */}
      <div className="relative">
        <img
          src="/girls.png"
          alt="Girls Who Code"
          className="w-full h-auto max-h-[60vh] object-cover opacity-75"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-t from-blue-900 to-transparent">
          <h2 className="text-4xl font-extrabold text-white italic">
            The future is <span className="text-pink-400">sisterhood</span>
          </h2>
        </div>
      </div>

      {/* Footer Navbar */}
      <footer className="mt-auto bg-blue-800 text-white p-4 shadow-lg">
        <div className="flex justify-center space-x-4">
          <NavLink to="/home" className="flex items-center py-2 px-4 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
            <HomeIcon className="h-6 w-6 mr-2" />
            Home
          </NavLink>
          <NavLink to="/by-the-numbers" className="flex items-center py-2 px-4 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
            <ChartBarIcon className="h-6 w-6 mr-2" />
            By the Numbers
          </NavLink>
          <NavLink to="/deepening" className="flex items-center py-2 px-4 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
            <UserGroupIcon className="h-6 w-6 mr-2" />
            Deepening
          </NavLink>
          <NavLink to="/expanding" className="flex items-center py-2 px-4 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
            <BriefcaseIcon className="h-6 w-6 mr-2" />
            Expanding
          </NavLink>
          <NavLink to="/our-partners" className="flex items-center py-2 px-4 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
            <BuildingOffice2Icon className="h-6 w-6 mr-2" />
            Our Partners
          </NavLink>
          <NavLink to="/financials" className="flex items-center py-2 px-4 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
            <CurrencyDollarIcon className="h-6 w-6 mr-2" />
            Financials
          </NavLink>
          <NavLink to="/vision2019" className="flex items-center py-2 px-4 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
            <GlobeAltIcon className="h-6 w-6 mr-2" />
            Vision for 2019
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
