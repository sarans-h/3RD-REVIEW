import React from "react";

const PricingCard = ({ title, price, features, active }) => (
  <div
    className={`relative flex flex-col items-center justify-between p-6 rounded-2xl shadow-lg border border-[#f0f0f048]  ${
      active
        ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
        : "bg-[#121315] text-gray-300"
    }`}
    style={{ minHeight: "420px" }}
  >
    <div className="absolute top-[-12px] left-0 right-0 flex justify-center">
      <span
        className={`px-4 py-1 rounded-full text-sm font-medium ${
          active ? "bg-white text-orange-500" : "bg-gray-700 text-gray-300"
        }`}
      >
        {title}
      </span>
    </div>
    <div className="mt-6 text-center">
      <h2 className="text-4xl font-bold gradient-text">{price}</h2>
    </div>
    <ul className="mt-4 text-sm space-y-3">
      {features.map((feature, index) => (
        <li
          key={index}
          className={`flex items-center ${
            feature.included ? "text-green-400" : "text-gray-500"
          }`}
        >
          <span
            className={`mr-2 ${
              feature.included ? "text-green-400" : "text-gray-500"
            }`}
          >
            {feature.included ? "✔" : "✘"}
          </span>
          {feature.name}
        </li>
      ))}
    </ul>
    <button
      className={`mt-6 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        active
          ? "bg-white text-orange-500 hover:shadow-lg"
          : "bg-orange-500 text-white hover:bg-orange-600"
      }`}
    >
      Get Started
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "Free",
      active: false,
      features: [
        { name: "Collect up to 10 testimonials", included: true },
        { name: "Basic dashboard access", included: true },
        { name: "Customizable testimonial forms", included: false },
        { name: "Export testimonials", included: false },
        { name: "Email support", included: false },
      ],
    },
    {
      title: "Professional",
      price: "$49/month",
      active: true,
      features: [
        { name: "Collect unlimited testimonials", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Customizable testimonial forms", included: true },
        { name: "Export testimonials", included: true },
        { name: "Priority email support", included: true },
      ],
    },
    {
      title: "Enterprise",
      price: "$1000",
      active: false,
      features: [
        { name: "Dedicated account manager", included: true },
        { name: "Team collaboration tools", included: true },
        { name: "API access for integrations", included: true },
        { name: "Custom branding", included: true },
        { name: "24/7 premium support", included: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#040405] flex flex-col items-center py-12">
      <div className="text-center mt-10 mb-12">
        <span className="text-white  font-medium uppercase text-sm tracking-widest">
          Choose Your Plan
        </span>
        <h1 className="text-5xl text-white mt-4 gradient-text">
          Simplify Managing <span className="text-5xl italic font-bold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center leading-none tracking-tighter text-transparent">Testimonials</span>
        </h1> 
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            active={plan.active}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
