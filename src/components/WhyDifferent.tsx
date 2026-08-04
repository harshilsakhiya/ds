"use client";

import React from "react";
import { ShieldCheck, Award, Zap, UserCheck } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/Icons";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "We Don’t Make Fake Promises",
    desc: "We set realistic goals, deliver transparent reports, and focus on genuine business growth.",
  },
  {
    icon: Award,
    title: "Worked With Unicorn Businesses",
    desc: "Proven track record scaling established brands as well as high-growth startups across industries.",
  },
  {
    icon: Zap,
    title: "5+ Years of Experience",
    desc: "Extensive market insights and domain knowledge to navigate algorithmic and ad market changes.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Account Strategist",
    desc: "Single point of contact for seamless communication, campaign updates, and weekly strategy alignment.",
  },
];

export default function WhyDifferent() {
  return (
    <section className="py-20 bg-[#F4F0EA] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#f29627] font-black block mb-2">
            WHY DIGIVIRUS IS DIFFERENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black uppercase leading-tight mb-4">
            We Are Different From Other Agencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border-2 border-black shadow-[-6px_6px_0px_#000000] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-100 border border-[#f29627] flex items-center justify-center text-[#f29627] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Connect Bar */}
        <div className="flex justify-center items-center space-x-4 pt-6 border-t border-gray-300">
          <a
            href="https://www.instagram.com/digivirus.in"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-[#f29627] text-white flex items-center justify-center shadow-[-4px_4px_0px_#000000] hover:scale-105 transition-transform"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100094229486937"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-[#f29627] text-white flex items-center justify-center shadow-[-4px_4px_0px_#000000] hover:scale-105 transition-transform"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/digivirus/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-[#f29627] text-white flex items-center justify-center shadow-[-4px_4px_0px_#000000] hover:scale-105 transition-transform"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
