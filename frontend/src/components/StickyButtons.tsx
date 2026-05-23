"use client";

import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

interface StickyButtonsProps {
  whatsappNumber?: string;
  phoneNumber?: string;
  demoAnchorId?: string; // HTML element ID to scroll to when clicking the Demo CTA
  accentColor?: "lime" | "orange";
}

export default function StickyButtons({
  whatsappNumber = "917908082151",
  phoneNumber = "+917908082151",
  demoAnchorId = "lead-form-section",
  accentColor = "lime",
}: StickyButtonsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA bar after scrolling 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToForm = () => {
    const element = document.getElementById(demoAnchorId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ctaBtnColor = accentColor === "lime" 
    ? "bg-brandLime text-black font-extrabold hover:bg-white transition-all shadow-[0_0_15px_rgba(163,230,53,0.4)]" 
    : "bg-brandOrange text-white font-extrabold hover:bg-white hover:text-black transition-all shadow-[0_0_15px_rgba(251,146,60,0.4)]";

  return (
    <>
      {/* 1. Left/Right Floating Social Buttons (Always visible on all screen sizes at bottom-right/left) */}
      <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-3 md:bottom-6 md:right-6">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hi,%20I%20am%20interested%20in%20booking%20a%20free%20home%20recovery%20demo%20with%20AAATOAHH.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp className="text-3xl animate-pulse" />
        </a>

        {/* Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="w-14 h-14 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Call Support"
        >
          <FaPhoneAlt className="text-xl" />
        </a>
      </div>

      {/* 2. Mobile-First Bottom Sticky CTA Bar (Shows on scroll on mobile screens) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-t border-white/10 px-4 py-3 md:hidden transition-all duration-500 transform ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          onClick={handleScrollToForm}
          className={`w-full py-3.5 rounded-xl font-poppins text-sm uppercase tracking-wider flex items-center justify-center gap-2 ${ctaBtnColor}`}
        >
          <span>🚀</span> BOOK FREE HOME DEMO NOW
        </button>
      </div>
    </>
  );
}
