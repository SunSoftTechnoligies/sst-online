import React from 'react';
import { useNavigate } from 'react-router-dom';

function Reportingcard() {
  const navigate = useNavigate();

  const doReportClick = () => {
    navigate('/admin/allreports');
  };

  return (
    <div className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
      <div className="mx-auto p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full w-96">
        <h2 className="text-2xl font-bold mb-4">Reporting Review</h2>
        <img
          className="container mx-auto rounded-md mb-2 w-80 h-60"
          src="https://www.enago.com/academy/wp-content/uploads/2019/01/Peer-Review-Report.jpg"
          alt="Reporting Review"
        />
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none"
          onClick={doReportClick}
        >
          Review Report
        </button>
      </div>
    </div>
  );
}

export default Reportingcard;