// app/portfolio-management/page.tsx
'use client'
import { useState } from "react"
import PortfolioGroup from "./PortfolioGroup"
import Link from "next/link"

export default function Portfolio() {
  const [groups, setGroups] = useState([
    {
      title: "config-001",
      values: { startMargin: "0", perOrder: "1000", maxHolding: "10" },
    },
    {
      title: "config-002",
      values: { startMargin: "0", perOrder: "2000", maxHolding: "5" },
    },
  ])

  const addGroup = () => {
    setGroups(prev => [
      ...prev,
      {
        title: `config-00${prev.length + 1}`,
        values: { startMargin: "0", perOrder: "0", maxHolding: "0" },
      },
    ])
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col gap-[20px]">
       <nav className="w-full bg-white border-b px-6 py-3 flex justify-between items-center text-sm font-medium">
        <div className="flex gap-6">
          <Link href="#" className="flex items-center gap-1 text-gray-800 hover:text-black">
            Screener
          </Link>
          <Link href="strategy" className="text-gray-800 hover:text-black">
             Strategy
          </Link>
          <Link href="portfolio" className="text-indigo-800 border-b-2 border-indigo-600 pb-1 ">
             Portfolio Management
          </Link>
          <Link href="/trading" className="text-gray-800 hover:text-black">
             Simulator
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-gray-600">99M tokens</span>
          <button className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1 rounded-md border border-indigo-100 hover:bg-indigo-100">
             Alert Subscription
          </button>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-indigo-500">⚙️</span>
            <h1 className="text-lg text-gray-900 font-semibold">Portfolio Management Configuration</h1>
          </div>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-2 rounded-md">
            Save Changes
          </button>
        </div>

        {/* Groups Label + Add Group */}
        <div className="bg-white border rounded-md p-4 space-y-2 shadow-sm">
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold text-gray-900">Groups</p>
          <button
            onClick={addGroup}
            className="flex items-center gap-1 border border-gray-300 text-gray-500 bg-gray-100 text-sm px-3 py-1.5 rounded-md hover:bg-gray-100"
          >
            + Add Group
          </button>
        </div>

        {/* Groups */}
        <div className="space-y-4 ">
          {groups.map((group, idx) => (
            <PortfolioGroup key={idx} title={group.title} values={group.values} />
          ))}
        </div>
        </div>
        
      </div>
    </main>
  )
}
