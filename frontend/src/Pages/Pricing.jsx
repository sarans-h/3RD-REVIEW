import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const PricingCard = ({ title, price, features, active }) => {
  const [product,setProduct]=useState({
    title:title,
    price:price,
    productBy : "Testimonials",
  })
  const  navigate=useNavigate();
  const {user,isAuthenticated}=useSelector((state)=>state.user)

  const buyFunction=async()=>{
    if(!isAuthenticated){
      navigate('/login')

    }else{
    let response= await axios.post("https://threerd-review.onrender.com/api/payment/createpayment",product,
    { withCredentials: true });
    if(response&&response.status===200)
      {
        console.log(response.data.id);
        window.location.href = response.data.url;
    }}
  }
  return (
    <div
      className={`relative flex flex-col items-center justify-between p-6 rounded-2xl shadow-lg border border-[#f0f0f048] ${
        active ? "bg-[#121315] text-gray-300" : "bg-[#121315] text-gray-300"
      }`}
      style={{ minHeight: "420px" }}
    >
      <div className="absolute top-[-12px] left-0 right-0 flex justify-center">
        <span
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            active ? "bg-white text-black" : "bg-gray-700 text-gray-300"
          }`}
        >
          {title}
        </span>
      </div>
      <div className="mt-6 text-center">
        <h2 className="text-4xl font-bold gradient-text">
          {price === "Free" ? "Free" : `₹ ${price}`}
        </h2>
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
          price === "Free"
            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
            : "bg-white text-black hover:shadow-lg"
        }`}
        onClick={price === "Free" ? null : buyFunction}
        disabled={price === "Free"}
      >
        Buy
      </button>
      <button
        className={`mt-6 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
          active
            ? "bg-white text-black hover:shadow-lg"
            : "bg-white text-black hover:shadow-lg"
        }`}
      >
        Get Started
      </button>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: "Free Plan",
      price: "Free",
      active: true,
      features: [
        { name: "100 credits included", included: true },
        { name: "10 credits = 1 business", included: true },
        { name: "5 credits = 1 product", included: true },
        { name: "Limit of 100 total testimonials", included: true },
        { name: "Ad-free usage", included: false },
        { name: "Custom branding", included: false },
        { name: "Priority support", included: false },
      ],
    },
    {
      title: "Standard Top-Up",
      price: "100 ",
      active: false,
      features: [
        { name: "10% bonus credits (100 of 110)", included: true },
        { name: "9 credits = 1 business", included: true },
        { name: "4 credits = 1 product", included: true },
        { name: "Limit of 1000 total testimonials", included: true },
        { name: "Ad-free usage", included: true },
        { name: "Custom branding (Upcoming)", included: true },
        { name: "Priority support", included: true },

      ],
    },
    {
      title: "Premium Top-Up",
      price: "500",
      active: false,
      features: [
        { name: "20% bonus credits (500 of 600)", included: true },
        { name: "7 credits = 1 business", included: true },
        { name: "3 credits = 1 product", included: true },
        { name: "Unlimited testimonials", included: true },
        { name: "Ad-free usage", included: true },
        { name: "Custom branding (Upcoming)", included: true },
        { name: "24/7 priority support", included: true },

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
