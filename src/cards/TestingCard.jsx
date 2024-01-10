
import React from 'react';

function TestingCard() {
  return (
    <div className="mx-auto p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full w-96">
      <img
        className="container mx-auto rounded-md mb-2 w-80 h-60"
        src="https://www.graycelltech.com/wp-content/uploads/2015/12/e-commerce-platforms-1024x675.png"
        alt="Mission"
      />
      <h2 className="text-xl mb-2 text-center ">TESTING DEVELOPEMENT</h2>
      <p className="text-center">
      The perfectionists that we are, we cannot be not good at Application Testing. In fact, we are one of the best in it
       </p>
    </div>
  );
}
export default TestingCard;

