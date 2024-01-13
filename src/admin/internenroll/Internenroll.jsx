import React, { useState } from 'react';
import { enrollService } from '../../services/user';

function Internenroll() {
  const generateOptions = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const days = generateOptions(1, 31);
  const months = generateOptions(1, 12);
  const years = generateOptions(2010, 2030);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    internId: '',
    technicalStack: '',
    duration: '',
    enrollDate: {
      day: '',
      month: '',
      year: '',
    },
    endDate: {
      day: '',
      month: '',
      year: '',
    },
  });

  const doInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('enrollDate.')) {
      setFormData((prevData) => ({
        ...prevData,
        enrollDate: {
          ...prevData.enrollDate,
          [name.split('.')[1]]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    if (name.startsWith('enrollDate.') || name.startsWith('endDate.') || name === 'duration') {
      setFormData((updatedData) => {
        doEnrollGenerateAndInternID(updatedData);
        return updatedData;
      });
    }
  };

  const calculateEndDate = (enrollDate, duration) => {
    const { day, month, year } = enrollDate;
  
    if (!day || !month || !year || year === 'YYYY' || month === 'MM' || day === 'DD' || isNaN(parseInt(duration))) {
      return null;
    }
  
    const startDate = new Date(Date.UTC(year, month - 1, day));
    const endDate = new Date(startDate);
  
    if (typeof duration === 'string') {
      if (duration.includes('day')) {
        const daysToAdd = parseInt(duration.split(' ')[0]);
        endDate.setUTCDate(startDate.getUTCDate() + daysToAdd);
      } else if (duration.includes('month')) {
        const monthsToAdd = parseInt(duration.split(' ')[0]);
  
        let newMonth = startDate.getUTCMonth() + monthsToAdd;
        const newYear = startDate.getUTCFullYear() + Math.floor(newMonth / 12);
        newMonth = (newMonth % 12 + 12) % 12; // Ensuring the result is in the range [0, 11]
  
        endDate.setUTCMonth(newMonth);
        endDate.setUTCFullYear(newYear);
      }
    }
  
    const formattedEndDate = {
      day: endDate.getUTCDate(),
      month: endDate.getUTCMonth() + 1, 
      year: endDate.getUTCFullYear(),
    };
  
    return formattedEndDate;
  };
  
  const doEnrollGenerateAndInternID = (updatedData) => {
    const { email, enrollDate, duration } = updatedData;

    if (email.includes('@') && enrollDate.day && enrollDate.month && enrollDate.year) {
      const username = email.split('@')[0];
      const generatedInternId = `${username}-${enrollDate.day}${enrollDate.month}${enrollDate.year}`;

      const endDate = calculateEndDate(enrollDate, duration);

      const endDay = endDate?.day;
      const endMonth = endDate?.month;
      const endYear = endDate?.year;

      console.log('Generated Intern ID:', generatedInternId);
      console.log('Start Date:', enrollDate);
      console.log('End Date:', endDate);
      console.log('Duration:', duration);

      setFormData((prevData) => ({
        ...prevData,
        internId: generatedInternId,
        endDate: {
          day: endDay !== undefined ? String(endDay) : '',
          month: endMonth !== undefined ? String(endMonth) : '',
          year: endYear !== undefined ? String(endYear) : '',
        },
      }));
    }
  };

  const doEnrollAndGenerate = async () => {
    const res = await enrollService(formData);
    alert(res.data.message);
  };

  return (
    <div className="flex items-center justify-center h-full bg-gray-200">
<div className="flex items-center justify-center h-full bg-gray-200">
  <div className="bg-white p-8 rounded-md shadow-md w-100">
    <div className="flex items-center justify-center mb-4">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5D09120OZdxF8ithOFLEz9dtayESVVWsg69noZtuLsg&s"
        alt="Company Logo"
        className="h-20 w-20 rounded-full shadow-lg"
      />
    </div>
        <form className="space-y-6">
          <div className="w-full mt-5">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder='example@gmail.com'
                value={formData.email}
                onChange={doInputChange}
                className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder='123abc@!#'
                  autoComplete="family-name"
                  value={formData.password}
                  onChange={doInputChange}
                  className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="w-1/2 pl-5">
              <label htmlFor="enroll-date" className="block text-sm font-medium leading-6 text-gray-900">
                Enroll Date
              </label>
              <div className="flex mt-2 space-x-2 w-96">
                <select
                  id="day"
                  name="enrollDate.day"
                  autoComplete="day"
                  value={formData.enrollDate.day}
                  onChange={doInputChange}
                  className="block rounded-md w-1/4 text-center border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">DD</option>
                  {days.map((day) => (
                    <option key={day}>{day}</option>
                  ))}
                </select>
                <select
                  id="month"
                  name="enrollDate.month"
                  autoComplete="month"
                  value={formData.enrollDate.month}
                  onChange={doInputChange}
                  className="block rounded-md w-1/4 text-center border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">MM</option>
                  {months.map((month) => (
                    <option key={month}>{month}</option>
                  ))}
                </select>
                <select
                  id="year"
                  name="enrollDate.year"
                  autoComplete="year"
                  value={formData.enrollDate.year}
                  onChange={doInputChange}
                  className="block rounded-md w-1/4 text-center border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">YYYY</option>
                  {years.map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="technical-stack" className="block text-sm font-medium leading-6 text-gray-900">
                Technical Stack
              </label>
              <div className="mt-2">
                <select
                  id="technical-stack"
                  name="technicalStack"
                  autoComplete="technical-stack"
                  value={formData.technicalStack}
                  onChange={doInputChange}
                  className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select the technical</option>
                  <option>Full Stack</option>
                  <option>Mern Stack</option>
                  <option>Java</option>
                  <option>Python ML</option>
                  <option>Marketing</option>
                </select>
              </div>
            </div>

            <div className="w-1/2 pl-3">
              <label htmlFor="duration" className="block text-sm font-medium leading-6 text-gray-900">
                Duration
              </label>
              <div className="mt-2">
                <select
                  id="duration"
                  name="duration"
                  autoComplete="duration-month"
                  value={formData.duration}
                  onChange={doInputChange}
                  className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select the duration</option>
                  <option value="1 day">1 day</option>
                  <option value="4 day">4 day</option>
                  <option value="45 days">45 days</option>
                  <option value="1 month">1 month</option>
                  <option value="2 month">2 months</option>
                  <option value="3 month">3 months</option>
                  <option value="4 month">4 months</option>
                  <option value="5 month">5 months</option>
                  <option value="6 month">6 months</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 items-center">
            <div className="w-1/2">
              <label htmlFor="internId" className="block text-sm font-medium leading-6 text-gray-900">
                Intern Id
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="internId"
                  id="internId"
                  autoComplete="given-name"
                  placeholder='abc-122001'
                  value={formData.internId}
                  readOnly
                  className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="w-1/2 pl-5">
              <label htmlFor="endDate" className="block text-sm font-medium leading-6 text-gray-900 mb-1.5">
                End Date
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="endDate.day"
                  id="endDateDay"
                  placeholder='DD'
                  value={formData.endDate.day}
                  readOnly
                  className="block w-1/4 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <input
                  type="text"
                  name="endDate.month"
                  id="endDateMonth"
                  placeholder='MM'
                  value={formData.endDate.month}
                  readOnly
                  className="block w-1/4 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <input
                  type="text"
                  name="endDate.year"
                  id="endDateYear"
                  placeholder='YYYY'
                  value={formData.endDate.year}
                  readOnly
                  className="block w-1/4 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-16">
            <button
              type="button"
              onClick={doEnrollAndGenerate}
              className="rounded-md h-12 w-36 bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-300"
            >
              Enroll & Generate
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Internenroll;