"use client";

import React from "react";

const partnersList = [
  { name: "Hostinger", img: "https://digivirus.in/wp-content/uploads/2026/04/hostinger-e1769251266551-1024x260.webp" },
  { name: "Cashfree", img: "https://digivirus.in/wp-content/uploads/2026/04/cashfree-e1769251143661-1024x305.webp" },
  { name: "Google", img: "https://digivirus.in/wp-content/uploads/2026/04/google-e1769251210769-1024x311.webp" },
  { name: "Meta", img: "https://digivirus.in/wp-content/uploads/2026/02/meta-1024x243.webp" },
  { name: "HubSpot", img: "https://digivirus.in/wp-content/uploads/2026/04/hubspot-e1769251395613-1024x332.webp" },
  { name: "Shopify", img: "https://digivirus.in/wp-content/uploads/2026/01/shopify-e1769420448634-1024x212.webp" },
];

export default function Partners() {
  return (
    <section className="py-16 bg-[#F4F0EA] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black uppercase">
          OUR PARTNERS
        </h2>
      </div>

      <div className="bg-black py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partnersList.map((partner, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#222222] border border-zinc-800 flex items-center justify-center h-24 group hover:bg-[#2a2a2a] transition-all"
              >
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="max-h-10 max-w-full object-contain brightness-95 group-hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
