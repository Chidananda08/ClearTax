import React, { useState } from "react";

const faqs = [
    { question: "Who are the Experts who’ll be filing my return?", answer: "Our tax experts are certified professionals with extensive experience in tax filing and compliance." },
    { question: "How much time is needed to set up a private limited company?", answer: "Setting up a private limited company typically takes 10-15 business days, depending on document verification." },
    { question: "Which form of entity structure is most suitable for a startup?", answer: "The ideal structure depends on your goals. Private Limited Companies offer limited liability and better fundraising options." },
    { question: "What are the benefits under Presumptive Taxation Scheme?", answer: "It reduces compliance burden by allowing small businesses to pay tax based on estimated income instead of maintaining detailed records." },
    { question: "Can I obtain two DIN for my two companies?", answer: "No, a person can have only one Director Identification Number (DIN) regardless of the number of companies they are associated with." },
    { question: "Is it mandatory to maintain a record of all financial transactions?", answer: "Yes, businesses must maintain proper financial records to comply with tax regulations and audits." },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-w-7xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently asked questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                        <button
                            className="w-full flex justify-between items-center px-5 py-4 text-lg font-medium text-gray-800 bg-white hover:bg-gray-100"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span>{openIndex === index ? "▲" : "▼"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="px-5 py-3 text-gray-600 bg-gray-50">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
