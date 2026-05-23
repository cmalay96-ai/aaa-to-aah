"use client";

import React from "react";
import Image from "next/image";
import { FaUserHeart, FaHeart, FaHandsHelp, FaHome, FaClock, FaCheckCircle } from "react-icons/fa";
import LeadForm from "../components/LeadForm";
import StickyButtons from "../components/StickyButtons";
import FounderStory from "../components/FounderStory";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";

export default function ParentsPainCarePage() {
  return (
    <div className="bg-brandBlack min-h-screen text-white font-sans antialiased overflow-x-hidden selection:bg-brandOrange selection:text-black">
      
      {/* 1. Header */}
      <header className="py-6 px-4 border-b border-white/5 bg-brandBlack/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-montserrat font-black tracking-tighter text-white">
              AAATOAHH<span className="text-brandOrange">.IN</span>
            </span>
          </div>
          <span className="text-xs font-montserrat font-bold bg-brandOrange/10 text-brandOrange px-3 py-1 rounded-full border border-brandOrange/20">
            ELDERLY MOBILITY CARE
          </span>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-12 pb-24 px-4 md:py-32 bg-gradient-to-b from-[#110c08] to-brandBlack overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brandOrange/5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="md:col-span-7 space-y-6 text-left">
            <span className="text-xs font-montserrat font-extrabold uppercase tracking-widest text-brandOrange bg-brandOrange/10 px-3.5 py-1.5 rounded-full">
              💝 EMOTIONAL PARENTAL CARE
            </span>
            <h1 className="text-4xl md:text-6xl font-poppins font-extrabold text-white leading-tight tracking-tight">
              Help Your Parents <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandOrange via-white to-white">
                Move Comfortably Again.
              </span>
            </h1>
            <p className="text-textSecondary text-base md:text-xl font-light leading-relaxed max-w-xl">
              Caring starts with their comfort. Seeing your elderly parents struggle with knee stiffness, back pain, or walking difficulty is tough. AAATOAHH brings extremely gentle, professional home mobility and physical joint care straight to their favorite armchair.
            </p>

            {/* Bullet Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandOrange flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Gentle Assisted Stretching for Seniors</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandOrange flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Eases Age-Related Knee & Hip Stiffness</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandOrange flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Background-Verified Safe Therapists</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandOrange flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Performed Comfortably on Couch or Bed</span>
              </div>
            </div>

            {/* Offer Highlight Box */}
            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 max-w-lg mt-6">
              <div className="w-12 h-12 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange text-xl">
                💝
              </div>
              <div>
                <h4 className="text-sm font-poppins font-bold text-white">Free Home Demo For Parents</h4>
                <p className="text-xs text-textSecondary mt-0.5">Let us show them gentle relief. Includes a <span className="text-brandOrange font-semibold">FREE 10-Minute Seniors Home Recovery Assessment & Demo</span>.</p>
              </div>
            </div>
          </div>

          {/* Hero Right Lead Form */}
          <div id="lead-form-section" className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-brandOrange/10 rounded-[32px] blur-3xl pointer-events-none" />
            <LeadForm 
              painPointDefault="Age-related stiffness and walking difficulty for elderly parents" 
              redirectUrl="/thank-you-parents-care" 
              themeColor="orange" 
            />
          </div>

        </div>
      </section>

      {/* 3. Lead Magnet Image Showcase */}
      <section className="py-16 px-4 bg-brandBlack">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xs font-montserrat font-bold text-brandOrange uppercase tracking-wider">TRUSTED CARE</h3>
            <h2 className="text-2xl md:text-4xl font-poppins font-extrabold text-white mt-2">Gentle Mobility Care For Elders</h2>
          </div>
          <div className="relative h-[250px] md:h-[450px] w-full rounded-3xl overflow-hidden border border-white/10 group">
            <Image
              src="/parents-care.png"
              alt="Elderly parent mobility support at home"
              fill
              className="object-cover group-hover:scale-105 transition-all duration-700 brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
              <div className="max-w-md">
                <span className="text-xs font-montserrat font-bold text-brandOrange uppercase">ACTIVE LEAD MAGNET</span>
                <h4 className="text-lg md:text-xl font-poppins font-bold text-white mt-1">FREE Home Recovery Demo for Parents</h4>
                <p className="text-xs text-textSecondary mt-1">Our certified specialists perform highly slow, patient, and therapeutic passive stretching to help elders stand, sit, and walk with greater physical confidence.</p>
              </div>
              <button 
                onClick={() => document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-brandOrange text-white font-poppins font-bold text-xs uppercase px-5 py-3 rounded-xl hover:bg-white hover:text-black transition-all w-fit"
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
            <span className="text-xs font-montserrat font-bold uppercase tracking-widest text-brandOrange">
              HOW WE CARE FOR THEM
            </span>
            <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-white mt-4 tracking-tight">
              A Patient & Loving Approach
            </h2>
            <div className="w-16 h-1 bg-brandOrange mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#070b16] border border-white/5 p-8 rounded-2xl hover:border-brandOrange/20 transition-all group">
              <FaUserHeart className="text-4xl text-brandOrange mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Extreme Patience</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-light">
                Elderly bodies require slower mobilization. Our specialists check pain scales continuously, ensuring a comforting and completely safe stretching experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#070b16] border border-white/5 p-8 rounded-2xl hover:border-brandOrange/20 transition-all group">
              <FaHeart className="text-4xl text-brandOrange mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Reduces Discomfort</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-light">
                Slow, focused physical compression helps release tight joint envelopes in the spine and legs, relieving the constant dull aches of aging.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#070b16] border border-white/5 p-8 rounded-2xl hover:border-brandOrange/20 transition-all group">
              <FaHandsHelp className="text-4xl text-brandOrange mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Supports Daily Balance</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-light">
                Improved ankle and hip flexibility drastically improves senior footing stability, reducing risk of accidental household slips and falls.
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
              alt="Caring senior treatment at home"
              fill
              className="object-cover grayscale brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brandBlack via-transparent to-transparent" />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-montserrat font-bold text-brandOrange uppercase">SAFETY-FIRST PROTOCOLS</span>
            <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-white tracking-tight">
              Providing High-Trust Seniors Care Right In Their Familiar Space
            </h2>
            <p className="text-textSecondary text-sm leading-relaxed font-light">
              For older parents, taking them down flights of stairs, getting into cars, and waiting at clinics is exhausting and physically painful. 
            </p>
            <p className="text-textSecondary text-sm leading-relaxed font-light">
              AAATOAHH keeps everything incredibly simple. Our therapist arrives quietly at their home, setting up a safe workspace in their favorite room. They can remain in total comfort, before, during, and long after the session.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2">
                <FaHome className="text-brandOrange text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-white/90">100% In-Home Safelanding</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-brandOrange text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-white/90">No Hospitalization stress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Founder Story */}
      <FounderStory accentColor="orange" />

      {/* 7. Testimonials */}
      <TestimonialsSection category="parents" accentColor="orange" />

      {/* 8. FAQs */}
      <FAQSection accentColor="orange" />

      {/* 9. Final Call To Action */}
      <section className="py-24 px-4 bg-gradient-to-t from-[#110c08] to-brandBlack text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brandOrange/5 blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-white tracking-tight">
            Give Them The Gift of Effortless Movement.
          </h2>
          <p className="text-textSecondary text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Register for their free home mobility assessment and demo. Let a certified, background-checked professional show them the true meaning of warm recovery.
          </p>
          <div className="pt-4">
            <button
              onClick={() => document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-brandOrange text-white font-poppins font-black text-sm uppercase px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(251,146,60,0.3)] duration-300 transform active:scale-95"
            >
              BOOK FREE HOME DEMO FOR PARENTS
            </button>
          </div>
        </div>
      </section>

      {/* 10. Sticky WhatsApp and Call */}
      <StickyButtons accentColor="orange" demoAnchorId="lead-form-section" />

    </div>
  );
}
