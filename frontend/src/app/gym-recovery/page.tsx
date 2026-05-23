"use client";

import React from "react";
import Image from "next/image";
import { FaDumbbell, FaBolt, FaHistory, FaHome, FaClock, FaCheckCircle } from "react-icons/fa";
import LeadForm from "../components/LeadForm";
import StickyButtons from "../components/StickyButtons";
import FounderStory from "../components/FounderStory";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";

export default function GymRecoveryPage() {
  return (
    <div className="bg-brandBlack min-h-screen text-white font-sans antialiased overflow-x-hidden selection:bg-brandLime selection:text-black">
      
      {/* 1. Header / Navigation */}
      <header className="py-6 px-4 border-b border-white/5 bg-brandBlack/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-montserrat font-black tracking-tighter text-white">
              AAATOAHH<span className="text-brandLime">.IN</span>
            </span>
          </div>
          <span className="text-xs font-montserrat font-bold bg-brandLime/10 text-brandLime px-3 py-1 rounded-full border border-brandLime/20">
            ELITE RECOVERY
          </span>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-12 pb-24 px-4 md:py-32 bg-gradient-to-b from-brandNavy to-brandBlack overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brandLime/5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="md:col-span-7 space-y-6 text-left">
            <span className="text-xs font-montserrat font-extrabold uppercase tracking-widest text-brandLime bg-brandLime/10 px-3.5 py-1.5 rounded-full">
              ⚡ WORKOUT COMPLETION FUNNEL
            </span>
            <h1 className="text-4xl md:text-6xl font-poppins font-extrabold text-white leading-tight tracking-tight">
              Your Workout Is Complete. <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandLime via-white to-white">
                Your Recovery Isn't.
              </span>
            </h1>
            <p className="text-textSecondary text-base md:text-xl font-light leading-relaxed max-w-xl">
              Training hard but recovering poorly? Bring professional, cinematic-grade home recovery & passive stretching directly to your living room. Accelerate cellular repair and unlock peak mobility.
            </p>

            {/* Bullet Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandLime flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Rapid Lactic Acid Flush</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandLime flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Improved Joint Flexibility</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandLime flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Deep Muscular Decompression</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandLime flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">100% Home Doorstep Service</span>
              </div>
            </div>
            
            {/* Lead Magnet Highlight Card */}
            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 max-w-lg mt-6">
              <div className="w-12 h-12 rounded-xl bg-brandLime/10 flex items-center justify-center text-brandLime text-xl">
                🎁
              </div>
              <div>
                <h4 className="text-sm font-poppins font-bold text-white">Special Meta Ad Launch Offer</h4>
                <p className="text-xs text-textSecondary mt-0.5">Book now and claim a <span className="text-brandLime font-semibold">FREE 10-Minute Home Recovery Demo</span>. Zero catch.</p>
              </div>
            </div>
          </div>

          {/* Hero Right Lead Form & Image Treatment */}
          <div id="lead-form-section" className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-brandLime/10 rounded-[32px] blur-3xl pointer-events-none" />
            <LeadForm 
              painPointDefault="Lactic acid build-up & incomplete muscle recovery after workouts" 
              redirectUrl="/thank-you-gym-recovery" 
              themeColor="lime" 
              serviceName="Free Gym Recovery Demo"
            />
          </div>

        </div>
      </section>

      {/* 3. Lead Magnet Image Showcase (Cinematic Image Grid) */}
      <section className="py-16 px-4 bg-brandBlack">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xs font-montserrat font-bold text-brandLime uppercase tracking-wider">VISUAL PROOF</h3>
            <h2 className="text-2xl md:text-4xl font-poppins font-extrabold text-white mt-2">Inside The AAATOAHH Recovery Suite</h2>
          </div>
          <div className="relative h-[250px] md:h-[450px] w-full rounded-3xl overflow-hidden border border-white/10 group">
            <Image
              src="/gym-recovery.png"
              alt="Elite Athletic Recovery Demo"
              fill
              className="object-cover group-hover:scale-105 transition-all duration-700 brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
              <div className="max-w-md">
                <span className="text-xs font-montserrat font-bold text-brandLime uppercase">ACTIVE LEAD MAGNET</span>
                <h4 className="text-lg md:text-xl font-poppins font-bold text-white mt-1">FREE 10-Minute Home Recovery Demo</h4>
                <p className="text-xs text-textSecondary mt-1">A physical evaluation and instant muscular release demonstration conducted right on your living room couch.</p>
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

      {/* 4. Benefits Explanation Section (3-Column Grid) */}
      <section className="py-20 px-4 bg-[#030303] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-montserrat font-bold uppercase tracking-widest text-brandLime">
              WHY ELITE ATHLETES CHOOSE US
            </span>
            <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-white mt-4 tracking-tight">
              Science-Backed Muscle Release
            </h2>
            <div className="w-16 h-1 bg-brandLime mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#070b16] border border-white/5 p-8 rounded-2xl hover:border-brandLime/20 transition-all group">
              <FaDumbbell className="text-4xl text-brandLime mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Targeted Deep Release</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-light">
                Our specialists target deep fascia layers, releasing hyper-tonic muscles that regular foam rolling and stretching simply cannot reach.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#070b16] border border-white/5 p-8 rounded-2xl hover:border-brandLime/20 transition-all group">
              <FaBolt className="text-4xl text-brandLime mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Accelerate Muscle Healing</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-light">
                By stimulating localized oxygenated blood flow, our therapy flushes out cellular metabolic waste, cutting down muscle recovery time by half.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#070b16] border border-white/5 p-8 rounded-2xl hover:border-brandLime/20 transition-all group">
              <FaHistory className="text-4xl text-brandLime mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Prevent Future Injuries</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-light">
                Increasing your active range of motion and correcting muscular imbalances prevents compensation injuries during heavy lifts or runs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Home Service Highlights (Horizontal split) */}
      <section className="py-20 px-4 bg-brandBlack border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/hero-image-2.jpeg"
              alt="Home Wellness Therapist Serving Client"
              fill
              className="object-cover grayscale brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brandBlack via-transparent to-transparent" />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-montserrat font-bold text-brandLime uppercase">ZERO COMMUTE. ABSOLUTE PRIVACY.</span>
            <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-white tracking-tight">
              Elite Wellness Delivered Direct To Your Living Room
            </h2>
            <p className="text-textSecondary text-sm leading-relaxed font-light">
              Why waste the deep physiological benefits of a recovery session by driving through stressful city traffic immediately after? 
            </p>
            <p className="text-textSecondary text-sm leading-relaxed font-light">
              With AAATOAHH, our certified recovery specialist sets up a premium workspace inside your home. Once the session ends, you can stay exactly where you are—comfortably resting in your own space, allowing the physical restoration to fully take hold.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2">
                <FaHome className="text-brandLime text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-white/90">100% In-Home Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-brandLime text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-white/90">Flexible Booking Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Founder Story */}
      <FounderStory accentColor="lime" />

      {/* 7. Testimonials */}
      <TestimonialsSection category="gym" accentColor="lime" />

      {/* 8. FAQs */}
      <FAQSection accentColor="lime" />

      {/* 9. Final Call To Action Section */}
      <section className="py-24 px-4 bg-gradient-to-t from-brandNavy to-brandBlack text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brandLime/5 blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-white tracking-tight">
            Stop Ignoring Your Body's Cry For Recovery.
          </h2>
          <p className="text-textSecondary text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Claim your 100% free, zero-obligation home demo. Let a certified specialist show you what real, professional relief feels like.
          </p>
          <div className="pt-4">
            <button
              onClick={() => document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-brandLime text-black font-poppins font-black text-sm uppercase px-8 py-4 rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(163,230,53,0.3)] duration-300 transform active:scale-95"
            >
              BOOK YOUR FREE DEMO SESSION NOW
            </button>
          </div>
          <p className="text-[10px] text-textSecondary/50 uppercase tracking-wider font-montserrat">
            Available across major metropolitan locations
          </p>
        </div>
      </section>

      {/* 10. Sticky WhatsApp and Call Buttons */}
      <StickyButtons accentColor="lime" demoAnchorId="lead-form-section" />

    </div>
  );
}
