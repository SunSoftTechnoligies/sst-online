
import React from 'react';

function MissionCards() {
  return (
    <div className="mx-auto p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full w-96">
      <img
        className="container mx-auto rounded-md mb-2 w-80 h-60"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwllkkn90d7IR2frjx_zV0VgjR5BPJV946LFZLPIrfabJgj9vgXSODf0KeVKXXd8rEgng&usqp=CAU"
        alt="Mission"
      />
      <h2 className="text-xl mb-2 text-center font-bold">OUR MISSION</h2>
      <p className="text-center">
        To establish ourselves as leaders in technology by creating value for our customers through quality products. We deliver our solutions with speed, integrity, and honesty.
      
      </p>
    </div>
  );
}

export default MissionCards;

