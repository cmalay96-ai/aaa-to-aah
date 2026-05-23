"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaArrowRight, FaCalendarCheck, FaClock, FaClipboardList, FaGlobe } from "react-icons/fa";
import TestimonialsSection from "../components/TestimonialsSection";

export default function ThankYouSleepRelaxationPage() {
  return (
    <div className="bg-brandBlack min-h-screen text-white font-sans antialiased overflow-x-hidden selection:bg-brandOrange selection:text-black">
      
      {/* 1. Header */}
      <header className="py-6 px-4 border-b border-white/5 bg-brandBlack/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/sleep-relaxation">
            <span className="text-xl md:text-2xl font-montserrat font-black tracking-tighter text-white">
              AAATOAHH<span className="text-brandOrange">.IN</span>
            </span>
          </Link>
          <span className="text-xs font-montserrat font-bold bg-green-500/10 text-green-400 px-3 py-1 rounded-full border border-green-500/20">
            ✓ REQUEST SUBMITTED
          </span>
        </div>
      </header>

      {/* 2. Success Banner */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-[#090b16] to-brandBlack text-center overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brandNavy/20 blur-[150px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="w-20 h-20 bg-brandOrange/10 border border-brandOrange/30 rounded-full flex items-center justify-center text-brandOrange text-4xl mx-auto animate-pulse">
            💤
          </div>
          
          <h1 className="text-3xl md:text-5xl font-poppins font-extrabold text-white leading-tight tracking-tight">
            Relaxation Demo Registered! <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandOrange to-white">
              Your Calm Sanctuary Is Coming To You.
            </span>
          </h1>
          
          <p className="text-textSecondary text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
            We've successfully received your booking for a <strong className="text-white">FREE 10-Minute Sleep Relaxation Home Demo</strong>. A counselor is lining up certified sensory recovery therapists.
          </p>

          {/* Action Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 max-w-md mx-auto">
            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/917908082151?text=Hi!%20I%20just%20submitted%20the%20form%20for%20a%20FREE%20Sleep%20Relaxation%20Home%20Demo%20on%20AAATOAHH.IN.%20Please%20confirm%20my%20slot!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white font-poppins font-black text-sm uppercase px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <FaWhatsapp className="text-xl" />
              CONFIRM INSTANTLY ON WHATSAPP
            </a>

            {/* Visit Website Button */}
            <a
              href="https://aaatoahh.in"
              className="w-full sm:w-auto bg-white/5 border border-white/10 text-white font-poppins font-bold text-sm uppercase px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2.5"
            >
              <FaGlobe />
              VISIT WEBSITE
            </a>
          </div>
        </div>
      </section>

      {/* 3. What Happens Next */}
      <section className="py-16 px-4 bg-brandBlack border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-poppins font-extrabold text-white">
              Steps To Deep Cellular Rest
            </h2>
            <div className="w-12 h-0.5 bg-brandOrange mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-[#070b16] border border-white/5 p-6 rounded-2xl relative overflow-hidden">
              <div className="text-3xl text-brandOrange mb-4"><FaClipboardList /></div>
              <h3 className="text-lg font-poppins font-bold text-white mb-2">1. Therapist Allocation</h3>
              <p className="text-textSecondary text-xs leading-relaxed font-light">
                We select a background-verified therapist experienced in deep tissue release, slow breath integration, and sensory relaxation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#070b16] border border-white/5 p-6 rounded-2xl relative overflow-hidden">
              <div className="text-3xl text-brandOrange mb-4"><FaClock /></div>
              <h3 className="text-lg font-poppins font-bold text-white mb-2">2. Timing Arrangement</h3>
              <p className="text-textSecondary text-xs leading-relaxed font-light">
                We reach out to schedule a perfect evening or weekend hour, tailored specifically around your stress-release goals.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#070b16] border border-white/5 p-6 rounded-2xl relative overflow-hidden">
              <div className="text-3xl text-brandOrange mb-4"><FaCalendarCheck /></div>
              <h3 className="text-lg font-poppins font-bold text-white mb-2">3. Deep Sensory Relaxation</h3>
              <p className="text-textSecondary text-xs leading-relaxed font-light">
                We set up a serene home space and execute a gentle 10-minute relaxation demo. Sleep like a baby right after.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials (Sleep theme) */}
      <TestimonialsSection category="sleep" accentColor="orange" />

      {/* 5. Explore Other Recovery Services Section */}
      <section className="py-20 px-4 bg-[#030303] border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-poppins font-extrabold text-white">
              Explore Our Elite Recovery Portfolios
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/gym-recovery" className="bg-[#070b16] hover:bg-brandOrange/5 border border-white/5 p-4 rounded-xl transition-all duration-300 group">
              <span className="text-lg block group-hover:scale-110 transition-transform">⚡</span>
              <h4 className="text-xs font-poppins font-bold text-white mt-2">Gym Recovery</h4>
            </Link>

            <Link href="/leg-recovery" className="bg-[#070b16] hover:bg-brandOrange/5 border border-white/5 p-4 rounded-xl transition-all duration-300 group">
              <span className="text-lg block group-hover:scale-110 transition-transform">🦵</span>
              <h4 className="text-xs font-poppins font-bold text-white mt-2">Leg Recovery</h4>
            </Link>

            <Link href="/joint-pain-relief" className="bg-[#070b16] hover:bg-brandOrange/5 border border-white/5 p-4 rounded-xl transition-all duration-300 group">
              <span className="text-lg block group-hover:scale-110 transition-transform">🦴</span>
              <h4 className="text-xs font-poppins font-bold text-white mt-2">Joint Pain Relief</h4>
            </Link>

            <Link href="/parents-pain-care" className="bg-[#070b16] hover:bg-brandOrange/5 border border-white/5 p-4 rounded-xl transition-all duration-300 group">
              <span className="text-lg block group-hover:scale-110 transition-transform">👵</span>
              <h4 className="text-xs font-poppins font-bold text-white mt-2">Parents Pain Care</h4>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-brandBlack text-center text-textSecondary text-xs border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} AAATOAHH.IN. Elite Home Mobility & Recovery Support. All rights reserved.</p>
      </footer>

    </div>
  );
}
