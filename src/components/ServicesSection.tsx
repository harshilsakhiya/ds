"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "social-media",
    title: "Social Media Marketing & Branding",
    desc: "We help brands grow their presence and build trust through consistent content, audience engagement, and strong brand positioning. Our strategies focus on turning followers into loyal customers by improving reach, engagement, and recall value.",
    insights: ["Average ROAS of 7", "3.5x Lead Volume Increase", "60% Drop in CPL"],
    img: "https://digivirus.in/wp-content/uploads/2025/02/Social.webp",
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    desc: "We manage campaigns on Google Ads, Meta Ads, and other digital platforms with a clear focus on revenue, leads, and conversions. Each campaign is optimized using A/B testing, audience insights, and real-time performance data to improve efficiency and scalability.",
    insights: ["Average ROAS of 7", "4.2x Revenue Growth", "45% Reduction in CPA"],
    img: "https://digivirus.in/wp-content/uploads/2026/01/AI-Ads-Creation.webp",
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    desc: "We design high-converting sales funnels, targeted landing pages, and lead capture strategies to generate qualified leads for B2B and B2C businesses. Our approach focuses on intent-driven audience targeting to deliver leads that turn into customers.",
    insights: ["3x - 8x Lead Quality Boost", "Conversion Rate Up To 12%", "Instant CRM Integration"],
    img: "https://digivirus.in/wp-content/uploads/2026/01/AI-Ads-Creation.webp",
  },
  {
    id: "ai-ads-creation",
    title: "AI Ads Creation",
    desc: "Using AI-powered tools, we create, test, and optimize multiple ad formats, copy options, and visual creatives faster. This allows us to scale ad performance, test target audiences efficiently, and keep creative fatigue low while maximizing conversion rates.",
    insights: ["10x Faster Creative Production", "Lower Ad Fatigue", "High Conversion Creative Variations"],
    img: "https://digivirus.in/wp-content/uploads/2026/01/AI-Ads-Creation.webp",
  },
  {
    id: "ecommerce-marketing",
    title: "E-Commerce Marketing",
    desc: "We help online stores increase sales, improve customer lifetime value, and scale predictably across Shopify and custom e-commerce platforms using performance ads, email automation, retargeting funnels, and conversion rate optimization (CRO).",
    insights: ["Average 4x - 6x Revenue Increase", "Repeat Customer Rate Boost", "Reduced Cart Abandonment"],
    img: "https://digivirus.in/wp-content/uploads/2025/02/shopping-bag.png",
  },
  {
    id: "seo-ranking",
    title: "AI Ranking & SEO",
    desc: "Our search engine optimization strategies combine technical SEO, high quality content, authority link building, and AI search ranking optimizations to improve organic visibility, drive sustainable website traffic, and outrank competitors on Google.",
    insights: ["Page 1 Google Rankings", "250%+ Organic Traffic Growth", "Long-term Sustainable Leads"],
    img: "https://digivirus.in/wp-content/uploads/2026/02/admin-ajax-1-1.webp",
  },
  {
    id: "web-development",
    title: "Website Development & App Design",
    desc: "We build modern, fast, mobile responsive, and conversion-optimized websites and web applications tailored to your business needs. Designed for seamless user experience, fast load speeds, and maximum conversions.",
    insights: ["Sub-second Page Load Speeds", "Mobile First UX", "Built-in Conversion Funnels"],
    img: "https://digivirus.in/wp-content/uploads/2025/02/Web.webp",
  },
  {
    id: "marketing-audit",
    title: "Digital Marketing Audit",
    desc: "A comprehensive analysis of your current digital marketing campaigns, ad account setup, website funnels, and content strategy to spot wasted spend, bottlenecks, and growth opportunities with action steps to improve ROI.",
    insights: ["Comprehensive 360 Audit Report", "Identify Wasted Ad Spend", "Immediate Growth Action Plan"],
    img: "https://digivirus.in/wp-content/uploads/2026/02/admin-ajax-2-1.png",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-[#F4F0EA] text-black">
      {/* Orange Banner Header with Monkey */}
      <div className="bg-[#f29627] py-10 relative overflow-hidden mb-16 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-6">
            <img
              src="https://digivirus.in/wp-content/uploads/2025/02/Monkey-1.webp"
              alt="digiVirus Monkey Mascot"
              className="h-24 w-auto object-contain hidden sm:block"
            />
            <h2 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tight">
              WE HELPING YOU IN
            </h2>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border-2 border-black shadow-[-8px_8px_0px_#000000] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-black text-[#f29627] leading-tight">
                    {service.title}
                  </h3>
                  <div className="w-14 h-14 flex-shrink-0">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <p className="text-gray-800 text-sm leading-relaxed mb-6 font-medium">
                  {service.desc}
                </p>

                <div className="space-y-2 mb-6 bg-[#f8f3eb] p-4 rounded-xl border border-gray-300">
                  <p className="text-xs font-black uppercase text-black">Results Insights:</p>
                  <ul className="space-y-1">
                    {service.insights.map((insight, i) => (
                      <li key={i} className="text-xs font-bold text-gray-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#f29627]" />
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="#start"
                className="inline-flex items-center justify-between px-6 py-3 bg-[#f29627] hover:bg-[#FFA400] text-white font-black text-sm rounded-xl shadow-[-5px_5px_0px_#000000] hover:shadow-[-7px_7px_0px_#000000] transition-all"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
