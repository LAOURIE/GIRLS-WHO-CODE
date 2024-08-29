import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full bg-orange-500 flex justify-between items-center p-4">
      {/* Left side: girls who code in italic */}
      <h1 className="text-2xl italic font-serif text-white">girls who code</h1>

      {/* Right side: 2018 annual report underlined */}
      <h2 className="text-xl underline text-white">2018 annual report</h2>
    </div>
  );
};

export default Navbar;
