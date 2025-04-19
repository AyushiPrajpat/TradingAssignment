'use client'
import React, { useState } from 'react'

export default function StrategyBuilderPage() {
  const [strategyName, setStrategyName] = useState('')
  const [buyConditions, setBuyConditions] = useState<string[]>([])
  const [sellConditions, setSellConditions] = useState<string[]>([])

  const addBuyCondition = () => {
    setBuyConditions([...buyConditions, ''])
  }

  const addSellCondition = () => {
    setSellConditions([...sellConditions, ''])
  }

  return (
    <div className="min-h-screen  bg-gray-100 flex  items-start justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-xl space-y-6">
        <h2 className="text-lg font-bold text-gray-800">Strategy Builder</h2>

        <input
          type="text"
          placeholder="New Strategy"
          className="w-full px-4 py-2 border border-gray-200 text-gray-800 rounded-md text-sm"
          value={strategyName}
          onChange={(e) => setStrategyName(e.target.value)}
        />

        {/* Buy Conditions */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-gray-800 mb-2">Buy Trigger Conditions</h3>
          {buyConditions.map((_, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={`Condition ${idx + 1}`}
              className="w-full mb-2 px-3 py-2 border rounded-md text-sm"
              onChange={(e) => {
                const updated = [...buyConditions]
                updated[idx] = e.target.value
                setBuyConditions(updated)
              }}
            />
          ))}
          <button
            onClick={addBuyCondition}
            className="text-blue-600 text-sm hover:underline mt-2"
          >
            + Add Buy Condition
          </button>
        </div>

        {/* Sell Conditions */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-gray-800 mb-2">Sell Trigger Conditions</h3>
          {sellConditions.map((_, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={`Condition ${idx + 1}`}
              className="w-full mb-2 px-3 py-2 border rounded-md text-sm"
              onChange={(e) => {
                const updated = [...sellConditions]
                updated[idx] = e.target.value
                setSellConditions(updated)
              }}
            />
          ))}
          <button
            onClick={addSellCondition}
            className="text-blue-600 text-sm hover:underline mt-2"
          >
            + Add Sell Condition
          </button>
        </div>

        {/* Save Strategy */}
        <div className="text-right">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md">
             Save Strategy
          </button>
        </div>
      </div>
    </div>
  )
}
