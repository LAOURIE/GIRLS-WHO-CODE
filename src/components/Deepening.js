import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, UserGroupIcon, BriefcaseIcon, BuildingOffice2Icon, CurrencyDollarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Deepening = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-8 bg-blue-50 flex-grow">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Deepening Our Sisterhood</h1>
          <div className="border-t-2 border-dotted border-blue-900 w-24 mx-auto"></div>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed font-serif">
          {/* 6th–12th grade Clubs */}
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">6th–12th grade Clubs</h2>
          <p>
            We have continued to grow our clubs program – now reaching tens of thousands of girls across the country. Our tried and true programming is available to anyone who wants to start a Girls Who Code club, no matter their computing experience.
          </p>
          <blockquote className="mt-4 pl-4 border-l-4 border-pink-500 italic text-gray-700">
            We have created a digital food pantry tracking software and website that allows users from our school to make orders for food, track their order, and pick it up after processing – all in an anonymous and secure system.
            <br />— Samyukta, Club student
          </blockquote>

          {/* Summer Immersion Programs */}
          <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">Summer Immersion Programs</h2>
          <p>
            Our annual flagship Summer Immersion Programs continue to serve thousands of girls across the United States.
          </p>
          <blockquote className="mt-4 pl-4 border-l-4 border-pink-500 italic text-gray-700">
            I have discovered what I want to be when I grow up and found something I was actually passionate about. Before I had no idea what I would do with my life. But after Girls Who Code, I know that I want to pursue something that deals with computer science. I joined clubs and programs this year that deal with coding because of Girls Who Code.
            <br />— Jillian, New York City
          </blockquote>

          {/* Campus program */}
          <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">Campus Program</h2>
          <p>
            Our two-week immersive Campus program, launched in partnership with Deloitte, expanded to include a new iPhone App Development 2 course.
          </p>
          <blockquote className="mt-4 pl-4 border-l-4 border-pink-500 italic text-gray-700">
            Girls Who Code was a fantastic experience – you join a sisterhood, you improve your technology skills, you learn about and hear from successful women in tech, you discuss issues in the community, you receive lesson plans … and so much more. I am very proud to be a part of GWC, and my experience was and is without a doubt the most interesting, challenging, and worthwhile summer experience I have had to date.
            <br />— Isabella, New York City
          </blockquote>

          {/* College Loops */}
          <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">College Loops</h2>
          <p>
            Our College Loops program, launched at 35 college campuses in 12 states this year, will help our alumni persist with computer science in college and beyond and build community with Girls Who Code peers on campus.
          </p>
          <blockquote className="mt-4 pl-4 border-l-4 border-pink-500 italic text-gray-700">
            Overall, it was a game-changing experience for me. Girls Who Code gave me the confidence to pursue a degree in the tech industry, and without them I truly wouldn’t know I was capable of doing it.
            <br />— Pawandeep
          </blockquote>
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

export default Deepening;
