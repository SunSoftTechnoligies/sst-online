import React, { useState } from 'react';

const EnquiryForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Add your logic to submit the form data to your backend or perform any other action
  };

  return (
    <div className="container mx-auto mt-8 bg-gray-200">
      <h1 className="text-3xl text-center font-bold font-semibold bg-black h-12 text-white mb-4 mt-2 p-1">CONTACT US</h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Form Section */}
        <form className="bg-white p-8 border rounded-md shadow-md flex-grow max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center font-bold text-gray-800">Enquiry Form</h2>

          <div className="mb-4">
            <label htmlFor="name" className="text-sm font-semibold text-gray-600 block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-sm font-semibold text-gray-600 block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-sm font-semibold text-gray-600 block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              placeholder="How can we help you?"
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Submit
          </button>
        </form>

        {/* Map Section */}
        <div className="text-center mt-4 md:mt-0">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.88057159592!2d74.94975317425893!3d30.21195591061694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391732a4f07278a9%3A0x4a0d6293513f98ce!2sBanglore%20Computer%20Education!5e0!3m2!1sen!2sin!4v1701328774039!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
