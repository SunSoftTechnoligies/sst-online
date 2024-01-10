import React, { useState, useEffect } from 'react';
import { getreportService } from '../../services/user';

function Reportingcollec() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await getreportService();
        console.log("Fetched reports:", res.data.reports);
        setReports(res.data.reports);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const isLongActivity = (activity) => {
    const wordCount = activity.split(/\s+/).filter((word) => word.length > 0).length;
    return wordCount > 50;
  };
  
  const truncateActivity = (activity, maxLength) => {
    return activity.length > maxLength ? activity.substring(0, maxLength) + "..." : activity;
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">ALL REPORTS</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Intern ID</th>
                <th className="py-2 px-4 border-b">Activity</th>
                <th className="py-2 px-4 border-b">Date of Submission</th>
              </tr>
            </thead>
            <tbody>
              {console.log('Reports:', reports)}
              {reports.map((report) => (
                <tr key={report._id}>
                  <td className="py-2 px-4 border-b text-center">{report.internid}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {isLongActivity(report.activity) ? (
                      <>
                        {truncateActivity(report.activity, 50)}{" "}
                        <a href="#">View More</a>
                      </>
                    ) : (
                      report.activity
                    )}
                  </td>
                  <td className="py-2 px-4 border-b text-center">{formatDate(report.dos)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Reportingcollec;
