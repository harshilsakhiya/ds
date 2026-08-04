"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const challenges = [
  {
    gif: "https://digivirus.in/wp-content/uploads/2025/02/1.gif",
    title: "Not sure how to take your business digital.",
  },
  {
    gif: "https://digivirus.in/wp-content/uploads/2025/02/2.gif",
    title: "Competitors overtaking your business.",
  },
  {
    gif: "https://digivirus.in/wp-content/uploads/2025/02/3.gif",
    title: "No time to handle marketing headaches because of product development.",
  },
  {
    gif: "https://digivirus.in/wp-content/uploads/2025/02/4.gif",
    title: "Haven’t found the perfect agency that understands your goals.",
  },
];

export default function ChallengesSection() {
  return (
    <section className="py-20 bg-[#F4F0EA] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-[#f29627] font-black block mb-2">
              WE KNOW ABOUT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight mb-4">
              Challenges You Face In Your Business
            </h2>
            <p className="text-gray-800 text-sm font-medium mb-6 leading-relaxed">
              Managing product quality, supply chain, staff, and customer satisfaction is hard enough.
              You shouldn&apos;t have to stress over lead funnels, ad fatigue, and algorithm updates.
            </p>
            <Link
              href="#start"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#f29627] hover:bg-[#FFA400] text-white font-black text-sm rounded-xl shadow-[-6px_6px_0px_#000000] hover:shadow-[-8px_8px_0px_#000000] transition-all"
            >
              Let&apos;s Go to Work!
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {challenges.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border-2 border-black shadow-[-6px_6px_0px_#000000] flex flex-col items-center text-center group"
              >
                <div className="w-full h-36 rounded-xl overflow-hidden mb-4 border border-gray-300">
                  <img
                    src={item.gif}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="text-sm font-bold text-black leading-snug">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
