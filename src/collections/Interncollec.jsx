import React, { useState, useEffect } from 'react';
import { getinternService } from '../services/user';

function Interncollec() {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    const fetchInterns = async () => {
      const res = await getinternService();
      console.log("Server response:", res);
      if (res && res.data && res.data.success) {
        console.log("Fetched interns:", res.data.interns);
        setInterns(res.data.interns);
      } else {
        console.error("Error fetching interns:", res && res.message);
      }
    };
  
    fetchInterns();
  }, []);

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Interns</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Default ID</th>
                <th className="py-2 px-4 border-b">Email Address</th>
                <th className="py-2 px-4 border-b">Password</th>
                <th className="py-2 px-4 border-b">InternId</th>
                <th className="py-2 px-4 border-b">Technical Stack</th>
                <th className="py-2 px-4 border-b">Duration</th>
                <th className="py-2 px-4 border-b">Enroll Date</th>
                <th className="py-2 px-4 border-b">End Date</th>
                <th className="py-2 px-4 border-b">Timeline</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Date of Submission</th>
              </tr>
            </thead>
            <tbody>
              {interns.map((intern) => {
                const currentDate = new Date();
                const endDate = new Date(intern.enddate);
                const timeline = currentDate <= endDate ? "Active" : "Time Period Over";
                const timelineColor = timeline === "Active" ? "text-green-600" : "text-red-600";

                return (
                  <tr key={intern._id}>
                    <td className="py-2 px-4 border-b">{intern._id}</td>
                    <td className="py-2 px-4 border-b">{intern.email}</td>
                    <td className="py-2 px-4 border-b">{intern.pass}</td>
                    <td className="py-2 px-4 border-b">{intern.interid}</td>
                    <td className="py-2 px-4 border-b">{intern.technicalstack}</td>
                    <td className="py-2 px-4 border-b">{intern.duration}</td>
                    <td className="py-2 px-4 border-b">{new Date(intern.enrolldate).toLocaleDateString('en-GB')}</td>
                    <td className="py-2 px-4 border-b">{new Date(intern.enddate).toLocaleDateString('en-GB')}</td>
                    <td className={`py-2 px-4 border-b font-bold ${timelineColor}`}>{timeline}</td>
                    <td className="py-2 px-4 border-b">{intern.Status}</td> 
                    <td className="py-2 px-4 border-b">{new Date(intern.dos).toLocaleDateString('en-GB')}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Interncollec;
