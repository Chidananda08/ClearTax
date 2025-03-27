import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Logo and Contact */}
        <div>
          <h2 className="text-white text-xl font-semibold">cleartax</h2>
          <p className="mt-2">Have a query?</p>
          <p className="text-blue-400">enquiries@cleartax.in</p>
          <a href="#" className="text-blue-400 mt-2 inline-block">Support</a>
          <p className="mt-2">© ClearTax</p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold">Company</h3>
          <ul className="mt-2 space-y-2">
            {[
              "About us",
              "Contact us",
              "Careers",
              "Media & Press",
              "User reviews",
              "Engineering blog",
              "FinTech glossary",
              "ClearTax Chronicles",
              "Guides",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Individuals & Tax Experts */}
        <div>
          <h3 className="text-white font-semibold">Individuals</h3>
          <ul className="mt-2 space-y-2">
            {["ClearReturns", "Tax experts", "ClearServices", "Black App"].map(
              (item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">{item}</a>
                </li>
              )
            )}
          </ul>
          <h3 className="text-white font-semibold mt-4">Tax Experts</h3>
          <ul className="mt-2 space-y-2">
            {[
              "Tax Expert partner program",
              "ClearGST",
              "ClearTDS",
              "ClearTaxCloud",
              "ClearPro",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* ITR Resources & Tools */}
        <div>
          <h3 className="text-white font-semibold">ITR Resources</h3>
          <ul className="mt-2 space-y-2">
            {[
              "e-file ITR",
              "File ITR with experts",
              "Find Tax Expert",
              "Ask Tax Expert",
              "Income tax for NRI",
              "Capital gain income",
              "Section 80 savings",
              "House property",
              "File TDS",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* GST & ClearServices */}
        <div>
          <h3 className="text-white font-semibold">ClearGST</h3>
          <ul className="mt-2 space-y-2">
            {[
              "GST software",
              "New GST returns",
              "e-invoicing",
              "Input tax credit",
              "GST returns",
              "GST invoice",
              "GST services",
              "GST training",
              "GST calendar",
              "GST news",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
