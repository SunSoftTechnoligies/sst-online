
import React from 'react';

function WebCard() {
  return (
    <div className="mx-auto p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full w-96">
      <img
        className="container mx-auto rounded-md mb-2 w-80 h-60"
        src="https://www.graycelltech.com/wp-content/uploads/2015/12/Web-development-trends-you-must-try-this-year.jpg"
        alt="Mission"
      />
      <h2 className="text-xl mb-2 text-center">WEB DEVELOPEMENT</h2>
      <p className="text-center">
      The Sun Soft Technology Mobile team works with you to develop both Native and Hybrid apps
      </p>
    </div>
  );
}

export default WebCard;

