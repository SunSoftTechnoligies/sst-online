// TestimonialCard.jsx

import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  // Check if testimonial is undefined or null
  if (!testimonial) {
    return null;
  }

  return (
    <div className="rounded-md overflow-hidden shadow-md  p-4 text-center border border-gray-300 mx-auto" style={{ width: '300px', height: '350px' }}>
      {/* Adjust the width and height as needed */}
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="mx-auto h-24 w-24 rounded-full object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{testimonial.name}</h2>
      <br/><br/>
      
      <p className="text-gray-600">{testimonial.comment}</p>
    </div>
  
  );
};

export default TestimonialCard;
