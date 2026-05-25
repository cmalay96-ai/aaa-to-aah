"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaArrowRight, FaCalendarCheck, FaClock, FaClipboardList, FaGlobe, FaStar, FaQuoteLeft } from "react-icons/fa";

export default function ThankYouNeckPainPage() {
  return (
    <div className="bg-[#FAFDFC] min-h-screen text-[#1B332D] font-sans antialiased overflow-x-hidden selection:bg-brandLime/20 selection:text-primary">
      
      {/* 1. Header */}
      <header className="py-6 px-4 border-b border-[#EAF4F0] bg-[#0A192F]/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/neck-pain-office-workers">
            <span className="text-xl md:text-2xl font-montserrat font-black tracking-tighter text-white font-bold">
              AAATOAHH<span className="text-brandLime">.IN</span>
            </span>
          </Link>
          <span className="text-xs font-montserrat font-bold bg-green-500/10 text-green-400 px-3 py-1 rounded-full border border-green-500/20">
            ✓ REQUEST RECEIVED
          </span>
        </div>
      </header>

      {/* 2. Success Banner */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-[#0A192F] to-[#0E2447] text-center overflow-hidden text-white">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brandLime/5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="w-20 h-20 bg-brandLime/10 border border-brandLime/30 rounded-full flex items-center justify-center text-brandLime text-4xl mx-auto animate-pulse">
            💆‍♂️
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif text-white leading-tight tracking-tight font-extrabold">
            Thank You! <br />
            <span className="text-brandLime italic font-serif">
              Your Free Neck Relief Demo Request Has Been Received.
            </span>
          </h1>
          
          <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
            Thank you for choosing AAATOAHH. We appreciate your trust and look forward to helping you feel more comfortable, relaxed, and refreshed.
          </p>
          <p className="text-brandLime text-sm md:text-base font-semibold tracking-wide uppercase">
            Our team will contact you shortly to confirm your home demo session.
          </p>

          {/* Action Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 max-w-md mx-auto">
            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/917908082151?text=Hi!%20I%20just%20submitted%20the%20form%20for%20a%20FREE%20Neck%20and%20Shoulder%20Relief%20Home%20Demo%20on%20AAATOAHH.IN.%20Please%20confirm%20my%20slot!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white font-poppins font-black text-sm uppercase px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <FaWhatsapp className="text-xl" />
              CHAT ON WHATSAPP
            </a>

            {/* Visit Website Button */}
            <a
              href="https://aaatoahh.in"
              className="w-full sm:w-auto bg-white border border-primary/15 text-textPrimary font-poppins font-bold text-sm uppercase px-8 py-4 rounded-xl hover:bg-secondary/30 transition-all flex items-center justify-center gap-2.5"
            >
              <FaGlobe />
              VISIT WEBSITE
            </a>
          </div>
        </div>
      </section>

      {/* 3. What Happens Next Section */}
      <section className="py-16 px-4 bg-white border-t border-[#EAF4F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-[#05261E] font-extrabold">
              What Happens Next?
            </h2>
            <div className="w-12 h-0.5 bg-primary/30 mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-6 rounded-2xl relative overflow-hidden shadow-sm">
              <div className="text-2xl text-primary mb-3"><FaClipboardList /></div>
              <h3 className="text-base font-poppins font-bold text-[#0A4D3C] mb-1">1. Review Request</h3>
              <p className="text-[#3D544E] text-xs leading-relaxed font-medium">
                Our support team reviews your suboccipital and desk strain details.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-6 rounded-2xl relative overflow-hidden shadow-sm">
              <div className="text-2xl text-primary mb-3"><FaClock /></div>
              <h3 className="text-base font-poppins font-bold text-[#0A4D3C] mb-1">2. Contact You Shortly</h3>
              <p className="text-[#3D544E] text-xs leading-relaxed font-medium">
                We call or WhatsApp you within 15 minutes to coordinate timings.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-6 rounded-2xl relative overflow-hidden shadow-sm">
              <div className="text-2xl text-primary mb-3"><FaCalendarCheck /></div>
              <h3 className="text-base font-poppins font-bold text-[#0A4D3C] mb-1">3. Schedule Session</h3>
              <p className="text-[#3D544E] text-xs leading-relaxed font-medium">
                Your free home session gets locked into our therapists' calendar slots.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-6 rounded-2xl relative overflow-hidden shadow-sm">
              <div className="text-2xl text-primary mb-3"><FaHome /></div>
              <h3 className="text-base font-poppins font-bold text-[#0A4D3C] mb-1">4. Home Rest</h3>
              <p className="text-[#3D544E] text-xs leading-relaxed font-medium">
                Enjoy elite professional assisted recovery and release at your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials (Office-worker Success Stories) */}
      <section className="py-20 px-4 bg-[#FAFDFC] border-t border-[#EAF4F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-[#05261E] font-extrabold">
              Office-Worker Success Stories
            </h2>
            <div className="w-12 h-0.5 bg-primary/30 mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#EAF4F0] p-6 rounded-2xl relative shadow-sm">
              <FaQuoteLeft className="text-3xl text-primary/10 absolute top-6 left-6" />
              <div className="relative z-10 pl-3">
                <div className="flex text-yellow-500 mb-3 gap-0.5">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-[#3D544E] text-sm italic mb-4 font-medium">
                  "I was highly skeptical about a home demo, but the suboccipital cervical traction was absolutely amazing. The shoulder tightness is completely gone and I work with much better posture!"
                </p>
                <h4 className="text-xs font-bold text-[#0A4D3C] uppercase">Shreya Gupta — WFH Designer</h4>
              </div>
            </div>

            <div className="bg-white border border-[#EAF4F0] p-6 rounded-2xl relative shadow-sm">
              <FaQuoteLeft className="text-3xl text-primary/10 absolute top-6 left-6" />
              <div className="relative z-10 pl-3">
                <div className="flex text-yellow-500 mb-3 gap-0.5">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-[#3D544E] text-sm italic mb-4 font-medium">
                  "Commuting to clinics after office hours was tensing my neck all over again. AAATOAHH performing releases on my living room couch is a lifesaver. Elite work!"
                </p>
                <h4 className="text-xs font-bold text-[#0A4D3C] uppercase">Ankit Ray — IT Program Manager</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white text-center text-textSecondary text-xs border-t border-[#EAF4F0]">
        <p>&copy; {new Date().getFullYear()} AAATOAHH.IN. Elite Home Mobility & Recovery Support. All rights reserved.</p>
      </footer>

    </div>
  );
}
