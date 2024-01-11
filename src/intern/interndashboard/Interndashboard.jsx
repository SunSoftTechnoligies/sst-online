import React from 'react';
import Internnavbar from './navbar/Internnavbar';
import Profilecard from './cards/Profilecard';
import Reportingcard from './cards/Reportingcard';

function Interndashboard() {
  return (
<div className="bg-gray-90 min-h-screen">
       {/* Navbar */}
       <Internnavbar />

      <div className="flex flex-col md:flex-row justify-center items-center p-8 space-y-4 md:space-y-0 md:space-x-4">
        {/* Card 1: Profile */}
        <div className="flex-shrink-0 w-full md:w-1/3">
        <Profilecard />
        </div>

        {/* Card 2: Reporting */}
        <div className="flex-shrink-0 w-full md:w-1/3">
        <Reportingcard />
        </div>

      </div>
    </div>
  );
}

export default Interndashboard;
