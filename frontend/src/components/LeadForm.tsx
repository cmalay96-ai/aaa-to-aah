"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import { supabaseFetch } from "@/lib/supabaseClient";

interface LeadFormProps {
  painPointDefault: string;
  redirectUrl: string;
  themeColor: "lime" | "orange";
  serviceName: string;
}

export default function LeadForm({ painPointDefault, redirectUrl, themeColor, serviceName }: LeadFormProps) {
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

    try {
      const bookedAt = new Date().toISOString();
      const dateKey = bookedAt.split('T')[0];

      // Save lead directly to the live Supabase table so it shows up in the admin dashboard
      await supabaseFetch('bookings', {
        method: 'POST',
        body: JSON.stringify({
          customerName: formData.name,
          customerPhone: formData.phone,
          customerAddress: formData.location,
          service: serviceName,
          price: 0,
          date: dateKey,
          time: "Demo Request",
          bookedAt: bookedAt
        })
      });

      // Save lead to local storage for display or verification if needed
      const existingLeads = JSON.parse(localStorage.getItem("leads") || "[]");
      existingLeads.push({
        ...formData,
        id: Date.now(),
        date: bookedAt,
      });
      localStorage.setItem("leads", JSON.stringify(existingLeads));

      setSuccess(true);

      // Redirect after a short delay to show success animation
      setTimeout(() => {
        router.push(redirectUrl);
      }, 800);
    } catch (error) {
      console.error("Booking demo failed", error);
      alert("Failed to confirm demo booking. Please try again or contact support.");
    } finally {
      setLoading(false);
    }
  };

  const accentColor = "text-primary border-primary/20 focus:border-primary";
  const btnColor = "bg-primary text-white hover:bg-[#07362a] shadow-[0_10px_20px_-5px_rgba(10,77,60,0.3)]";
  const focusRing = "focus:ring-primary/15";

  return (
    <div className="w-full bg-white/90 backdrop-blur-md border border-primary/10 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
      {/* Background gradients for premium glass effect */}
      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[100px] opacity-10 bg-primary" />
      
      {success ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <FaCheckCircle className="text-6xl mb-4 animate-bounce text-primary" />
          <h3 className="text-2xl font-poppins font-bold text-textPrimary mb-2">Lead Registered!</h3>
          <p className="text-textSecondary text-sm max-w-xs">
            Redirecting you to your matching demo confirmation page...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="text-center mb-6">
            <span className="text-xs font-montserrat font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/5 text-primary">
              100% Free Demo Session
            </span>
            <h3 className="text-xl font-poppins font-bold text-textPrimary mt-3">Book Your Recovery Demo</h3>
            <p className="text-textSecondary text-xs mt-1">Fill out this quick form. No payment required.</p>
          </div>

          <div>
            <label className="block text-xs font-montserrat text-textSecondary mb-2 font-semibold">YOUR NAME</label>
            <input
              type="text"
              required
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full bg-white/70 border rounded-xl p-4 text-sm text-textPrimary focus:ring-2 outline-none transition-all ${accentColor} ${focusRing}`}
            />
          </div>

          <div>
            <label className="block text-xs font-montserrat text-textSecondary mb-2 font-semibold">PHONE NUMBER</label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full bg-white/70 border rounded-xl p-4 text-sm text-textPrimary focus:ring-2 outline-none transition-all ${accentColor} ${focusRing}`}
            />
            <span className="text-[10px] text-textSecondary mt-1 block font-medium">Enter 10-digit mobile number</span>
          </div>

          <div>
            <label className="block text-xs font-montserrat text-textSecondary mb-2 font-semibold">AREA / LOCATION</label>
            <input
              type="text"
              required
              placeholder="e.g. Bandra West, Mumbai"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className={`w-full bg-white/70 border rounded-xl p-4 text-sm text-textPrimary focus:ring-2 outline-none transition-all ${accentColor} ${focusRing}`}
            />
          </div>

          <div>
            <label className="block text-xs font-montserrat text-textSecondary mb-2 font-semibold">YOUR CONCERN / PAIN POINT</label>
            <input
              type="text"
              required
              value={formData.problem}
              onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
              className={`w-full bg-white/70 border rounded-xl p-4 text-sm text-textPrimary focus:ring-2 outline-none transition-all ${accentColor} ${focusRing}`}
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

          <p className="text-[10px] text-textSecondary/80 text-center mt-3 font-medium">
            🔒 Your data is fully secure. We never spam.
          </p>
        </form>
      )}
    </div>
  );
}
