import React, { useState } from 'react';
import Adminpannav from './navbar/Adminpannav';
import Enrollcard from './cards/Enrollcard';
import Allinterncard from './cards/Allinterncard';
import Reportingcard from './cards/Reportingcard';

function Adminpanel() {
  const [isAdminLoggedIn, setAdminLoggedIn] = useState(false);

  return (
    <div className="bg-gray-90 min-h-screen">
      {/* Admin Panel Navbar */}
      <Adminpannav isAdminLoggedIn={isAdminLoggedIn} />

      <div className="flex justify-center items-center p-8 space-x-4">
        {/* Card 1: Intern Enrollment */}
        <div className="flex-shrink-0 w-1/3">
          <Enrollcard />
        </div>

        {/* Card 2: All Interns */}
        <div className="flex-shrink-0 w-1/3">
          <Allinterncard />
        </div>

        {/* Card 3: Reporting Review */}
        <div className="flex-shrink-0 w-1/3">
          <Reportingcard />
        </div>
      </div>
    </div>
  );
}

export default Adminpanel;
