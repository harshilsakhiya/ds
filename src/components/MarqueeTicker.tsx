"use client";

import React from "react";

export default function MarqueeTicker() {
  const items = Array(10).fill("Trusted by Unicorn Brands");

  return (
    <section className="bg-black text-white py-4 overflow-hidden select-none border-y-4 border-black">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.concat(items).map((text, idx) => (
          <span key={idx} className="flex items-center text-xl sm:text-2xl font-black tracking-tight mx-6">
            <span>{text}</span>
            <span className="ml-12 text-[#f29627] font-black">|</span>
          </span>
        ))}
      </div>
    </section>
  );
}
