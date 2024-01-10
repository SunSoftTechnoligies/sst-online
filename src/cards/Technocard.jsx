import React from 'react';

function TechnoCard() {
  return (
    <div className="mx-auto p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full w-96">
      <img
        className="container mx-auto rounded-md mb-2 w-80 h-60"
        src="https://www.graycelltech.com/wp-content/uploads/2017/09/mobile-development-image.jpg"
        alt="Technology"
      />
      <h2 className="text-xl mb-2 text-center ">TECHNOLOGY DEVELOPEMENT</h2>
      <p className="text-center">
      We use the latest Technologies to make our projects 100% accurate and efficient
       </p>
    </div>
  );
}

export default TechnoCard;

