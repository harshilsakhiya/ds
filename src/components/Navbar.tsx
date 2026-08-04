"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/Icons";

const servicesList = [
  { name: "Social Media Marketing & Branding", href: "#services" },
  { name: "Performance Marketing", href: "#services" },
  { name: "Lead Generation", href: "#services" },
  { name: "AI Ads Creation", href: "#services" },
  { name: "E-Commerce Marketing", href: "#services" },
  { name: "AI Ranking & SEO", href: "#services" },
  { name: "Website Development & App Design", href: "#services" },
  { name: "Digital Marketing Audit", href: "#services" },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeHoverIndex, setActiveHoverIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServiceClick = (href: string) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F4F0EA]/95 backdrop-blur-md shadow-md py-3 border-b border-gray-300"
          : "bg-[#F4F0EA] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden">
            <img
              src="https://digivirus.in/wp-content/uploads/2025/02/logo-3.png"
              alt="digiVirus Logo Icon"
              className="w-full h-full object-contain animate-rotate-slow"
            />
          </div>
          <div className="h-8 flex items-center">
            <img
              src="https://digivirus.in/wp-content/uploads/2025/02/logo-1-e1769667506148.webp"
              alt="digiVirus Brand Logo"
              className="h-full object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation Buttons */}
        <nav className="hidden xl:flex items-center space-x-3">
          <Link
            href="/about-us"
            className="px-4 py-2 text-xs font-bold text-white bg-[#f29627] hover:bg-[#FFA400] rounded-xl shadow-[-5px_5px_0px_#000000] hover:shadow-[-7px_7px_0px_#000000] hover:-translate-y-0.5 transition-all"
          >
            About Us
          </Link>

          {/* Interactive Services Dropdown with Smooth Animation */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-4 py-2 text-xs font-bold text-white bg-[#f29627] hover:bg-[#FFA400] rounded-xl shadow-[-5px_5px_0px_#000000] hover:shadow-[-7px_7px_0px_#000000] hover:-translate-y-0.5 transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu Container */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-[-8px_8px_0px_#000000] border-2 border-black overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {servicesList.map((service, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleServiceClick(service.href)}
                    onMouseEnter={() => setActiveHoverIndex(idx)}
                    className={`w-full text-left px-5 py-3 text-xs font-extrabold border-b border-gray-100 last:border-0 transition-colors duration-150 flex items-center justify-between cursor-pointer ${
                      activeHoverIndex === idx
                        ? "bg-[#f29627] text-white"
                        : "bg-white text-gray-900 hover:bg-[#f29627] hover:text-white"
                    }`}
                  >
                    <span>{service.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="px-4 py-2 text-xs font-bold text-white bg-[#f29627] hover:bg-[#FFA400] rounded-xl shadow-[-5px_5px_0px_#000000] hover:shadow-[-7px_7px_0px_#000000] hover:-translate-y-0.5 transition-all"
          >
            Blogs
          </Link>

          <Link
            href="/calculator"
            className="px-4 py-2 text-xs font-bold text-white bg-[#f29627] hover:bg-[#FFA400] rounded-xl shadow-[-5px_5px_0px_#000000] hover:shadow-[-7px_7px_0px_#000000] hover:-translate-y-0.5 transition-all"
          >
            Labs
          </Link>

          <Link
            href="/franchise"
            className="px-4 py-2 text-xs font-bold text-white bg-[#f29627] hover:bg-[#FFA400] rounded-xl shadow-[-5px_5px_0px_#000000] hover:shadow-[-7px_7px_0px_#000000] hover:-translate-y-0.5 transition-all"
          >
            Franchise
          </Link>

          <Link
            href="/our-case-studies"
            className="px-4 py-2 text-xs font-bold text-white bg-[#f29627] hover:bg-[#FFA400] rounded-xl shadow-[-5px_5px_0px_#000000] hover:shadow-[-7px_7px_0px_#000000] hover:-translate-y-0.5 transition-all text-center leading-tight"
          >
            Case<br />Study
          </Link>

          <Link
            href="#start"
            className="px-4 py-2 text-xs font-bold text-white bg-[#f29627] hover:bg-[#FFA400] rounded-xl shadow-[-5px_5px_0px_#000000] hover:shadow-[-7px_7px_0px_#000000] hover:-translate-y-0.5 transition-all"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 text-white bg-[#f29627] rounded-xl shadow-[-4px_4px_0px_#000000] active:scale-95 transition-all"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[70px] bg-[#F4F0EA]/98 backdrop-blur-xl z-40 flex flex-col p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex justify-center space-x-6 py-4 border-b border-gray-300">
            <a
              href="https://www.facebook.com/profile.php?id=100094229486937"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#f29627] text-white flex items-center justify-center shadow-[-3px_3px_0px_#000]"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/digivirus/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#f29627] text-white flex items-center justify-center shadow-[-3px_3px_0px_#000]"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/digivirus.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#f29627] text-white flex items-center justify-center shadow-[-3px_3px_0px_#000]"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col space-y-3 mt-6">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-4 text-center font-black text-lg text-white bg-[#f29627] rounded-xl shadow-[-4px_4px_0px_#000]"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-4 text-center font-bold text-lg text-black bg-white rounded-xl border border-black shadow-[-4px_4px_0px_#000]"
            >
              About Us
            </Link>
            <div className="py-2">
              <p className="text-xs uppercase tracking-wider text-black font-extrabold mb-2 text-center">
                Our Services
              </p>
              <div className="space-y-2">
                {servicesList.map((service, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleServiceClick(service.href)}
                    className="w-full py-2.5 px-3 text-sm text-black font-bold hover:bg-[#f29627] hover:text-white text-center bg-white rounded-lg border border-gray-300 transition-colors"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>
            <Link
              href="#start"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-4 text-center font-black text-lg text-white bg-[#f29627] rounded-xl shadow-[-4px_4px_0px_#000]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
