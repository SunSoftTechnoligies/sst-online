import React, { useState, useEffect } from 'react';
import { reportinternService } from '../../services/user';
import {useNavigate} from 'react-router-dom';

function Reporting() {

  const navigate=useNavigate();

  const [obj, setObj] = useState({
    internid: '',
    activity: '',
  });

  const doInputChange = (e) => {
    const { name, value } = e.target;
    setObj((prevObj) => ({
      ...prevObj,
      [name]: value,
    }));
  };
 
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      console.log('Decoded Token:', decodedToken);
  
      if (decodedToken && decodedToken.internId) {
        setObj((prevObj) => ({
          ...prevObj,
          internid: decodedToken.internId, 
        }));
      }
    }
  }, []);
  
  

  const doSaveReport = async (req) => {
    const res = await reportinternService(obj);
    alert(res.data.message);
  };

  const doPreviewWork=async()=>{
    navigate('/intern/report/preview');
  }
 

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-4 rounded-md shadow-md relative h-96 w-96">
        {/* Intern Id */}
        <div className="mb-4 mt-9">
          <label htmlFor="intern" className="block text-lg font-medium leading-6 text-gray-900">
            Intern Id
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            </div>
            <input
              type="text"
              name="internid"
              id="internid"
              value={obj.internid}
              className="block w-80 rounded-md border-0 py-1.5 pl-7 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
              placeholder="example-11121"
              readOnly // Set as readOnly to prevent user input
            />
          </div>
        </div>

        {/* Report Activity with Avatar */}
        <div className="flex items-center">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              className="h-16 w-16 rounded-full absolute -left-6 -top-6"
              src="https://placekitten.com/100/100"  // Replace with your avatar image URL
              alt="User Avatar"
            />
          </div>

          {/* Report Activity */}
          <div className="flex-grow mt-3">
            <label htmlFor="report" className="block text-lg font-medium leading-6 text-gray-900">
              Report Activity
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              </div>
              <textarea
                rows="4"
                name="activity"
                id="activity"
                value={obj.activity}
                onChange={doInputChange}
                className="block w-80 rounded-md border-0 py-1.5 pl-7 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your activity..."
              />
            </div>
          </div>
        </div>

        {/* Save and Preview Buttons */}
        <div className="flex ml-16 mt-5">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4" onClick={doSaveReport}>
            Save
          </button>

          <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={doPreviewWork}>
            Preview Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reporting;
