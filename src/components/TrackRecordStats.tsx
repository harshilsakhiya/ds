"use client";

import React from "react";
import { TrendingUp, DollarSign, Target, MessageSquare, Eye, Zap, Users, CheckCircle } from "lucide-react";

const statsData = [
  { icon: TrendingUp, label: "Revenue Increased", value: "4x – 6x" },
  { icon: DollarSign, label: "Revenue Generated", value: "₹3.7 Cr", sub: "(Last financial year)" },
  { icon: Target, label: "Lead Quality Enhanced", value: "3x – 8x" },
  { icon: MessageSquare, label: "Engagement Boost", value: "67%" },
  { icon: Eye, label: "Brand Reach Increased", value: "74%" },
  { icon: Zap, label: "ROI Enhanced", value: "3x – 7x" },
  { icon: Users, label: "Traffic Growth", value: "60%" },
  { icon: CheckCircle, label: "Conversion Rate Improved", value: "4x – 7x" },
];

export default function TrackRecordStats() {
  return (
    <section className="py-16 bg-[#F4F0EA] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black uppercase">
            OUR TRACK RECORD
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {statsData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border-2 border-[#f29627] shadow-sm flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#f29627] mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold text-gray-700 leading-tight mb-2 min-h-[2rem] flex items-center">
                  {item.label}
                </p>
                <h4 className="text-xl sm:text-2xl font-black text-black">
                  {item.value}
                </h4>
                {item.sub && <span className="text-[10px] text-gray-500 mt-0.5">{item.sub}</span>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
