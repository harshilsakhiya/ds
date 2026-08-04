"use client";

import React from "react";
import Link from "next/link";

const quotes = [
  {
    character: "Mr. Bean",
    quote: "Be like Mr. Bean, keep it relaxed! Marketing ki headaches nahi lene ka!",
    img: "https://digivirus.in/wp-content/uploads/2025/02/Mr-Bean-1.webp",
  },
  {
    character: "Jethalal",
    quote: "Ae babuchak, bina digital marketing ke growth kaise hogi?",
    img: "https://digivirus.in/wp-content/uploads/2025/02/Jethalal-Vector-Art.webp",
  },
  {
    character: "Chotta Pandit",
    quote: "Aye business owner, kaha tak le jaaoge business ko bina digital marketing ke?",
    img: "https://digivirus.in/wp-content/uploads/2025/02/download-18.webp",
  },
];

export default function MemeHighlights() {
  return (
    <section className="py-16 bg-[#f29627] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border-2 border-black shadow-[-8px_8px_0px_#000000] p-6 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <h3 className="text-base font-bold text-black mb-2 leading-relaxed">
                  {item.quote} - {item.character}
                </h3>
                <Link
                  href="#start"
                  className="inline-block text-sm font-black text-[#f29627] hover:underline mb-4"
                >
                  Start Now!
                </Link>
              </div>

              <div className="w-full h-56 flex items-end justify-center overflow-hidden pt-4">
                <img
                  src={item.img}
                  alt={item.character}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
