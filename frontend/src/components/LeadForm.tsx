"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";

interface LeadFormProps {
  painPointDefault: string;
  redirectUrl: string;
  themeColor: "lime" | "orange";
}

export default function LeadForm({ painPointDefault, redirectUrl, themeColor }: LeadFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    problem: painPointDefault,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API submission
    setTimeout(() => {
      // Save lead to local storage for display or verification if needed
      const existingLeads = JSON.parse(localStorage.getItem("leads") || "[]");
      existingLeads.push({
        ...formData,
        id: Date.now(),
        date: new Date().toISOString(),
      });
      localStorage.setItem("leads", JSON.stringify(existingLeads));

      setLoading(false);
      setSuccess(true);

      // Redirect after a short delay to show success animation
      setTimeout(() => {
        router.push(redirectUrl);
      }, 800);
    }, 1200);
  };

  const accentColor = themeColor === "lime" ? "text-brandLime border-brandLime/30 focus:border-brandLime" : "text-brandOrange border-brandOrange/30 focus:border-brandOrange";
  const btnColor = themeColor === "lime" 
    ? "bg-brandLime text-black hover:bg-white hover:text-black shadow-[0_0_20px_rgba(163,230,53,0.4)]" 
    : "bg-brandOrange text-white hover:bg-white hover:text-black shadow-[0_0_20px_rgba(251,146,60,0.4)]";
  const focusRing = themeColor === "lime" ? "focus:ring-brandLime/20" : "focus:ring-brandOrange/20";

  return (
    <div className="w-full bg-[#0a0f1d]/90 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Background gradients for premium glass effect */}
      <div className={`absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[100px] opacity-20 ${themeColor === "lime" ? "bg-brandLime" : "bg-brandOrange"}`} />
      
      {success ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <FaCheckCircle className={`text-6xl mb-4 animate-bounce ${themeColor === "lime" ? "text-brandLime" : "text-brandOrange"}`} />
          <h3 className="text-2xl font-poppins font-bold text-white mb-2">Lead Registered!</h3>
          <p className="text-textSecondary text-sm max-w-xs">
            Redirecting you to your matching demo confirmation page...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="text-center mb-6">
            <span className={`text-xs font-montserrat font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 ${themeColor === "lime" ? "text-brandLime" : "text-brandOrange"}`}>
              100% Free Demo Session
            </span>
            <h3 className="text-xl font-poppins font-bold text-white mt-3">Book Your Recovery Demo</h3>
            <p className="text-textSecondary text-xs mt-1">Fill out this quick form. No payment required.</p>
          </div>

          <div>
            <label className="block text-xs font-montserrat text-textSecondary mb-2 font-medium">YOUR NAME</label>
            <input
              type="text"
              required
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full bg-black/60 border rounded-xl p-4 text-sm text-white focus:ring-2 outline-none transition-all ${accentColor} ${focusRing}`}
            />
          </div>

          <div>
            <label className="block text-xs font-montserrat text-textSecondary mb-2 font-medium">PHONE NUMBER</label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full bg-black/60 border rounded-xl p-4 text-sm text-white focus:ring-2 outline-none transition-all ${accentColor} ${focusRing}`}
            />
            <span className="text-[10px] text-textSecondary/60 mt-1 block">Enter 10-digit mobile number</span>
          </div>

          <div>
            <label className="block text-xs font-montserrat text-textSecondary mb-2 font-medium">AREA / LOCATION</label>
            <input
              type="text"
              required
              placeholder="e.g. Bandra West, Mumbai"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className={`w-full bg-black/60 border rounded-xl p-4 text-sm text-white focus:ring-2 outline-none transition-all ${accentColor} ${focusRing}`}
            />
          </div>

          <div>
            <label className="block text-xs font-montserrat text-textSecondary mb-2 font-medium">YOUR CONCERN / PAIN POINT</label>
            <input
              type="text"
              required
              value={formData.problem}
              onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
              className={`w-full bg-black/60 border rounded-xl p-4 text-sm text-white focus:ring-2 outline-none transition-all ${accentColor} ${focusRing}`}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full font-poppins font-bold py-4 rounded-xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 ${btnColor}`}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin text-lg" />
                Securing Your Slot...
              </>
            ) : (
              "BOOK FREE HOME DEMO"
            )}
          </button>

          <p className="text-[10px] text-textSecondary/50 text-center mt-3">
            🔒 Your data is fully secure. We never spam.
          </p>
        </form>
      )}
    </div>
  );
}
