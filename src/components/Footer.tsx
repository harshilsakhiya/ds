"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#f29627] text-white pt-16 pb-8 relative overflow-hidden border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-black/20">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="https://digivirus.in/wp-content/uploads/2025/03/logo-1024x303.png"
                alt="digiVirus Logo"
                className="h-10 object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-xs text-white/90 leading-relaxed font-medium">
              digiVirus.in works as your marketing partner, managing your complete digital growth
              and taking the marketing headaches of your business so you can focus on running and scaling your core business.
            </p>
            <Link
              href="#start"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-extrabold text-xs rounded-xl shadow-[-5px_5px_0px_#000000] hover:bg-gray-100 transition-all"
            >
              Get A Callback
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-base font-black uppercase text-black mb-4 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs font-bold text-white">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-black transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-black transition-colors">
                  Read Blogs
                </Link>
              </li>
              <li>
                <Link href="#start" className="hover:text-black transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-base font-black uppercase text-black mb-4 tracking-tight">
              Services
            </h3>
            <ul className="space-y-2 text-xs font-bold text-white">
              <li>Social Media Marketing &amp; Branding</li>
              <li>Performance Marketing</li>
              <li>Website Development &amp; App Design</li>
              <li>E-Commerce Marketing</li>
              <li>Lead Generation</li>
              <li>AI Ads Creation</li>
              <li>AI Ranking &amp; SEO</li>
              <li>Digital Marketing Audit</li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="space-y-4">
            <h3 className="text-base font-black uppercase text-black tracking-tight">
              Contact Us
            </h3>
            <div className="space-y-2 text-xs font-bold text-white">
              <a
                href="tel:+917579766946"
                className="flex items-center gap-2 hover:text-black transition-colors"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>+91-7579766946</span>
              </a>
              <a
                href="mailto:marketing@digivirus.in"
                className="flex items-center gap-2 hover:text-black transition-colors"
              >
                <Mail className="w-4 h-4 text-black" />
                <span>marketing@digivirus.in</span>
              </a>
            </div>

            <h4 className="text-xs font-black uppercase text-black pt-2 tracking-wider">
              Socials
            </h4>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/digivirus.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center shadow-[-3px_3px_0px_#000000] hover:bg-gray-100 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100094229486937"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center shadow-[-3px_3px_0px_#000000] hover:bg-gray-100 transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/digivirus/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center shadow-[-3px_3px_0px_#000000] hover:bg-gray-100 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-white gap-4">
          <p>© All Right 2026 Reserved digiVirus.in</p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-black transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/refund-policy" className="hover:text-black transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
