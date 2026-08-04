"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917579766946?text=Hi%20digiVirus!%20I%20need%20more%20info%20about%20digiVirus"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_10px_25px_rgba(16,185,129,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      <span className="absolute right-16 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-emerald-500/30">
        Chat on WhatsApp
      </span>
    </a>
  );
}
