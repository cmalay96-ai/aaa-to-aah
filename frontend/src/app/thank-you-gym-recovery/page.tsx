"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaArrowRight, FaCalendarCheck, FaClock, FaClipboardList, FaGlobe } from "react-icons/fa";
import TestimonialsSection from "../components/TestimonialsSection";

export default function ThankYouGymRecoveryPage() {
  return (
    <div className="bg-brandBlack min-h-screen text-white font-sans antialiased overflow-x-hidden selection:bg-brandLime selection:text-black">
      
      {/* 1. Header */}
      <header className="py-6 px-4 border-b border-white/5 bg-brandBlack/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/gym-recovery">
            <span className="text-xl md:text-2xl font-montserrat font-black tracking-tighter text-white">
              AAATOAHH<span className="text-brandLime">.IN</span>
            </span>
          </Link>
          <span className="text-xs font-montserrat font-bold bg-green-500/10 text-green-400 px-3 py-1 rounded-full border border-green-500/20">
            ✓ REQUEST SUBMITTED
          </span>
        </div>
      </header>

      {/* 2. Success Banner */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-brandNavy to-brandBlack text-center overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brandLime/5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="w-20 h-20 bg-brandLime/10 border border-brandLime/30 rounded-full flex items-center justify-center text-brandLime text-4xl mx-auto animate-pulse">
            ✓
          </div>
          
          <h1 className="text-3xl md:text-5xl font-poppins font-extrabold text-white leading-tight tracking-tight">
            Thank You, Athlete! <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandLime to-white">
              Your Demo Is Being Scheduled.
            </span>
          </h1>
          
          <p className="text-textSecondary text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
            We have received your details for the <strong className="text-white">FREE 10-Minute Home Recovery Demo</strong>. A recovery counselor is verifying specialist availability in your area.
          </p>

          {/* Action Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 max-w-md mx-auto">
            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/917908082151?text=Hi!%20I%20just%20submitted%20the%20form%20for%20a%20FREE%20Gym%20Recovery%20Home%20Demo%20on%20AAATOAHH.IN.%20Please%20confirm%20my%20slot!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white font-poppins font-black text-sm uppercase px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <FaWhatsapp className="text-xl" />
              SKIP QUEUE - CONFIRM ON WHATSAPP
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

      {/* 3. What Happens Next Section */}
      <section className="py-16 px-4 bg-brandBlack border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-poppins font-extrabold text-white">
              What Happens Next?
            </h2>
            <div className="w-12 h-0.5 bg-brandLime mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-[#070b16] border border-white/5 p-6 rounded-2xl relative overflow-hidden">
              <div className="text-3xl text-brandLime mb-4"><FaClipboardList /></div>
              <h3 className="text-lg font-poppins font-bold text-white mb-2">1. Detail Verification</h3>
              <p className="text-textSecondary text-xs leading-relaxed font-light">
                Our support team will verify your home address and confirm therapist coverage for your specific location within 15 minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#070b16] border border-white/5 p-6 rounded-2xl relative overflow-hidden">
              <div className="text-3xl text-brandLime mb-4"><FaClock /></div>
              <h3 className="text-lg font-poppins font-bold text-white mb-2">2. Timing Call</h3>
              <p className="text-textSecondary text-xs leading-relaxed font-light">
                We will call or WhatsApp you to coordinate a convenient time slot that fits perfectly around your workout or work schedule.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#070b16] border border-white/5 p-6 rounded-2xl relative overflow-hidden">
              <div className="text-3xl text-brandLime mb-4"><FaCalendarCheck /></div>
              <h3 className="text-lg font-poppins font-bold text-white mb-2">3. Home Session</h3>
              <p className="text-textSecondary text-xs leading-relaxed font-light">
                Our certified specialist arrives at your doorstep with our elite mobile recovery kit. All you need to do is lay down and relax.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials (Gym theme) */}
      <TestimonialsSection category="gym" accentColor="lime" />

      {/* 5. Explore Other Recovery Services Section */}
      <section className="py-20 px-4 bg-[#030303] border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-poppins font-extrabold text-white">
              Explore Our Elite Recovery Portfolios
            </h2>
            <p className="text-textSecondary text-xs mt-2 max-w-sm mx-auto">
              We specialize in multiple targeted home recovery disciplines.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/leg-recovery" className="bg-[#070b16] hover:bg-brandLime/5 border border-white/5 p-4 rounded-xl transition-all duration-300 group">
              <span className="text-lg block group-hover:scale-110 transition-transform">🦵</span>
              <h4 className="text-xs font-poppins font-bold text-white mt-2">Leg Recovery</h4>
            </Link>

            <Link href="/joint-pain-relief" className="bg-[#070b16] hover:bg-brandLime/5 border border-white/5 p-4 rounded-xl transition-all duration-300 group">
              <span className="text-lg block group-hover:scale-110 transition-transform">🦴</span>
              <h4 className="text-xs font-poppins font-bold text-white mt-2">Joint Pain Relief</h4>
            </Link>

            <Link href="/parents-pain-care" className="bg-[#070b16] hover:bg-brandLime/5 border border-white/5 p-4 rounded-xl transition-all duration-300 group">
              <span className="text-lg block group-hover:scale-110 transition-transform">👵</span>
              <h4 className="text-xs font-poppins font-bold text-white mt-2">Parents Pain Care</h4>
            </Link>

            <Link href="/sleep-relaxation" className="bg-[#070b16] hover:bg-brandLime/5 border border-white/5 p-4 rounded-xl transition-all duration-300 group">
              <span className="text-lg block group-hover:scale-110 transition-transform">💤</span>
              <h4 className="text-xs font-poppins font-bold text-white mt-2">Sleep Recovery</h4>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer minimal info */}
      <footer className="py-8 bg-brandBlack text-center text-textSecondary text-xs border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} AAATOAHH.IN. Elite Home Mobility & Recovery Support. All rights reserved.</p>
      </footer>

    </div>
  );
}
