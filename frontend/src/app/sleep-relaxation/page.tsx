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
            DEEP NERVOUS SYSTEM RECOVERY
          </span>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-12 pb-24 px-4 md:py-32 bg-sea-radial overflow-hidden">
        {/* Soft background glows */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="md:col-span-7 space-y-6 text-left">
            <span className="text-xs font-montserrat font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
              💤 STRESS & NERVOUS SYSTEM RELEASE
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-textPrimary leading-tight tracking-tight">
              Stress Is Staying <br className="hidden md:inline" />
              <span className="text-primary italic">In Your Body.</span>
            </h1>
            <p className="text-textSecondary text-base md:text-xl font-medium leading-relaxed max-w-xl">
              Your mind is tired. Your body is too. Stress physically locks in your neck, shoulders, and lower back, disrupting your sleep cycle. Experience deep, mobile-first sensory relaxation and muscular decompression in the comfort of your home.
            </p>

            {/* Bullet Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-semibold text-textPrimary">Calms Over-Active Nervous System</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-semibold text-textPrimary">Melts Neck & Shoulder Tension</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-semibold text-textPrimary">Improves Deep Sleep (REM) Quality</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-semibold text-textPrimary">Includes Breathing Synchrony stretch</span>
              </div>
            </div>

            {/* Offer Highlight Box */}
            <div className="p-5 bg-white/90 border border-primary/10 rounded-2xl flex items-center gap-4 max-w-lg mt-6 shadow-[0_4px_20px_-4px_rgba(10,77,60,0.04)]">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl">
                💤
              </div>
              <div>
                <h4 className="text-sm font-poppins font-bold text-textPrimary">Free Deep Sleep Demo</h4>
                <p className="text-xs text-textSecondary mt-0.5 font-medium">Claim your <span className="text-primary font-bold">FREE 10-Minute Home Sleep Recovery Demo</span>. Melt away mental fatigue instantly.</p>
              </div>
            </div>
          </div>

          {/* Hero Right Lead Form */}
          <div id="lead-form-section" className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[32px] blur-3xl pointer-events-none" />
            <LeadForm 
              painPointDefault="Stress, mental exhaustion, physical tension & poor sleep quality" 
              redirectUrl="/thank-you-sleep-relaxation" 
              themeColor="orange" 
              serviceName="Free Sleep Recovery Demo"
            />
          </div>

        </div>
      </section>

      {/* 3. Lead Magnet Image Showcase */}
      <section className="py-16 px-4 bg-surface border-t border-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xs font-montserrat font-bold text-primary uppercase tracking-wider">RESTFUL SLEEP</h3>
            <h2 className="text-2xl md:text-4xl font-serif text-textPrimary mt-2">Deep Nervous System Relaxation</h2>
          </div>
          <div className="relative h-[250px] md:h-[450px] w-full rounded-3xl overflow-hidden border border-primary/10 group shadow-md">
            <Image
              src="/sleep-relaxation.png"
              alt="Premium sleep relaxation session at home"
              fill
              className="object-cover group-hover:scale-105 transition-all duration-700 brightness-95"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
              <div className="max-w-md bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-primary/10 shadow-sm">
                <span className="text-xs font-montserrat font-bold text-primary uppercase">ACTIVE LEAD MAGNET</span>
                <h4 className="text-lg md:text-xl font-poppins font-bold text-textPrimary mt-1">FREE 10-Minute Sleep Recovery Demo</h4>
                <p className="text-xs text-textSecondary mt-1 font-medium">Experience slow, rhythmic muscular decompression and diaphragmatic breathing integration that lowers cortisol levels instantly.</p>
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
              HOW WE RECHARGE YOUR NERVOUS SYSTEM
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-textPrimary mt-4 tracking-tight">
              Calm Your Over-Active Mind
            </h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-surface border border-primary/10 p-8 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <FaCloudMoon className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif text-textPrimary mb-3">Improves Deep Sleep</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-medium">
                Relaxing physical triggers signals the parasympathetic nervous system, helping you transition smoothly into deep, restorative REM sleep cycles.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-surface border border-primary/10 p-8 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <FaBrain className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif text-textPrimary mb-3">Lowers Adrenal Cortisol</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-medium">
                Our rhythmic mobilization and cranial-cervical releases help shut off the body's 'fight or flight' alert state, easing mental anxiety.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-surface border border-primary/10 p-8 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <FaSpa className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif text-textPrimary mb-3">Unlocks Neck & Back Locks</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-medium">
                Prolonged desk posture locks up the base of the skull and upper back. We carefully decompress these areas to restore cerebral blood flow.
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
              alt="Calming stress release at home"
              fill
              className="object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-montserrat font-bold text-primary uppercase">SENSORY COMFORT SERVICE</span>
            <h2 className="text-3xl md:text-4xl font-serif text-textPrimary tracking-tight">
              Melt Into Total Calm Without Commuting Friction
            </h2>
            <p className="text-textSecondary text-sm leading-relaxed font-medium">
              Driving home after a deeply relaxing session completely ruins the physiological reset.
            </p>
            <p className="text-textSecondary text-sm leading-relaxed font-medium">
              AAATOAHH ensures the calming effects remain locked in. Our certified sensory therapist creates a highly tranquil environment inside your bedroom or living room. The moment the session finishes, you can drift straight to sleep in your own bed.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2">
                <FaHome className="text-primary text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-textPrimary">Ultimate Home Sanctuary</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-primary text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-textPrimary">Sleep Instantly After Session</span>
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
      <section className="py-24 px-4 bg-sea-radial text-center relative overflow-hidden border-t border-primary/10">
        <div className="absolute inset-0 bg-primary/5 blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif text-textPrimary tracking-tight">
            Calm Your Mind. Relax Your Body.
          </h2>
          <p className="text-textSecondary text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Register for your free 10-minute home sleep relaxation demonstration. Let an expert therapist calm your hyper-active nervous system in minutes.
          </p>
          <div className="pt-4">
            <button
              onClick={() => document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary text-white font-poppins font-black text-sm uppercase px-8 py-4 rounded-xl hover:bg-[#07362a] transition-all shadow-[0_10px_25px_-5px_rgba(10,77,60,0.3)] duration-300 transform active:scale-95"
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
