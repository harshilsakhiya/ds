"use client";

import React from "react";

const regions = [
  { name: "INDIA", desc: "Headquarters & Primary Market Operations" },
  { name: "UAE", desc: "Dubai & Middle East Growth Hub" },
  { name: "USA", desc: "North America E-Commerce & SaaS Market" },
  { name: "CANADA", desc: "Cross-Border Business Scaling" },
];

export default function GlobalPresence() {
  return (
    <section className="py-20 bg-[#F4F0EA] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black uppercase mb-4 leading-tight">
            PROVIDING DIGITAL MARKETING SERVICES GLOBALLY
          </h2>
          <p className="text-gray-800 text-sm font-medium leading-relaxed">
            We’re providing digital marketing services across India, UAE, USA, and Canada,
            helping brands grow in different markets with strategies suited to each region and clear focus on results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regions.map((region, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border-2 border-black shadow-[-6px_6px_0px_#000000] text-center"
              >
                <h3 className="text-2xl font-black tracking-widest text-[#f29627] mb-2">
                  {region.name}
                </h3>
                <p className="text-xs font-semibold text-gray-700">
                  {region.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-xl border-2 border-black">
              <img
                src="https://digivirus.in/wp-content/uploads/2026/01/indias-best-digital-marketing-agency.gif"
                alt="India's Best Digital Marketing Agency Global Presence"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
