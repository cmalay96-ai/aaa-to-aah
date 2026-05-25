"use client";

import React from "react";
import Image from "next/image";
import { FaUserTie, FaBrain, FaRegSmileBeam, FaHome, FaClock, FaCheckCircle } from "react-icons/fa";
import LeadForm from "../components/LeadForm";
import StickyButtons from "../components/StickyButtons";
import FounderStory from "../components/FounderStory";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";

export default function NeckHeadacheReliefPage() {
  return (
    <div className="bg-background min-h-screen text-textPrimary font-sans antialiased overflow-x-hidden selection:bg-primary/10 selection:text-primary">
      
      {/* 1. Header / Navigation */}
      <header className="py-6 px-4 border-b border-primary/10 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-montserrat font-black tracking-tighter text-primary">
              AAATOAHH<span className="text-primary/75">.IN</span>
            </span>
          </div>
          <span className="text-xs font-montserrat font-bold bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
            OFFICE WORKER STRETCHING SPECIALISTS
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
              💼 CORPORATE DECOMPRESSION & STRETCHING
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-textPrimary leading-tight tracking-tight">
              9-to-5 Office Strain. <br className="hidden md:inline" />
              <span className="text-primary italic">Neck & Headache Release.</span>
            </h1>
            <p className="text-textSecondary text-base md:text-xl font-medium leading-relaxed max-w-xl">
              Staring at screens for hours tenses up the base of your skull and compresses your cervical spine, triggering severe tension headaches. Experience elite, assisted neck decompressions and shoulder releases right in your living room.
            </p>

            {/* Bullet Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-semibold text-textPrimary">Cervical Spine Decompression</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-semibold text-textPrimary">Relieves Chronic Tension Headaches</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-semibold text-textPrimary">Corrects Slouched Shoulder Posture</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary flex-shrink-0 text-lg" />
                <span className="text-sm font-poppins font-semibold text-textPrimary">Conducted by Certified Experts</span>
              </div>
            </div>

            {/* Offer Highlight Box */}
            <div className="p-5 bg-white/90 border border-primary/10 rounded-2xl flex items-center gap-4 max-w-lg mt-6 shadow-[0_4px_20px_-4px_rgba(10,77,60,0.04)]">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl">
                🎁
              </div>
              <div>
                <h4 className="text-sm font-poppins font-bold text-textPrimary">Free Office Strain Demo</h4>
                <p className="text-xs text-textSecondary mt-0.5 font-medium">Claim your <span className="text-primary font-bold">FREE 10-Minute Home Neck & Headache Release Demo</span>. Dissolve stress instantly.</p>
              </div>
            </div>
          </div>

          {/* Hero Right Lead Form */}
          <div id="lead-form-section" className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[32px] blur-3xl pointer-events-none" />
            <LeadForm 
              painPointDefault="Desk-bound neck stiffness, corporate tension headaches & slouched shoulders" 
              redirectUrl="/thank-you-neck-headache" 
              themeColor="orange" 
              serviceName="Free Neck & Headache Release Demo"
            />
          </div>

        </div>
      </section>

      {/* 3. Lead Magnet Image Showcase */}
      <section className="py-16 px-4 bg-surface border-t border-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xs font-montserrat font-bold text-primary uppercase tracking-wider">OFFICE GOERS RECOVERY</h3>
            <h2 className="text-2xl md:text-4xl font-serif text-textPrimary mt-2">Targeted Neck & Cervical Decompression</h2>
          </div>
          <div className="relative h-[250px] md:h-[450px] w-full rounded-3xl overflow-hidden border border-primary/10 group shadow-md">
            <Image
              src="/neck-headache.png"
              alt="Premium neck & head release session at home"
              fill
              className="object-cover group-hover:scale-105 transition-all duration-700 brightness-95"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
              <div className="max-w-md bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-primary/10 shadow-sm">
                <span className="text-xs font-montserrat font-bold text-primary uppercase">ACTIVE LEAD MAGNET</span>
                <h4 className="text-lg md:text-xl font-poppins font-bold text-textPrimary mt-1">FREE 10-Minute Neck Release Demo</h4>
                <p className="text-xs text-textSecondary mt-1 font-medium">Experience slow, gentle suboccipital mobilization and manual neck stretching that increases blood flow to the brain and dissolves fatigue.</p>
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
              HOW WE REBUILD POSTURE & COMFORT
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-textPrimary mt-4 tracking-tight">
              Science-Backed Neck & Shoulder Mobilization
            </h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-surface border border-primary/10 p-8 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <FaUserTie className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif text-textPrimary mb-3">Counteracts Desk Slouch</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-medium">
                Passively stretches and opens up the pectoral muscles and front neck flexors, shifting your neck back into correct postural alignment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-surface border border-primary/10 p-8 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <FaBrain className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif text-textPrimary mb-3">Dissolves Headache Triggers</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-medium">
                Releases micro-spasms and trigger points in the suboccipital muscles under the skull base, cutting off the source of tension headaches.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-surface border border-primary/10 p-8 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <FaRegSmileBeam className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif text-textPrimary mb-3">Restores Blood Circulation</h3>
              <p className="text-textSecondary text-sm leading-relaxed font-medium">
                Opens up restricted channels, allowing oxygenated blood to flow freely to your brain, instantly clearing mental fog and exhaustion.
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
              alt="Calming neck stretching at home"
              fill
              className="object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-montserrat font-bold text-primary uppercase">ZERO COMMUTE WELLNESS</span>
            <h2 className="text-3xl md:text-4xl font-serif text-textPrimary tracking-tight">
              Melt Tension Without Commuting Friction
            </h2>
            <p className="text-textSecondary text-sm leading-relaxed font-medium">
              Driving home or taking a cab in heavy traffic after a clinical session immediately retenses your neck and upper back.
            </p>
            <p className="text-textSecondary text-sm leading-relaxed font-medium">
              AAATOAHH keeps you fully relaxed. Our certified recovery specialist visits your home, conducts a highly targeted evaluation, and releases your neck directly on your couch. The moment the session ends, you can stay exactly where you are and rest.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2">
                <FaHome className="text-primary text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-textPrimary">100% Home Doorstep Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-primary text-lg" />
                <span className="text-xs font-poppins font-bold uppercase text-textPrimary">Flexible Evening Hours</span>
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
            Stop Letting Desk Posture Restrict Your Life.
          </h2>
          <p className="text-textSecondary text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Register for your free 10-minute home neck release demonstration. Let a certified specialist clear your tension and headaches in minutes.
          </p>
          <div className="pt-4">
            <button
              onClick={() => document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary text-white font-poppins font-black text-sm uppercase px-8 py-4 rounded-xl hover:bg-[#07362a] transition-all shadow-[0_10px_25px_-5px_rgba(10,77,60,0.3)] duration-300 transform active:scale-95"
            >
              BOOK YOUR FREE NECK RELEASE DEMO NOW
            </button>
          </div>
        </div>
      </section>

      {/* 10. Sticky WhatsApp and Call */}
      <StickyButtons accentColor="orange" demoAnchorId="lead-form-section" />

    </div>
  );
}
