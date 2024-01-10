import React from 'react';
import {useNavigate} from 'react-router-dom'

function Reportingcard() {

  const navigate=useNavigate();

  const doReportClick=()=>{
    navigate('/intern/report');
  }

  return (
    <div>
      <div className="max-w-md mx-4 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-4">Report</h2>
        <img
          className="rounded-md mb-4"
          src="https://media.licdn.com/dms/image/D4D12AQE8wd7koty9IQ/article-cover_image-shrink_720_1280/0/1658414027592?e=2147483647&v=beta&t=higrSz1ld325cN3JeWkUmQX43YK_XSpYqnWNh_Ka2J0"
          alt="Reporting"
        />
        <button
          onClick={doReportClick}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-2  square-button transition duration-300 transform hover:scale-105 focus:outline-none"
        >
          Report
        </button>
      </div>
    </div>
  );
}

export default Reportingcard;
