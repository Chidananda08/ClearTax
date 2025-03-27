"use client"

import { useState } from "react"

function ClearTaxHeader() {
  const [isIndividualsOpen, setIsIndividualsOpen] = useState(false)
  const [isBusinessOpen, setIsBusinessOpen] = useState(false)

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-[#2d4356] font-bold text-2xl">
            clear<span className="text-[#4a90e2]">tax</span>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <button
                className="flex items-center px-3 py-2 text-[#2d4356] hover:text-[#4a90e2]"
                onClick={() => setIsIndividualsOpen(!isIndividualsOpen)}
              >
                Individuals{" "}
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isIndividualsOpen && (
                <div className="absolute top-full left-0 bg-white shadow-md rounded-md p-2 w-48 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                    Income Tax Filing
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                    Tax Saving
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                    Investment Planning
                  </a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center px-3 py-2 text-[#2d4356] hover:text-[#4a90e2]"
                onClick={() => setIsBusinessOpen(!isBusinessOpen)}
              >
                Business{" "}
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isBusinessOpen && (
                <div className="absolute top-full left-0 bg-white shadow-md rounded-md p-2 w-48 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                    GST Filing
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                    Business Registration
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                    Compliance Services
                  </a>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for services and plans related to GST, ITR, company..."
              className="pl-10 pr-4 py-2 w-[400px] border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <a href="#" className="hidden md:block text-[#2d4356] hover:text-[#4a90e2]">
            Support
          </a>

          <button className="bg-[#e6f0ff] text-[#4a90e2] px-4 py-2 rounded-md font-medium hover:bg-[#d9e7ff]">
            Login/Register
          </button>
        </div>
      </div>
    </header>
  )
}

export default ClearTaxHeader

