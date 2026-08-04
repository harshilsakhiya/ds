"use client";

import React, { useState, useEffect, useCallback } from "react";
import { HelpCircle, ChevronRight, X, ArrowLeft, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Why does my business need digital marketing?",
    a: "Digital marketing helps your business reach customers online where buying decisions actually happen. It increases brand visibility, builds trust, generates quality leads, and improves sales with measurable results compared to traditional marketing.",
  },
  {
    q: "How to select the best digital marketing agency for my business?",
    a: "The best digital marketing agency is one that understands your business goals, shares clear strategies, provides transparent reporting, and focuses on results instead of fake promises. Experience, communication, and accountability are key factors.",
  },
  {
    q: "Can digital marketing increase sales?",
    a: "Yes, digital marketing increases sales by targeting the right audience, improving conversion rates, and optimizing campaigns for performance. With proper execution, businesses see steady growth in leads, revenue, and return on investment.",
  },
  {
    q: "How transparent is digiVirus with reporting and performance?",
    a: "digiVirus follows complete transparency in campaign execution and reporting. Clients receive clear performance updates, real metrics, and honest insights so they always know where their budget is spent and what results are being achieved.",
  },
  {
    q: "How does AI Ads Creation help improve ad performance?",
    a: "AI Ads Creation helps create, test, and optimize multiple ad creatives faster using advanced AI tools. This improves engagement, increases conversions, reduces creative costs, and allows campaigns to scale efficiently without delays.",
  },
  {
    q: "What kind of support and commitment can clients expect from digiVirus?",
    a: "digiVirus provides dedicated support, quick response times, and clear communication throughout the project. The team focuses on long term partnerships, consistent optimization, and goal based execution rather than short term partnerships.",
  },
  {
    q: "Why is digiVirus the right digital marketing agency for your business?",
    a: "digiVirus combines clear planning, AI-powered execution, transparency, and result focused marketing. With proven experience across industries and platforms, digiVirus helps businesses grow in a structured and reliable way with clear communication, trust, and measurable outcomes.",
  },
  {
    q: "Does digiVirus customize strategies for different industries?",
    a: "Yes, digiVirus creates customized digital marketing strategies based on industry type, competition, target audience, and business goals. This ensures better performance, scalability, and consistent results across different markets.",
  },
];

export default function FAQSection() {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => {
    setActiveModalIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (activeModalIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalIndex, closeModal]);

  return (
    <section className="py-20 bg-[#F4F0EA] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-[#f29627] flex items-center justify-center text-[#f29627] mx-auto mb-3">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black uppercase mb-3">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#f29627] mx-auto rounded-full" />
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, idx) => (
            <button
              key={idx}
              onClick={() => setActiveModalIndex(idx)}
              className="p-5 rounded-2xl bg-white border-2 border-black shadow-[-5px_5px_0px_#000000] text-left transition-all flex items-center justify-between gap-4 group cursor-pointer hover:-translate-y-0.5"
            >
              <h4 className="text-sm font-bold text-black leading-snug">
                {faq.q}
              </h4>
              <div className="w-9 h-9 rounded-xl bg-[#f29627] text-white flex items-center justify-center font-extrabold flex-shrink-0 shadow-[-3px_3px_0px_#000000]">
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Modal Viewer */}
      {activeModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-2xl bg-white border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[-10px_10px_0px_#000000] relative animate-in zoom-in-95 duration-200 text-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-gray-300 mb-4">
              <span className="text-xs font-black uppercase tracking-wider text-white bg-[#f29627] px-3 py-1 rounded-full shadow-[-3px_3px_0px_#000]">
                FAQ #{activeModalIndex + 1}
              </span>
              <button
                onClick={closeModal}
                className="w-9 h-9 rounded-xl bg-gray-200 text-black hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors border border-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Question & Answer */}
            <h3 className="text-xl font-extrabold text-black mb-4 leading-snug">
              {faqs[activeModalIndex].q}
            </h3>
            <p className="text-gray-800 text-sm leading-relaxed mb-8 font-medium">
              {faqs[activeModalIndex].a}
            </p>

            {/* Modal Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-300">
              <button
                onClick={() =>
                  setActiveModalIndex(
                    (activeModalIndex - 1 + faqs.length) % faqs.length
                  )
                }
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors border border-black"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous Question
              </button>
              <button
                onClick={() =>
                  setActiveModalIndex((activeModalIndex + 1) % faqs.length)
                }
                className="px-4 py-2 bg-[#f29627] hover:bg-[#FFA400] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-[-3px_3px_0px_#000]"
              >
                Next Question
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
