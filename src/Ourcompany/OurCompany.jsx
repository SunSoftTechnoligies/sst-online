
import React, { useState } from 'react';

const OurCompany = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleImage1MouseEnter = () => {
    setHoveredImage(1);
  };

  const handleImage2MouseEnter = () => {
    setHoveredImage(2);
  };

  const handleImageMouseLeave = () => {
    setHoveredImage(null);
  };

  const renderInformation = () => {
    if (hoveredImage === 1) {
      return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl md:text-2xl lg:text-3xl font-bold text-center lg:w-2/3">
          Sun-Soft Technologies is an information technology company, providing customized software and internet solutions. We offer a variety of services in the area of software and web development.
        </div>
      );
    } else if (hoveredImage === 2) {
      return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl md:text-2xl lg:text-3xl font-bold text-center lg:w-2/3">
          We are constantly updating our processes to include the latest tools and technologies to deliver innovative solutions to solve our clients’ problems.
        </div>
      );
    } else {
      return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-4xl lg:text-6xl font-bold text-center">
          SUN-SOFT TECHNOLOGIES
        </div>
      );
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full bg-black text-white ">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 mt-2">OUR COMPANY</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-full relative">
        <div
          className="w-full md:w-1/2"
          onMouseEnter={handleImage1MouseEnter}
          onMouseLeave={handleImageMouseLeave}
        >
          <img
            className="w-full h-full object-cover"
            src="https://thumbs.dreamstime.com/b/d-bellinger-dnp-river-agriculture-region-green-grazing-farms-along-small-towards-distant-elevating-dorrigo-national-park-133082728.jpg?w=768"
            alt="First Image"
          />
          {renderInformation()}
        </div>

        <div
          className="w-full md:w-1/2"
          onMouseEnter={handleImage2MouseEnter}
          onMouseLeave={handleImageMouseLeave}
        >
          <img
            className="w-full h-full object-cover"
            src="https://thumbs.dreamstime.com/b/bellinger-river-bellingen-valley-mid-north-coast-nsw-australia-280042269.jpg?w=768"
            alt="Second Image"
          />
          {renderInformation()}
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
