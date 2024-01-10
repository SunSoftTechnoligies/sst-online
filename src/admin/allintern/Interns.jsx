import React, { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { getinternService, getprofileService } from '../../services/user';

function InternTable() {
  const [interns, setInterns] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [selectedIntern, setSelectedIntern] = useState(null);

  useEffect(() => {
    fetchInterns();
    fetchProfiles();
  }, []);

  const fetchInterns = async () => {
    const res = await getinternService();
    if (res && res.data && res.data.success) {
      setInterns(res.data.interns);
    }
  };

  const fetchProfiles = async () => {
    const res = await getprofileService();
    if (res && res.data && res.data.success) {
      setProfiles(res.data.profiles);
    }
  };

  const getStatus = (intern) => {
    const currentDate = new Date();
    const endDate = new Date(intern.enddate);
    return currentDate <= endDate ? "Active" : "Time Period Over";
  };

  const getStatusColor = (status) => {
    return status === "Active" ? "text-green-600 font-bold" : "text-red-600 font-bold";
  };

  const getProfilePic = (email) => {
    const profile = profiles.find(profile => profile.email === email);
    return profile ? `http://localhost:3005/uploads/${profile.pic}` : null;
  };

  const getInternStatus = (selectedIntern) => {
    return new Date() <= new Date(selectedIntern.enddate) ? "Active" : "Time Period Over";
  };

  const doshowDetails = (intern, picUrl) => {
    setSelectedIntern({
      ...intern,
      pic: picUrl
    });
    console.log("Picture URL:", picUrl);
  };

  const displayInternPicture = (selectedIntern) => {
    return selectedIntern.pic ? (
      <img
        src={selectedIntern.pic}
        alt="Profile"
        className="rounded-full object-cover h-32 w-32"
      />
    ) : 'No picture available';
  };

  const getInternName = (email) => {
    const profile = profiles.find(profile => profile.email === email);
    return profile ? profile.name : 'N/A';
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">ALL INTERNS</h1>
          <table className='min-w-full bg-white border border-gray-300'>
            <thead>
              <tr>
                <th className='py-2 px-4 border-b w-1/6'>Name</th>
                <th className='py-2 px-4 border-b w-1/6'>Email Address</th>
                <th className='py-2 px-4 border-b w-1/6'>Technical Stack</th>
                <th className='py-2 px-4 border-b w-1/6'>Duration</th>
                <th className='py-2 px-4 border-b w-1/6'>Status</th>
                <th className='py-2 px-4 border-b w-1/6'>Details</th>
              </tr>
            </thead>
            <tbody>
              {interns.map((intern) => {
                const name = getInternName(intern.email);
                const status = getStatus(intern);
                const statusColor = getStatusColor(status);
                const picUrl = getProfilePic(intern.email);

                return (
                  <tr key={intern._id}>
                    <td className='py-2 px-4 border-b w-1/6 whitespace-nowrap'>{name}</td>
                    <td className='py-2 px-4 border-b w-1/6 whitespace-nowrap'>{intern.email}</td>
                    <td className='py-2 px-4 border-b w-1/6 whitespace-nowrap text-center'>{intern.technicalstack}</td>
                    <td className='py-2 px-4 border-b w-1/6 whitespace-nowrap text-center'>{intern.duration}</td>
                    <td className={`py-2 px-4 border-b w-1/6  text-center whitespace-nowrap ${statusColor}`}>{status}</td>
                    <td className='py-2 px-4 border-b w-1/6'>
                      <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => doshowDetails(intern, picUrl)}
                      >
                        View Full Details
                      </button>
                    </td>
                  </tr>

                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {selectedIntern && (
        <Transition appear show={true} as={React.Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setSelectedIntern(null)}
          >
            <div className="min-h-screen px-4 text-center pb-20">
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />

              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
              </span>

              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">                <Dialog.Title
                as="h1"
                className="text-3xl font-medium leading-6 text-gray-950 text-center mb-6"
              >
                Intern Details
              </Dialog.Title>
                <div className="flex justify-center">
                  {displayInternPicture(selectedIntern)}
                </div>

                <div className="mt-2">
                  <p className="text-lg text-gray-800 text-center">
                    <strong>Name:</strong> {getInternName(selectedIntern.email)}<br />
                    <strong>Email:</strong> {selectedIntern.email}<br />
                    <strong>InternId:</strong> {selectedIntern.interid}<br />
                    <strong>Enroll Date:</strong> {new Date(selectedIntern.enrolldate).toLocaleDateString('en-GB')}<br />
                    <strong>End Date:</strong> {new Date(selectedIntern.enddate).toLocaleDateString('en-GB')}<br />
                    <strong>Technical Stack:</strong> {selectedIntern.technicalstack}<br />
                    <strong>Duration:</strong> {selectedIntern.duration}<br />
                    <strong>Status:</strong> {getInternStatus(selectedIntern)}<br />
                  </p>
                  <div className="flex justify-center mt-4">
                    <button
                      type="button"
                      className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                      onClick={() => setSelectedIntern(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
}

export default InternTable;