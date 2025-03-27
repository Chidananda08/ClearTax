import React from "react";

const features = [
  {
    icon: "\uD83D\uDCEC",
    title: "No follow-ups required",
    description: "Get your own trusted expert anytime, on our platform. Track the progress of your order at the click of a button."
  },
  {
    icon: "\u23F0",
    title: "Accuracy delivered",
    description: "Our advanced cloud-based products used by consultants minimize chances of error. Curated pool of consultants at your service."
  },
  {
    icon: "\uD83D\uDD12",
    title: "Data security is our priority",
    description: "Over a million individuals and 40,000 businesses have trusted us with their tax records over 5 years."
  }
];

const brands = [
  { name: "HDFC BANK", logo: "https://d2s63alnkuz6gf.cloudfront.net/assets/website/landing_page/partner_logos_80/partner_03.png" },
  { name: "Kotak", logo: "https://d2s63alnkuz6gf.cloudfront.net/assets/website/landing_page/partner_logos_80/partner_04.png" },
  { name: "Amazon", logo: "https://d2s63alnkuz6gf.cloudfront.net/assets/website/landing_page/partner_logos_80/partner_05.png" },
  { name: "YES BANK", logo: "https://d2s63alnkuz6gf.cloudfront.net/assets/website/landing_page/partner_logos_80/partner_06.png" },
  { name: "Toyota", logo: "https://d2s63alnkuz6gf.cloudfront.net/assets/website/landing_page/partner_logos_80/partner_07.png" },
  { name: "Standard Chartered", logo: "https://d2s63alnkuz6gf.cloudfront.net/assets/website/landing_page/partner_logos_80/partner_09.png" }
];

const Partners = () => {
  return (
    <div className="text-center p-8">
      <h2 className="text-4xl font-bold">Verified professionals helping you with</h2>
      <h3 className="text-blue-500 text-4xl my-6 font-semibold">100% compliance</h3>
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-28">
        {features.map((feature, index) => (
          <div key={index} className="max-w-sm p-6  shadow-md text-center">
            <div className="text-4xl">{feature.icon}</div>
            <h4 className="font-bold text-2xl mt-4">{feature.title}</h4>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold mt-28">Trusted by your favourite brands</h3>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {brands.map((brand, index) => (
          <img key={index} src={brand.logo} alt={brand.name} className="h-20" />
        ))}
      </div>
    </div>
  );
};

export default Partners;
