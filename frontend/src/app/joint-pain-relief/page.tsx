"use client";

import React from "react";
import Image from "next/image";
import { FaUserShield, FaChevronRight, FaCheckCircle, FaHome, FaClock, FaMedkit } from "react-icons/fa";
import LeadForm from "../components/LeadForm";
import StickyButtons from "../components/StickyButtons";
import FounderStory from "../components/FounderStory";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";

export default function JointPainReliefPage() {
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
            JOINT MOBILITY SPECIALISTS
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
              🦴 STIFFNESS & PAIN RELIEF
            </span>
            <h1 className="text-4xl md:text-6xl font-poppins font-extrabold text-white leading-tight tracking-tight">
              Everyday Movement <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandOrange via-white to-white">
                Shouldn’t Feel Painful.
              </span>
            </h1>
            <p className="text-textSecondary text-base md:text-xl font-light leading-relaxed max-w-xl">
              Stiff shoulders, tight hips, and achy knees shouldn't limit your physical freedom. Experience professional, in-home passive stretching and targeted joint decompression that restores effortless, fluid movement.
            </p>

            {/* Bullet Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandOrange flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Decompress Tight Hip & Shoulder Joints</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandOrange flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Assisted Stretching For Fluid Motion</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandOrange flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Eases Age-Related Stiffness</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandOrange flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Therapy Led by Certified Professionals</span>
              </div>
            </div>

            {/* Offer Highlight Box */}
            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 max-w-lg mt-6">
              <div className="w-12 h-12 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange text-xl">
                🎁
              </div>
              <div>
                <h4 className="text-sm font-poppins font-bold text-white">Free Joint Pain Relief Demo</h4>
                <p className="text-xs text-textSecondary mt-0.5">Book now and receive a <span className="text-brandOrange font-semibold">FREE 10-Minute Home Mobility Session</span> tailored specifically to your joint stiffness.</p>
              </div>
            </div>
          </div>

          {/* Hero Right Lead Form */}
          <div id="lead-form-section" className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-brandOrange/10 rounded-[32px] blur-3xl pointer-events-none" />
            <LeadForm 
              painPointDefault="Joint stiffness in shoulders, hips, knees or lower back" 
              redirectUrl="/thank-you-joint-pain" 
              themeColor="orange" 
            />
          </div>

        </div>
      </section>

      {/* 3. Lead Magnet Image Showcase */}
      <section className="py-16 px-4 bg-brandBlack">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xs font-montserrat font-bold text-brandOrange uppercase tracking-wider">RESTORE FLUIDITY</h3>
            <h2 className="text-2xl md:text-4xl font-poppins font-extrabold text-white mt-2">Premium Joint Mobility Sessions</h2>
          </div>
          <div className="relative h-[250px] md:h-[450px] w-full rounded-3xl overflow-hidden border border-white/10 group">
            <Image
              src="/joint-pain.png"
              alt="Premium Joint assisted stretching session at home"
              fill
              className="object-cover group-hover:scale-105 transition-all duration-700 brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
              <div className="max-w-md">
                <span className="text-xs font-montserrat font-bold text-brandOrange uppercase">ACTIVE LEAD MAGNET</span>
                <h4 className="text-lg md:text-xl font-poppins font-bold text-white mt-1">FREE 10-Minute Pain Relief Demo</h4>
                <p className="text-xs text-textSecondary mt-1">Experience deep, warm joint decompression and passive stretching techniques focused specifically on restoring knee, hip, or shoulder range-of-motion.</p>
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
              HOW WE REBUILD MOBILITY
            </span>
            <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-white mt-4 tracking-tight">
              Gentle Assisted Stretching
            </h2>
            <div className="w-16 h-1 bg-brandOrange mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#070b16] border border-white/5 p-8 rounded-2xl hover:border-brandOrange/20 transition-all group">
              <FaChevronRight className="text-4xl text-brandOrange mb-6 group-hover:translate-x-2 transition-transform" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Assist Joint Lubrication</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-light">
                Gentle passive joint movements stimulate synovial fluid production, which naturally lubricates stiff cartilage and reduces friction.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#070b16] border border-white/5 p-8 rounded-2xl hover:border-brandOrange/20 transition-all group">
              <FaMedkit className="text-4xl text-brandOrange mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Releases Fascial Glues</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-light">
                Age or inactivity causes muscular fascia to bind and freeze joints. Our targeted fascial scraping and release techniques unlock these restricted fibers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#070b16] border border-white/5 p-8 rounded-2xl hover:border-brandOrange/20 transition-all group">
              <FaUserShield className="text-4xl text-brandOrange mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Increases Range Of Motion</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-light">
                Passive stretching carefully pushes past voluntary muscle guarding, helping your limbs safely adapt to greater degrees of reach and bend.
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
              alt="Elderly shoulder stretching at home"
              fill
              className="object-cover grayscale brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brandBlack via-transparent to-transparent" />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-montserrat font-bold text-brandOrange uppercase">CLINICALLY SENSITIVE WORKFLOW</span>
            <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-white tracking-tight">
              Gentle Mobilization Performed Safely in Your Space
            </h2>
            <p className="text-textSecondary text-sm leading-relaxed font-light">
              Joint pain can make traveling outside highly draining. Driving back from a clinic in heavy traffic often tenses muscles right back up.
            </p>
            <p className="text-textSecondary text-sm leading-relaxed font-light">
              AAATOAHH eliminates travel physical exhaustion. Our certified mobility therapist visits your home, conducts a highly patient evaluation, and executes gentle, assisted joint work directly on your couch or bed. 
            </p>
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2">
                <FaHome className="text-brandOrange text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-white/90">In-Home Comfort & Safety</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-brandOrange text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-white/90">Zero Travel Strain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Founder Story */}
      <FounderStory accentColor="orange" />

      {/* 7. Testimonials */}
      <TestimonialsSection category="joint" accentColor="orange" />

      {/* 8. FAQs */}
      <FAQSection accentColor="orange" />

      {/* 9. Final Call To Action */}
      <section className="py-24 px-4 bg-gradient-to-t from-[#110c08] to-brandBlack text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brandOrange/5 blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-white tracking-tight">
            Regain Ease of Movement Today.
          </h2>
          <p className="text-textSecondary text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Register for your free, personalized home joint mobility demonstration. Let an expert therapist bring warmth and release to your stiff joints.
          </p>
          <div className="pt-4">
            <button
              onClick={() => document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-brandOrange text-white font-poppins font-black text-sm uppercase px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(251,146,60,0.3)] duration-300 transform active:scale-95"
            >
              BOOK YOUR FREE JOINT DEMO NOW
            </button>
          </div>
        </div>
      </section>

      {/* 10. Sticky WhatsApp and Call */}
      <StickyButtons accentColor="orange" demoAnchorId="lead-form-section" />

    </div>
  );
}
