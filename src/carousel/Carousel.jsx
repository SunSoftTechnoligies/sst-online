import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // medium screen breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      // Add more breakpoints if needed
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="h-1/2 relative">
          {/* Slide 1 content */}
          <img
            className="w-full h-full object-cover"
            src="https://static.wixstatic.com/media/42bffb_d58de881b5b6484183b822f65625c5a9~mv2.jpg/v1/fill/w_1500,h_1151,al_c,q_85,enc_auto/42bffb_d58de881b5b6484183b822f65625c5a9~mv2.jpg"
            alt="Slide 1"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl md:text-2xl lg:text-6xl  font-bold text-center lg:w-2/3">
            Hello, We are Sun Soft Technology,
            Your Development Partner........
          </div>
        </div>
        <div className="h-1/2 relative">
          {/* Slide 2 content */}
          <img
            className="w-full h-full object-cover"
            src="https://static.wixstatic.com/media/42bffb_a82aa434156b4ee2ab6fd23d62944085~mv2.jpg/v1/fill/w_1895,h_1454,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/42bffb_a82aa434156b4ee2ab6fd23d62944085~mv2.jpg"
            alt="Slide 2"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl md:text-2xl lg:text-7xl  font-bold text-center lg:w-2/3">
            We work on your ideas!
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;

