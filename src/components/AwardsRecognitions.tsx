"use client";

import React from "react";

export default function AwardsRecognitions() {
  return (
    <section className="py-20 bg-[#F4F0EA] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black mb-3">
          AWARDS &amp; RECOGNITIONS
        </h2>
        <div className="w-48 h-1 bg-[#f29627] mx-auto mb-16 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Award Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-56 h-64 flex items-center justify-center mb-6">
              <img
                src="https://digivirus.in/wp-content/uploads/2026/06/Indias-Most-Trusted-SEO-Agencies-Edition-2026.webp"
                alt="India's Most Trusted SEO Agencies Edition 2026 Trophy"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">
              India’s Most Trusted SEO Agencies – Edition 2026
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed max-w-md">
              Recognized among India&apos;s Most Trusted SEO Agencies 2026, digiVirus.in
              continues to be counted among India&apos;s emerging top digital marketing
              agencies, trusted for delivering measurable SEO success.
            </p>
          </div>

          {/* Award Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-56 h-64 flex items-center justify-center mb-6">
              <img
                src="https://digivirus.in/wp-content/uploads/2026/06/Startup-Mahakumbh-2025.webp"
                alt="Startup Mahakumbh 2025 Participant Badge"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">
              Featured Among India’s Leading Startup Ecosystem Conversations
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed max-w-md">
              Through our participation at Startup Mahakumbh 2025, digiVirus joined
              discussions alongside founders, investors, innovators, and business leaders
              contributing to India&apos;s rapidly evolving startup ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
