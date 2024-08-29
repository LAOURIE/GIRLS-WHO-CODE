import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, UserGroupIcon, BriefcaseIcon, BuildingOffice2Icon, CurrencyDollarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const partnersData = [
  {
    tier: '$1M+',
    partners: [
      'Adobe',
      'AT&T',
      'Prudential Financial',
      'Uber',
      'United Technologies',
      'Walmart',
    ],
    group: 'Sisterhood',
  },
  {
    tier: '$500K – $1M',
    partners: [
      'Bank of America',
      'Craig Newmark Philanthropies',
      'John S. and James L. Knight Foundation',
      'JPMorgan Chase & Co.',
      'Kate Spade New York Foundation',
      'Lyft',
      'Morgan Stanley',
      'News Corp',
      'Salesforce.org',
      'TransPerfect',
      'Xandr*',
    ],
    group: 'SIP',
  },
  {
    tier: '$250K – $499,999',
    partners: [
      'Accenture',
      'Amazon',
      'Arthur M. Blank Family Foundation',
      'Cadence',
      'Citrix',
      'Dell',
      'Deloitte',
      'General Electric',
      'General Motors',
      'Synchrony',
      'U.S. Bank',
      'Weebly',
      'Workday Foundation',
    ],
    group: 'Alumni',
  },
  {
    tier: '$150K – $249,999',
    partners: [
      '21st Century Fox',
      'Benevity Community Impact Fund',
      'BlackRock',
      'EY',
      'George Lucas Family Foundation',
      'Goldman Sachs',
      'Humble Bundle',
      'MetLife',
      'Microsoft',
      'Moody’s',
      'Pfizer Inc.',
      'PwC',
      'WW International',
    ],
    group: 'Clubs',
  },
  {
    tier: '$75K – $149,999',
    partners: [
      'Amazon Web Services',
      'CA Technologies',
      'Capital One',
      'CNA',
      'DaRin Butz Foundation',
      'DTCC',
      'Epsilon',
      'F5 Networks',
      'Facebook',
      'First Data',
      'Ford Motor Company',
      'HSBC',
      'Intuit',
      'JCDRP Family Foundation',
      'Johnson & Johnson',
      'Lightspeed Venture Partners',
      'New York City Council',
      'Oath Foundation',
      'Riot Games, Inc.',
      'Royal Bank of Canada',
      'Software.org: the BSA Foundation',
      'State Farm',
      'The Chuck Lorre Family Foundation',
      'The Walt Disney Company',
      'Twitter',
      'Viacom',
      'Warner Bros.',
    ],
    group: 'Clubs',
  },
  {
    tier: '$25K – $74,999',
    partners: [
      'Adtalem Global Education Foundation',
      'Autodesk',
      'Autonomic',
      'Avanade',
      'Best Buy Foundation',
      'Chicago Trading Co.',
      'Clarkston Consulting',
      'CoverGirl',
      'Credit Suisse',
      'CTA Tech',
      'Dolby',
      'Eileen Fisher Inc.',
      'Ford Fund',
      'General Dynamics Information Technology',
      'NBA / WNBA (NBA Cares)',
      'OVH',
      'Sequoia Capital',
      'Skylight',
      'Tango Card, Inc.',
      'Tides Foundation',
      'USC Marshall School of Business',
      'Valor Equity Partners',
    ],
    group: 'Clubs',
  },
  {
    tier: '$10K – $24,999',
    partners: [
      'Adam Koontz',
      'Alexis Maybank',
      'Beth and David Shaw',
      'CIT Group, Inc.',
      'Cloudflare',
      'Dr. Neeraj and Mrs. Avani Desai',
      'DW Gore Family Foundation',
      'eBay',
      'Elizabeth Morse Genius Charitable Trust',
      'eMoney Advisor',
      'Eniac Ventures',
      'Epic Games',
      'Fannie Mae',
      'FreeWheel, A Comcast Company',
      'Gartner',
      'GE Digital',
      'Gilt Groupe',
      'Hotjar',
      'Integrate Software',
      'Lerer Hippeau',
      'McEvoy Spero Family Charitable Fund',
      'Motorola Solutions Foundation',
      'Options Group',
      'Oracle',
      'SALIDO',
      'SAP',
      'Stream Labs',
      'Urs Hoelzle',
      'Varonis Systems, Inc.',
      'Wells Fargo',
      'West Monroe Partners',
      'Yubico',
    ],
    group: 'Alumni',
  },
  {
    tier: '$5K – $9,999',
    partners: [
      'Amobee',
      'Bright Funds Foundation',
      'Cotton Bureau',
      'Eaton Gate',
      'Edward Harris HSITAG',
      'Jae S. Lim Foundation',
      'Kara Sprague',
      'Mericos Foundation',
      'Moira Forbes',
      'Nancy and Richard Pine Family Foundation, Inc.',
      'Nealesh Patel',
      'Network For Good',
      'New York Community Trust',
      'Nintendo',
      'o9 Solutions, Inc.',
      'Randall Kern',
      'Richard & Nancy Pine',
      'Robert Andrews',
      'Romita Shetty and Nasser Ahmad Foundation, Inc.',
      'Skadden, Arps, Slate, Meagher & Flom LLP',
      'Splash',
      'Thomas Petr',
      'Whitney Herd',
    ],
    group: 'SIP',
  },
  {
    tier: 'University & Host Partners (2018)',
    partners: [
      'Florida International University',
      'Georgetown University',
      'NYU Tandon School of Engineering',
      'The Idea Center at Miami Dade College',
      'University of Texas at Austin',
    ],
    group: 'Founding International Clubs',
  },
];

const OurPartners = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-8 bg-gray-100 flex-grow">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Our Partners</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnersData.map((tier, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">{tier.tier}</h2>
              <h3 className="text-2xl font-semibold text-pink-500 mb-4">{tier.group}</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {tier.partners.map((partner, i) => (
                  <li key={i} className="mb-2">{partner}</li>
                ))}
              </ul>
            </div>
          ))}
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

export default OurPartners;
