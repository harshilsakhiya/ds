"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const rotatingServices = [
  "SMM & Branding",
  "Performance Marketing",
  "Lead Generation",
  "Website & App",
  "Ecommerce Marketing",
  "AI Ranking & SEO",
  "AI Ads Creation",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingServices.length);
        setFade(true);
      }, 300);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-[#F4F0EA] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black leading-[1.1] mb-4">
              We Take Marketing <br />
              Headaches of Your <br />
              <span className="text-[#f29627] relative inline-block mt-1">
                <span
                  className={`transition-all duration-300 inline-block ${
                    fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  }`}
                >
                  {rotatingServices[currentIndex]}
                </span>
              </span>
            </h1>

            <h3 className="text-lg sm:text-xl font-bold text-black mt-4 mb-8 max-w-xl leading-relaxed">
              India&apos;s Most Trusted Digital Marketing Agency For Business Owners
            </h3>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-5 items-center">
              <Link
                href="#start"
                className="px-7 py-3.5 bg-[#f29627] hover:bg-[#FFA400] text-white font-extrabold text-sm rounded-2xl shadow-[-6px_6px_0px_#000000] hover:shadow-[-8px_8px_0px_#000000] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                Lets Start Now
              </Link>
              <Link
                href="/results"
                className="px-7 py-3.5 bg-[#FFF0E5] hover:bg-[#FFE5D4] text-black font-extrabold text-sm rounded-2xl shadow-[-6px_6px_0px_#000000] hover:shadow-[-8px_8px_0px_#000000] hover:-translate-y-0.5 transition-all border border-black/10 cursor-pointer"
              >
                View Our Results
              </Link>
            </div>
          </div>

          {/* Right Column Graphic */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-xl">
              <img
                src="https://digivirus.in/wp-content/uploads/2026/04/n.webp"
                alt="digiVirus Digital Marketing Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
