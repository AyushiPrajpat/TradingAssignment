'use client'
import React from 'react'
import Link from 'next/link'

export default function StrategyPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Nav */}
      <nav className="w-full bg-white border-b px-6 py-3 flex justify-between items-center text-sm font-medium">
        <div className="flex gap-6">
          <Link href="#" className="flex items-center gap-1 text-gray-800 hover:text-black">
            Screener
          </Link>
          <Link href="#" className="text-indigo-800 border-b-2 border-indigo-600 pb-1">
             Strategy
          </Link>
          <Link href="portfolio" className="text-gray-800 hover:text-black">
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

      {/* Body */}
      <section className="flex flex-1 p-0 m-0  items-start justify-center p-6">
        <div className="bg-white shadow-md rounded-2xl w-[800px]  p-8 text-center">
          <h2 className="text-xl text-gray-900 font-bold mb-2">Create a Strategy</h2>
          <p className="text-gray-500 mb-6">to Simulate Returns</p>

          <button className="bg-indigo-600 text-white px-6 py-2 text-sm rounded-md hover:bg-indigo-700">
            <Link href="/strategyBuilder">BEGIN</Link>
           
          </button>

          <hr className="my-6 border-gray-200" />

          <p className="text-sm text-gray-500">Or test with built-in strategies…</p>
        </div>
      </section>

      {/* <section className="flex-1 p-0 m-0 flex items-start justify-center">
        <div className="bg-white shadow-md rounded-2xl w-[800px] text-center mt-6">
          <h2 className="text-xl font-bold mb-2 text-gray-900">Create a Strategy</h2>
          <p className="text-gray-500 mb-6">to Simulate Returns</p>

          <button className="bg-indigo-600 text-white px-6 py-2 text-sm rounded-md hover:bg-indigo-700">
            BEGIN
          </button>

          <hr className="my-6 border-gray-200" />

          <p className="text-sm text-gray-500">Or test with built-in strategies…</p>
        </div>
      </section> */}
    </main>
  )
}
