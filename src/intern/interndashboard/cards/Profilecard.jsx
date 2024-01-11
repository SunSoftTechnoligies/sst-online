import React from 'react';
import { useNavigate } from 'react-router-dom';
function Profilecard() {

  const navigate = useNavigate();

  const doProfileFunction = () => {
    navigate('/intern/profile');
  }

  return (
    <div className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">      
    <div className="mx-auto p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full w-96">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <img
          className="container mx-auto rounded-md mb-2 w-80 h-60"
          src="https://media.licdn.com/dms/image/D4D12AQE8wd7koty9IQ/article-cover_image-shrink_720_1280/0/1658414027592?e=2147483647&v=beta&t=higrSz1ld325cN3JeWkUmQX43YK_XSpYqnWNh_Ka2J0"
          alt="Profile"
        />
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none"
          onClick={doProfileFunction}
        >
          Profile
        </button>
      </div>
    </div>
  );
}

export default Profilecard;

