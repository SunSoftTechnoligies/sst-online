import React from 'react';
import { useNavigate } from 'react-router-dom';

function Allinterncard() {
  const navigate = useNavigate();

  const doAllInterns = () => {
    navigate('/admin/allinterns');
  };

  return (
    <div className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
      <div className="mx-auto p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full w-96">
        <h2 className="text-2xl font-bold mb-4">All Interns</h2>
        <img
          className="container mx-auto rounded-md mb-2 w-80 h-60"
          src="https://www.usaid.gov/sites/default/files/styles/large_2_1/public/uploads/images//52760301021b5f25b1dd5k.jpg?itok=_ScvQWgI"
          alt="All Interns"
        />
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none"
          onClick={doAllInterns}
        >
          All Interns
        </button>
      </div>
    </div>
  );
}

export default Allinterncard;


