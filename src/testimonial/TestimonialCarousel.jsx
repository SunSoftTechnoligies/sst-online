

// TestimonialCarousel.jsx

import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCarousel = ({ testimonials }) => {
  // Ensure testimonials is an array and not undefined
  if (!Array.isArray(testimonials)) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </Slider>
    
  );
};

export default TestimonialCarousel;
