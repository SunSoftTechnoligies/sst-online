import React from 'react';

function DesignCard() {
  return (
    <div className="mx-auto p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full w-96">
      <img
        className="container mx-auto rounded-md mb-2 w-80 h-60"
        src="https://www.graycelltech.com/wp-content/uploads/2015/12/graphicdesign.jpg"
        alt="Design"
      />
      <h2 className="text-xl mb-2 text-center ">DESIGN</h2>
      <p className="text-center">
      Great design is key for a great user experience and increased user engagement
       </p>
    </div>
  );
}

export default DesignCard;

