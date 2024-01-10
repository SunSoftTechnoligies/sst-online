import React from 'react';

function MobCard() {
  return (
    <div className="mx-auto p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full w-96">
      <img
        className="container mx-auto rounded-md mb-2 w-80 h-60"
        src="https://www.graycelltech.com/wp-content/uploads/2015/12/web-development-image.jpg"
        alt="Mobile"
      />
      <h2 className="text-xl mb-2 text-center ">MOBILE DEVELOPMENT</h2>
      <p className="text-center">
      Sun Soft Technology is your one-stop for a wide range of web solutions
       </p><br/>
    </div>
  );
}

export default MobCard;


