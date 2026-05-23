"use client";

import React from "react";
import Image from "next/image";
import { FaRunning, FaHistory, FaCheckCircle, FaHome, FaClock, FaHeartbeat } from "react-icons/fa";
import LeadForm from "../components/LeadForm";
import StickyButtons from "../components/StickyButtons";
import FounderStory from "../components/FounderStory";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";

export default function LegRecoveryPage() {
  return (
    <div className="bg-brandBlack min-h-screen text-white font-sans antialiased overflow-x-hidden selection:bg-brandLime selection:text-black">
      
      {/* 1. Header */}
      <header className="py-6 px-4 border-b border-white/5 bg-brandBlack/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-montserrat font-black tracking-tighter text-white">
              AAATOAHH<span className="text-brandLime">.IN</span>
            </span>
          </div>
          <span className="text-xs font-montserrat font-bold bg-brandLime/10 text-brandLime px-3 py-1 rounded-full border border-brandLime/20">
            LOWER LIMB MOBILE RECOVERY
          </span>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-12 pb-24 px-4 md:py-32 bg-gradient-to-b from-brandNavy to-brandBlack overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brandLime/5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="md:col-span-7 space-y-6 text-left">
            <span className="text-xs font-montserrat font-extrabold uppercase tracking-widest text-brandLime bg-brandLime/10 px-3.5 py-1.5 rounded-full">
              🦵 LOWER BODY MOBILITY RECOVERY
            </span>
            <h1 className="text-4xl md:text-6xl font-poppins font-extrabold text-white leading-tight tracking-tight">
              Heavy Legs After Workout? <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandLime via-white to-white">
                Stiff Legs Can Slow Your Day.
              </span>
            </h1>
            <p className="text-textSecondary text-base md:text-xl font-light leading-relaxed max-w-xl">
              Don't let tight calves, stiff knees, and heavy quadriceps hold back your active daily life. Bring elite, mobile-first lower limb compression, muscle release, and passive stretching straight to your home.
            </p>

            {/* Bullet Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandLime flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Eases Heavy & Tired Calf Muscles</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandLime flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Restores Deep Knee Flexibility</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandLime flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Alleviates IT-Band Tightness</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandLime flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">100% In-Home Therapist Setup</span>
              </div>
            </div>

            {/* Offer Highlight Box */}
            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 max-w-lg mt-6">
              <div className="w-12 h-12 rounded-xl bg-brandLime/10 flex items-center justify-center text-brandLime text-xl">
                🦵
              </div>
              <div>
                <h4 className="text-sm font-poppins font-bold text-white">Free Leg Recovery Demo</h4>
                <p className="text-xs text-textSecondary mt-0.5">Includes a <span className="text-brandLime font-semibold">FREE 10-Minute Lower Limb Assessment & Release Session</span> in your home.</p>
              </div>
            </div>
          </div>

          {/* Hero Right Lead Form */}
          <div id="lead-form-section" className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-brandLime/10 rounded-[32px] blur-3xl pointer-events-none" />
            <LeadForm 
              painPointDefault="Tight calves, heavy legs, and hamstring stiffness" 
              redirectUrl="/thank-you-leg-recovery" 
              themeColor="lime" 
            />
          </div>

        </div>
      </section>

      {/* 3. Lead Magnet Image Showcase */}
      <section className="py-16 px-4 bg-brandBlack">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xs font-montserrat font-bold text-brandLime uppercase tracking-wider">LOWER BODY FOCUS</h3>
            <h2 className="text-2xl md:text-4xl font-poppins font-extrabold text-white mt-2">Targeted Lower Limb Restoration</h2>
          </div>
          <div className="relative h-[250px] md:h-[450px] w-full rounded-3xl overflow-hidden border border-white/10 group">
            <Image
              src="/leg-recovery.png"
              alt="Leg Recovery Compression Therapy"
              fill
              className="object-cover group-hover:scale-105 transition-all duration-700 brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
              <div className="max-w-md">
                <span className="text-xs font-montserrat font-bold text-brandLime uppercase">ACTIVE LEAD MAGNET</span>
                <h4 className="text-lg md:text-xl font-poppins font-bold text-white mt-1">FREE 10-Minute Lower Limb Demo</h4>
                <p className="text-xs text-textSecondary mt-1">Experience direct physical relief on your stiff lower back, heavy hips, tight calves, and sore feet with our expert stretching and decompression.</p>
              </div>
              <button 
                onClick={() => document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-brandLime text-black font-poppins font-bold text-xs uppercase px-5 py-3 rounded-xl hover:bg-white transition-all w-fit"
              >
                CLAIM FREE DEMO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits Explanation */}
      <section className="py-20 px-4 bg-[#030303] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-montserrat font-bold uppercase tracking-widest text-brandLime">
              HOW WE UNLOCK YOUR MOBILITY
            </span>
            <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-white mt-4 tracking-tight">
              Leg Decompression & Release
            </h2>
            <div className="w-16 h-1 bg-brandLime mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#070b16] border border-white/5 p-8 rounded-2xl hover:border-brandLime/20 transition-all group">
              <FaRunning className="text-4xl text-brandLime mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Eases Walking & Running</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-light">
                By releasing myofascial restrictions in the thighs and calves, walking and running immediately feel lighter, fluid, and pain-free.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#070b16] border border-white/5 p-8 rounded-2xl hover:border-brandLime/20 transition-all group">
              <FaHeartbeat className="text-4xl text-brandLime mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Boost Lower Blood Flow</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-light">
                Targeted physical decompression aids venous return, reducing the feeling of leg swelling, heavy pooling, and chronic soreness.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#070b16] border border-white/5 p-8 rounded-2xl hover:border-brandLime/20 transition-all group">
              <FaHistory className="text-4xl text-brandLime mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Restores Knee Flexibility</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-light">
                Releasing tight hamstrings and calf attachments significantly offloads stress from the patellar joint, improving knee bend range.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Home Service Highlights */}
      <section className="py-20 px-4 bg-brandBlack border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/hero-image-2.jpeg"
              alt="Leg stretching therapy at home"
              fill
              className="object-cover grayscale brightness-90 animate-pulse"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brandBlack via-transparent to-transparent" />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-montserrat font-bold text-brandLime uppercase">ELITE CONVENIENCE</span>
            <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-white tracking-tight">
              Absolute Muscular Decompression Without Stepping Out
            </h2>
            <p className="text-textSecondary text-sm leading-relaxed font-light">
              Stiff lower limbs can make traveling to a wellness center highly uncomfortable. 
            </p>
            <p className="text-textSecondary text-sm leading-relaxed font-light">
              AAATOAHH eliminates the travel friction. We arrive directly at your location, perform advanced passive stretching and deep percussive physical work on your couch, and leave you to rest in perfect relaxation.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2">
                <FaHome className="text-brandLime text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-white/90">100% In-Home Therapist Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-brandLime text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-white/90">No Commute Required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Founder Story */}
      <FounderStory accentColor="lime" />

      {/* 7. Testimonials */}
      <TestimonialsSection category="leg" accentColor="lime" />

      {/* 8. FAQs */}
      <FAQSection accentColor="lime" />

      {/* 9. Final Call To Action */}
      <section className="py-24 px-4 bg-gradient-to-t from-brandNavy to-brandBlack text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brandLime/5 blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-white tracking-tight">
            Bring Lightness Back To Your Legs Today.
          </h2>
          <p className="text-textSecondary text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Register for your free in-home lower limb recovery demonstration. Let a certified specialist relieve your leg heaviness in 10 minutes.
          </p>
          <div className="pt-4">
            <button
              onClick={() => document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-brandLime text-black font-poppins font-black text-sm uppercase px-8 py-4 rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(163,230,53,0.3)] duration-300 transform active:scale-95"
            >
              BOOK YOUR FREE LOWER BODY DEMO
            </button>
          </div>
        </div>
      </section>

      {/* 10. Sticky WhatsApp and Call */}
      <StickyButtons accentColor="lime" demoAnchorId="lead-form-section" />

    </div>
  );
}
