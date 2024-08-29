import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, UserGroupIcon, BriefcaseIcon, BuildingOffice2Icon, CurrencyDollarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-8 bg-blue-50 flex-grow">
        {/* Top Middle Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Letter from Reshma</h1>
          <div className="border-t-2 border-dotted border-blue-900 w-24 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-12 items-center">
          {/* Left Section: Circular Image and Title */}
          <div className="flex-shrink-0 text-center md:text-left">
            <img 
              src="/reshma.png" 
              alt="Reshma Saujani" 
              className="w-48 h-48 object-cover rounded-full shadow-lg mx-auto md:mx-0" // Circular image
            />
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-blue-900">Reshma Saujani</h2>
              <p className="text-lg text-gray-700">CEO and Founder, Girls Who Code</p>
            </div>
          </div>

          {/* Right Section: Message */}
          <div className="mt-8 md:mt-0 max-w-lg"> {/* Restricted width for the text */}
            <p className="text-lg text-gray-800 leading-relaxed font-serif">
              One of the most powerful bonds a girl can have is the bond of sisterhood, the bond of a community that rises together.
              <br /><br />
              In 2018, we took you on a journey through sisterhood. Using song and dance and conversation and comedy, we celebrated healing in sisterhood, learning in sisterhood, and coding and growing in sisterhood.
              <br /><br />
              We reflected on how far sisterhood has brought us… and, more importantly, how far it will take us.
              <br /><br />
              And it will take us far. When I talk to the girls in our programs, the girls who have graduated from our programs, I am filled with hope for our future.
              <br /><br />
              They are diverse and brilliant and kind and brave. They have the skills to create technologies that will change the world and a sisterhood to support them as they do.
              <br /><br />
              They – we, Girls Who Code – are the future. And we’re glad to have you as part of it.
            </p>
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

export default HomePage;
