import React from 'react'

function Internnavbar() {
  return (
   <div>
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Company Logo */}
          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5D09120OZdxF8ithOFLEz9dtayESVVWsg69noZtuLsg&s"
              alt="Company Logo"
              className="w-10 h-10 mr-2"
            />
            <span className="text-white text-lg font-bold">Sun-Soft Technologies</span>
          </div>
        </div>
      </nav>
   </div>
  )
}

export default Internnavbar