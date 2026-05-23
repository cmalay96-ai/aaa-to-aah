"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  accentColor?: "lime" | "orange";
}

export default function FAQSection({ accentColor = "lime" }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Is this a typical spa or massage parlor service?",
      answer: "Absolutely not. AAA TO AHH.IN is a premium mobile recovery and joint mobility brand. Our sessions are physically focused and scientifically grounded. We combine advanced sports muscle release, passive assisted stretching, and deep pneumatic and percussive recovery techniques to help you recover from stiffness, pain, and physical fatigue. We do not offer basic salon or cosmetic spa treatments.",
    },
    {
      question: "What exactly happens during the FREE 10-Minute Home Demo?",
      answer: "A certified AAA TO AHH.IN recovery specialist will arrive at your doorstep at your chosen time. They will conduct a brief 3-minute mobility and stiffness assessment, followed by a highly focused 10-minute recovery session on your primary concern area (shoulders, legs, lower back, or joints). This gives you a risk-free taste of our premium recovery quality.",
    },
    {
      question: "Do I need to prepare anything or have recovery tools at home?",
      answer: "No. Our mobile recovery therapist brings all necessary elite equipment—including sanitised luxury mats, professional percussive massagers, passive stretching straps, and clean linen. All we need is a small quiet space in your home (about 6x6 feet) where you can lie down comfortably.",
    },
    {
      question: "Who are your therapists/recovery specialists?",
      answer: "All AAA TO AHH.IN recovery specialists are certified professionals with deep training in sports science, physical therapy assisting, or advanced clinical massage therapy. They are background-verified, highly trained in home protocol decorum, and specialized in active-recovery techniques.",
    },
    {
      question: "Is there any obligation to buy after the free demo?",
      answer: "None at all. The 10-minute demo is entirely free and designed to build trust. If you love the experience (and we are confident you will), you can speak to our specialist about our monthly recovery subscription plans or book individual full-length 60-90 minute home recovery sessions.",
    },
  ];

  const accentText = "text-primary";
  const borderHighlight = "border-primary/40";
  const hoverBg = "hover:bg-primary/5";

  return (
    <section className="py-20 px-4 bg-background border-t border-primary/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-montserrat font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/5 text-primary">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-textPrimary mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-primary/20 mx-auto mt-4" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-surface border border-primary/10 rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_4px_15px_-4px_rgba(10,77,60,0.02)] ${isOpen ? borderHighlight : ""}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className={`w-full flex justify-between items-center p-6 text-left transition-colors ${hoverBg}`}
                >
                  <span className="text-textPrimary font-poppins font-bold text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-primary/5 text-xs text-primary ${isOpen ? accentText : ""}`}>
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-primary/10" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-textSecondary text-xs md:text-sm leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
