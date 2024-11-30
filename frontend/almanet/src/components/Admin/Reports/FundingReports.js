import React from "react";

const FundingReports = () => {
  return (
    <div className="p-6">
      <h2 className="text-[#111811] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">
        Funding Reports
      </h2>
      <div className="overflow-hidden rounded-xl border border-[#dce5dc] bg-white">
        <table className="w-full">
          <thead>
            <tr className="bg-white">
              <th className="px-4 py-3 text-left text-[#111811] text-sm font-medium">
                Donor Name
              </th>
              <th className="px-4 py-3 text-left text-[#111811] text-sm font-medium">
                Amount
              </th>
              <th className="px-4 py-3 text-left text-[#111811] text-sm font-medium">
                Date
              </th>
              <th className="px-4 py-3 text-left text-[#111811] text-sm font-medium">
                Purpose
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[#dce5dc]">
              <td className="px-4 py-2 text-[#111811] text-sm font-normal">Hannah Smith</td>
              <td className="px-4 py-2 text-[#638864] text-sm font-normal">$100</td>
              <td className="px-4 py-2 text-[#638864] text-sm font-normal">July 23, 2023</td>
              <td className="px-4 py-2 text-[#638864] text-sm font-normal">General</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FundingReports;
