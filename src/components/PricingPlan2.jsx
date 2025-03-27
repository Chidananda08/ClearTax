import React from "react";

const pricingPlans = [
  {
    title: "For Traders",
    price: "₹4999",
    originalPrice: "₹12499",
    rating: "4.3/5",
    savings: "Save 60%",
    benefits: [
      "For Traders",
      "Preparation of Account Summary, P&L and balance sheet",
      "Also covers salary, other incomes and capital gains",
      "Audit fee and DSC not included",
    ],
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1630533080_group18140690.png",
    color: "bg-pink-100",
  },
  {
    title: "For Professionals and Freelancers",
    price: "₹5499",
    originalPrice: "₹13749",
    rating: "4.4/5",
    savings: "Save 60%",
    benefits: [
      "Income for professionals (like Freelancers, Doctors) & small businesses",
      "Applicable Annual Turnover < Rs. 2 cr for businesses or Gross Receipt < Rs. 50 Lacs for Professionals",
      "Also covers salary, other incomes and capital gains",
    ],
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1629879436_group2823.png",
    color: "bg-purple-100",
  },
  {
    title: "For Business",
    price: "₹6499",
    originalPrice: "₹16249",
    rating: "4.3/5",
    savings: "Save 60%",
    benefits: [
      "Business income from businesses having up to 200 transactions",
      "Preparation of Account Summary, P&L and balance sheet",
      "Also covers salary, other incomes and capital gains",
      "Audit fee and DSC not included",
    ],
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1630533061_group3791.png",
    color: "bg-blue-100",
  },
];

const PricingPlan2 = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="max-w-7xl w-full px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              <div className={`p-4 ${plan.color} flex flex-col items-center justify-center text-4xl`}>
               <img src={plan.icon} alt="" className="h-10" />
               <div>
               <h3 className="text-[1rem] font-semibold text-center my-4">{plan.title}</h3>
                  <span className="text-gray-500 text-[1rem] tracking-tighter line-through">{plan.originalPrice}</span>
                <div className=" flex justify-center gap-5 ">
                  <span className="text-2xl font-bold text-gray-900 ">{plan.price}</span>
                  <span className="bg-gray-200 text-xs text-gray-700 px-2 py-1 rounded">{plan.savings}</span>
                <p className="text-[1rem] text-gray-700 mt-2">⭐ {plan.rating}</p>
                </div>
               </div>
              </div>
              <div className="p-6">
               
                <ul className="mt-4 space-y-2 text-gray-700">
                  {plan.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      ✅ <span className="ml-2">{benefit}</span>
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
    </div>
  );
};

export default PricingPlan2;
