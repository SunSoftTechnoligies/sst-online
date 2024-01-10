import React from 'react';

function InternshipCard() {
  return (
    <div className="mx-auto p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full w-96">
      <img
        className="container mx-auto rounded-md mb-2 w-80 h-60"
        src="https://www.graycelltech.com/wp-content/uploads/2015/12/social_media_course-300x196.jpg"
                 alt="Intern Enrollment"
      />
      <h2 className="text-xl mb-2 text-center ">INTERNSHIP DEVELOPMENT</h2>
      <p className="text-center">
      We provide 6 Months/6 Weeks Industrial internships to students pursuing Engineering.
       </p>
    </div>
  );
}

export default InternshipCard;

