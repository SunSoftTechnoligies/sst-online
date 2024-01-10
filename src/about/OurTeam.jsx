
import React from 'react';

function OurTeam() {
  return (
    <div className="mx-auto p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full w-96">
      <img
        className="container mx-auto rounded-md mb-2 w-80 h-60"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7Fp0ZeHXPuWQxxX67Q9kRAKDRCDg2JsZjA&usqp=CAU"
                 alt="OUR TEAM"
      />
      <h2 className="text-xl mb-2 text-center font-bold">OUR TEAM</h2>
      <p className="text-center">
      We have a committed team of professionals with experience in variety of tools and platforms. Our developers keep themselves updated with the latest technology trends.        </p>
    </div>
  );
}

export default OurTeam;

