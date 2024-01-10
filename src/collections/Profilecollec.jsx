import React, { useState, useEffect } from 'react';
import { getprofileService } from '../services/user';

function Profilecollec() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const res = await getprofileService();
      console.log("Server response:", res);
      if (res && res.data && res.data.success) {
        console.log("Fetched profiles:", res.data.profiles);
        setProfiles(res.data.profiles);
      } else {
        console.error("Error fetching profiles:", res && res.message);
      }
    };    
  
    fetchProfiles();
  }, []);
  
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Intern Profiles</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Default ID</th>
                <th className="py-2 px-4 border-b">Email Address</th>
                <th className="py-2 px-4 border-b">Full Name</th>
                <th className="py-2 px-4 border-b">Contact Number</th>
                <th className="py-2 px-4 border-b">Address</th>
                <th className="py-2 px-4 border-b">University</th>
                <th className="py-2 px-4 border-b hidden md:table-cell">City</th>
                <th className="py-2 px-4 border-b hidden md:table-cell">Course</th>
                <th className="py-2 px-4 border-b hidden md:table-cell">Semester</th>
                <th className="py-2 px-4 border-b hidden md:table-cell">Resume</th>
                <th className="py-2 px-4 border-b hidden md:table-cell">Photo</th>
                <th className="py-2 px-4 border-b hidden md:table-cell">Date of Submission</th>
                </tr>
            </thead>
            <tbody>
              {profiles.map((profile) => (
                <tr key={profile._id}>
                  <td className="py-2 px-4 border-b">{profile._id}</td>
                  <td className="py-2 px-4 border-b">{profile.email}</td>
                  <td className="py-2 px-4 border-b">{profile.name}</td>
                  <td className="py-2 px-4 border-b">{profile.contact}</td>
                  <td className="py-2 px-4 border-b">{profile.address}</td>
                  <td className="py-2 px-4 border-b">{profile.uniname}</td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">{profile.city}</td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">{profile.course}</td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">{profile.semester}</td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">{profile.resume}</td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">{profile.pic}</td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">{new Date(profile.dos).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profilecollec;