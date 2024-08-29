import React from 'react';

const BorderNavbar = () => {
  return (
    <div className="h-screen bg-blue-900 text-white flex items-center justify-center">
      <div className="absolute top-0 left-0 h-full w-16 bg-white flex flex-col justify-between items-center shadow-lg">
        <div className="flex flex-col justify-center items-center mt-8">
          <div className="bg-blue-900 text-white p-4 rounded-lg mb-4 shadow-lg">
            <h1 className="text-3xl font-bold tracking-wider">GIRLS</h1>
            <h1 className="text-3xl font-bold tracking-wider">WHO</h1>
            <h1 className="text-3xl font-bold tracking-wider">CODE</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-8">
          <div className="bg-blue-900 text-white p-2 rounded-lg shadow-lg">
            <h2 className="text-lg tracking-wider">2018</h2>
            <h2 className="text-lg tracking-wider">Annual</h2>
            <h2 className="text-lg tracking-wider">Report</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorderNavbar;
