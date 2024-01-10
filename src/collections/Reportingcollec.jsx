import React, { useState, useEffect } from 'react';
import { getreportService } from '../services/user';

function Reportingcollec() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const res = await getreportService(reports);
      console.log("Fetched reports:", res.data.reports); // Add this line
      setReports(res.data.reports);
      
    };

    fetchReports();
  }, []);

  return (
    
    <div className='bg-gray-100 min-h-screen'>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Intern Reports</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Rid</th>
                <th className="py-2 px-4 border-b">Intern ID</th>
                <th className="py-2 px-4 border-b">Activity</th>
                <th className="py-2 px-4 border-b">Date of Submission</th>
              </tr>
            </thead>
            <tbody>
              {console.log('Reports:', reports)}
              {reports.map((report) => (
                <tr key={report._id}>
                  <td className="py-2 px-4 border-b">{report._id}</td>
                  <td className="py-2 px-4 border-b">{report.internid}</td>
                  <td className="py-2 px-4 border-b">{report.activity}</td>
                  <td className="py-2 px-4 border-b">{report.dos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}  

export default Reportingcollec