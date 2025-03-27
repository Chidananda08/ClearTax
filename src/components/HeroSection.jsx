"use client"

import { useState } from "react"

function HeroSection() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  return (
    <section className="py-12 md:py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d4356] mb-6">
          Let our experts manage your tax and business compliances
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          ClearTax empowers more than <span className="font-semibold">20,00,000+ customers</span>,
          <span className="font-semibold"> 40,000+ businesses</span> and
          <span className="font-semibold"> 20,000+ expert</span> firms across India!
        </p>

        <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            placeholder="Enter your phone no"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-[#1a73e8] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 flex items-center justify-center">
            <svg
              className="mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Request a callback
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

