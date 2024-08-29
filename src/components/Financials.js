import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, UserGroupIcon, BriefcaseIcon, BuildingOffice2Icon, CurrencyDollarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Financials = () => {
  const [isStatementPositionOpen, setIsStatementPositionOpen] = useState(false);
  const [isStatementActivitiesOpen, setIsStatementActivitiesOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-8 bg-blue-50 flex-grow">
        {/* Top Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">2018 Financials</h1>
          <div className="border-t-2 border-dotted border-blue-900 w-24 mx-auto"></div>
        </div>

        {/* Financial Statements */}
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="flex-grow">
            {/* Statement of Financial Position */}
            <div className="mb-6">
              <div 
                className="flex justify-between items-center cursor-pointer bg-gradient-to-r from-white via-blue-100 to-white p-4 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300"
                onClick={() => setIsStatementPositionOpen(!isStatementPositionOpen)}
              >
                <h2 className="text-2xl font-semibold text-gray-800">Statement of Financial Position</h2>
                {isStatementPositionOpen ? <ChevronUpIcon className="h-6 w-6" /> : <ChevronDownIcon className="h-6 w-6" />}
              </div>
              {isStatementPositionOpen && (
                <div className="mt-4 p-4 bg-white rounded-lg shadow-inner">
                  <h3 className="text-xl font-bold text-gray-700 mb-4">Assets</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li className="hover:bg-blue-50 p-2 rounded">Cash: <span className="font-semibold text-blue-800">$8,158,115 (2018)</span> | $16,588,286 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Contributions + grants receivable: <span className="font-semibold text-blue-800">$6,630,211 (2018)</span> | $3,260,848 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Prepaid expenses + other current assets: <span className="font-semibold text-blue-800">$104,619 (2018)</span> | $61,524 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Investments: <span className="font-semibold text-blue-800">$9,126,908 (2018)</span></li>
                    <li className="hover:bg-blue-50 p-2 rounded">Total current assets: <span className="font-semibold text-blue-800">$29,781,493 (2018)</span> | $19,910,658 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Long-term investments: <span className="font-semibold text-blue-800">$3,998,342 (2018)</span></li>
                    <li className="hover:bg-blue-50 p-2 rounded">Long-term receivables and assets: <span className="font-semibold text-blue-800">$2,736,523 (2018)</span> | $580,920 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Other assets: <span className="font-semibold text-blue-800">$26,775 (2018)</span> | $26,775 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Total assets: <span className="font-semibold text-blue-800">$29,781,493 (2018)</span> | $20,518,353 (2017)</li>
                  </ul>
                  <h3 className="text-xl font-bold text-gray-700 mt-6 mb-4">Liabilities</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li className="hover:bg-blue-50 p-2 rounded">Total liabilities: <span className="font-semibold text-blue-800">$743,250 (2018)</span> | $526,816 (2017)</li>
                  </ul>
                  <h3 className="text-xl font-bold text-gray-700 mt-6 mb-4">Net Assets</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li className="hover:bg-blue-50 p-2 rounded">Unrestricted: <span className="font-semibold text-blue-800">$14,963,806 (2018)</span> | $10,280,016 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Restricted assets: <span className="font-semibold text-blue-800">$14,074,437 (2018)</span> | $9,711,521 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Total net assets: <span className="font-semibold text-blue-800">$29,038,243 (2018)</span> | $19,991,537 (2017)</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Statement of Activities */}
            <div>
              <div 
                className="flex justify-between items-center cursor-pointer bg-gradient-to-r from-white via-blue-100 to-white p-4 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300"
                onClick={() => setIsStatementActivitiesOpen(!isStatementActivitiesOpen)}
              >
                <h2 className="text-2xl font-semibold text-gray-800">Statement of Activities</h2>
                {isStatementActivitiesOpen ? <ChevronUpIcon className="h-6 w-6" /> : <ChevronDownIcon className="h-6 w-6" />}
              </div>
              {isStatementActivitiesOpen && (
                <div className="mt-4 p-4 bg-white rounded-lg shadow-inner">
                  <h3 className="text-xl font-bold text-gray-700 mb-4">Revenue + Support</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li className="hover:bg-blue-50 p-2 rounded">Unrestricted contributions + grants: <span className="font-semibold text-blue-800">$16,643,286 (2018)</span> | $13,936,053 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">In-kind donations: <span className="font-semibold text-blue-800">$1,122,608 (2018)</span> | $843,841 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Gala: <span className="font-semibold text-blue-800">$1,032,473 (2018)</span> | $814,680 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Other income: <span className="font-semibold text-blue-800">$660,782 (2018)</span> | $55,344 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Total unrestricted revenue: <span className="font-semibold text-blue-800">$19,459,149 (2018)</span> | $15,649,918 (2017)</li>
                  </ul>
                  <h3 className="text-xl font-bold text-gray-700 mt-6 mb-4">Expenses</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li className="hover:bg-blue-50 p-2 rounded">Program services: <span className="font-semibold text-blue-800">$11,786,502 (2018)</span> | $10,017,189 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Management + general: <span className="font-semibold text-blue-800">$1,795,985 (2018)</span> | $1,253,106 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Fundraising: <span className="font-semibold text-blue-800">$1,214,570 (2018)</span> | $887,226 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Total expenses: <span className="font-semibold text-blue-800">$14,797,057 (2018)</span> | $12,157,521 (2017)</li>
                  </ul>
                  <h3 className="text-xl font-bold text-gray-700 mt-6 mb-4">Net Assets</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li className="hover:bg-blue-50 p-2 rounded">Change in unrestricted net assets: <span className="font-semibold text-blue-800">$4,683,790 (2018)</span> | $3,492,397 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Change in temporarily restricted net assets: <span className="font-semibold text-blue-800">$4,362,916 (2018)</span> | $1,009,944 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Net assets – beginning of year: <span className="font-semibold text-blue-800">$19,991,537 (2018)</span> | $15,489,196 (2017)</li>
                    <li className="hover:bg-blue-50 p-2 rounded">Net assets – end of year: <span className="font-semibold text-blue-800">$29,038,243 (2018)</span> | $19,991,537 (2017)</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
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

export default Financials;
