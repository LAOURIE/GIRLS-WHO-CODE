import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/outline'; // or solid depending on the version you prefer



const ByTheNumbers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-8 bg-blue-50 flex-grow">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Sisterhood by the Numbers</h1>
          <div className="border-t-2 border-dotted border-blue-900 w-24 mx-auto"></div>
        </div>

        {/* Content Section */}
        <div className="max-w-2xl mx-auto text-lg text-gray-800 leading-relaxed font-serif mt-12">
          <div className="mb-16">
            <h2 className="text-5xl font-extrabold text-pink-600 mb-4">185,000</h2>
            <p className="text-2xl text-blue-800">Girls served to date (estimated)</p>
          </div>

          <div className="mb-16">
            <h2 className="text-5xl font-extrabold text-pink-600 mb-4">100,000,000</h2>
            <p className="text-2xl text-blue-800">Girls reached (via books, sisterhood, social media, etc.)</p>
          </div>

          <div className="mb-16">
            <h2 className="text-5xl font-extrabold text-pink-600 mb-4">$75,000,000</h2>
            <p className="text-2xl text-blue-800">Total revenue to date</p>
          </div>
        </div>
      </div>

      {/* Footer Navbar */}
      <footer className="bg-blue-800 text-white p-4 shadow-lg mt-auto">
        <div className="flex justify-center space-x-4">
          <NavLink to="/home" className="flex items-center py-2 px-4 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
            <HomeIcon className="h-6 w-6 mr-2" />
            Home
          </NavLink>
          <NavLink to="/by-the-numbers" className="flex items-center py-2 px-4 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
            By the Numbers
          </NavLink>
          <NavLink to="/deepening" className="flex items-center py-2 px-4 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
            Deepening
          </NavLink>
          <NavLink to="/expanding" className="flex items-center py-2 px-4 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
            Expanding
          </NavLink>
          <NavLink to="/our-partners" className="flex items-center py-2 px-4 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
            Our Partners
          </NavLink>
          <NavLink to="/financials" className="flex items-center py-2 px-4 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
            Financials
          </NavLink>
          <NavLink to="/vision2019" className="flex items-center py-2 px-4 text-lg font-medium rounded-lg hover:bg-pink-400 hover:bg-opacity-75">
            Vision for 2019
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default ByTheNumbers;
