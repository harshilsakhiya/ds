"use client";

import React from "react";
import { Star } from "lucide-react";

export default function ReviewWidgets() {
  return (
    <section className="py-16 bg-[#F4F0EA] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-black text-black uppercase mb-2">
          TRUSTED &amp; RATED 5.0
        </h2>
        <div className="flex justify-center items-center space-x-1 mb-10">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 fill-[#f29627] text-[#f29627]" />
          ))}
        </div>

        {/* 3 Dark Rating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Google Ratings */}
          <div className="p-6 rounded-2xl bg-[#1e1e1e] text-white text-left border border-black shadow-[-6px_6px_0px_#000000] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white p-1.5 flex items-center justify-center">
                  <img
                    src="https://digivirus.in/wp-content/uploads/2026/04/google-e1769251210769-1024x311.webp"
                    alt="Google Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-white">Google Ratings</h4>
                  <p className="text-xs text-gray-400">Trusted by Clients</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
              <span className="text-3xl font-black text-[#f29627]">5.0 <span className="text-xs text-gray-400 font-normal">/ 5</span></span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f29627] text-[#f29627]" />
                ))}
              </div>
            </div>
          </div>

          {/* Clutch Ratings */}
          <div className="p-6 rounded-2xl bg-[#1e1e1e] text-white text-left border border-black shadow-[-6px_6px_0px_#000000] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-black text-black text-xl">
                  C
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-white">Clutch Ratings</h4>
                  <p className="text-xs text-gray-400">Trusted by Clients</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
              <span className="text-3xl font-black text-[#f29627]">4.9 <span className="text-xs text-gray-400 font-normal">/ 5</span></span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f29627] text-[#f29627]" />
                ))}
              </div>
            </div>
          </div>

          {/* JustDial Ratings */}
          <div className="p-6 rounded-2xl bg-[#1e1e1e] text-white text-left border border-black shadow-[-6px_6px_0px_#000000] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center">
                  <img
                    src="https://digivirus.in/wp-content/uploads/2026/02/Untitled-design-35.webp"
                    alt="JustDial Ratings"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-white">JustDial Ratings</h4>
                  <p className="text-xs text-gray-400">Trusted by Clients</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
              <span className="text-3xl font-black text-[#f29627]">4.8 <span className="text-xs text-gray-400 font-normal">/ 5</span></span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f29627] text-[#f29627]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
