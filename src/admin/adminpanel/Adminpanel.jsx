import React, { useState } from 'react';
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

      <div className="flex flex-col md:flex-row justify-center items-center p-8 space-y-4 md:space-y-0 md:space-x-4">
        {/* Card 1: Intern Enrollment */}
        <div className="flex-shrink-0 w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
          <Enrollcard />
        </div>

        {/* Card 2: All Interns */}
        <div className="flex-shrink-0 w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
          <Allinterncard />
        </div>

        {/* Card 3: Reporting Review */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <Reportingcard />
        </div>

        {/* Card 4:Handle Intern */}
        {/* <div className="flex-shrink-0 w-full md:w-1/3">
          < HandleInterncard/>
        </div> */}
      </div>
    </div>
  );
}

export default Adminpanel;
