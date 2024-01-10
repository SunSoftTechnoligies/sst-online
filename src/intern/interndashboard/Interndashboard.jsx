import React from 'react';
import Internnavbar from './navbar/Internnavbar';
import Profilecard from './cards/Profilecard';
import Reportingcard from './cards/Reportingcard';

function Interndashboard() {
  return (
    <div>
      {/* Navbar */}
      <Internnavbar />

      {/* Content Container */}
      <div className="flex justify-center items-center mt-8">
        {/* Card 1 */}
        <Profilecard />

        {/* Card 2 */}
        <Reportingcard />
      </div>
    </div>
  );
}

export default Interndashboard;
