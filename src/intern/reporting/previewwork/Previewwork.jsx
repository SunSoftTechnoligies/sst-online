import React, { useState, useEffect } from 'react';
import { previewworkinternService } from '../../../services/user';

function PreviewWork() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchInternReports = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          const tokenData = JSON.parse(atob(storedToken.split('.')[1]));
          const internId = tokenData.internId;
          const res = await previewworkinternService({ internid: internId });
          // alert(internId);
          if (res.data && res.data.reports) {
            setReports(res.data.reports);
          }
        }
      } catch (error) {
        console.error("Error fetching intern reports:", error);
      }
    };
    fetchInternReports();
  }, []);

  if (!reports) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-black mb-4 text-center">My Work Done</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Intern ID</th>
            <th className="py-2 px-4 border-b">Activity</th>
            <th className="py-2 px-4 border-b">Date of Submission</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report._id}>
              <td className="py-2 px-4 border-b">{report.internid}</td>
              <td className="py-2 px-4 border-b">{report.activity}</td>
              <td className="py-2 px-4 border-b">{report.dos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PreviewWork;
