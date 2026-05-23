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
    <div className="bg-background min-h-screen text-textPrimary font-sans antialiased overflow-x-hidden selection:bg-primary/10 selection:text-primary">
      
      {/* 1. Header */}
      <header className="py-6 px-4 border-b border-primary/10 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-montserrat font-black tracking-tighter text-primary">
              AAATOAHH<span className="text-primary/75">.IN</span>
            </span>
          </div>
          <span className="text-xs font-montserrat font-bold bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
            JOINT MOBILITY SPECIALISTS
          </span>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-12 pb-24 px-4 md:py-32 bg-sea-radial overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="md:col-span-7 space-y-6 text-left">
            <span className="text-xs font-montserrat font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
              🦴 STIFFNESS & PAIN RELIEF
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-textPrimary leading-tight tracking-tight">
              Everyday Movement <br className="hidden md:inline" />
              <span className="text-primary italic">Shouldn’t Feel Painful.</span>
            </h1>
            <p className="text-textSecondary text-base md:text-xl font-medium leading-relaxed max-w-xl">
              Stiff shoulders, tight hips, and achy knees shouldn't limit your physical freedom. Experience professional, in-home passive stretching and targeted joint decompression that restores effortless, fluid movement.
            </p>

            {/* Bullet Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-semibold text-textPrimary">Decompress Tight Hip & Shoulder Joints</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-semibold text-textPrimary">Assisted Stretching For Fluid Motion</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-semibold text-textPrimary">Eases Age-Related Stiffness</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-semibold text-textPrimary">Therapy Led by Certified Professionals</span>
              </div>
            </div>

            {/* Offer Highlight Box */}
            <div className="p-5 bg-white/90 border border-primary/10 rounded-2xl flex items-center gap-4 max-w-lg mt-6 shadow-[0_4px_20px_-4px_rgba(10,77,60,0.04)]">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl">
                🎁
              </div>
              <div>
                <h4 className="text-sm font-poppins font-bold text-textPrimary">Free Joint Pain Relief Demo</h4>
                <p className="text-xs text-textSecondary mt-0.5 font-medium">Book now and receive a <span className="text-primary font-bold">FREE 10-Minute Home Mobility Session</span> tailored specifically to your joint stiffness.</p>
              </div>
            </div>
          </div>

          {/* Hero Right Lead Form */}
          <div id="lead-form-section" className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[32px] blur-3xl pointer-events-none" />
            <LeadForm 
              painPointDefault="Joint stiffness in shoulders, hips, knees or lower back" 
              redirectUrl="/thank-you-joint-pain" 
              themeColor="orange" 
              serviceName="Free Joint Pain Relief Demo"
            />
          </div>

        </div>
      </section>

      {/* 3. Lead Magnet Image Showcase */}
      <section className="py-16 px-4 bg-surface border-t border-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xs font-montserrat font-bold text-primary uppercase tracking-wider">RESTORE FLUIDITY</h3>
            <h2 className="text-2xl md:text-4xl font-serif text-textPrimary mt-2">Premium Joint Mobility Sessions</h2>
          </div>
          <div className="relative h-[250px] md:h-[450px] w-full rounded-3xl overflow-hidden border border-primary/10 group shadow-md">
            <Image
              src="/joint-pain.png"
              alt="Premium Joint assisted stretching session at home"
              fill
              className="object-cover group-hover:scale-105 transition-all duration-700 brightness-95"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
              <div className="max-w-md bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-primary/10 shadow-sm">
                <span className="text-xs font-montserrat font-bold text-primary uppercase">ACTIVE LEAD MAGNET</span>
                <h4 className="text-lg md:text-xl font-poppins font-bold text-textPrimary mt-1">FREE 10-Minute Pain Relief Demo</h4>
                <p className="text-xs text-textSecondary mt-1 font-medium">Experience deep, warm joint decompression and passive stretching techniques focused specifically on restoring knee, hip, or shoulder range-of-motion.</p>
              </div>
              <button 
                onClick={() => document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary text-white font-poppins font-bold text-xs uppercase px-6 py-4 rounded-xl hover:bg-[#07362a] transition-all w-fit shadow-[0_4px_15px_rgba(10,77,60,0.3)]"
              >
                CLAIM FREE DEMO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits Explanation */}
      <section className="py-20 px-4 bg-background border-t border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-montserrat font-bold uppercase tracking-widest text-primary">
              HOW WE REBUILD MOBILITY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-textPrimary mt-4 tracking-tight">
              Gentle Assisted Stretching
            </h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-surface border border-primary/10 p-8 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <FaChevronRight className="text-4xl text-primary mb-6 group-hover:translate-x-2 transition-transform" />
              <h3 className="text-xl font-serif text-textPrimary mb-3">Assist Joint Lubrication</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-medium">
                Gentle passive joint movements stimulate synovial fluid production, which naturally lubricates stiff cartilage and reduces friction.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-surface border border-primary/10 p-8 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <FaMedkit className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif text-textPrimary mb-3">Releases Fascial Glues</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-medium">
                Age or inactivity causes muscular fascia to bind and freeze joints. Our targeted fascial scraping and release techniques unlock these restricted fibers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-surface border border-primary/10 p-8 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <FaUserShield className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif text-textPrimary mb-3">Increases Range Of Motion</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-medium">
                Passive stretching carefully pushes past voluntary muscle guarding, helping your limbs safely adapt to greater degrees of reach and bend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Home Service Highlights */}
      <section className="py-20 px-4 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-primary/10 shadow-sm">
            <Image
              src="/hero-image-2.jpeg"
              alt="Elderly shoulder stretching at home"
              fill
              className="object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-montserrat font-bold text-primary uppercase">CLINICALLY SENSITIVE WORKFLOW</span>
            <h2 className="text-3xl md:text-4xl font-serif text-textPrimary tracking-tight">
              Gentle Mobilization Performed Safely in Your Space
            </h2>
            <p className="text-textSecondary text-sm leading-relaxed font-medium">
              Joint pain can make traveling outside highly draining. Driving back from a clinic in heavy traffic often tenses muscles right back up.
            </p>
            <p className="text-textSecondary text-sm leading-relaxed font-medium">
              AAATOAHH eliminates travel physical exhaustion. Our certified mobility therapist visits your home, conducts a highly patient evaluation, and executes gentle, assisted joint work directly on your couch or bed. 
            </p>
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2">
                <FaHome className="text-primary text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-textPrimary">In-Home Comfort & Safety</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-primary text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-textPrimary">Zero Travel Strain</span>
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
      <section className="py-24 px-4 bg-sea-radial text-center relative overflow-hidden border-t border-primary/10">
        <div className="absolute inset-0 bg-primary/5 blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif text-textPrimary tracking-tight">
            Regain Ease of Movement Today.
          </h2>
          <p className="text-textSecondary text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Register for your free, personalized home joint mobility demonstration. Let an expert therapist bring warmth and release to your stiff joints.
          </p>
          <div className="pt-4">
            <button
              onClick={() => document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary text-white font-poppins font-black text-sm uppercase px-8 py-4 rounded-xl hover:bg-[#07362a] transition-all shadow-[0_10px_25px_-5px_rgba(10,77,60,0.3)] duration-300 transform active:scale-95"
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
