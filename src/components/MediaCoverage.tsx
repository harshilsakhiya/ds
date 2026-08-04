"use client";

import React from "react";

const mediaOutlets = [
  { name: "Dailyhunt", img: "https://digivirus.in/wp-content/uploads/2026/01/Untitled-design-56.png" },
  { name: "The Tribune", img: "https://digivirus.in/wp-content/uploads/2026/01/Untitled-design-57.png" },
  { name: "ANI News", img: "https://digivirus.in/wp-content/uploads/2026/01/Untitled-design-55.png" },
  { name: "The Week", img: "https://digivirus.in/wp-content/uploads/2026/01/Untitled-design-54.png" },
  { name: "The Wire", img: "https://digivirus.in/wp-content/uploads/2026/01/Untitled-design-52.png" },
  { name: "Google News", img: "https://digivirus.in/wp-content/uploads/2026/01/google-news.png" },
  { name: "Yahoo News", img: "https://digivirus.in/wp-content/uploads/2026/01/yahoo-news.png" },
];

export default function MediaCoverage() {
  return (
    <section className="py-14 bg-[#F4F0EA] text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black uppercase">
          MEDIA COVERAGE
        </h2>
      </div>

      <div className="flex overflow-hidden space-x-8 select-none">
        <div className="flex space-x-8 animate-marquee py-2 whitespace-nowrap">
          {mediaOutlets.concat(mediaOutlets).map((outlet, idx) => (
            <div
              key={idx}
              className="flex-none px-6 py-4 rounded-xl bg-white border border-gray-300 flex items-center justify-center min-w-[170px] h-20 shadow-sm"
            >
              <img
                src={outlet.img}
                alt={outlet.name}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
