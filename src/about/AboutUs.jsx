
import React from 'react';
import VisionCard from './VisionCard';
import MissionCards from './MissionCards';
import OurTeam from './OurTeam';
import Footer from '../footer/Footer';

const AboutUs = () => {
  return (
    <div className="max-w-full relative overflow-x-hidden">
      {/* Image Section */}
      <div className="max-w-full mx-auto">
        <img
          src="https://www.anhussunally.com/wp-content/uploads/2021/04/about-us.jpg"
          alt="Company Image"
          className="rounded max-h-96 w-full container"
        />
      </div>

      {/* Title Section */}
      <div className="flex items-center justify-center w-full bg-black text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-3 mt-2">WHAT MAKES US DIFFERENT</h1>
        </div>
      </div>

      <div className="p-4 bg-gray-300 text-gray-600">
        <p className="text-lg text-center flex items-center justify-center">
          We are constantly updating our processes to include the latest tools and technologies to deliver innovative solutions to solve our clients’ problems.
        </p>
      </div>

      {/* Differentiators Section */}
      <div className="bg-gray-300">
        <div className="p-4 text-gray-600 flex flex-col lg:flex-row">
          <ul className="flex flex-col lg:mr-8">
            <li className="flex items-center mb-2">
              ✓ We employ a creative, problem-solving mind-set
            </li>
            <li className="flex items-center mb-2">
              ✓ Five-star support team
            </li>
            <li className="flex items-center mb-2">
              ✓ Fully Integrated service
            </li>
            <li className="flex items-center mb-2">
              ✓ Proven ISO-based methodologies
            </li>
            <li className="flex items-center mb-2">
              ✓ Employing cutting-edge technology to ensure cost-effective delivery
            </li>
            <li className="flex items-center mb-2">
              ✓ Risk Management at every stage of the process
            </li>
            <li className="flex items-center mb-2">
              ✓ Continuous quality monitoring and feedback through the entire development process
            </li>
            <li className="flex items-center mb-2">
              ✓ Continuous support, consultation, and maintenance availability
            </li>
            <li className="flex items-center mb-2">
              ✓ Strict SLA based service for guaranteed quality
            </li>
          </ul>

          <div className="max-w-full mx-auto lg:w-1/2">
            <img
              src="https://www.graycelltech.com/wp-content/uploads/2016/04/GCT-What-Makes-Us-Different-753x538.jpg"
              alt="Image"
              className="rounded max-h-108 w-108 mb-4"
            />
          </div>
      
        </div>
      </div>

       {/* Card Section */}
       <div className="flex flex-col items-center justify-center lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4 bg-gray-300">
        <div className="flex-shrink-0 w-full lg:w-1/3 mb-4">
          <VisionCard />
        </div>
        <div className="flex-shrink-0 w-full lg:w-1/3 mb-4">
          <MissionCards />
        </div>
        <div className="flex-shrink-0 w-full lg:w-1/3 mb-4">
          <OurTeam />
        </div>
      </div>

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
};

export default AboutUs;
