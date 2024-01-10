import React from 'react'
import { useNavigate } from 'react-router-dom';

function Reportingcard() {

    const navigate = useNavigate();

    const doReportClick = () => {
    
      navigate('/admin/allreports');
    };

    return (
        <div>
            <div>
                <div className="max-w-md mx-4 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <h2 className="text-2xl font-bold mb-4">Reporting Review</h2>
                    <img
                        className="rounded-md mb-4"
                        src="https://www.enago.com/academy/wp-content/uploads/2019/01/Peer-Review-Report.jpg"
                        alt="Reporting Review"
                    />
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none"
                      onClick={doReportClick}
                    >
                        Review Report
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Reportingcard