"use client";

import React from "react";
import Image from "next/image";
import { FaCloudMoon, FaSpa, FaBrain, FaHome, FaClock, FaCheckCircle } from "react-icons/fa";
import LeadForm from "../components/LeadForm";
import StickyButtons from "../components/StickyButtons";
import FounderStory from "../components/FounderStory";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";

export default function SleepRelaxationPage() {
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
            DEEP NERVOUS SYSTEM RECOVERY
          </span>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-12 pb-24 px-4 md:py-32 bg-gradient-to-b from-[#090b16] to-brandBlack overflow-hidden">
        {/* Soft navy background glow */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brandNavy/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-brandOrange/5 blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="md:col-span-7 space-y-6 text-left">
            <span className="text-xs font-montserrat font-extrabold uppercase tracking-widest text-brandOrange bg-brandOrange/10 px-3.5 py-1.5 rounded-full">
              💤 STRESS & NERVOUS SYSTEM RELEASE
            </span>
            <h1 className="text-4xl md:text-6xl font-poppins font-extrabold text-white leading-tight tracking-tight">
              Stress Is Staying <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandOrange via-white to-white">
                In Your Body.
              </span>
            </h1>
            <p className="text-textSecondary text-base md:text-xl font-light leading-relaxed max-w-xl">
              Your mind is tired. Your body is too. Stress physically locks in your neck, shoulders, and lower back, disrupting your sleep cycle. Experience deep, mobile-first sensory relaxation and muscular decompression in the comfort of your home.
            </p>

            {/* Bullet Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandOrange flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Calms Over-Active Nervous System</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandOrange flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Melts Neck & Shoulder Tension</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandOrange flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Improves Deep Sleep (REM) Quality</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-brandOrange flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-medium text-white/90">Includes Breathing Synchrony stretch</span>
              </div>
            </div>

            {/* Offer Highlight Box */}
            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 max-w-lg mt-6">
              <div className="w-12 h-12 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange text-xl">
                💤
              </div>
              <div>
                <h4 className="text-sm font-poppins font-bold text-white">Free Deep Sleep Demo</h4>
                <p className="text-xs text-textSecondary mt-0.5">Claim your <span className="text-brandOrange font-semibold">FREE 10-Minute Home Sleep Recovery Demo</span>. Melt away mental fatigue instantly.</p>
              </div>
            </div>
          </div>

          {/* Hero Right Lead Form */}
          <div id="lead-form-section" className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-brandOrange/10 rounded-[32px] blur-3xl pointer-events-none" />
            <LeadForm 
              painPointDefault="Stress, mental exhaustion, physical tension & poor sleep quality" 
              redirectUrl="/thank-you-sleep-relaxation" 
              themeColor="orange" 
            />
          </div>

        </div>
      </section>

      {/* 3. Lead Magnet Image Showcase */}
      <section className="py-16 px-4 bg-brandBlack">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xs font-montserrat font-bold text-brandOrange uppercase tracking-wider">RESTFUL SLEEP</h3>
            <h2 className="text-2xl md:text-4xl font-poppins font-extrabold text-white mt-2">Deep Nervous System Relaxation</h2>
          </div>
          <div className="relative h-[250px] md:h-[450px] w-full rounded-3xl overflow-hidden border border-white/10 group">
            <Image
              src="/sleep-relaxation.png"
              alt="Premium sleep relaxation session at home"
              fill
              className="object-cover group-hover:scale-105 transition-all duration-700 brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
              <div className="max-w-md">
                <span className="text-xs font-montserrat font-bold text-brandOrange uppercase">ACTIVE LEAD MAGNET</span>
                <h4 className="text-lg md:text-xl font-poppins font-bold text-white mt-1">FREE 10-Minute Sleep Recovery Demo</h4>
                <p className="text-xs text-textSecondary mt-1">Experience slow, rhythmic muscular decompression and diaphragmatic breathing integration that lowers cortisol levels instantly.</p>
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
              HOW WE RECHARGE YOUR NERVOUS SYSTEM
            </span>
            <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-white mt-4 tracking-tight">
              Calm Your Over-Active Mind
            </h2>
            <div className="w-16 h-1 bg-brandOrange mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#070b16] border border-white/5 p-8 rounded-2xl hover:border-brandOrange/20 transition-all group">
              <FaCloudMoon className="text-4xl text-brandOrange mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Improves Deep Sleep</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-light">
                Relaxing physical triggers signals the parasympathetic nervous system, helping you transition smoothly into deep, restorative REM sleep cycles.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#070b16] border border-white/5 p-8 rounded-2xl hover:border-brandOrange/20 transition-all group">
              <FaBrain className="text-4xl text-brandOrange mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Lowers Adrenal Cortisol</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-light">
                Our rhythmic mobilization and cranial-cervical releases help shut off the body's 'fight or flight' alert state, easing mental anxiety.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#070b16] border border-white/5 p-8 rounded-2xl hover:border-brandOrange/20 transition-all group">
              <FaSpa className="text-4xl text-brandOrange mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Unlocks Neck & Back Locks</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-light">
                Prolonged desk posture locks up the base of the skull and upper back. We carefully decompress these areas to restore cerebral blood flow.
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
              alt="Calming stress release at home"
              fill
              className="object-cover grayscale brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brandBlack via-transparent to-transparent" />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-montserrat font-bold text-brandOrange uppercase">SENSORY COMFORT SERVICE</span>
            <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-white tracking-tight">
              Melt Into Total Calm Without Commuting Friction
            </h2>
            <p className="text-textSecondary text-sm leading-relaxed font-light">
              Driving home after a deeply relaxing session completely ruins the physiological reset.
            </p>
            <p className="text-textSecondary text-sm leading-relaxed font-light">
              AAATOAHH ensures the calming effects remain locked in. Our certified sensory therapist creates a highly tranquil environment inside your bedroom or living room. The moment the session finishes, you can drift straight to sleep in your own bed.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2">
                <FaHome className="text-brandOrange text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-white/90">Ultimate Home Sanctuary</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-brandOrange text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-white/90">Sleep Instantly After Session</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Founder Story */}
      <FounderStory accentColor="orange" />

      {/* 7. Testimonials */}
      <TestimonialsSection category="sleep" accentColor="orange" />

      {/* 8. FAQs */}
      <FAQSection accentColor="orange" />

      {/* 9. Final Call To Action */}
      <section className="py-24 px-4 bg-gradient-to-t from-[#090b16] to-brandBlack text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brandOrange/5 blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-white tracking-tight">
            Calm Your Mind. Relax Your Body.
          </h2>
          <p className="text-textSecondary text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Register for your free 10-minute home sleep relaxation demonstration. Let an expert therapist calm your hyper-active nervous system in minutes.
          </p>
          <div className="pt-4">
            <button
              onClick={() => document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-brandOrange text-white font-poppins font-black text-sm uppercase px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(251,146,60,0.3)] duration-300 transform active:scale-95"
            >
              BOOK YOUR FREE RELAXATION DEMO NOW
            </button>
          </div>
        </div>
      </section>

      {/* 10. Sticky WhatsApp and Call */}
      <StickyButtons accentColor="orange" demoAnchorId="lead-form-section" />

    </div>
  );
}
