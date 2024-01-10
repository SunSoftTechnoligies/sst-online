
import React from 'react';

function VisionCard() {
  return (
    <div className="mx-auto p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full w-96">
      <img
        className="container mx-auto rounded-md mb-2 w-80 h-60"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8KUZJtOIowBsheJu4DlTt_peR-vlTwL5cw&usqp=CAU"
       alt="vision "
      />
      <h2 className="text-xl mb-2 text-center font-bold">OUR VISION</h2>
      <p className="text-center">
      To make technology work for the benefit of others. We strive to be bold in our ideas and to push the limits of what’s possible.
       </p>
    </div>
  );
}

export default VisionCard;

