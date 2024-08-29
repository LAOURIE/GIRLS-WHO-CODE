import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, UserGroupIcon, BriefcaseIcon, BuildingOffice2Icon, CurrencyDollarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Vision2019 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-8 bg-blue-50 flex-grow">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Vision for 2019</h1>
          <div className="border-t-2 border-dotted border-blue-900 w-24 mx-auto"></div>
        </div>

        {/* Vision Content */}
        <div className="max-w-2xl mx-auto text-lg text-gray-800 leading-relaxed font-serif">
          <p>
            We imagine a world where our computer science classrooms are as diverse as our communities, a world where women in computing have a sisterhood to lean on, a world where that sisterhood creates real change for communities everywhere.
          </p>
          <p className="mt-6">
            To bring this world to bear, we will work in 2019 to:
          </p>
          <ul className="list-decimal list-inside mt-4 space-y-2">
            <li>Expand in the U.S. and internationally</li>
            <li>Help our alumni persist and succeed</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="mt-12 text-center">
          <img 
            src="/girls.png" 
            alt="Girls Who Code" 
            className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Footer Navbar */}
      <footer className="bg-blue-800 text-white p-4 shadow-lg">
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

export default Vision2019;
