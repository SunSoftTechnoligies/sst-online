// Home.js or App.js
import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';
import CardsData from './CardsData';

const Data = () => (
  <div className="app text-center">
    <h1 className="font-bold text-2xl mb-4 bg-black text-white p-2 ">What Our Clients Say</h1>
    <TestimonialCarousel testimonials={CardsData} />
  </div>
);

export default Data;
