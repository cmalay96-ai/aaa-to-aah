"use client";

import React from "react";
import Image from "next/image";

interface FounderStoryProps {
  accentColor?: "lime" | "orange";
}

export default function FounderStory({ accentColor = "lime" }: FounderStoryProps) {
  const accentText = accentColor === "lime" ? "text-brandLime" : "text-brandOrange";
  const borderHighlight = accentColor === "lime" ? "border-brandLime/20" : "border-brandOrange/20";
  const bgGradient = accentColor === "lime" 
    ? "from-brandLime/5 via-transparent to-transparent" 
    : "from-brandOrange/5 via-transparent to-transparent";

  return (
    <section className={`py-20 px-4 bg-gradient-to-b ${bgGradient} relative overflow-hidden`}>
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-brandNavy blur-[120px] opacity-30 -z-10" />

        <div className="text-center mb-12">
          <span className={`text-xs font-montserrat font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 ${accentText}`}>
            The Story Behind AAATOAHH
          </span>
          <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-white mt-4 tracking-tight">
            Why We Started
          </h2>
          <div className="w-16 h-1 bg-white/10 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          
          {/* Founder Bio Details */}
          <div className="md:col-span-2 text-center md:text-left space-y-4">
            <div className={`relative w-44 h-44 mx-auto md:mx-0 rounded-3xl overflow-hidden border-2 p-1.5 ${borderHighlight}`}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-brandNavy">
                {/* Visual rendering of a professional placeholder or generated team photo */}
                <Image
                  src="/hero-image-2.jpeg"
                  alt="Founder of AAATOAHH"
                  fill
                  sizes="(max-width: 768px) 176px, 176px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-white">Abhishek Dev</h3>
              <p className="text-xs font-montserrat text-textSecondary uppercase tracking-wider">FOUNDER, AAATOAHH.IN</p>
            </div>
          </div>

          {/* Emotional Message */}
          <div className="md:col-span-3 space-y-6 text-textSecondary leading-relaxed text-sm md:text-base font-light">
            <p>
              "Every day, millions of us push our bodies to the limit. Whether it's training hard at the gym, sitting at a desk for 10 hours, or dealing with the natural stiffness that comes with age. But here's the truth: <strong className="text-white">our modern lifestyle is hyper-active, yet our recovery is completely ignored.</strong>"
            </p>
            <p>
              "We noticed that people were either letting stiffness build up until it became chronic pain, or wasting hours driving to clinical centers and massage clinics that felt impersonal, expensive, and stressful."
            </p>
            <p>
              "That is why we created <span className={`font-semibold ${accentText}`}>AAATOAHH</span>. We designed a premium system that brings elite, specialized recovery and joint mobility support directly to the comfort of your home. No travel, no clinical stress—just absolute release, cellular recovery, and the physical freedom to move effortlessly."
            </p>
            <div className="pt-2">
              <span className={`text-xl font-serif italic text-white/95 block`}>
                "Your body deserves more than just a quick rest. It deserves professional recovery."
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
