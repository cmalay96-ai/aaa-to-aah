"use client";

import React from "react";
import { FaStar, FaQuoteLeft, FaCheck } from "react-icons/fa";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  highlightText?: string; // e.g. "Recovered in 2 sessions"
}

interface TestimonialsSectionProps {
  category: "gym" | "leg" | "joint" | "parents" | "sleep";
  accentColor?: "lime" | "orange";
}

export default function TestimonialsSection({ category, accentColor = "lime" }: TestimonialsSectionProps) {
  const accentText = "text-primary";
  const borderHighlight = "border-primary/10 hover:border-primary/30";
  const badgeBg = "bg-primary/10 text-primary";

  // Testimonials categorized for specific funnels
  const testimonialsMap: Record<string, Testimonial[]> = {
    gym: [
      {
        name: "Vikram Malhotra",
        role: "Competitive Powerlifter",
        text: "I was struggling with heavy muscle fatigue and soreness that held back my heavy squats. The 10-minute home demo alone convinced me. AAATOAHH's recovery sessions are now a permanent part of my weekly regime.",
        rating: 5,
        highlightText: "Reduced soreness by 80%",
      },
      {
        name: "Rohan Sen",
        role: "Marathon Runner",
        text: "Direct deep-tissue release right in my living room after a long run is a complete game changer. I don't have to drive home in a stiff state anymore.",
        rating: 5,
        highlightText: "Shaved 2 days off recovery",
      },
    ],
    leg: [
      {
        name: "Anjali Mehta",
        role: "Corporate Lead (On feet all day)",
        text: "My legs felt incredibly heavy and swollen after standing for hours at work. The targeted leg relaxation and mobility support completely revived my lower body. Walking feels light again!",
        rating: 5,
        highlightText: "Total leg stiffness relief",
      },
      {
        name: "Devendra K.",
        role: "Crossfit Athlete",
        text: "Leg recovery sessions helped release my calves and hamstrings. Highly professional team who really understand lower limb kinesiology.",
        rating: 5,
        highlightText: "Incredible calf mobility",
      },
    ],
    joint: [
      {
        name: "Suresh Chawla",
        role: "Retired Architect (Age 62)",
        text: "Years of joint stiffness made mornings highly uncomfortable. Since adopting the home mobility support of AAATOAHH, I can bend and climb stairs with virtually zero resistance.",
        rating: 5,
        highlightText: "Pain-free morning mobility",
      },
      {
        name: "Preeti Sharma",
        role: "Yoga Instructor",
        text: "I had deep shoulder and hip joint tightness. Their joint-assisted stretching and muscle release are highly therapeutic. Highly recommended!",
        rating: 5,
        highlightText: "Restored joint flexibility",
      },
    ],
    parents: [
      {
        name: "Karan Johar",
        role: "Son (Booked for his father, 68)",
        text: "Seeing my father struggle to get up from his chair was heartbreaking. I booked the free demo for parents. The care and patience the therapist showed was outstanding. My dad feels much more mobile now.",
        rating: 5,
        highlightText: "Father moves comfortably now",
      },
      {
        name: "Sneha Nair",
        role: "Daughter (Booked for mother, 64)",
        text: "My mother suffered from age-related knee and lower back stiffness. Having a professional come home relieves so much of our burden. The relief has improved her quality of life tremendously.",
        rating: 5,
        highlightText: "Mother walks without pain",
      },
    ],
    sleep: [
      {
        name: "Meera Nair",
        role: "Creative Director (High Stress)",
        text: "Stress was physically locked in my shoulders and neck. I couldn't get a solid night's sleep. The deep relaxation session helped my nervous system calm down completely. I slept like a baby that night.",
        rating: 5,
        highlightText: "Best sleep in 6 months",
      },
      {
        name: "Aditya Roy",
        role: "Software Architect",
        text: "Mental fatigue is real, but the physical tension is what ruins sleep. The breathing integration and full-body relaxation session melted away all physical stress. Truly spectacular.",
        rating: 5,
        highlightText: "Deep mental & physical calm",
      },
    ],
  };

  const list = testimonialsMap[category] || testimonialsMap.gym;

  return (
    <section className="py-20 px-4 bg-background border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-montserrat font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/5 text-primary">
            Real User Experiences
          </span>
          <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-textPrimary mt-4 tracking-tight">
            Loved By Active Recoverers
          </h2>
          <p className="text-textSecondary text-xs mt-3 max-w-md mx-auto font-medium">
            See how our mobile home recovery system has changed lives, restored mobility, and accelerated recovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {list.map((item, idx) => (
            <div
              key={idx}
              className={`bg-surface border rounded-3xl p-8 transition-all duration-300 relative group overflow-hidden shadow-[0_4px_20px_-4px_rgba(10,77,60,0.05)] ${borderHighlight}`}
            >
              {/* Verified Lead Tick */}
              <div className="absolute top-8 right-8 flex items-center gap-1.5 bg-green-500/10 text-green-700 px-3 py-1 rounded-full text-xs font-montserrat font-semibold">
                <FaCheck className="text-[10px]" /> Verified Lead
              </div>

              <FaQuoteLeft className="text-4xl text-primary/5 mb-6" />

              <div className="flex text-yellow-500 mb-4 gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-textPrimary text-base font-semibold leading-relaxed mb-6 font-poppins">
                "{item.text}"
              </p>

              <div className="flex justify-between items-center mt-auto pt-6 border-t border-primary/10">
                <div>
                  <h4 className="text-textPrimary font-poppins font-bold">{item.name}</h4>
                  <p className="text-textSecondary text-xs font-montserrat mt-0.5 font-medium">{item.role}</p>
                </div>
                {item.highlightText && (
                  <span className={`text-xs font-montserrat font-semibold px-3 py-1 rounded-full ${badgeBg}`}>
                    {item.highlightText}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
