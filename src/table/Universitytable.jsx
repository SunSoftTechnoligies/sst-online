import React from 'react';

const indianTechUniversities = [
  { name: 'Indian Institute of Technology (IIT) Bombay' },
  { name: 'Indian Institute of Technology (IIT) Delhi'},
  { name: 'Indian Institute of Technology (IIT) Madras' },
  { name: 'Indian Institute of Technology (IIT) Kanpur' },
  { name: 'Indian Institute of Technology (IIT) Kharagpur' },
  { name: 'Birla Institute of Technology and Science (BITS) Pilani'},
  { name: 'National Institute of Technology (NIT) Trichy'},
  // Add more Indian tech universities as needed
];

function UniversityTable() {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Top Indian Technology Universities</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">Name</th>
            </tr>
          </thead>
          <tbody>
            {indianTechUniversities.map((university, index) => (
              <tr key={index}>
                <td className="border-t px-4 py-2 text-center">{university.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { indianTechUniversities }; // Export the array

export default UniversityTable;