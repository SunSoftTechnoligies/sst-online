import React, { useState, useRef, useEffect } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { indianTechUniversities } from '../../table/Universitytable';
import { getinterndataService, profilesaveinternService, updateinterndataService } from '../../services/user';

function Profile() {

  const fileInputResumeRef = useRef(null);
  const fileInputPicRef = useRef(null);

  const [obj, setObj] = useState({
    email: '',
    name: '',
    contact: '',
    address: '',
    uniname: '',
    city: '',
    course: '',
    semester: '',
    resume: null,
    pic: null,
    // resumeFileName: '',
    // picFileName: '',
  });


  const [picPreview, setPicPreview] = useState(null);

  useEffect(() => {
    if (!obj.email) {
      return;
    }

    const fetchData = async () => {
      try {
        const res = await getinterndataService({ email: obj.email });
        if (res.status === 200) {
          const data = res.data;
          const resumeUrl = `http://localhost:3005/uploads/${data.resume}`;
          const picUrl = `http://localhost:3005/uploads/${data.pic}`;

          setObj((prevObj) => ({
            ...prevObj,
            ...data,
            resumeFileName: resumeUrl,
            picFileName: picUrl,
            resumePreviewURL: resumeUrl,
            picPreviewURL: picUrl,
          }));

          // Set the previews
          setResumePreview(resumeUrl);
          setPicPreview(picUrl);

        } else {
          console.error('Error fetching intern data:', res);
        }
      } catch (error) {
        console.error('Error fetching intern data:', error);
      }
    };

    fetchData();

  }, [obj.email]);

  const [resumePreview, setResumePreview] = useState(null);

  const doInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "uniname" && !indianTechUniversities.some((university) => university.name === value)) {
      const newUniversity = { name: value };
      indianTechUniversities.push(newUniversity);
      setObj((prevObj) => ({
        ...prevObj,
        [name]: newUniversity.name,
      }));
    } else {
      setObj((prevObj) => ({
        ...prevObj,
        [name]: value,
      }));
    }
  };
  
  const doPicInputChange = (e) => {
    const { name, files } = e.target;
    const selectedFile = files[0];
    if (selectedFile) {
      const maxSize = 5 * 1024 * 1024;
      if (selectedFile.size > maxSize) {
        alert('File size exceeds the limit of 5MB. Please choose a smaller file.');
        fileInputPicRef.current.value = '';
        return;
      }

      setObj((prevObj) => ({
        ...prevObj,
        [name]: selectedFile.name,
      }));

      const reader = new FileReader();

      reader.onload = (event) => {
        setPicPreview(event.target.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const doBrowseClick = () => {
    fileInputPicRef.current.click();
  };

  const doResumeInputChange = (e) => {
    const { name, files } = e.target;
    const selectedFile = files[0];
    if (selectedFile) {
      const maxSize = 5 * 1024 * 1024;
      if (selectedFile.size > maxSize) {
        alert('File size exceeds the limit of 5MB. Please choose a smaller file.');
        fileInputResumeRef.current.value = '';
        return;
      }

      setObj((prevObj) => ({
        ...prevObj,
        [name]: selectedFile.name,
      }));

      const reader = new FileReader();

      reader.onload = (event) => {
        setObj((prevObj) => ({
          ...prevObj,
          resumePreview: selectedFile.name,
          resumePreviewURL: event.target.result,
        }));
      };

      reader.readAsDataURL(selectedFile);
    }
  };


  const doPicPreview = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setPicPreview(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const doResumePreview = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setObj((prevObj) => ({
          ...prevObj,
          resumePreviewURL: event.target.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const doSaveProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  Object.keys(obj).forEach((key) => {
      if (key === 'resume') {
        formData.append(key, fileInputResumeRef.current.files[0]);
      } else if (key === 'pic') {
        formData.append(key, fileInputPicRef.current.files[0]);
      } else {
        formData.append(key, obj[key]);
      }
    });
    const res = await profilesaveinternService(formData);
    alert(res.data.message);
  };
  
  const doUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(obj).forEach((key) => {
      if (key === 'resume') {
        formData.append(key, fileInputResumeRef.current.files[0]);
      } else if (key === 'pic') {
        formData.append(key, fileInputPicRef.current.files[0]);
      } else {
        formData.append(key, obj[key]);
      }
    });
    const res = await updateinterndataService(formData);
    alert(res.data.message);
  };
  

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg w-108 max-w-screen-lg mt-3">
          <form encType="multipart/form-data" className="grid grid-cols-12 gap-8">
            {/* Left Side*/}
            <div className="col-span-11 ml-9">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">My Personal Information</h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* Email address */}
                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-700">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={obj.email}
                        onChange={doInputChange}
                        readOnly
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:caret-indigo-600"
                      />
                    </div>
                  </div>

                  {/* Full name and contact number */}
                  <div className="sm:col-span-4 flex flex-wrap">
                    <div className="flex-1 pr-2 mb-6 sm:mb-0">
                      <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-700">
                        Full Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="name"
                          id="full-name"
                          value={obj.name}
                          onChange={doInputChange}
                          autoComplete="name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="flex-1 pl-2 mb-6 sm:mb-0">
                      <label htmlFor="contact-number" className="block text-sm font-medium leading-6 text-gray-700">
                        Contact Number
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="contact"
                          id="contact-number"
                          autoComplete="tel"
                          value={obj.contact}
                          onChange={doInputChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="sm:col-span-4">
                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-700">
                      Address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={obj.address}
                        onChange={doInputChange}
                        autoComplete="street-address"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* University name and city */}
                  <div className="sm:col-span-4 flex">
                    <div className="sm:col-span-4 flex-1 pr-2">
                      <label htmlFor="university" className="block text-sm font-medium leading-6 text-gray-700">
                        University
                      </label>
                      <div className="mt-2">
                        <input
                          id="university"
                          name="uniname"
                          value={obj.uniname}
                          onChange={doInputChange}
                          list="universityList"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                        />
                        <datalist id="universityList">
                          {indianTechUniversities.map((university) => (
                            <option key={university.name} value={university.name} />
                          ))}
                        </datalist>
                      </div>
                    </div>
                    <div className="flex-1 pl-2">
                      <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-700">
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          value={obj.city}
                          onChange={doInputChange}
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Degree/Course and semester */}
                  <div className="sm:col-span-4 flex">
                    <div className="flex-1 pr-2">
                      <label htmlFor="degree-course" className="block text-sm font-medium leading-6 text-gray-700">
                        Degree/Course
                      </label>
                      <div className="mt-2">
                        <select
                          id="degree-course"
                          name="course"
                          value={obj.course}
                          onChange={doInputChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                        >
                          <option>Select your Degree</option>
                          <option>Bachelor's in Computer Science</option>
                          <option>Bachelor's in Technology</option>
                          <option>Ph.D. in Physics</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex-1 pl-2">
                      <label htmlFor="semester" className="block text-sm font-medium leading-6 text-gray-700">
                        Semester
                      </label>
                      <div className="mt-2">
                        <select
                          id="semester"
                          name="semester"
                          value={obj.semester}
                          onChange={doInputChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option>Select your Semester</option>
                          <option>1st Semester</option>
                          <option>2nd Semester</option>
                          <option>3rd Semester</option>
                          <option>4th Semester</option>
                          <option>5th Semester</option>
                          <option>6th Semester</option>
                          <option>7th Semester</option>
                          <option>8th Semester</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Resume */}
                  <div className="sm:col-span-4">
                    <label htmlFor="resume" className="block text-sm font-medium leading-6 text-gray-700">
                      Resume
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 w-96">
                      <div className="flex-1">
                        <label
                          htmlFor="file-upload-resume"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          {/* Hidden file input for resume */}
                          <input
                            id="file-upload-resume"
                            name="resume"
                            type="file"
                            onChange={(e) => {
                              doResumeInputChange(e);
                              doResumePreview(e);
                            }}
                            className="sr-only"
                            ref={fileInputResumeRef}
                          />
                          Upload your resume
                        </label>
                        <div className="flex items-center space-x-2">
                          {obj.resumePreviewURL && (
                            <div className="text-sm font-semibold text-gray-700 flex-1">
                              <embed
                                src={obj.resumePreviewURL}
                                type="application/pdf"
                                width="300px"
                                height="300px"
                                id="resume-preview"
                              />
                            </div>
                          )}
                        </div>
                        <p>PDF accepted only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side  */}
            <div className="col-span-1 w-10">
              <div className="flex flex-col items-center mt-16 mr-14 float-right">
                {/* Avatar and Change button */}
                <div className="col-span-1 w-10">
                  <div className="flex flex-col items-center  mr-14 float-right">
                    {/* Avatar and Change button */}
                    {/* Profile Picture */}
                    <div className="h-32 w-32 relative overflow-hidden rounded-full ring-2 ring-white bg-gray-300 mt-2">
                      {/* Display the preview of the selected picture inside the avatar */}
                      {picPreview ? (
                        <img
                          src={picPreview}
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <UserCircleIcon className="h-full w-full text-gray-600" />
                      )}

                      console.log(picPreview); // Log the state

                    </div>

                    <button
                      type="button"
                      onClick={doBrowseClick}
                      className="mt-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Browse
                    </button>
                    <input
                      ref={fileInputPicRef}
                      type="file"
                      id="file-upload-pic"
                      name="pic"
                      accept=".jpg, .jpeg, .png, .webp"
                      style={{ display: 'none' }}
                      onChange={(e) => {
                        doPicInputChange(e);
                        doPicPreview(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Save and Update Button */}
            <div className="col-span-12 flex justify-center items-center">
              <div className="space-x-4">
                <button
                  className="inline-flex items-center rounded-md bg-gray-50 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                  onClick={doSaveProfile}
                >
                  Save
                </button>
                <button
                  className="inline-flex items-center rounded-md bg-blue-50 px-6 py-3 text-sm font-medium text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring focus:border-blue-300"
                  onClick={doUpdateProfile}
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;