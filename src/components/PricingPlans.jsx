"use client"

import { useState } from "react"

function PricingPlans() {
  const [activeTab, setActiveTab] = useState("individuals")

  const plans = [
    {
      title: "Salary or House Rent Income",
      icon: "https://assets1.cleartax-cdn.com/cleartax/images/1630533080_group18140690.png",
      originalPrice: "4999",
      price: "1999",
      rating: "4.8/5",
      features: ["Salary", "House property", "Withdrawal from PF and bank deposits", "Donations"],
    },
    {
      title: "Capital Gains Income",
      icon: "https://assets1.cleartax-cdn.com/cleartax/images/1629879436_group2823.png",
      originalPrice: "8749",
      price: "3499",
      rating: "4.5/5",
      features: ["Everything in Salary/House Rent Plan", "Capital Gains from sale of stocks, mutual funds & property","Gain From Lottery,Gamming or Awards"],
    },
    {
      title: "Foreign Income",
      icon: "https://assets1.cleartax-cdn.com/cleartax/images/1630533061_group3791.png",
      originalPrice: "16249",
      price: "6499",
      rating: "4.8/5",
      features: ["Everything in Capital Gains Income Plan", "Income earned outside India","Income earned in India for NRE, NRO A/c","DTAA guidance"],
    },
  ]

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#2d4356]">Popular plans:</h2>

          <div className="flex border-b border-gray-200">
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === "individuals" ? "text-[#1a73e8] border-b-2 border-[#1a73e8]" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("individuals")}
            >
              For Individuals
            </button>

            <button
              className={`px-6 py-3 font-medium ${
                activeTab === "professionals" ? "text-[#1a73e8] border-b-2 border-[#1a73e8]" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("professionals")}
            >
              For Professionals
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border border-gray-300 rounded-lg overflow-hidden ${
                index === 0 ? "bg-[#fff9f9]" : index === 1 ? "bg-[#f8f9ff]" : "bg-[#f0fbff]"
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">
                    <img src={plan.icon} className="h-10" alt="" />
                  </span>
                </div>

                <h3 className="text-md font-semibold text-center mb-6">{plan.title}</h3>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-gray-500 line-through">₹{plan.originalPrice}</div>
                    <div className="text-2xl font-bold">₹{plan.price}</div>
                  </div>

                  <div className="flex items-center">
                    <span className="bg-[#1e293b] text-white text-xs px-2 py-1 rounded-md mr-2">Save ~60%</span>
                    <div className="flex items-center">
                      <svg
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-1 font-medium">{plan.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 p-6">
                <div className="text-gray-500 mb-4">Covers income from</div>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                          <svg
                            className="h-3 w-3 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                      
                    </li>
                  ))}
                </ul>
                     
                      <div className="mt-6">
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Buy now
                  </button>
                  <a href="#" className="block text-center text-blue-600 mt-2 hover:underline">
                    Know more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingPlans

