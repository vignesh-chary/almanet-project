import React from "react";
import FundingReports from "../components/Admin/Reports/FundingReports";
import AlumniReports from "../components/Admin/Reports/AlumniReports";

const ReportsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="flex items-center justify-between border-b px-10 py-3">
        <h1 className="text-[#111811] text-lg font-bold">Reports</h1>
      </header>
      <main className="px-10 py-6 flex flex-col gap-8">
        <FundingReports />
        <AlumniReports />
      </main>
    </div>
  );
};

export default ReportsPage;
