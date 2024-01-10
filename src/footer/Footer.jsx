// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
          <h2 className="text-xl  font-bold mb-4">About Us</h2>
          <div className="flex items-center mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5D09120OZdxF8ithOFLEz9dtayESVVWsg69noZtuLsg&s"
              alt="Company Logo"
              className="w-16 h-16 rounded-full mr-4"
            />
            <span className="text-white text-lg font-bold">Sun-Soft Technologies</span>
          </div>
          <br/>
          <p>Committed To Bring Out The Best An ISO 9001:2008 Certified.
          We are Web Design and Development Agency with many years of experience. We help guide businesses through the digital landscape, designing beautiful experiences for your customers along the way.</p>
        </div>

        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/4 mb-4 ml-10">
  <h2 className="text-xl font-bold mb-4">Quick Links</h2>
  <br />
  <ul>
    <li>
      <a href="/" className="text-gray-300 hover:text-white">
        <FontAwesomeIcon icon={faHome} className="mr-2" />
        Home
      </a>
    </li>
    <li>
      <a href="#" className="text-gray-300 hover:text-white">
        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
        Products
      </a>
    </li>
    <li>
      <a href="/services" className="text-gray-300 hover:text-white">
        <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
        Services
      </a>
    </li>
    <li>
      <a href="/about" className="text-gray-300 hover:text-white">
        <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
        About Us
      </a>
    </li>
      </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
  <h2 className="text-xl font-bold mb-4">Contact With Us</h2>
  <br/>
  <p className='font-bold'>Sun Soft Technology</p><br/>
  <p>
    <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-300" />
    sunsofttech@gmail.com
  </p>
  <p>
    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-300" />
    OM COMPLEX, Ajit Road Bathinda(Punjab),Pin 151001
  </p>
  <p>
    <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-300" />
    Phone: (+91) 98722-46056
  </p>
  <br/><br/>
           <br/><br/>
             {/* Add Facebook icon and link */}
    
    <a
      href="https://www.facebook.com/sunsofttech11?fref=ts"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white flex items-center"
    >
      <FontAwesomeIcon icon={faFacebook} className="mr-2 h-16 w-16" />
      Facebook
    </a>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2023 Sun Soft Technology. All Rights Reserved.</p>
        
      </div>
      
    </footer>
  );
};

export default Footer;
