import React, { useState, useEffect } from 'react';
import { blockinternService, getinternService, resumeinternService } from '../../services/user';

function HandleIntern() {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    const fetchInterns = async () => {
      const res = await getinternService();
      if (res && res.data && res.data.success) {
        setInterns(res.data.interns);
      } else {
        console.error("Error fetching interns:", res && res.message);
      }
    };
  
    fetchInterns();
  }, []);

  const getTimeline = (enddate) => {
    const currentDate = new Date();
    const endDate = new Date(enddate);
    return currentDate <= endDate ? "Active" : "Time Period Over";
  }

  const getTimelineColor = (status) => {
    return status === "Active" ? "text-green-600" : "text-red-600";
  }

  const doBlock = async (internid) => {
    const res = await blockinternService({ internid });
    console.log({ internid });
    alert(res.data.message);
  }
  
  const doResume = async (internid) => {
    const res = await resumeinternService({ internid });
    console.log({ internid });
    alert(res.data.message);
  }
  
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Handle Interns</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Email Address</th>
                <th className="py-2 px-4 border-b">Password</th>
                <th className="py-2 px-4 border-b">InternId</th>
                <th className="py-2 px-4 border-b">Technical Stack</th>
                <th className="py-2 px-4 border-b">Duration</th>
                <th className="py-2 px-4 border-b">Enroll Date</th>
                <th className="py-2 px-4 border-b">End Date</th>
                <th className="py-2 px-4 border-b">Timeline</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {interns.map((intern) => {
                const timeline = getTimeline(intern.enddate);
                const timelineColor = getTimelineColor(timeline);

                return (
                  <tr key={intern._id}>
                    <td className="py-2 px-4 border-b text-center">{intern.email}</td>
                    <td className="py-2 px-4 border-b text-center">{intern.pass}</td>
                    <td className="py-2 px-4 border-b text-center">{intern.interid}</td>
                    <td className="py-2 px-4 border-b text-center">{intern.technicalstack}</td>
                    <td className="py-2 px-4 border-b text-center">{intern.duration}</td>
                    <td className="py-2 px-4 border-b text-center">{new Date(intern.enrolldate).toLocaleDateString('en-GB')}</td>
                    <td className="py-2 px-4 border-b text-center">{new Date(intern.enddate).toLocaleDateString('en-GB')}</td>
                    <td className={`py-2 px-4 border-b font-bold  text-center ${timelineColor}`}>{timeline}</td>
                    <td className="py-2 px-4 border-b">{intern.Status}</td> 
                    <td className="py-2 px-4 border-b">
  <div className="flex justify-start items-center gap-2">
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={() => doBlock(intern.interid)}
    >
      Block
    </button>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={() => doResume(intern.interid)}
    >
      Resume
    </button>
  </div>
</td>

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

export default HandleIntern;
