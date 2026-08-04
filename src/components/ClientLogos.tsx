"use client";

import React from "react";

const clientBrands = [
  { name: "Unacademy", img: "https://digivirus.in/wp-content/uploads/2026/04/Unacademy.webp" },
  { name: "Government Of India", img: "https://digivirus.in/wp-content/uploads/2026/03/Government-Of-India-3.webp" },
  { name: "Anytime Fitness", img: "https://digivirus.in/wp-content/uploads/2026/04/Anytime-Fitness.webp" },
  { name: "Bajaj Two Wheeler", img: "https://digivirus.in/wp-content/uploads/2026/04/Bajaj-Two-Wheeler.webp" },
  { name: "Barista Coffee", img: "https://digivirus.in/wp-content/uploads/2026/04/Barista-Coffee.webp" },
  { name: "Godrej Interior", img: "https://digivirus.in/wp-content/uploads/2026/04/Godrej-Interior.webp" },
  { name: "IIT BHU", img: "https://digivirus.in/wp-content/uploads/2026/04/IIT-BHU.webp" },
  { name: "London Coffee", img: "https://digivirus.in/wp-content/uploads/2026/04/London-Coffee.webp" },
  { name: "Royal Enfield", img: "https://digivirus.in/wp-content/uploads/2026/04/Royal-Enfields.webp" },
];

export default function ClientLogos() {
  return (
    <section className="bg-black py-10 overflow-hidden border-b-4 border-black">
      <div className="flex animate-marquee whitespace-nowrap space-x-12 select-none">
        {clientBrands.concat(clientBrands).map((brand, idx) => (
          <div key={idx} className="flex-none flex items-center justify-center h-16 min-w-[140px] px-4">
            <img
              src={brand.img}
              alt={brand.name}
              className="max-h-12 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
