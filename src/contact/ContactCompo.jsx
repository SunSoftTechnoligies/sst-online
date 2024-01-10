import React from "react";
import { FaFlag, FaEnvelope, FaPhone } from 'react-icons/fa';
import EnquiryForm from "../enquiry/EnquiryForm";
import Footer from "../footer/Footer";



const ContactPage = () => {
  return (
    <div className="max-w-full relative overflow-x-hidden">
      {/* Image */}
      <img
        src="https://biolinkk.com/wp-content/uploads/2020/12/Contact-Us.png"
        alt="Company Image"
        className="rounded max-h-105 w-full"
      />
      
      {/* Contact Information with Border */}
      <div className=" p-4 text-gray-600 text-center">
        <p className="text-black text-2xl font-bold mb-4">
          Check out the options below to get in touch with us.
          We would love to hear from you!
        </p>

        {/* Email Address */}
        <div className="flex items-center justify-center mb-4">
          
          <p>Committed To Bring Out The Best An ISO 9001:2008 Certified</p>
        </div>
       
        {/* Email Address */}
        <div className="flex items-center justify-center mb-4">
          <FaEnvelope className="mr-2" />
          <p>Email: sunsofttech@gmail.com</p>
        </div>

        {/* Phone Number */}
        <div className="flex items-center justify-center mb-4">
          <FaPhone className="mr-2" />
          <p>Phone: +91 98722 46056</p>
        </div>
         
        <div className="flex items-center justify-center mb-4">
          
          <p>OM COMPLEX, Ajit Road Bathinda(Punjab),Pin 151001</p>
        </div>
        {/* Other Contact Information */}
        {/* Add more lines like the ones above for additional information */}
      </div>
      <EnquiryForm/>
      <Footer/>
    </div>
  );
};

export default ContactPage;
