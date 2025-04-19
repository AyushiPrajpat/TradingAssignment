"use client";

import { useState } from "react";

export default function CalculatorCard() {
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("2024-03-01");
  const [investment, setInvestment] = useState(10000);
  const [growth, setGrowth] = useState(5);

  // Dummy result just for UI
  const projectedValue = 11025;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
      <div className="space-y-5">
        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-gray-50 shadow-md text-gray-700 rounded-md"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border border-gray-50 shadow-md text-gray-700 rounded-md px-3 py-2 text-sm"
          />
        </div>

        {/* Investment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Initial Investment</label>
          <div className="flex items-center border border-gray-50 shadow-md rounded-md px-3 py-2 text-sm">
            <span className="text-gray-500 mr-2">$</span>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(parseFloat(e.target.value))}
              className="w-full outline-none  text-gray-700 "
            />
          </div>
        </div>

        {/* Growth */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Growth (%)</label>
          <input
            type="number"
            value={growth}
            onChange={(e) => setGrowth(parseFloat(e.target.value))}
            className="w-full border border-gray-50 shadow-md text-gray-700  rounded-md px-3 py-2 text-sm"
          />
        </div>

        {/* Result */}
        <div className="bg-gray-100 px-4 py-3 rounded-md flex justify-between items-center">
          <span className="text-gray-500 text-sm">Projected Value:</span>
          <span className="text-lg font-semibold text-gray-800">${projectedValue.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
