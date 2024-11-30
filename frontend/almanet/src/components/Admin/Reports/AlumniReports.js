import React from "react";

const AlumniReports = () => {
  return (
    <div className="p-6">
      <h2 className="text-[#111811] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">
        Alumni Reports
      </h2>
      <div className="overflow-hidden rounded-xl border border-[#dce5dc] bg-white">
        <table className="w-full">
          <thead>
            <tr className="bg-white">
              <th className="px-4 py-3 text-left text-[#111811] text-sm font-medium">
                Alumni Name
              </th>
              <th className="px-4 py-3 text-left text-[#111811] text-sm font-medium">
                Graduation Year
              </th>
              <th className="px-4 py-3 text-left text-[#111811] text-sm font-medium">
                Current Position
              </th>
              <th className="px-4 py-3 text-left text-[#111811] text-sm font-medium">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[#dce5dc]">
              <td className="px-4 py-2 text-[#111811] text-sm font-normal">Alice Johnson</td>
              <td className="px-4 py-2 text-[#638864] text-sm font-normal">2015</td>
              <td className="px-4 py-2 text-[#638864] text-sm font-normal">Software Engineer</td>
              <td className="px-4 py-2 text-[#638864] text-sm font-normal">California, USA</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlumniReports;
