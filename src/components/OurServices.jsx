import React from 'react';
import WebCard from '../cards/WebCard';
import MobCard from '../cards/MobCard';
import TestingCard from '../cards/TestingCard';
import DesignCard from '../cards/DesignCard';
import InternshipCard from '../cards/InternshipCard';
import TechnoCard from '../cards/Technocard';

const OurServices = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full bg-black text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 mt-2"> SERVICES WE OFFER</h1>
        </div>
      </div>

      <div id="services" className="bg-gray-200">
        <div className="p-4 text-gray-600">
          <p className="text-lg flex items-center justify-center">
            Sun Soft Technology is your Application Development and an Internship Provider partner:<br />
            "At Sun Soft Technology, we pride ourselves on being not just a company but a guiding force for the next generation of tech enthusiasts.
            At Sun Soft, we believe in nurturing fresh talent, providing a platform for aspiring minds to explore the realms of application development. Our internship offers hands-on experience,
            mentorship, and the opportunity to contribute to real-world projects. Sun Soft Technology is your trusted partner in turning your vision into reality with a commitment to quality code, transparent communication.
            We invite you to explore the limitless possibilities of software development with us."
          </p>
        </div>
          
       {/* Card Section */}
       <div className="flex flex-col items-center justify-center  lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4 bg-gray-200  w-full">
        <div className="flex-shrink-0 w-full lg:w-1/3 mb-4">
          <WebCard />
        </div>
        <div className="flex-shrink-0 w-full lg:w-1/3 mb-4">
          <MobCard />
        </div>
        <div className="flex-shrink-0 w-full lg:w-1/3 mb-4">
          <TestingCard />
        </div>
      </div>
      
   
       {/* Card Section */}
       <div className="flex flex-col items-center justify-center lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4 bg-gray-200 w-full">
        <div className="flex-shrink-0 w-full lg:w-1/3 mb-4">
          <DesignCard />
        </div>
        <div className="flex-shrink-0 w-full lg:w-1/3 mb-4">
          <InternshipCard />
        </div>
        <div className="flex-shrink-0 w-full lg:w-1/3 mb-4">
          <TechnoCard />
        </div>
      </div>

        </div> 
      </div>
    
  );
};

export default OurServices;
