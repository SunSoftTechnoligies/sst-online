import React from 'react';
import Adminpannav from './navbar/Adminpannav';
import Enrollcard from './cards/Enrollcard';
import Allinterncard from './cards/Allinterncard';
import Reportingcard from './cards/Reportingcard';
import HandleInterncard from './cards/Handleinterncard';

function Adminpanel() {
  return (
    <div className="bg-gray-90 min-h-screen overflow-x-hidden">
      {/* Admin Panel Navbar */}
      <Adminpannav />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {/* Card 1: Intern Enrollment */}
        <div className="flex-shrink-0 w-full mb-8">
          <Enrollcard />
        </div>

        {/* Card 2: Reporting Review */}
        <div className="flex-shrink-0 w-full mb-8">
          <Reportingcard />
        </div>

        {/* Card 3: All Interns */}
        <div className="flex-shrink-0 w-full mb-8">
          <Allinterncard />
        </div>

        {/* Card 4: Handle Intern */}
        <div className="flex-shrink-0 w-full flex justify-center">
          <HandleInterncard />
        </div>
      </div>
    </div>
  );
}

export default Adminpanel;
