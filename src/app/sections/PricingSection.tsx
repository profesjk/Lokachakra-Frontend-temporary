"use client";
import { useState } from "react";

const PricingSection = () => {
  const [planType, setPlanType] = useState<"monthly" | "early">("monthly");

  const pricing = {
    monthly: [
      { title: "Standard", price: 20, services: ["Service 1", "Service 2", "Service 3"] },
      { title: "Premium", price: 30, services: ["Service 1", "Service 2", "Service 3", "Service 4"] },
      { title: "Business", price: 50, services: ["Service 1", "Service 2", "Service 3", "Service 4", "Service 5"] },
    ],
    early: [
      { title: "Standard", price: 15, services: ["Service 1", "Service 2", "Service 3"] },
      { title: "Premium", price: 25, services: ["Service 1", "Service 2", "Service 3", "Service 4"] },
      { title: "Business", price: 40, services: ["Service 1", "Service 2", "Service 3", "Service 4", "Service 5"] },
    ],
  };

  return (
    <section className="py-16 px-4 text-center bg-[#eae9e9] text-gray-700">
      <h2 className="text-4xl font-semibold mb-8 tracking-wide">Pricing Plan</h2>

      {/* Toggle buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          type="button"
          onClick={() => setPlanType("monthly")}
          className={`px-6 py-2 rounded-full font-semibold ${
            planType === "monthly" ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setPlanType("early")}
          className={`px-6 py-2 rounded-full font-semibold ${
            planType === "early" ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Early
        </button>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricing[planType].map((plan, index) => (
          <div
            key={plan.title}
            className={`border rounded-lg px-8 py-10 shadow-sm ${
              index === 1 ? "py-16" : ""
            } transition-all duration-300`}
          >
            <h3 className="text-xl font-semibold mb-4 uppercase">{plan.title}</h3>
            <p className="text-5xl font-bold mb-6">${plan.price}</p>
            <ul className="space-y-2 mb-6 text-gray-800">
              {plan.services.map((service, i) => (
                <li key={service} className="capitalize">
                  {service}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
