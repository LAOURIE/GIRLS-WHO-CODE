import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, UserGroupIcon, BriefcaseIcon, BuildingOffice2Icon, CurrencyDollarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Expanding = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-8 bg-blue-50 flex-grow">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Expanding Our Sisterhood</h1>
          <div className="border-t-2 border-dotted border-blue-900 w-24 mx-auto"></div>
        </div>

        {/* Content Section */}
        <div className="max-w-2xl mx-auto text-lg text-gray-800 leading-relaxed font-serif">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Sisterhood: The Album</h2>
          <p>
            Inspiring 100 million<br />
            On Day of the Girl, we released <strong>Sisterhood</strong>, a digital visual album, to elevate a growing movement of girls fighting for change. Countless women musicians, activists, athletes, and more joined our girls to raise their hands in sisterhood for issues close to their hearts.
          </p>

          <div className="mt-6 text-center">
            <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-pink-600 transition duration-300">
              Watch Video
            </button>
          </div>

          <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">8 New Books in Our Bestselling Series</h2>
          <p>
            We expanded our literary offerings with eight new books in our bestselling series, continuing to inspire and educate the next generation of girls.
          </p>
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

export default Expanding;
